
import Layout from "@/components/Layout";
import { Github, Link as LinkIcon, Code } from "lucide-react";

export default function Projects() {
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

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-scholar-navy dark:text-white mb-6">
            Engineering Projects
          </h1>
          <p className="text-lg text-center text-scholar-gray dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A collection of software projects that demonstrate the practical application of my research interests and technical skills.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden subtle-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-scholar-gray dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
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
                        <LinkIcon className="h-5 w-5 mr-1" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
