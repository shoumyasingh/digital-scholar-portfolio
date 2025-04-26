import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Github, Link as LinkIcon, Code, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "AI-Powered Code Analyzer",
      description: "A tool that uses machine learning to analyze code quality and suggest improvements. The system employs natural language processing techniques to understand code semantics and identify potential issues, bugs, or optimization opportunities.",
      tags: ["Python", "TensorFlow", "NLP", "Software Quality"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Distributed Database System",
      description: "A high-performance distributed database designed for IoT applications. This system optimizes for low-latency operations across geographically distributed nodes while maintaining data consistency and fault tolerance.",
      tags: ["Rust", "Distributed Systems", "IoT", "Databases"],
      github: "https://github.com",
      demo: null,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Adaptive Learning Platform",
      description: "An educational platform that adapts content and exercises based on individual learning patterns. The system uses reinforcement learning to optimize the learning path for each user, maximizing knowledge retention and engagement.",
      tags: ["JavaScript", "React", "Node.js", "ML"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart City Simulation",
      description: "A simulation environment for testing IoT and AI algorithms in a virtual smart city context. This project provides a digital twin of urban infrastructure to evaluate the performance of various technologies before real-world deployment.",
      tags: ["C++", "Unity", "Simulation", "Smart Cities"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Research Paper Recommender",
      description: "A recommendation system that suggests relevant academic papers based on a researcher's interests and reading history. The system analyzes citation networks and content similarity to identify valuable papers.",
      tags: ["Python", "NLP", "Recommender Systems"],
      github: "https://github.com",
      demo: null,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Secure IoT Framework",
      description: "A security framework for IoT devices that offers lightweight encryption, authentication, and intrusion detection. Designed to work efficiently on resource-constrained devices while providing robust security guarantees.",
      tags: ["C", "Security", "IoT", "Embedded Systems"],
      github: "https://github.com",
      demo: null,
      image: "https://images.unsplash.com/photo-1563770557593-978a665a9e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Function to get a unique color for each tag category
  const getTagColor = (tag) => {
    // Map common categories to consistent colors
    if (tag.includes("Python") || tag.includes("NLP")) return "blue";
    if (tag.includes("Rust") || tag.includes("C") || tag.includes("C++")) return "red";
    if (tag.includes("JavaScript") || tag.includes("React") || tag.includes("Node")) return "yellow";
    if (tag.includes("IoT") || tag.includes("Embedded")) return "green";
    if (tag.includes("Security")) return "purple";
    if (tag.includes("ML") || tag.includes("AI")) return "indigo";
    if (tag.includes("Database")) return "cyan";
    
    // Default fallback
    return "gray";
  };

  return (
    <Layout>
      {/* Header section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-gray-950 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.100/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/50)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/20)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        {/* Code decorative element */}
        <div className="absolute top-1/4 right-1/4 opacity-10 dark:opacity-5 hidden lg:block">
          <div className="relative h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900 p-6 animate-pulse">
            <Code className="h-full w-full text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
            <Code className="w-3.5 h-3.5 mr-2" /> Engineering Portfolio
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Engineering Projects
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collection of software projects that demonstrate the practical application of my research interests and technical skills.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${150 * (index % 3)}ms` }}
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
                  
                  {/* Floating project links */}
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="size-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="size-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <ArrowUpRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </a>
                    )}
                  </div>
                  
                  {/* Project title overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => {
                      const colorKey = getTagColor(tag);
                      const colorClasses = {
                        blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                        red: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                        green: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                        purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                        yellow: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                        indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
                        cyan: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
                        gray: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      };
                      
                      return (
                        <span 
                          key={i}
                          className={`${colorClasses[colorKey]} text-xs px-3 py-1 rounded-full font-medium`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
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
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more projects button */}
          <div className="mt-16 text-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
              View More on GitHub <Github className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}










