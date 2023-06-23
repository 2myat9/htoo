"use client";
import { TypeAnimation } from "react-type-animation";
import { SpaceGrotesk } from "../fonts/SpaceGrotesk";
import { ChakraPetch } from "../fonts/ChakraPetch";
import BackButton from "../components/BackButton";

const Skills = () => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-black text-white`}
    >
      <div className="max-w-screen-md flex flex-col items-stretch gap-y-16">
        <BackButton />
        <div
          className={`flex flex-col gap-4 font-title ${ChakraPetch.variable} bg-clip-text text-transparent bg-gradient-to-tl from-amber-400 via-yellow-400 to-cyan-600`}
        >
          <h1 className={`text-5xl font-black`}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "I'm a Frontend Software Engineer.",
                1000,
                "I'm a Backend Software Engineer.",
                1000,
                "I'm a Full-Stack Software Engineer.",
              ]}
              speed={50}
              repeat={0}
              cursor={false}
            />
          </h1>
          <div className="font-light text-lg">
            <TypeAnimation
              sequence={[
                10000,
                "I build user-friendy UIs and resource-efficient APIs using these tools.",
              ]}
              speed={50}
              repeat={0}
              cursor={false}
            />
          </div>
        </div>
        <div
          className={`w-full flex gap-8 justify-around font-sans ${SpaceGrotesk.variable} text-lg bg-clip-text text-transparent bg-gradient-to-tr from-violet-100 via-green-300 to-purple-200`}
        >
          <div className="flex flex-col gap-8">
            <div className="text-lg font-bold">
              <TypeAnimation
                sequence={[10000, "Frontend"]}
                speed={50}
                repeat={0}
                cursor={false}
              />
            </div>
            <div>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                sequence={[
                  14000,
                  `JavaScript\nReact\nTypeScript\nNextJS\nChakraUI\nMaterialUI\nTailwindCSS\nHTML\nCSS\nFigma\nWebflow`,
                ]}
                repeat={0}
                cursor={false}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-lg font-bold">
              <TypeAnimation
                sequence={[10000, "Backend"]}
                speed={50}
                repeat={0}
                cursor={false}
              />
            </div>
            <div>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                sequence={[
                  14000,
                  `Bash\nNode.js\nExpress.js\nPython\nFlask\nFirebase\nGitHub\nMySQL\nPostgresSQL\nMongoDB\nGraphQL\nJava\nGo`,
                ]}
                repeat={0}
                cursor={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
