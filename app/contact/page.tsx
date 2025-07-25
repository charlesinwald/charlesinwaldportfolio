"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreeBackground from "app/components/ThreeBackground";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Coffee,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "charlesinwald@gmail.com",
      href: "mailto:charlesinwald@gmail.com",
      color: "text-gruvbox-info",
      bgColor: "bg-gruvbox-card hover:bg-gruvbox-border/20",
      description: "Drop me a line anytime",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+1 (516)592-3783",
      href: "tel:+15165923783",
      color: "text-gruvbox-success",
      bgColor: "bg-gruvbox-card hover:bg-gruvbox-border/20",
      description: "Let's have a quick chat",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      value: "@charlesinwald",
      href: "https://github.com/charlesinwald",
      color: "text-gruvbox-foreground",
      bgColor: "bg-gruvbox-card hover:bg-gruvbox-border/20",
      description: "Check out my code",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/charles-inwald",
      href: "https://www.linkedin.com/in/charles-inwald/",
      color: "text-gruvbox-info",
      bgColor: "bg-gruvbox-card hover:bg-gruvbox-border/20",
      description: "Let's connect professionally",
    },
  ];

  return (
    <>
      <ThreeBackground />
      <section className="max-w-5xl mx-auto p-6 bg-gruvbox-background text-gruvbox-foreground relative rounded-3xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 text-gruvbox-muted">
            <Code className="size-5 animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Software Developer
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gruvbox-primary mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-gruvbox-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on
            interesting projects, or just chat about the latest in tech. Reach
            out through any of the channels below!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${method.bgColor} border-gruvbox-border shadow-lg w-full h-full flex flex-col`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  window.open(method.href, "_blank");
                }}
              >
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${method.color} bg-gruvbox-background/80 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gruvbox-primary mb-1 group-hover:text-gruvbox-secondary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-gruvbox-muted text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        {method.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-mono text-gruvbox-foreground hover:text-gruvbox-primary hover:bg-transparent"
                        asChild
                      >
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.value}
                        </a>
                      </Button>
                    </div>
                    <div
                      className={`transition-transform duration-300 ${
                        hoveredCard === method.id
                          ? "translate-x-0 opacity-100"
                          : "translate-x-2 opacity-0"
                      }`}
                    >
                      <div className="w-2 h-2 bg-gruvbox-muted rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <Card className="bg-gruvbox-card text-gruvbox-foreground border-gruvbox-border shadow-lg overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coffee className="size-5 animate-bounce text-gruvbox-primary" />
              <span className="font-medium text-gruvbox-primary">
                Available for freelance work
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gruvbox-primary">
              Ready to start your next project?
            </h3>
            <p className="text-gruvbox-muted mb-6 max-w-2xl mx-auto">
              I specialize in full-stack development, with expertise in React,
              Python, and modern web technologies. Let's build something amazing
              together!
            </p>
            <div className="flex items-center justify-center gap-2 text-gruvbox-muted text-sm">
              <MapPin className="size-4" />
              <span>New York, NY • Available remotely</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
