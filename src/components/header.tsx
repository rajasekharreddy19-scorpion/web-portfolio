
'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Download, Menu, Code } from 'lucide-react';
import React from 'react';

export function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Code className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">
              Web Weaver
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild>
              <a href="/resume.pdf" download="Web-Weaver-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-start p-4 border-b">
                     <Link href="/" className="flex items-center gap-2">
                        <Code className="h-8 w-8 text-primary" />
                        <span className="font-headline text-xl font-bold text-foreground">
                          Web Weaver
                        </span>
                      </Link>
                  </div>
                  <nav className="flex-grow p-4">
                    <ul className="space-y-4">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="block text-lg font-medium text-foreground transition-colors hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 border-t">
                    <Button asChild className="w-full">
                       <a href="/resume.pdf" download="Web-Weaver-Resume.pdf">
                         <Download className="mr-2 h-4 w-4" />
                         Download Resume
                       </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
