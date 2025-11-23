import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

export function AboutSection() {
  const skills = {
    "Backend": [".NET 6/7/8", ".NET Core", "ASP.NET Core", "MVC", "C#", "Java", "Python(basics)"],
    "Frontend": ["Angular v13+ (basics)", "JavaScript", "HTML", "CSS", "React.js (learning)"],
    "Database": ["MongoDB (learning)", "SQL Server 2019", "MySQL"],
    "APIs": ["RESTful APIs", "Authentication", "Integrations"],
    "Tools": ["Git", "GitHub", "Jenkins", "Docker", "Maven", "Tomcat", "VS Code", "Visual Studio", "Excel", "Tableau(basics)"],
    "Cloud": ["Azure (Basics)", "AWS (EC2, S3, IAM)"],
    "Concepts": ["OOP", "LINQ", "SOLID", "SDLC", "Agile", "CI/CD"],
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A summary of my technical capabilities and the technologies I work with.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-headline font-semibold text-2xl mb-5 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-md px-4 py-2 bg-secondary/70 hover:bg-secondary transition-colors cursor-default">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
