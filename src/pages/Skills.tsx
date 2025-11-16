import { Navigation, Sparkle } from "@/components/Navigation";
import { useRef } from "react";
import cLogo from "@/assets/logos/c.svg";
import cppLogo from "@/assets/logos/cpp.svg";
import pythonLogo from "@/assets/logos/python.svg";
import htmlLogo from "@/assets/logos/html.svg";
import cssLogo from "@/assets/logos/css.svg";
import jsLogo from "@/assets/logos/javascript.svg";
import reactLogo from "@/assets/logos/react.svg";
import gitLogo from "@/assets/logos/git.svg";
import postmanLogo from "@/assets/logos/postman.svg";
import postgresLogo from "@/assets/logos/postgresql.svg";
import supabaseLogo from "@/assets/logos/supabase.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import vscodeLogo from "@/assets/logos/vscode.svg";
import linuxLogo from "@/assets/logos/linux.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import githubLogo from "@/assets/logos/github.svg";
import aiLogo from "@/assets/logos/ai.svg";

const techStack = [
  { name: "C / C++", logo: cppLogo },
  { name: "Python", logo: pythonLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Git", logo: gitLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Supabase", logo: supabaseLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Linux", logo: linuxLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "AI & ML", logo: aiLogo },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <h2 className="text-2xl font-light">Aneesh's</h2>
        {/* <span className="text-lg font-light">2025</span> */}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Sparkle />
            <h1 className="text-6xl md:text-7xl font-bold">Tech Stack</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Wire Container */}
        <div className="wire-container rounded-3xl p-8 md:p-12 mb-16 overflow-hidden shadow-soft">
          {/* Wire Line */}
          <div className="relative mb-8">
            <div className="h-0.5 bg-foreground/30 w-full"></div>
          </div>

          {/* Scrollable Tech Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex-shrink-0 relative flex flex-col items-center gap-4"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Grey V Clip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 border-l-4 border-r-4 border-t-4 border-foreground/40 rounded-t-lg"></div>
                </div>

                {/* Card */}
                <div className="bg-background w-48 h-56 rounded-lg shadow-card p-6 flex items-center justify-center border-2 border-foreground/10">
                  <img src={tech.logo} alt={tech.name} className="w-32 h-32 object-contain" />
                </div>
                
                {/* Name below card */}
                <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
              </div>
            ))}
          </div>

          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </div>

        <Navigation />
      </main>
    </div>
  );
};

export default Skills;
