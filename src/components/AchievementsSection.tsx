import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Trophy, Medal, Star, ExternalLink } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Google Girl Hackathon",
      description: "Selected among top participants for the prestigious Google Girl Hackathon 2024",
      type: "Selection",
      date: "2024",
      category: "Hackathon",
      featured: true
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining 8.84 CGPA in Computer Science Engineering at Thapar Institute",
      type: "Academic",
      date: "2024",
      category: "Education",
      featured: true
    },
    {
      icon: Medal,
      title: "Smart India Hackathon",
      description: "Finalist in Smart India Hackathon with AI-powered solution for urban planning",
      type: "Finalist",
      date: "2024",
      category: "Hackathon",
      featured: false
    },
    {
      icon: Star,
      title: "University Coding Championship",
      description: "First place in university-wide competitive programming competition",
      type: "Winner",
      date: "2024",
      category: "Programming",
      featured: false
    },
    {
      icon: Trophy,
      title: "Innovation Challenge",
      description: "Best Innovation Award for developing AI-powered healthcare solution prototype",
      type: "Winner",
      date: "2023",
      category: "Innovation",
      featured: false
    },
    {
      icon: Award,
      title: "Open Source Contribution",
      description: "Recognized contributor to major open-source AI and ML projects",
      type: "Recognition",
      date: "2023-2024",
      category: "Open Source",
      featured: false
    }
  ];

  const stats = [
    { number: "15+", label: "Hackathons Participated" },
    { number: "8", label: "Awards Won" },
    { number: "8.84", label: "CGPA Maintained" },
    { number: "3", label: "Years of Development" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A track record of excellence in hackathons, academics, and innovative problem-solving 
            that demonstrates consistent high performance and leadership.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Achievements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {achievements.filter(achievement => achievement.featured).map((achievement, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                    <achievement.icon className="h-8 w-8 text-neon-blue" />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 mb-2">
                      {achievement.type}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{achievement.date}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-white/20 text-muted-foreground">
                    {achievement.category}
                  </Badge>
                  <Button size="sm" variant="ghost" className="hover:text-neon-blue">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {achievements.filter(achievement => !achievement.featured).map((achievement, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow group animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                    <achievement.icon className="h-5 w-5 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold group-hover:text-neon-blue transition-colors">
                        {achievement.title}
                      </h4>
                      <div className="text-sm text-muted-foreground">{achievement.date}</div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs bg-white/5 text-muted-foreground border-white/10">
                        {achievement.category}
                      </Badge>
                      <Badge variant="secondary" className={`text-xs ${
                        achievement.type === 'Winner' ? 'bg-neon-green/20 text-neon-green border-neon-green/30' :
                        achievement.type === 'Selection' ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/30' :
                        'bg-neon-purple/20 text-neon-purple border-neon-purple/30'
                      }`}>
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AchievementsSection };