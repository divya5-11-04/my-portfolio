// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

//         {/* Other Blog Posts */}
//         <div className="grid md:grid-cols-2 gap-6 mb-12">
//           {blogPosts.filter(post => !post.featured).map((post, index) => (
//             <Card key={index} className="glass-card border-white/10 hover-glow group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-3 w-3" />
//                     {post.date}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-3 w-3" />
//                     {post.readTime}
//                   </div>
//                 </div>
                
//                 <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10 text-xs mb-3">
//                   {post.category}
//                 </Badge>
                
//                 <h4 className="font-semibold mb-2 group-hover:text-neon-blue transition-colors leading-tight">
//                   {post.title}
//                 </h4>
                
//                 <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-wrap gap-1">
//                     {post.tags.slice(0, 2).map((tag, tagIndex) => (
//                       <Badge key={tagIndex} variant="outline" className="text-xs border-white/10 text-muted-foreground">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
                  
//                   <Button variant="ghost" size="sm" className="group-hover:text-neon-blue p-1">
//                     <ArrowRight className="h-3 w-3" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
//           <Card className="glass-card border-white/10 hover-glow max-w-2xl mx-auto">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 I regularly share insights about AI, software engineering, and startup building. 
//                 Follow my blog for in-depth technical articles and behind-the-scenes stories.
//               </p>
//               <Button className="bg-neon-blue hover:bg-neon-blue/80 text-background font-medium group">
//                 Visit My Blog
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { BlogSection };
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import React from "react"

const blogPosts = [
  {
    title: "Demystifying Transformers in AI",
    date: "June 10, 2025",
    readTime: "5 min read",
    category: "AI",
    excerpt: "Learn how transformers power models like GPT and BERT with attention mechanisms.",
    tags: ["AI", "Deep Learning"],
    featured: false,
  },
  {
    title: "My Startup Journey in College",
    date: "June 3, 2025",
    readTime: "7 min read",
    category: "Startup",
    excerpt: "How I turned an idea into a functioning MVP while balancing academics.",
    tags: ["Startup", "Personal"],
    featured: false,
  }
]

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Other Blog Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="glass-card border-white/10 hover-glow group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10 text-xs mb-3">
                  {post.category}
                </Badge>

                <h4 className="font-semibold mb-2 group-hover:text-neon-blue transition-colors leading-tight">
                  {post.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-white/10 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="group-hover:text-neon-blue p-1">
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="glass-card border-white/10 hover-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I regularly share insights about AI, software engineering, and startup building. 
                Follow my blog for in-depth technical articles and behind-the-scenes stories.
              </p>
              <Button className="bg-neon-blue hover:bg-neon-blue/80 text-background font-medium group">
                Visit My Blog
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { BlogSection }
