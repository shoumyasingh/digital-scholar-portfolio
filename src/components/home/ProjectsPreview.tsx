import { useState } from "react";
import { ArrowRight, Github, Code, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulating the Link component for this example
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function ProjectsPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: "AI-Powered Code Analyzer",
      description: "A tool that uses machine learning to analyze code quality and suggest improvements.",
      tags: ["Python", "TensorFlow", "NLP"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Distributed Database System",
      description: "A high-performance distributed database designed for IoT applications.",
      tags: ["Rust", "Distributed Systems", "IoT"],
      github: "https://github.com",
      demo: null,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50">
                <Code className="w-3 h-3 mr-2" /> Engineering Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Engineering Projects
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Practical applications of research through software engineering projects.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Button asChild variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm">
                <Link to="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 overflow-hidden">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating link */}
                <div className="absolute top-4 right-4 z-20">
                  {project.demo ? (
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="size-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <ArrowUpRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </a>
                  ) : (
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="size-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 font-medium transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Demo
                      </a>
                    )}
                  </div>
                  
                  <div className={`text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`}>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view button */}
        <div className="mt-12 text-center lg:hidden">
          <Button asChild className="bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-lg">
            <Link to="/projects" className="">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}









