
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-serif text-xl font-bold text-scholar-navy dark:text-white">
              Dr. Deepak Kumar
            </Link>
            <p className="mt-2 text-sm text-scholar-gray dark:text-gray-400">
              Researcher & Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:deepak.kumar@example.com"
              className="text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="/cv" 
              className="text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="CV"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-scholar-gray dark:text-gray-400">
            &copy; {currentYear} Dr. Deepak Kumar. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              to="/research" 
              className="text-sm text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Research
            </Link>
            <Link 
              to="/projects" 
              className="text-sm text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className="text-sm text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-scholar-gray hover:text-scholar-blue dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
