// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
//               <CardHeader>
//                 <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
//                   {project.title}
//                 </CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <Badge key={techIndex} variant="secondary" className="bg-white/5 text-muted-foreground border-white/10">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Other Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
//           {projects.filter(project => !project.featured).map((project, index) => (
//             <Card key={index} className="glass-card border-white/10 hover-glow group animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-2">
//                   <project.icon className="h-8 w-8 text-neon-blue" />
//                   <div className="flex gap-2">
//                     <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-neon-blue">
//                       <Github className="h-4 w-4" />
//                     </Button>
//                     <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-neon-blue">
//                       <ExternalLink className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//                 <CardTitle className="text-lg group-hover:text-neon-blue transition-colors">
//                   {project.title}
//                 </CardTitle>
//                 <CardDescription className="text-sm leading-relaxed">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="flex flex-wrap gap-1">
//                   {project.tech.slice(0, 3).map((tech, techIndex) => (
//                     <Badge key={techIndex} variant="secondary" className="text-xs bg-white/5 text-muted-foreground border-white/10">
//                       {tech}
//                     </Badge>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <Badge variant="secondary" className="text-xs bg-white/5 text-muted-foreground border-white/10">
//                       +{project.tech.length - 3}
//                     </Badge>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export { ProjectsSection };
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import React from "react"

const projects = [
  {
    title: "AI Resume Scanner",
    description: "Built an AI-based tool to scan and match resumes with job descriptions using NLP.",
    tech: ["Python", "Transformers", "React", "TailwindCSS"],
    featured: true,
    icon: Github,
  },
  {
    title: "Skill Scanner",
    description: "A web app to help students find team matches for competitions.",
    tech: ["Node.js", "MongoDB", "React"],
    featured: false,
    icon: ExternalLink,
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Featured Projects */}
        <div className="grid gap-6 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-white/5 text-muted-foreground border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow group animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <project.icon className="h-8 w-8 text-neon-blue" />
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-neon-blue">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-neon-blue">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-neon-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-white/5 text-muted-foreground border-white/10">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-white/5 text-muted-foreground border-white/10">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
