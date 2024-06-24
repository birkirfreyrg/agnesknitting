import Image from "next/image";
import React from "react";

const greetings1 = `Hi! I'm Agnes, a passionate knitter who loves creating beautiful
              and intricate designs. Knitting has been a part of my life for
              many years, and it's more than just a hobby - it's a way for me to
              express my creativity and bring warmth and comfort to those I
              love.`;
const greetings2 = `I specialize in [specific knitting techniques or types of
              projects], and I enjoy experimenting with different yarns and
              patterns. When I'm not knitting, you can find me exploring nature,
              watching a good tv-show, or spending time with my boyfriend.`;

const greetings3 = `Thank you for visiting my page and I hope you enjoy my creations!`;

export default function AboutMe() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <div className="flex flex-col items-center md:flex-row">
          <Image
            src="/agnes.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-lg mb-4">{greetings1}</p>
            <p className="text-lg mb-4">{greetings2}</p>
            <p className="text-lg">{greetings3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
