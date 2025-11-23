
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-medium mb-4 text-lg sm:text-xl font-headline">
          Hi, I'm Gangireddy Rajasekhar Reddy
        </p>
        <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          I'm a Full Stack Developer
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
         Around 2 years of experience building scalable web applications using .NET Core, Angular, and SQL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#work">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
