import { Navigation, Sparkle } from "@/components/Navigation";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //For Debugging Purpose Only
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Submitting form...", formData);

  //   // quick checks
  //   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  //   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  //   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //   console.log("EmailJS env:", { serviceId, templateId, publicKey });

  //   if (!serviceId || !templateId || !publicKey) {
  //     toast({
  //       title: "Config error",
  //       description:
  //         "EmailJS env variables are missing. Check .env and restart dev server.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // ensure values are non-empty
  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Fill all fields",
  //       description: "Please complete the form before sending.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   try {
  //     const res = await emailjs.send(
  //       serviceId,
  //       templateId,
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         message: formData.message,
  //       },
  //       publicKey
  //     );

  //     console.log("EmailJS success:", res);
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (err: unknown) {
  //     console.error("EmailJS error:", err);

  //     let message = "Unknown error";

  //     if (typeof err === "object" && err !== null) {
  //       const e = err as Record<string, unknown>;
  //       message = (e.text as string) || (e.statusText as string) || message;
  //     }
  //     toast({
  //       title: "Error sending message",
  //       description: message,
  //       variant: "destructive",
  //     });
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    })
    .catch((_err: unknown) => {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
    });
};
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <h2 className="text-2xl font-light">Aneesh's</h2>
        {/* <span className="text-lg font-light">2025</span> */}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Sparkle />
            <h1 className="text-6xl md:text-7xl font-bold">Get in Touch</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-foreground/20 bg-background focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-foreground/20 bg-background focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-foreground/20 bg-background focus:border-gray-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="pill-button w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:bvsa2020@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 border-foreground/20 hover:border-gray-500 hover:bg-gray-300/10 transition-all"
                >
                  <Mail className="text-grey-accent" size={24} />
                  <span>bvsa2020@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/bvs-aneesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 border-foreground/20 hover:border-gray-500 hover:bg-gray-300/10 transition-all"
                >
                  <Linkedin className="text-grey-accent" size={24} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/rooney011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 border-foreground/20 hover:border-gray-500 hover:bg-gray-300/10 transition-all"
                >
                  <Github className="text-grey-accent" size={24} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-8 text-foreground/40 text-sm tracking-wide">
  ✦ Copyright © {new Date().getFullYear()} AN — Crafted with perfection.
</div>


        <Navigation />
      </main>
    </div>
  );
};

export default Contact;
