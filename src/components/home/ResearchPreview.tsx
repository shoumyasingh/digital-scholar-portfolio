
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ResearchPreview() {
  const researchHighlights = [
    {
      title: "Intelligent Systems for IoT Networks",
      description: "Exploring machine learning approaches for optimizing IoT network performance and security.",
      link: "/research#intelligent-systems"
    },
    {
      title: "Adaptive User Interfaces",
      description: "Research on context-aware interfaces that adapt to user preferences and environmental factors.",
      link: "/research#adaptive-ui"
    },
    {
      title: "Distributed Computing Paradigms",
      description: "Investigating novel approaches to distributed computing in heterogeneous environments.",
      link: "/research#distributed-computing"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scholar-navy dark:text-white">
            Research Focus
          </h2>
          <p className="mt-4 text-lg text-scholar-gray dark:text-gray-300 max-w-2xl mx-auto">
            My research sits at the intersection of information systems, machine learning, and human-computer interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchHighlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 subtle-hover"
            >
              <div className="mb-4 text-scholar-blue">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                {item.title}
              </h3>
              <p className="text-scholar-gray dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <Link 
                to={item.link}
                className="inline-flex items-center text-scholar-blue hover:text-blue-700 font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/research">
              View All Research
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
