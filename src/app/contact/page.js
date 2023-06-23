"use client";

import BackButton from "../components/BackButton";
import Github from "../../../public/github.png";
import Linkedin from "../../../public/linkedin.png";
import Mail from "../../../public/mail.png";
import Instagram from "../../../public/instagram.png";
import Image from "next/image";
import { SpaceGrotesk } from "../fonts/SpaceGrotesk";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-black`}
    >
      <div className="max-w-screen-sm flex flex-col items-stretch gap-12">
        <BackButton />
        <div
          className={`font-sans ${SpaceGrotesk.variable} text-lg text-white text-center tracking-wider`}
        >
          <TypeAnimation
            sequence={["Hey, what's up?"]}
            speed={20}
            style={{}}
            repeat={0}
          />
        </div>
        <div className="flex gap-12">
          <Image
            className="duration-75 border-violet-600 hover:cursor-pointer hover:border-violet-600 hover:border-2 rounded-full"
            src={Github}
            alt="github icon"
          />
          <Image
            className="duration-75 border-sky-600 hover:cursor-pointer hover:border-sky-600 hover:border-2 rounded-lg"
            src={Linkedin}
            alt="linkedin icon"
          />
          <Image
            className="duration-75 border-rose-600 hover:cursor-pointer hover:border-rose-600 hover:border-2 rounded-lg"
            src={Instagram}
            alt="instagram icon"
          />
          <Image
            className="duration-75 border-indigo-600 hover:cursor-pointer hover:border-indigo-600 hover:border-2 rounded-full"
            src={Mail}
            alt="mail icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
