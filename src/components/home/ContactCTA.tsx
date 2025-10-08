import { useState, useEffect } from "react";
import { ArrowRight, Mail, Users, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simulating the Link component for this example
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function ContactCTA() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Get the current count from localStorage
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
    
    // Increment the count for this visit
    const newCount = currentCount + 1;
    
    // Save back to localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    
    // Update state
    setVisitorCount(newCount);
    
    // Fade in animation
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-900/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/20 dark:bg-indigo-500/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Animated floating mail icon */}
      <div className="absolute left-1/4 top-1/4 opacity-10 dark:opacity-5 hidden lg:block">
        <div className="relative h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 p-6 animate-pulse">
          <MessageSquare className="h-full w-full text-blue-500 dark:text-blue-400" />
        </div>
      </div>
      
      {/* Animated floating mail icon */}
      <div className="absolute right-1/4 bottom-1/4 opacity-10 dark:opacity-5 hidden lg:block">
        <div className="relative h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900 p-4 animate-pulse">
          <Send className="h-full w-full text-indigo-500 dark:text-indigo-400" />
        </div>
      </div>
      
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 shadow-sm">
          <Mail className="w-3.5 h-3.5 mr-2" /> Get in Touch
        </Badge>
        
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 dark:border-slate-700">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in my research, collaboration opportunities, or have a question? I'm always open to interesting conversations and new connections.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact" className="flex items-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300">
            <Users className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium">{visitorCount.toLocaleString()} visitors so far</span>
          </div>
        </div>
      </div>
    </section>
  );
}



