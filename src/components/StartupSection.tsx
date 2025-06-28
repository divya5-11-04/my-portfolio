// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Docker", "AWS"].map((tech, index) => (
//                     <Badge key={index} variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <Button className="bg-neon-blue hover:bg-neon-blue/80 text-background font-medium group">
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     View Demo
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                   <Button variant="outline" className="neon-border hover-glow">
//                     Read Roadmap
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//             <div className="grid gap-4">
//               {features.map((feature, index) => (
//                 <Card key={index} className="glass-card border-white/10 hover-glow group">
//                   <CardContent className="p-6">
//                     <div className="flex items-start gap-4">
//                       <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
//                         <feature.icon className="h-5 w-5 text-neon-blue" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold mb-1">{feature.title}</h4>
//                         <p className="text-sm text-muted-foreground leading-relaxed">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <Card className="glass-card border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-lg">Development Roadmap</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {milestones.map((milestone, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
//                       <div>
//                         <div className="font-medium text-sm">{milestone.phase}</div>
//                         <div className="text-xs text-muted-foreground">{milestone.date}</div>
//                       </div>
//                       <Badge 
//                         variant="secondary" 
//                         className={`text-xs ${
//                           milestone.status === 'Completed' ? 'bg-neon-green/20 text-neon-green border-neon-green/30' :
//                           milestone.status === 'In Progress' ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/30' :
//                           'bg-white/10 text-muted-foreground border-white/20'
//                         }`}
//                       >
//                         {milestone.status}
//                       </Badge>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { StartupSection };
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, Zap, Rocket, Brain } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: Zap,
    title: 'Fast Prototyping',
    description: 'Build MVPs quickly with reusable components and cloud-native tools.',
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Deploy projects with microservices and containerization for scale.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Easily integrate machine learning models and AI APIs into your stack.',
  },
];

const milestones = [
  {
    phase: 'Ideation & Planning',
    date: 'Jan 2024',
    status: 'Completed',
  },
  {
    phase: 'MVP Launch',
    date: 'Mar 2024',
    status: 'Completed',
  },
  {
    phase: 'Beta Testing',
    date: 'May 2024',
    status: 'In Progress',
  },
  {
    phase: 'Production Release',
    date: 'Aug 2024',
    status: 'Pending',
  },
];

const StartupSection = () => {
  return (
    <section id="startup" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Startup <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tools, technologies, and milestones that power my startup journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Toolkit */}
          <div className="glass-card border-white/10 animate-fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tech Stack</CardTitle>
                <CardDescription>
                  Powerful tools I use to build, ship, and scale products.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Python',
                    'TensorFlow',
                    'React',
                    'Node.js',
                    'PostgreSQL',
                    'Docker',
                    'AWS',
                  ].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-neon-blue/20 text-neon-blue border-neon-blue/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-neon-blue hover:bg-neon-blue/80 text-background font-medium group">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="neon-border hover-glow">
                    Read Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features & Milestones */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card border-white/10 hover-glow group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                        <feature.icon className="h-5 w-5 text-neon-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Development Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                    >
                      <div>
                        <div className="font-medium text-sm">{milestone.phase}</div>
                        <div className="text-xs text-muted-foreground">{milestone.date}</div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          milestone.status === 'Completed'
                            ? 'bg-neon-green/20 text-neon-green border-neon-green/30'
                            : milestone.status === 'In Progress'
                            ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'
                            : 'bg-white/10 text-muted-foreground border-white/20'
                        }`}
                      >
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StartupSection };
