// import { Card, CardContent } from '@/components/ui/card';
//     <section id="about" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             About <span className="gradient-text">Me</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             A passionate 3rd-year engineering student at Thapar Institute, combining academic excellence 
//             with real-world problem-solving through AI and innovative software development.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div className="animate-fade-in-up">
//             <div className="glass-card p-8 rounded-2xl hover-glow">
//               <h3 className="text-2xl font-bold mb-4">My Journey</h3>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 I'm a 3rd-year Computer Science Engineering student at Thapar Institute with an 8.84 CGPA, 
//                 driven by a passion for artificial intelligence and software engineering. My journey spans 
//                 from winning hackathons to building startup MVPs, always focusing on creating technology 
//                 that makes a meaningful impact.
//               </p>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Selected for the prestigious Google Girl Hackathon, I've consistently demonstrated my ability 
//                 to innovate under pressure and deliver exceptional results. Currently, I'm working on an 
//                 AI-powered startup that addresses real-world challenges while maintaining my academic excellence.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
//                   Google Girl Hackathon
//                 </Badge>
//                 <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
//                   8.84 CGPA
//                 </Badge>
//                 <Badge variant="secondary" className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
//                   Startup Founder
//                 </Badge>
//               </div>
//             </div>
//           </div>

//           <div className="grid gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//             {highlights.map((highlight, index) => (
//               <Card key={index} className="glass-card border-white/10 hover-glow group">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
//                       <highlight.icon className="h-6 w-6 text-neon-blue" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-2">{highlight.title}</h4>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         {highlight.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { AboutSection };
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Brain, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Award-Winning Innovation',
    description: 'Won multiple national hackathons by building impactful, scalable solutions in limited time.',
  },
  {
    icon: Terminal,
    title: 'Software Engineering',
    description: 'Experienced in full-stack development with React, Node.js, Express, PostgreSQL, and Docker.',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Proficient in machine learning, NLP, and computer vision using Python, TensorFlow, and OpenCV.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate 3rd-year engineering student at Thapar Institute, combining academic excellence 
            with real-world problem-solving through AI and innovative software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a 3rd-year Computer Science Engineering student at Thapar Institute with an 8.84 CGPA, 
                driven by a passion for artificial intelligence and software engineering. My journey spans 
                from winning hackathons to building startup MVPs, always focusing on creating technology 
                that makes a meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Selected for the prestigious Google Girl Hackathon, I've consistently demonstrated my ability 
                to innovate under pressure and deliver exceptional results. Currently, I'm working on an 
                AI-powered startup that addresses real-world challenges while maintaining my academic excellence.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                  Google Girl Hackathon
                </Badge>
                <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                  8.84 CGPA
                </Badge>
                <Badge variant="secondary" className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
                  Startup Founder
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card border-white/10 hover-glow group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                      <highlight.icon className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
