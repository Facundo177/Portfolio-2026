import { ArrowUp } from "lucide-react";

export const Footer = () => {

  return (
    <footer className="py-8 px-4 bg-card/60 relative mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Facundo Gaitán. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};