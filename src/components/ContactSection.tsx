// 
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, ArrowRight } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    company: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with real send logic
    alert("Form submitted: " + JSON.stringify(formData, null, 2))
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <Card className="glass-card border-white/10">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Let’s Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10 focus:border-neon-blue/50"
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-neon-blue/50"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 focus:border-neon-blue/50 resize-none"
                  placeholder="Tell me about your project, opportunity, or idea..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-neon-blue hover:bg-neon-blue/80 text-background font-medium py-3 group"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Contact Options */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-muted-foreground">Looking for quick contact?</span>
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30 cursor-pointer hover:bg-neon-green/30 transition-colors">
                Available for Internships
              </Badge>
              <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 cursor-pointer hover:bg-neon-blue/30 transition-colors">
                Open to Collaboration
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2 text-sm">Designed and developed with ❤️ for innovation and excellence.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export { ContactSection }
