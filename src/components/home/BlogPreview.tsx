import { useState } from "react";
import { ArrowRight, Calendar, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulating the Link component for this example
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function BlogPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const blogs = [
    {
      title: "Advancements in Natural Language Processing",
      excerpt: "Recent advances in NLP have revolutionized how we interact with machines. This post explores the latest developments and their implications.",
      date: "April 10, 2023",
      slug: "advancements-in-nlp",
      category: "AI"
    },
    {
      title: "The Future of Distributed Computing",
      excerpt: "How emerging distributed computing paradigms are changing the way we think about systems architecture and software design.",
      date: "March 5, 2023",
      slug: "future-of-distributed-computing",
      category: "Systems"
    },
    {
      title: "Ethical Considerations in AI Development",
      excerpt: "Exploring the ethical dimensions of artificial intelligence and the responsibilities of researchers and engineers.",
      date: "February 12, 2023",
      slug: "ethical-considerations-ai",
      category: "Ethics"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-950 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <Badge variant="outline" className="mb-4 px-3 py-1 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50">
                <FileText className="w-3 h-3 mr-2" /> Blog & Insights
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Latest Insights
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Thoughts, tutorials, and analysis on information technology and software engineering.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Button asChild variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm">
                <Link to="/blog" className="flex items-center">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top colored border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-purple-400 to-blue-500"></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600">
                    {blog.category}
                  </Badge>
                  
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {blog.date}
                  </div>
                </div>
                
                <Link to={`/blog/${blog.slug}`} className="">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {blog.excerpt}
                </p>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <Link 
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  >
                    Read article 
                    <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`} />
                  </Link>
                  
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
              
              {/* Decorative corner shape */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <div className="absolute transform rotate-45 -translate-y-8 translate-x-8 w-16 h-16 bg-purple-500 dark:bg-purple-400"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view button */}
        <div className="mt-12 text-center md:hidden">
          <Button asChild className="bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-500 shadow-lg">
            <Link to="/blog" className="">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}






