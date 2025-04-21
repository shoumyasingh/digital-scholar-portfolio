
import { ArrowRight, Github, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProjectsPreview() {
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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scholar-navy dark:text-white">
            Engineering Projects
          </h2>
          <p className="mt-4 text-lg text-scholar-gray dark:text-gray-300 max-w-2xl mx-auto">
            Practical applications of research through software engineering projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden subtle-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                  {project.title}
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 text-scholar-blue text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-scholar-gray hover:text-scholar-blue dark:text-gray-300 dark:hover:text-white"
                  >
                    <Github className="h-5 w-5 mr-1" /> Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-scholar-gray hover:text-scholar-blue dark:text-gray-300 dark:hover:text-white"
                    >
                      <Code className="h-5 w-5 mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
