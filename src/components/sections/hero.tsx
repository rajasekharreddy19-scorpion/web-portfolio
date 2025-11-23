
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-pic');
  
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center text-left overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
              Gangireddy Rajasekhar Reddy
            </h1>
            <p className="text-primary font-bold mb-6 text-2xl sm:text-3xl font-headline">
              Full stack developer
            </p>
            <p className="max-w-xl text-lg text-muted-foreground mb-10">
             Around 2 years of experience building scalable web applications using .NET Core, Angular, and SQL. Skilled in backend, frontend, and API integrations, I enjoy debugging, collaborating with teams, and delivering clean, maintainable code. Based in Narasaraopet, I’m passionate about learning new technologies and solving real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                 <a href="/Gangireddy-Rajasekhar-Reddy-Resume.pdf" download="Gangireddy-Rajasekhar-Reddy-Resume.pdf">
                   <Download className="mr-2 h-5 w-5" />
                   Download Resume
                 </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
             <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 33vw"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
