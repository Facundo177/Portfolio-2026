import { ArrowUp } from "lucide-react";

export const Footer = () => {

  return (
    <footer className="py-6 px-4 bg-card/80 relative mt-12 pt-8 flex flex-wrap justify-between items-center">
      <a
        href="#hero"
        className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground transition-colors"
      >
        <ArrowUp className="h-6 w-6" />
      </a>
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Facundo Gaitán. All rights reserved.
      </p>
      <div></div>
    </footer>
  );
};