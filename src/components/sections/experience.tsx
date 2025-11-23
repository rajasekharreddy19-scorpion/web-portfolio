
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const experienceData = [
  {
    company: "Nagarro Software Pvt Ltd",
    role: "Associate Engineer",
    period: "March 2022 - September 2023",
    description: "Developed backend services using .NET Core, C#, and SQL Server, improving performance and scalability. Built and maintained stored procedures, SQL queries, and optimized data models for auction workflows. Worked with Angular and JavaScript to enhance UI components and improve user experience. Integrated RESTful APIs for system communication and data synchronization across modules. Provided production support by debugging issues, analyzing logs, and resolving incidents quickly. Identified root causes, documented fixes, and suggested improvements for system stability. Followed Git workflows using feature branches, pull requests, and code reviews.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-12 flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <p className="text-muted-foreground text-sm">{exp.period}</p>
              </div>
              <div className="z-10 bg-primary rounded-full p-2 text-primary-foreground">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="w-1/2 pl-8">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
