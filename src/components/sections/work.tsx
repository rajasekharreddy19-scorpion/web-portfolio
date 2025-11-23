
'use client';

import { useState } from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: "project-1",
    title: "Manheim Canada Operating Engine",
    description: "Developed backend services using .NET Core, C#, and SQL Server, improving performance and scalability.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Result Management Application",
    description: "Built a responsive student result management portal. Implemented secure login, CRUD operations, and JSON-based data handling.",
    liveUrl: "#",
    githubUrl: "#",
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
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const image = projectImages.find(p => p.id === project.id);
            if (!image) return null;

            return (
              <Card 
                key={project.id}
                className="bg-card flex flex-col overflow-hidden group border-transparent transition-all duration-300 transform hover:shadow-primary/20 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                   <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6 w-full md:w-3/5">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="font-headline text-xl text-foreground">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{project.description}</p>
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

