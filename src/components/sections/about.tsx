import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  const skills = {
    "Backend": [".NET 6/7/8", ".NET Core", "ASP.NET Core", "MVC", "C#", "Java", "Python(basics)"],
    "Frontend": ["Angular v13+ (basics)", "JavaScript", "HTML", "CSS", "React.js (learning)"],
    "Database & APIs": ["MongoDB (learning)", "SQL Server 2019", "MySQL", "RESTful APIs", "Authentication", "Integrations"],
    "Tools, Cloud & Concepts": ["Git", "GitHub", "Jenkins", "Docker", "Maven", "Tomcat", "VS Code", "Visual Studio", "Excel", "Tableau(basics)", "Azure (Basics)", "AWS (EC2, S3, IAM)", "OOP", "LINQ", "SOLID", "SDLC", "Agile", "CI/CD"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-card border-border p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-xl text-foreground">{category}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-3">
                    {skillList.map(skill => (
                      <Badge key={skill} variant="outline" className="text-md px-3 py-1 text-primary border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors cursor-default">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
