
'use client';

import { useState } from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
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
    liveUrl: "#",
    githubUrl: "#",
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
    liveUrl: "#",
    githubUrl: "#",
  }
];

export function WorkSection() {
  const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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
        
        <div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          onMouseLeave={() => setExpandedProject(null)}
        >
          {projectsData.map((project) => {
            const image = projectImages.find(p => p.id === project.id);
            if (!image) return null;
            const isExpanded = expandedProject === project.id;

            return (
              <Card 
                key={project.id}
                onMouseEnter={() => setExpandedProject(project.id)}
                className={cn(
                  "bg-card flex flex-col overflow-hidden group border-transparent transition-all duration-500 cursor-pointer",
                  "hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1",
                  isExpanded ? 'md:col-span-2' : 'md:col-span-1'
                )}
              >
                <div className={cn(
                  "flex flex-col md:flex-row items-stretch transition-all duration-500",
                   isExpanded ? 'md:flex-row' : 'md:flex-col'
                )}>
                   <div className={cn(
                      "relative w-full aspect-video md:aspect-auto overflow-hidden",
                      isExpanded ? 'md:w-1/2' : 'md:w-full md:h-64'
                   )}>
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={cn(
                    "flex flex-col flex-grow p-6 transition-all duration-500",
                    isExpanded ? 'md:w-1/2' : 'w-full'
                  )}>
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="font-headline text-xl text-foreground">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className={cn("text-muted-foreground transition-opacity duration-300", isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-auto')}>{project.description}</p>
                      <div className={cn("overflow-hidden transition-all duration-500", isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
                        
                        {project.technologies && (
                          <>
                            <h4 className="font-headline text-md font-semibold text-primary mt-4 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map(tech => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </>
                        )}
                        
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
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
