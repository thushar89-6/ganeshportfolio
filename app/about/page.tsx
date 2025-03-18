import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const education = [
    {
      degree: 'B.E in Computer Science',
      institution: 'NMAM Institute of Technology',
      score: 'CGPA: 9.45',
    },
    {
      degree: 'Pre-University Education',
      institution: 'Expert PU College',
      score: '98%',
    },
    {
      degree: 'Secondary Education',
      institution: 'Canara High School',
      score: '94%',
    },
  ];

  const skills = {
    technical: [
      'C', 'C++', 'Python', 'JavaScript',
      'React.js', 'Tailwind CSS', 'Node.js',
      'Prisma', 'MySQL', 'Data Structures',
    ],
    tools: ['Figma', 'Blender'],
    soft: ['Communication', 'Problem-Solving', 'Teamwork'],
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Career Objective</h2>
          <p className="text-lg text-muted-foreground">
            Passionate about creating innovative solutions through technology. 
            Seeking opportunities to leverage my skills in full-stack development 
            to build impactful applications that solve real-world problems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu) => (
              <Card key={edu.degree}>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="font-semibold mt-2">{edu.score}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}