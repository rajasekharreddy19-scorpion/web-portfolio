
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutSection() {
  const skills = {
    "Backend": [".NET Core", "C#", "SQL Server", "RESTful APIs"],
    "Frontend": ["Angular", "JavaScript", "HTML5", "CSS3"],
    "Tools": ["Git", "Jira"],
  };

  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-pic');
  
  if (!profileImage) {
    // Fallback or error handling
    return null;
  }

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-4 text-primary">Who I Am</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Full Stack Developer with around 2 years of experience building scalable web applications using .NET Core, Angular, and SQL. Skilled in backend, frontend, and API integrations, I enjoy debugging, collaborating with teams, and delivering clean, maintainable code. Based in Narasaraopet, I’m passionate about learning new technologies and solving real-world problems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-4 text-primary">My Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-lg mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
