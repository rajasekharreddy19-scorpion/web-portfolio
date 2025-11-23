
'use client';

import { useState } from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: "project-1",
    title: "Manheim Canada Operating Engine",
    description: "A comprehensive platform for managing vehicle auctions.",
    responsibilities: [
      "Developed backend services using .NET Core, C#, and SQL Server, improving performance and scalability.",
      "Built and maintained stored procedures, SQL queries, and optimized data models for auction workflows.",
      "Worked with Angular and JavaScript to enhance UI components and improve user experience.",
      "Integrated RESTful APIs for system communication and data synchronization across modules."
    ],
    tags: [".NET Core", "C#", "SQL Server", "Angular", "JavaScript", "Git"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Result Management Application",
    description: "A web portal for managing student results.",
    responsibilities: [
      "Built a responsive student result management portal using Angular and ASP.NET Core.",
      "Implemented secure login, CRUD operations, and JSON-based data handling.",
      "Designed REST APIs and integrated them with the UI for dynamic data loading."
    ],
    tags: ["ASP.NET Core", "Angular", "JavaScript", "HTML/CSS", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export function WorkSection() {
  const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(prev => (prev === projectId ? null : projectId));
  };

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const image = projectImages.find(p => p.id === project.id);
            if (!image) return null;
            const isSelected = selectedProject === project.id;
            const isOtherSelected = selectedProject !== null && !isSelected;

            return (
              <div
                key={project.id}
                className={cn(
                  'transition-all duration-500',
                  isSelected ? 'md:col-span-2' : '',
                  isOtherSelected ? 'hidden md:flex' : ''
                )}
              >
                <Card 
                  className={cn(
                    "bg-card flex flex-col overflow-hidden group border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1 w-full",
                    isSelected ? 'md:flex-row' : 'flex-col'
                  )}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className={cn("relative overflow-hidden", isSelected ? 'md:w-1/2' : 'w-full')}>
                    <div className="aspect-video">
                      <Image
                        src={image.imageUrl}
                        width={600}
                        height={400}
                        alt={project.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </div>
                  <div className={cn("flex flex-col flex-grow", isSelected ? 'md:w-1/2' : 'w-full')}>
                    <CardHeader className="p-6">
                      <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      {isSelected ? (
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {project.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                          </ul>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                        <Link href={project.githubUrl} target="_blank" aria-label={`${project.title} on GitHub`}>
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                        <Link href={project.liveUrl} target="_blank" aria-label={`Live demo of ${project.title}`}>
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
