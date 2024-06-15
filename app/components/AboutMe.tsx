import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <div className="flex flex-col items-center md:flex-row">
          <img
            src="/agnes.jpg"
            alt="Profile Picture"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-lg mb-4">
              Hi! I'm Agnes, a passionate knitter who loves creating beautiful
              and intricate designs. Knitting has been a part of my life for
              many years, and it's more than just a hobby - it's a way for me to
              express my creativity and bring warmth and comfort to those I
              love.
            </p>
            <p className="text-lg mb-4">
              I specialize in [specific knitting techniques or types of
              projects], and I enjoy experimenting with different yarns and
              patterns. When I'm not knitting, you can find me exploring nature,
              watching a good tv-show, or spending time with my boyfriend.
            </p>
            <p className="text-lg">
              Thank you for visiting my page and I hope you enjoy my creations!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
