"use client";
import { TypeAnimation } from "react-type-animation";
import { SpaceGrotesk } from "./fonts/SpaceGrotesk";
import { ChakraPetch } from "./fonts/ChakraPetch";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-black`}
    >
      <div className="flex flex-col gap-12 items-center">
        <h1
          className={`font-title ${ChakraPetch.variable} font-sans text-4xl font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200`}
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Hi, I'm Htoomyat Naing.",
              1000,
              "Hi, I'm Htoomyat.",
              1000,
              "Hi, I'm Htoo.",
              1000,
            ]}
            speed={40}
            style={{}}
            repeat={0}
          />
        </h1>
        <div
          className={`flex flex-col items-center justify-center ${SpaceGrotesk.variable} font-sans`}
        >
          <button
            onClick={() => {
              router.push("/about");
            }}
            className="relative inline-flex items-center justify-center text-sm font-medium group"
          >
            <span className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200">
              About
            </span>
          </button>
          <button
            onClick={() => {
              router.push("/skills");
            }}
            className="relative inline-flex items-center justify-center text-sm font-medium group"
          >
            <span className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200">
              Skills
            </span>
          </button>
          <button
            onClick={() => {
              router.push("/experience");
            }}
            className="relative inline-flex items-center justify-center text-sm font-medium group"
          >
            <span className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200">
              Experience
            </span>
          </button>
          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="relative inline-flex items-center justify-center text-sm font-medium group"
          >
            <span className="-ml-4 relative py-2.5 hover:text-transparent hover:underline text-white duration-150 ease-out font-bold underline-offset-4 decoration-4 bg-clip-text hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-green-500 to-slate-200">
              Contact
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
