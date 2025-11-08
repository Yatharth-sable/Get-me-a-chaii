import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-gray-100 pt-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Get Me a Chai
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get Me a Chai is a simple, creator-friendly platform where your fans can directly support your work 
            one chai at a time. Whether you are a developer, artist, or content creator,
            this is your space to grow with your community.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-5 text-center">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We’re on a mission to make creator support effortless.  
            <span className="text-blue-400 font-semibold"> Get Me a Chai </span> helps
            creators receive contributions safely and instantly — turning appreciation into action.
            Every chai you get fuels creativity, consistency, and connection.
          </p>
        </section>

        {/* How It Works */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                1. Create Your Page
              </h3>
              <p className="text-gray-300">
                Set up your creator profile in minutes, add your story and start accepting chai-support right away.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                2. Share Your Link
              </h3>
              <p className="text-gray-300">
                Share your Get Me a Chai page with your audience through Instagram, YouTube or anywhere else.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                3. Get Supported
              </h3>
              <p className="text-gray-300">
                Fans can buy you a chai to appreciate your work — safe, simple, and instant.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-900/60 border border-slate-700 rounded-xl hover:border-purple-500 transition">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                Easy Setup
              </h3>
              <p className="text-gray-300">
                Launch your creator page within minutes — no coding, no complexity.
              </p>
            </div>
            <div className="p-6 bg-slate-900/60 border border-slate-700 rounded-xl hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-300">
                Integrated with trusted gateways to ensure every chai reaches you safely.
              </p>
            </div>
            <div className="p-6 bg-slate-900/60 border border-slate-700 rounded-xl hover:border-purple-500 transition">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                Transparent & Fair
              </h3>
              <p className="text-gray-300">
                No hidden fees, no shady terms — creators always come first.
              </p>
            </div>
            <div className="p-6 bg-slate-900/60 border border-slate-700 rounded-xl hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Community-Driven
              </h3>
              <p className="text-gray-300">
                Every chai builds connection — between creators and the people who believe in them.
              </p>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Join the Chai Movement
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Empower your creative journey.  
            Start your Get Me a Chai page today and let your audience support your passion.
          </p>
          <a
            href="/signup"
            className="inline-block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-300"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

export const metadata = {
    title:"About - Get me A Chai",
}