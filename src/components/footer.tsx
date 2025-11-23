
'use client'
import { Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/20 border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
           <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-foreground">
              Gangireddy Rajasekhar Reddy
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gangireddy Rajasekhar Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
