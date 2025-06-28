// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
//       'neon-orange': 'from-orange-400 to-red-400',
//       'neon-pink': 'from-pink-400 to-rose-400'
//     };
//     return colors[color as keyof typeof colors] || colors['neon-blue'];
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Technical <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             A comprehensive skill set spanning artificial intelligence, full-stack development, 
//             cloud computing, and modern software engineering practices.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <Card key={categoryIndex} className="glass-card border-white/10 hover-glow animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
//               <CardHeader>
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
//                     <category.icon className="h-6 w-6 text-neon-blue" />
//                   </div>
//                   <CardTitle className="text-lg">{category.title}</CardTitle>
//                 </div>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex} className="space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium">{skill.name}</span>
//                         <span className="text-xs text-muted-foreground">{skill.level}%</span>
//                       </div>
//                       <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full bg-gradient-to-r ${getSkillColor(skill.color)} rounded-full transition-all duration-1000 ease-out`}
//                           style={{ 
//                             width: `${skill.level}%`,
//                             animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Additional Skills as Badges */}
//         <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
//           <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
//           <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
//             {[
//               "NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "NLTK", "Spacy",
//               "Flask", "Express.js", "Spring Boot", "Tailwind CSS", "Material-UI",
//               "Jest", "Pytest", "Terraform", "Jenkins", "Nginx", "Apache", "Postman",
//               "Figma", "Adobe XD", "Notion", "Slack", "Discord"
//             ].map((tech, index) => (
//               <Badge 
//                 key={index} 
//                 variant="secondary" 
//                 className="bg-white/5 hover:bg-white/10 text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1"
//               >
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { SkillsSection };
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Cloud } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "AI & Data Science",
    icon: Brain,
    skills: [
      { name: "Python", level: 95, color: "neon-blue" },
      { name: "TensorFlow", level: 85, color: "neon-purple" },
      { name: "NLP", level: 80, color: "neon-pink" },
    ]
  },
  {
    title: "Full Stack Development",
    icon: Code,
    skills: [
      { name: "React", level: 90, color: "neon-green" },
      { name: "Node.js", level: 85, color: "neon-orange" },
      { name: "MongoDB", level: 80, color: "neon-purple" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 75, color: "neon-blue" },
      { name: "Docker", level: 85, color: "neon-green" },
      { name: "CI/CD", level: 70, color: "neon-orange" }
    ]
  }
];

const getSkillColor = (color: string) => {
  const colors = {
    'neon-blue': 'from-cyan-400 to-blue-500',
    'neon-purple': 'from-purple-500 to-indigo-500',
    'neon-green': 'from-green-400 to-lime-400',
    'neon-orange': 'from-orange-400 to-red-400',
    'neon-pink': 'from-pink-400 to-rose-400'
  };
  return colors[color as keyof typeof colors] || colors['neon-blue'];
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning artificial intelligence, full-stack development, 
            cloud computing, and modern software engineering practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card border-white/10 hover-glow animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
                    <category.icon className="h-6 w-6 text-neon-blue" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "NLTK", "Spacy",
              "Flask", "Express.js", "Spring Boot", "Tailwind CSS", "Material-UI",
              "Jest", "Pytest", "Terraform", "Jenkins", "Nginx", "Apache", "Postman",
              "Figma", "Adobe XD", "Notion", "Slack", "Discord"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/5 hover:bg-white/10 text-muted-foreground border-white/10 hover:border-white/20 transition-all duration-200 px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SkillsSection };
