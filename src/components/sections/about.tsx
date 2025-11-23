
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const skills = {
    "Backend": [".NET Core", "C#", "SQL Server", "RESTful APIs"],
    "Frontend": ["Angular", "JavaScript", "HTML5", "CSS3"],
    "Tools": ["Git", "Jira"],
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-primary">
          My Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-headline font-semibold text-2xl mb-4 text-center sm:text-left">{category}</h3>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  {skillList.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-md px-4 py-2">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
