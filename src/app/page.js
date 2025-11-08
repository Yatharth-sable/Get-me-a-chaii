import Image from "next/image";
import tea from "../../public/tea.gif";
import man from "../../public/man.gif";
import coin from "../../public/coin.gif";
import avatar from "../../public/avatar.gif";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-white h-[50vh] px-4 text-center gap-4">
        <div className="font-bold text-4xl sm:text-5xl flex flex-col sm:flex-row gap-2 items-center justify-center">
          Buy me a Chai
          <span>
            <Image src={tea} className="invert" width={60} height={50} alt="tea" />
          </span>
        </div>

        <p className="max-w-xl text-sm sm:text-base">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
            >
              Start here
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-white h-[1px] opacity-10 w-full"></div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-10 my-14">
        <h1 className="text-2xl font-bold text-center my-10 sm:my-14">
          Your friends can buy you a Chai
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-5 justify-center items-center">
          <div className="item flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              className="bg-gradient-radial from-slate-400 to-slate-800 rounded-full p-3"
              src={man}
              width={88}
              height={88}
              alt="man"
            />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available to help you</p>
          </div>

          <div className="item flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              className="bg-gradient-radial from-slate-400 to-slate-800 rounded-full p-3"
              src={coin}
              width={88}
              height={88}
              alt="coin"
            />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available to help you</p>
          </div>

          <div className="item flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              className="bg-gradient-radial from-slate-400 to-slate-800 rounded-full p-2"
              src={avatar}
              width={88}
              height={88}
              alt="avatar"
            />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>

      {/* YouTube Section */}
      <div className="mt-8 py-10 sm:py-20 flex justify-center items-center px-4">
        <div className="w-full max-w-[760px] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/Rw-QZuGVP3o?si=W96p8XVj2vJbX6w7&amp;start=150"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
