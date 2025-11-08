import React from "react";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
  await connectDB();
  let body = await req.formdata();
  body = Object.fromEntries(body);

  // check if razorpayId is present on the server

  let p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json({success:false,message:"Order Id not found"});
  }

  let user = await User.findOne({username:p.to_user})
  const secret = user.razorpaysecret

  // verify the payment

  let xx = validatePaymentVerification(
    {
      "order_id": body.razorpay_order_id,
     " payment_id": body.razorpay_payment_id},
      body.razorpay_signature,
    
    process.env.secret
  );

  if (xx) {
    // Update the payment status
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: "true" },
      { new: true }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.json({success:false,message:"Payment Verification failed"});
  }
};
