
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
                <div key={project.id} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                        <h3 className="font-headline text-2xl text-white font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="p-6 h-full overflow-y-auto">
                        <h3 className="font-headline text-xl text-primary-foreground font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-primary-foreground/80 mb-4">{project.description}</p>
                        
                        {project.technologies && (
                          <div className="mb-4">
                            <h4 className="font-headline text-md font-semibold text-primary-foreground mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map(tech => (
                                <Badge key={tech} variant="default" className="bg-primary-foreground/20 text-primary-foreground">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <div>
                          <h4 className="font-headline text-md font-semibold text-primary-foreground mb-2">Responsibilities:</h4>
                          <ul className="space-y-2">
                              {project.responsibilities?.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary-foreground/80 mt-1 flex-shrink-0" />
                                      <span className="text-sm text-primary-foreground/80">{item}</span>
                                  </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
