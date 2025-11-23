
import { Briefcase } from "lucide-react";

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
    <section id="experience" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-1/2 before:-translate-x-1/2">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative mb-12 flex justify-between items-center w-full">
              {/* Left side */}
              <div className="w-1/2 pr-12 text-right">
                 <div className="bg-card border-l-4 border-primary p-6 rounded-lg shadow-lg">
                    <h3 className="font-headline text-xl font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>

              {/* Icon in the middle */}
              <div className="z-10 absolute left-1/2 -translate-x-1/2">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                    <Briefcase className="h-6 w-6" />
                </div>
              </div>

              {/* Right side */}
              <div className="w-1/2 pl-12">
                 <p className="text-muted-foreground text-lg font-semibold">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
