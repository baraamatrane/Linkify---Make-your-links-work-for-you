import React from "react";

function CTA() {
  return (
    <div className="flex flex-col md:p-20 bg-gray-100 rounded-lg m-6 p-12 justify-center items-center">
      <h1 className="md:text-5xl text-4xl font-semibold">
        Ready to Get Started?
      </h1>
      <p className="text-lg text-gray-600 md:max-w-[540px] mt-4 mb-10 text-center">
        Join thousands of creators who are already using Linkify to grow their
        audience and monetize their content.
      </p>
      <button className="bg-blue-600 text-white font-semibold cursor-pointer py-3 px-8 rounded-full hover:bg-blue-500 transition-colors">
        Get Started Now
      </button>
      <p className="text-sm text-gray-500 mt-4">
        No credit card required. Start your free trial today!
      </p>
    </div>
  );
}

export default CTA;
