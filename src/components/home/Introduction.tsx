import { useState, useEffect, useRef } from "react";
import { ArrowDownRight, Zap, BookOpen, Brain, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50/30 dark:from-blue-900/10"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50/30 dark:from-purple-900/10"></div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse bg-blue-400/30 dark:bg-blue-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Main content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <Zap className="mr-1 h-3 w-3" /> About My Work
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Bridging Research and Innovation
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With over a decade of experience in computer science research and software engineering, 
              I focus on developing algorithmic solutions to complex real-world problems. My work spans 
              artificial intelligence, machine learning, and data science with particular emphasis on 
              explainable AI and ethical computing frameworks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI Research</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Developing models that balance performance with interpretability, focusing on 
                    real-world applications in healthcare and education.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Academic Contributions</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Publishing in top-tier journals and conferences, contributing to the advancement 
                    of computational methods and theories.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Data Science</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Transforming raw data into actionable insights through statistical analysis 
                    and visualization techniques.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Bridging the gap between theoretical research and practical applications 
                    through innovative software solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="outline" 
                className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 group"
              >
                Learn more about my approach
                <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-lg"></div>
              
              {/* Content card */}
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Research Highlights</h3>
                  </div>
                  
                  {/* Research metrics */}
                  <div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">AI Ethics</span>
                        <span className="text-slate-600 dark:text-slate-400">88%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">ML Algorithms</span>
                        <span className="text-slate-600 dark:text-slate-400">92%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Data Analysis</span>
                        <span className="text-slate-600 dark:text-slate-400">85%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Software Engineering</span>
                        <span className="text-slate-600 dark:text-slate-400">90%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Citation data */}
                  <div className="pt-2 mt-6 border-t border-slate-100 dark:border-slate-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">35+</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Publications</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">8+</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Years Research</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-200 dark:bg-yellow-500/20 rounded-full blur opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-300 dark:bg-purple-500/20 rounded-full blur opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
