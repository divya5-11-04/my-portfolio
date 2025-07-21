import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// 🧠 Your full blog data
const fullBlogPosts = [
  {
    id: "2025-07-13",
    title: "From Folder Trees to Functional React",
    date: "July 13, 2025",
    readTime: "6 min read",
    category: "Dev Log",
    content: `
### Summary

Yesterday was a turbocharged crash course in how modern frontend apps are stitched together...

### 🔍 Key Takeaways
- Understood React file flow
- Learned what useState and useEffect do
- Used tree /f to visualize folder structure
- Configured PostCSS & Tailwind plugins
- Fixed import alias issues

### 🧠 Concepts Explained
ReactDOM.createRoot renders App in index.tsx. useState manages memory. useEffect handles side effects.

### 📣 Try This
Build a blog page. Use tree command. Use Shadcn buttons. Post your learnings daily!
    `,
    tags: ["React", "Beginner", "Portfolio"],
  },
  // Just add more blog objects here every day! ⬇️
];

const Blogs = () => {
  return (
    <section className="py-24 px-6 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">📝 Dev Blog</h1>

        {fullBlogPosts.map((post, index) => (
          <Card key={post.id || index} className="mb-12 bg-white/5 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <Badge className="mb-2">{post.category}</Badge>

              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>

              <div
                className="prose prose-invert max-w-none text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
