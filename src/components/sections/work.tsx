
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: "project-1",
    title: "Manheim Canada Operating Engine",
    description: "Developed backend services using .NET Core, C#, and SQL Server, improving performance and scalability. Built and maintained stored procedures, SQL queries, and optimized data models for auction workflows. Worked with Angular and JavaScript to enhance UI components and improve user experience. Integrated RESTful APIs for system communication and data synchronization across modules.",
    tags: [".NET Core", "C#", "SQL Server", "Angular", "JavaScript", "Git"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Result Management Application",
    description: "Built a responsive student result management portal using Angular and ASP.NET Core. Implemented secure login, CRUD operations, and JSON-based data handling. Designed REST APIs and integrated them with the UI for dynamic data loading.",
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
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const image = projectImages.find(p => p.id === project.id);
            if (!image) return null;
            
            return (
              <Card key={project.id} className="bg-card flex flex-col overflow-hidden group border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      width={600}
                      height={400}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.githubUrl} target="_blank" aria-label={`${project.title} on GitHub`}>
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.liveUrl} target="_blank" aria-label={`Live demo of ${project.title}`}>
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
