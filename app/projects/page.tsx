import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Medicare',
      description: 'A full-stack web application for healthcare management, featuring appointment scheduling, patient records, and medical history tracking.',
      techStack: ['Node.js', 'Express', 'React.js', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Temperature Converter',
      description: 'A user-friendly web application that converts temperatures between different units (Celsius, Fahrenheit, Kelvin) with a clean and intuitive interface.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1634467524884-897d0af5e104?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.demoLink} target="_blank">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubLink} target="_blank">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}