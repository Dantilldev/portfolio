import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="text-center mt-16 flex flex-col items-center "
    >
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div>
          <h2 className="text-4xl mb-4">Hi, I'm Daniel Tilleria</h2>
          <p className="text-xl">I'm a Frontend Developer</p>
          <div className="mt-8 space-x-4">
            <Link href="/contact">
              <button className="px-6 py-3 bg-orange-600 text-white">
                Contact Me
              </button>
            </Link>
            <Link href="#about-me">
              <button className="px-6 py-3 bg-black text-white">
                About Me
              </button>
            </Link>
          </div>
        </div>
        <div className="rounded-e-full overflow-hidden shadow-lg">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 items-center justify-center">
            <img
              src="/me.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
