import { NavLink } from "@/components/NavLink";
import { Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 mb-12">
      {navItems.map((item, index) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="pill-button"
          activeClassName="bg-foreground text-background"
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export const Sparkle = ({ className = "" }: { className?: string }) => {
  return (
    <Sparkles className={`sparkle text-muted-foreground ${className}`} size={32} />
  );
};
