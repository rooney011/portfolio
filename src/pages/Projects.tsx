import { Navigation, Sparkle } from "@/components/Navigation";
import { link } from "fs";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Crimson Pages",
    description:
      "This is a simple web application for book lovers to track notes, ratings, and thoughts on books they’ve read.",
    category: "Web Development",
    tags: ["CSS", "JavaScript", "EJS", "Node.js"],
    picture: "/CrimsonPages.png",
    link: "https://github.com/rooney011/Crimson-Pages.git",
  },
  {
    title: "PayLink",
    description:
      "A web app that lets you send and receive stablecoin payments (USDC) as easily as sending an email or text message.",
    category: "FinTech Web App",
    tags: ["Blockchain", "Stablecoin", "Payments", "Web3"],
    picture: "/Soon.png",
    link: "https://github.com/rooney011/PayLink.git",
  },
  {
    title: "Oss-Chatbot with RAG",
    description:
      "Web-based chatbot application that leverages Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses using open-source documents.",
    category: "RAG-Based Web App",
    tags: ["RAG", "NLP", "ML", "Embeddings"],
    picture: "/Soon.png",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <h2 className="text-2xl font-light">Aneesh's</h2>
        {/* <span className="text-lg font-light">2025</span> */}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl md:text-7xl font-bold">Projects</h1>
            <Sparkle />
          </div>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card border-2 border-foreground/10 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-muted rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={project.picture}
                  alt="project preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-4 py-1 rounded-full bg-pink-soft text-charcoal text-sm font-medium mb-4">
                {project.category}
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-foreground/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Button */}
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="pill-button w-full flex items-center justify-center gap-2"
              >
                View Project
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-20 mb-20">
          <p className="inline-block px-6 py-3 rounded-full border-2 border-foreground/30 text-foreground/80 text-lg tracking-wide">
            More projects are in the work ✦
          </p>
        </div>

        <Navigation />
      </main>
    </div>
  );
};

export default Projects;
