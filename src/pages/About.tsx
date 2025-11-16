import { Navigation, Sparkle } from "@/components/Navigation";
import { User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <h2 className="text-2xl font-light">Aneesh's</h2>
        {/* <span className="text-lg font-light">2025</span> */}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start">
            <div
              className="
      bg-white 
      p-4 
      rounded-xl 
      shadow-[0_8px_20px_rgba(0,0,0,0.25)] 
      w-80 
      h-[28rem] 
      flex 
      flex-col 
      items-center 
      overflow-hidden 
      border 
      border-black/10
      rotate-0 md:hover:rotate-[-2deg] transition-all
    "
            >
              <img
                src="/AN.jpeg"
                alt="Aneesh"
                className="w-full h-full object-cover rounded-md"
              />

            </div>
          </div>

          {/* About Info */}
          <div className="flex flex-col justify-center">
            <div className="relative inline-block mb-8">
              <div className="bg-muted rounded-full px-12 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.3)] border-b-4 border-foreground">
                <h1 className="text-4xl font-bold text-foreground">About Me</h1>
              </div>
              <Sparkle className="absolute -right-16 -top-4" />
            </div>

            <p className="text-lg leading-relaxed">
              I’m a developer and designer who loves creating things that feel
              thoughtful, clean, and a little bit personal. I enjoy mixing
              technology with design—building interfaces that look simple on the
              surface but carry intention in every detail. With a background in
              Computer Science and a growing curiosity for AI, I spend most of
              my time exploring how ideas turn into experiences: a line of code
              becoming a feature, a sketch becoming a product, a concept
              becoming something real. I believe good work should feel quietly
              powerful—not loud, but memorable. And that’s the energy I bring
              into every project I build.
            </p>
          </div>
        </div>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-muted-foreground">
                Education
              </h2>
              <Sparkle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold">2023-2027</p>
              <p className="text-lg">
                Avanthi Institute of Engineering and Technology
              </p>
              <p className="text-muted-foreground">
                Computer Science and Engineering
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-muted-foreground">
                Technical Skills
              </h2>
              <Sparkle className="w-6 h-6" />
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Full Stack",
                "AI/ML",
                "UI/UX",
                "Databases",
                "Dev Tools",
                "REST",
                "Chatbots & RAG",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-lg border-2 border-muted-foreground text-muted-foreground font-mono font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default About;
