
'use client';

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from '../ui/badge';

const projectsData = [
  {
    id: "project-1",
    title: "Manheim Canada Operating Engine",
    description: "A comprehensive platform for managing vehicle auction workflows.",
    responsibilities: [
      "Developed backend services using .NET Core, C#, and SQL Server, improving performance and scalability.",
      "Built and maintained stored procedures, SQL queries, and optimized data models for auction workflows.",
      "Worked with Angular and JavaScript to enhance UI components and improve user experience.",
      "Integrated RESTful APIs for system communication and data synchronization across modules.",
      "Provided production support by debugging issues, analyzing logs, and resolving incidents quickly.",
      "Identified root causes, documented fixes, and suggested improvements for system stability.",
      "Followed Git workflows using feature branches, pull requests, and code reviews.",
    ],
    technologies: [".NET Core", "C#", "SQL Server", "Angular", "JavaScript", "RESTful APIs", "Git"],
  },
  {
    id: "project-2",
    title: "Result Management Application",
    description: "Built a responsive student result management portal.",
    responsibilities: [
        "Built a responsive student result management portal using Angular and ASP.NET Core.",
        "Implemented secure login, CRUD operations, and JSON-based data handling.",
        "Designed REST APIs and integrated them with the UI for dynamic data loading."
    ],
    technologies: ["ASP.NET Core", "Angular", "JavaScript", "HTML/CSS", "SQL Server"],
  }
];

export function WorkSection() {
  const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development and problem-solving.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => {
              const image = projectImages.find(p => p.id === project.id);
              if (!image) return null;
              
              return (
                <Card key={project.id} className="bg-card flex flex-col overflow-hidden group border-transparent transition-shadow hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="font-headline text-xl text-foreground">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                       {project.technologies && (
                        <div>
                          <h4 className="font-headline text-md font-semibold text-primary mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="font-headline text-md font-semibold text-primary mb-2">Responsibilities:</h4>
                        <ul className="space-y-2">
                            {project.responsibilities?.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
