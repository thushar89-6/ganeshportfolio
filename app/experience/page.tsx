import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseIcon, TrophyIcon, BookOpenIcon } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'PrimeSophic Technologies',
      location: 'Mangalore',
      period: 'January 2023',
      description: 'Worked on developing web applications using modern technologies and best practices.',
      icon: BriefcaseIcon,
    },
  ];

  const achievements = [
    {
      title: 'Hackfest',
      description: 'Participated in Frontend Web Development Competition',
      icon: TrophyIcon,
    },
    {
      title: 'Kalashree Award',
      description: 'State Government Award for Drawing (2018)',
      icon: TrophyIcon,
    },
    {
      title: 'CCRT Scholarship',
      description: 'Cultural Talent Search Scholarship for Exceptional Drawing Skills (2017–Present)',
      icon: TrophyIcon,
    },
  ];

  const research = [
    {
      title: 'Metaverse Research',
      description: 'Conducted research on Metaverse technologies and their applications',
      icon: BookOpenIcon,
    },
    {
      title: 'Blender Expertise',
      description: 'Developed proficiency in 3D modeling and animation using Blender',
      icon: BookOpenIcon,
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Experience & Achievements</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp) => (
              <Card key={exp.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} • {exp.location} • {exp.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Research & Development</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}