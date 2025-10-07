import { useState } from "react";
import { ArrowRight, BookOpen, Lightbulb, Network, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulating the Link component for this example
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function ResearchPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const researchHighlights = [
    {
      title: "Intelligent Systems for IoT Networks",
      description: "Exploring machine learning approaches for optimizing IoT network performance and security.",
      link: "/research/intelligent-systems",
      icon: Network,
      category: "IoT",
      progress: 85
    },
    {
      title: "Adaptive User Interfaces",
      description: "Research on context-aware interfaces that adapt to user preferences and environmental factors.",
      link: "/research/adaptive-ui",
      icon: Lightbulb,
      category: "HCI",
      progress: 70
    },
    {
      title: "Distributed Computing Paradigms",
      description: "Investigating novel approaches to distributed computing in heterogeneous environments.",
      link: "/research/distributed-computing",
      icon: Braces,
      category: "Systems",
      progress: 60
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <Badge variant="outline" className="mb-4 px-3 py-1 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50">
                <BookOpen className="w-3 h-3 mr-2" /> Research Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Research Focus
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                My research sits at the intersection of information systems, machine learning, and human-computer interaction.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Button asChild variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm">
                <Link to="/research" className="flex items-center">
                  View All Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 opacity-50"></div>
                
                {/* Progress bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-700">
                  <div 
                    className="h-full bg-blue-500 dark:bg-blue-600 transition-all duration-1000"
                    style={{ width: `${item.progress}%`, transform: hoveredIndex === index ? 'scaleX(1.03)' : 'scaleX(1)' }}
                  ></div>
                </div>
                
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Link 
                      to={item.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      Learn more <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile view button */}
        <div className="mt-12 text-center md:hidden">
          <Button asChild className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg">
            <Link to="/research" className="">
              View All Research
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}










