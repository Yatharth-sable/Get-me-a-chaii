"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/app/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {


  await connectDB();

   let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret
  
  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // create a payment object which show a pending payment in the database

  await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async(username) => {
  await connectDB();
  let u = await User.findOne({username:username})
  let user = u.toObject({flattenObjectIds:true})
  return user 
}

export const fetchpayments = async(username) => {
  await connectDB()
  // find all payments sorted by decreasing order of amount and flatten object 
  let p = await Payment.find({to_user:username,done:false}).sort({amount:-1}).limit(8).lean();
  return p;
}

export const updateProfile = async(data,oldusername) => {

  await connectDB();

  let ndata = Object.fromEntries(data)

  //  if the username is being updated check if username is avilable
  if(oldusername !== ndata.username){
    let u = await User.findOne({username:ndata.username})
    if(u){
      return {error:"Username already Exists"}
    }
    await  User.updateOne({email:ndata.email},ndata)
    // Now Update all username in the payment table
    await Payment.updateMany({to_user:oldusername},{to_user: ndata.username})
  } 
  await User.updateOne({email:ndata.email},ndata)

}

