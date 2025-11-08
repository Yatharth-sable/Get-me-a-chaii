"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import avtar from "../../public/avatar.gif";
import Script from "next/script";
import { fetchpayments, fetchuser, initiate } from "../../actions/useractions";
import { Bounce, ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const router = useRouter();
  const searchparams = useSearchParams();

  useEffect(() => {
    getData();
  }, [username]);

  const handlechange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };

  useEffect(() => {
    if (searchparams.get("paymentdone") == "true")
      toast("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    router.push(`/${username}`);
  }, []);

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "Get me a chai",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "+919876543210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {/* Header Section */}
      <div className="relative w-full h-[280px]">
        <Image
          src={currentUser.coverpic || avtar}
          alt="Cover Photo"
          fill
          className="object-cover rounded-b-2xl brightness-90"
          priority
        />

        <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2">
          <Image
            src={currentUser.profilepic || avtar}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-800 shadow-xl"
          />
        </div>
      </div>

      {/* Username & Stats */}
      <div className="flex flex-col justify-center items-center pt-28 text-center text-gray-200">
        <p className="font-bold text-3xl">@{username}</p>
        <p className="mt-1 text-gray-400 text-lg">
          Let’s help <span className="text-bg-slate-800 ">{username}</span> get a chai!
        </p>
        <p className="mt-2 text-sm text-gray-400">
          ☕ {payments.length} payments | 💰 Raised ₹
          {payments.reduce((a, b) => a + b.amount / 100, 0)}
        </p>
      </div>

      {/* Main Section */}
      <div className="payment flex flex-col md:flex-row gap-6 w-[90%] md:w-[80%] mx-auto mt-10">
        {/* Top Supporters Section */}
        <div className="p-8 rounded-2xl w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-slate-700 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-5 border-b border-slate-600 pb-2">
            Top Supporters
          </h2>
          <ul className="mx-2 space-y-3">
            {payments.length === 0 && (
              <li className="text-gray-400 italic">No payments yet</li>
            )}
            {payments.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-slate-800/60 rounded-lg p-3 shadow-md"
              >
                <Image src={avtar} width={30} height={30} alt="" className="rounded-full" />
                <div className="flex flex-col">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-sm text-gray-300">
                    Donated ₹{p.amount / 100} — {p.message}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Form */}
        <div className="flex flex-col p-8 rounded-2xl w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-slate-700 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-5 border-b border-slate-600 pb-2">
            Make a Payment
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={paymentform.name}
              onChange={handlechange}
              className="w-full text-gray-900 p-3 rounded-lg bg-slate-800  placeholder-white focus:ring-2 focus:ring-bg-slate-800  outline-none"
            />
            <input
              type="text"
              value={paymentform.message}
              name="message"
              placeholder="Enter Message"
              onChange={handlechange}
              className="w-full text-gray-900 p-3 rounded-lg bg-slate-800  placeholder-white focus:ring-2 focus:ring-bg-slate-800  outline-none"
            />
            <input
              type="text"
              value={paymentform.amount}
              onChange={handlechange}
              name="amount"
              placeholder="Enter Amount"
              className="w-full text-gray-900 p-3  rounded-lg bg-slate-800  placeholder-white focus:ring-2 focus:ring-bg-slate-800  outline-none"
            />

            <button
              onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
              type="button"
              className="text-white bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              disabled={
                paymentform.name?.length < 3 ||
                paymentform.message?.length < 4 ||
                !paymentform.amount
              }
            >
              Pay
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => pay(1000)}
              className="bg-slate-800  text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-800  transition-all duration-300"
            >
              Pay ₹10
            </button>
            <button
              onClick={() => pay(2000)}
              className="bg-slate-800  text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-800  transition-all duration-300"
            >
              Pay ₹20
            </button>
            <button
              onClick={() => pay(4000)}
              className="bg-slate-800  text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-800  transition-all duration-300"
            >
              Pay ₹40
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
