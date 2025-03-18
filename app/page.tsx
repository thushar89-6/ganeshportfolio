import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
            Hi, I'm Ganesh Nayak
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate full-stack developer focused on building beautiful and user-friendly applications
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/yourusername" target="_blank">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
            alt="Ganesh R Nayak"
            fill
            className="object-cover rounded-full md:rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}