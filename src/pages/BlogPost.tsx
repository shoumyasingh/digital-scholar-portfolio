import { useState, useEffect } from "react";
import { Calendar, ArrowLeft, User, Tag, Clock, Share2, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { getBlogPostBySlug } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const post = getBlogPostBySlug(slug || "");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header section with gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-gray-950 pt-20 pb-12">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.100/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/50)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/20)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="outline" onClick={() => navigate("/blog")} className="mb-8 group border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>

            <div className="mb-8">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-300 text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-blue-600 dark:text-blue-400" /> 
                  </div>
                  {post.author}
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-2">
                    <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> 
                  </div>
                  {post.date}
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
                    <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" /> 
                  </div>
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article content section */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="md:w-3/4">
            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-8 mb-8">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:text-slate-900 dark:prose-headings:text-white 
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-p:text-slate-600 dark:prose-p:text-slate-300
                  prose-li:text-slate-600 dark:prose-li:text-slate-300
                  prose-strong:text-slate-900 dark:prose-strong:text-white
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-ul:my-4 prose-li:my-1
                  prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            
            {/* Article footer */}
            <div className="flex items-center justify-between py-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700">
                  <Bookmark className="h-4 w-4 mr-2" /> Save
                </Button>
              </div>
              
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Published on {post.date}
              </div>
            </div>
            
            {/* Related articles */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Related Articles</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link 
                    key={index} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-white dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {relatedPost.date}
                    </div>
                    <h4 className="text-base font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Post navigation */}
            <div className="mt-12 flex justify-between">
              <Button variant="outline" asChild className="border-slate-200 dark:border-slate-700">
                <Link to={`/blog/previous-post`} className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="border-slate-200 dark:border-slate-700">
                <Link to={`/blog/next-post`} className="flex items-center">
                  Next <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-blue-50/50 dark:bg-slate-800/30 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                Table of Contents
              </h3>
              
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#transformer-architectures" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                      Transformer Architectures
                    </a>
                  </li>
                  <li>
                    <a href="#practical-applications" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                      Practical Applications
                    </a>
                  </li>
                  <li>
                    <a href="#ethical-considerations" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                      Ethical Considerations
                    </a>
                  </li>
                  <li>
                    <a href="#future-directions" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                      Future Directions
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                  About the Author
                </h4>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" /> 
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">
                      {post.author}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      AI Researcher & Writer
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button size="sm" variant="outline" asChild className="w-full border-slate-200 dark:border-slate-700">
                    <Link to="/about">View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}










