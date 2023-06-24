"use client";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import { TypeAnimation } from "react-type-animation";
import { SpaceGrotesk } from "../fonts/SpaceGrotesk";
import { ChakraPetch } from "../fonts/ChakraPetch";

const Experience = () => {
  return (
    <div className={`flex items-center justify-center bg-black p-6`}>
      <div className="max-w-screen-lg flex flex-col items-stretch gap-12 mb-6">
        <BackButton />
        <div
          className={`font-title ${ChakraPetch.variable} text-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-violet-100 via-green-300 to-purple-200`}
        >
          <TypeAnimation
            sequence={["Here are some things I have enjoyed working on."]}
            speed={50}
            repeat={0}
            cursor={false}
          />
        </div>
        <div
          className={`flex flex-wrap items-start justify-center gap-4 font-sans ${SpaceGrotesk.variable}`}
        >
          <Card
            link="#"
            title="ClaremontBat"
            body="ClaremontBat is a web app built for students in Intro to CS classes to practice their problem-solving skills using Python. Supervised by one of Harvey Mudd's CS Professors Zachary Dodds, I built this app for open-source using NextJS, Flask, and Firebase."
          />
          <Card
            link="#"
            title="Mixologic"
            body="Currently in progress and aimed to roll out to App Store by the end of summer, Mixologic is a cross-platform software built for mixology enthusiasts from around the world."
          />
          <Card
            link="#"
            title="SWE @Flycoin inc."
            body="During my Sophomore year summer, I interned as a Software Engineer for Flycoin inc, a Fintech startup with a vision of changing the future of Airline loyalty rewards through Crytocurrency."
          />
          <Card
            link="#"
            title="TS Gunpla"
            body="Currently in progress, TS Gunpla is a portfolio website with CMS (Content Management System) capabilities built for my brother's hobby of building Gunpla models. Instead of website builders like Squarespace or Webflow, the goal is to build this from scratch using JavaScript."
          />
          <Card
            link="#"
            title="Evergreen"
            body="During my Freshman year summer, I built this web application MVP in collaboration with another student and supervised under our CS professor. This Clinic project was funded by West Coast Arborists and aimed to provide an educational tool for elementary school students to learn about urban forestry and sustainability."
          />
          <Card
            link="#"
            title="JavaScript apps"
            body="More fun JavaScript apps I built during my Freshman year can be found on my GitHub. Fun fact: A lot of them are still being hosted live via Netlify so you can play around with them!"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
