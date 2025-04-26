import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Calendar, Search, Clock, FileText, Filter, ChevronDown } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogs = [
    {
      title: "Advancements in Natural Language Processing",
      excerpt: "Recent advances in NLP have revolutionized how we interact with machines. This post explores the latest developments and their implications.",
      date: "April 10, 2023",
      slug: "advancements-in-nlp",
      category: "Artificial Intelligence",
      readTime: "8 min read"
    },
    {
      title: "The Future of Distributed Computing",
      excerpt: "How emerging distributed computing paradigms are changing the way we think about systems architecture and software design.",
      date: "March 5, 2023",
      slug: "future-of-distributed-computing",
      category: "Distributed Systems",
      readTime: "6 min read"
    },
    {
      title: "Ethical Considerations in AI Development",
      excerpt: "Exploring the ethical dimensions of artificial intelligence and the responsibilities of researchers and engineers.",
      date: "February 12, 2023",
      slug: "ethical-considerations-ai",
      category: "Ethics",
      readTime: "10 min read"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "Best practices for designing and implementing resilient microservices architecture that can handle failures gracefully.",
      date: "January 18, 2023",
      slug: "building-resilient-microservices",
      category: "Software Engineering",
      readTime: "7 min read"
    },
    {
      title: "A Survey of Edge Computing Technologies",
      excerpt: "An overview of current edge computing technologies and their applications in IoT and mobile computing scenarios.",
      date: "December 5, 2022",
      slug: "survey-edge-computing",
      category: "Edge Computing",
      readTime: "9 min read"
    },
    {
      title: "Optimizing Neural Networks for Mobile Devices",
      excerpt: "Techniques for making neural networks more efficient for deployment on resource-constrained mobile devices.",
      date: "November 12, 2022",
      slug: "optimizing-neural-networks-mobile",
      category: "Machine Learning",
      readTime: "8 min read"
    }
  ];

  const categories = [
    "All",
    "Artificial Intelligence",
    "Machine Learning",
    "Distributed Systems",
    "Software Engineering",
    "Ethics",
    "Edge Computing"
  ];

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-gray-950 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.100/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/50)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/20)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5 mr-2" /> Insights & Articles
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Blog
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              Thoughts, tutorials, and insights on information technology, software engineering, and academic research.
            </p>
            
            {/* Search input */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile filters button */}
          <div className="lg:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {/* Category filters - mobile view */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${showFilters ? 'max-h-96' : 'max-h-0'}`}>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={category === selectedCategory ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={category === selectedCategory ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Category filters - desktop view */}
          <div className="hidden lg:flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={category === selectedCategory ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={category === selectedCategory ? "bg-blue-600 hover:bg-blue-700" : "border-slate-200 dark:border-slate-700"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top colored border */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40">
                      {blog.category}
                    </Badge>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {blog.date}
                      </div>
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${blog.slug}`}>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {blog.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <Link 
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      Read article 
                      <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </div>
                
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                  <div className="absolute transform rotate-45 -translate-y-8 translate-x-8 w-16 h-16 bg-blue-500 dark:bg-blue-400"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state if no blogs match the filter */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <FileText className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">No articles match your selected category.</p>
              <Button onClick={() => setSelectedCategory("All")}>
                View All Articles
              </Button>
            </div>
          )}
          
          {/* Pagination controls */}
          {filteredBlogs.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-md">
                  1
                </Button>
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  2
                </Button>
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  3
                </Button>
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 flex items-center">
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}




