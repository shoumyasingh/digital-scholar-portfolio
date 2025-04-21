
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPreview() {
  const blogs = [
    {
      title: "Advancements in Natural Language Processing",
      excerpt: "Recent advances in NLP have revolutionized how we interact with machines. This post explores the latest developments and their implications.",
      date: "April 10, 2023",
      slug: "advancements-in-nlp"
    },
    {
      title: "The Future of Distributed Computing",
      excerpt: "How emerging distributed computing paradigms are changing the way we think about systems architecture and software design.",
      date: "March 5, 2023",
      slug: "future-of-distributed-computing"
    },
    {
      title: "Ethical Considerations in AI Development",
      excerpt: "Exploring the ethical dimensions of artificial intelligence and the responsibilities of researchers and engineers.",
      date: "February 12, 2023",
      slug: "ethical-considerations-ai"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-scholar-navy dark:text-white">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-scholar-gray dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and analysis on information technology and software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 subtle-hover"
            >
              <div className="text-sm text-scholar-gray dark:text-gray-400 mb-3">
                {blog.date}
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
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
