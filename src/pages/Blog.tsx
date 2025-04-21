
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Blog() {
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

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-scholar-navy dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-center text-scholar-gray dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Thoughts, tutorials, and insights on information technology, software engineering, and academic research.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-10 bg-white dark:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"} 
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 subtle-hover"
              >
                <div className="flex items-center space-x-2 text-xs text-scholar-gray dark:text-gray-400 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-scholar-blue px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {blog.date}
                  </span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <Link 
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-scholar-blue hover:text-blue-700 font-medium"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline">
                Previous
              </Button>
              <Button>
                1
              </Button>
              <Button variant="outline">
                2
              </Button>
              <Button variant="outline">
                3
              </Button>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
