"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone } from "lucide-react";

export default function Portfolio() {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = useMemo(() => [
    "$ whoami",
    "thamidu_peiris",
    "$ cat about.txt",
    "Software Engineering Student | Full Stack Developer",
    "$ ls skills/",
    "JavaScript  TypeScript  React  Node.js  Python  Java",
    "$ grep -r 'passion' .",
    "Building innovative solutions with clean code ✨"
  ], []);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const timeout = setTimeout(() => {
        setTerminalText(prev => prev + (prev ? "\n" : "") + commands[currentCommand]);
        setCurrentCommand(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentCommand, commands]);

  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-500" },
    { name: "React", level: 90, color: "bg-cyan-500" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-blue-600" },
    { name: "Java", level: 70, color: "bg-orange-500" },
    { name: "SQL", level: 80, color: "bg-purple-500" },
    { name: "Git", level: 85, color: "bg-red-500" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with machine learning insights and predictive modeling.",
      tech: ["Python", "Django", "D3.js", "TensorFlow"],
      github: "#",
      demo: "#",
      icon: <Database className="h-6 w-6" />
    }
  ];

  const downloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Thamidu_Peiris_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-green-300">{'{'}</span>
              Portfolio
              <span className="text-green-300">{'}'}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Terminal */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                  Hello, I'm
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-x">
                    Thamidu Peiris
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Software Engineering Student passionate about building innovative solutions with clean, efficient code.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button onClick={downloadCV} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Terminal Box */}
            <Card className="bg-black/50 border-gray-700 backdrop-blur-sm hover-lift animate-float">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">terminal</div>
              </CardHeader>
              <CardContent>
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap min-h-[300px]">
                  {terminalText}
                  <span className="typing-cursor">_</span>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <Card className="bg-white/5 border-gray-700 backdrop-blur-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/api/placeholder/200/200" alt="Thamidu Peiris" />
                  <AvatarFallback className="text-2xl">TP</AvatarFallback>
                </Avatar>
                <div className="text-gray-300 space-y-4 flex-1">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate Software Engineering student with a strong foundation in full-stack development.
                    My journey in tech started with curiosity about how things work behind the scenes, and has evolved
                    into a love for creating efficient, scalable solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I enjoy working with modern technologies like React, Node.js, and Python to build applications
                    that solve real-world problems. Always eager to learn new technologies and collaborate on
                    innovative projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/5 border-gray-700 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-3 bg-white/10"
                    indicatorClassName={skill.color}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-white/5 border-gray-700 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                      {project.icon}
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300 text-lg">
                  I'm always interested in new opportunities and collaborations.
                  Whether you have a project in mind or just want to chat about tech,
                  feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">thamidu.peiris@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">linkedin.com/in/thamidu-peiris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">github.com/thamidu-peiris</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/5 border-gray-700 backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="text-white">Send Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Drop me a message and I'll get back to you soon!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input placeholder="Your name" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea placeholder="Your message..." className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]" />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Thamidu Peiris. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
