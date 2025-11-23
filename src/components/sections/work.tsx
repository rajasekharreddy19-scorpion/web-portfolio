
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

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-primary">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const image = projectImages.find(p => p.id === project.id);
            if (!image) return null;

            return (
              <Card 
                key={project.id}
                className="bg-card flex flex-col overflow-hidden group border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={image.imageUrl}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {project.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                      </ul>
                  </CardContent>
                  <CardFooter className="p-0 pt-6 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                       <Button variant="ghost" size="icon" asChild>
                        <Link href={project.githubUrl} target="_blank" aria-label={`${project.title} on GitHub`}>
                          <Github className="h-6 w-6" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.liveUrl} target="_blank" aria-label={`Live demo of ${project.title}`}>
                          <ExternalLink className="h-6 w-6" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
