
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Phone, Mail, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? 'Sending...' : 'Send Message'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: '', success: false, errors: undefined };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsSuccess(true);
      formRef.current?.reset();
    }
    if (!state.success && state.message && state.errors) {
      const allErrors = Object.values(state.errors).flat().join(". ");
      toast({
        variant: "destructive",
        title: "Message failed to send",
        description: allErrors || state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-primary">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Have a project in mind, want to collaborate, or just want to say hi?
            <br />
            My inbox is always open.
          </p>
           <div className="flex justify-center flex-wrap items-center gap-6 text-muted-foreground text-lg mb-12">
            <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> 
                <a href="mailto:rajasekharreddy681@gmail.com" className="hover:text-primary font-medium">
                  rajasekharreddy681@gmail.com
                </a>
            </div>
            <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> 
                <a href="tel:+918121800854" className="hover:text-primary font-medium">
                  +91 8121800854
                </a>
            </div>
             <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-primary" /> 
                <a href="https://www.linkedin.com/in/gangireddy-rajasekhar-reddy-405a82216" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-medium">
                  LinkedIn
                </a>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          {isSuccess ? (
            <div className="text-center bg-card p-8 rounded-lg border border-primary">
              <CheckCircle className="mx-auto h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-headline mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">{state.message}</p>
              <Button onClick={() => setIsSuccess(false)} className="mt-6">Send Another Message</Button>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required aria-describedby="name-error" />
                {state.errors?.name && <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-describedby="email-error" />
                 {state.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required aria-describedby="message-error" />
                 {state.errors?.message && <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <div className="text-center">
                <SubmitButton />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
