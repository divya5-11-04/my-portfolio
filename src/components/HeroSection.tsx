// 
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Hi, I'm Divya — AI Enthusiast & Full Stack Developer
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          I build intelligent, scalable solutions with Python, AI, and the modern web.
        </p>

        <div className="space-y-6">
          <div>
            <Button
              className="bg-neon-blue hover:bg-neon-blue/80 text-background font-medium py-3 px-6 group"
            >
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="neon-border hover-glow px-6"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="neon-border hover-glow px-6"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mt-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              Available for opportunities
            </div>
            <div>Thapar Institute of Engineering</div>
            <div>CGPA: 8.84</div>
          </div>
        </div>
      </div>

      {/* Floating code blocks */}
      <div className="absolute top-1/4 left-10 glass-card p-3 rounded-lg animate-float hidden lg:block">
        <code className="text-neon-blue font-mono text-sm">ai.solve(problem)</code>
      </div>

      <div className="absolute top-1/3 right-10 glass-card p-3 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <code className="text-neon-purple font-mono text-sm">{"{ innovation: true }"}</code>
      </div>

      <div className="absolute bottom-1/4 left-1/4 glass-card p-3 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <code className="text-neon-pink font-mono text-sm">build().deploy()</code>
      </div>
    </section>
  )
}

export { HeroSection }
