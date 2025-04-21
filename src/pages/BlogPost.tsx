
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// This is a placeholder component to show a single blog post
// In a real application, you would fetch the actual blog post data

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  // Sample blog data - in a real app this would be fetched from an API or CMS
  const blog = {
    title: "Advancements in Natural Language Processing",
    date: "April 10, 2023",
    author: "Dr. Jane Doe",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    content: `
      <p>Recent advances in Natural Language Processing (NLP) have transformed how we interact with machines and process human language. This post explores these developments and their implications for research and industry applications.</p>
      
      <h2>Transformer Architectures</h2>
      <p>The introduction of transformer-based models like BERT, GPT, and T5 has revolutionized NLP tasks across the board. These models use attention mechanisms to understand context in ways previous recurrent neural networks couldn't match.</p>
      
      <p>Key benefits include:</p>
      <ul>
        <li>Better understanding of long-range dependencies in text</li>
        <li>Improved performance on a wide range of language tasks</li>
        <li>Ability to transfer knowledge across domains and languages</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>These advancements have enabled new applications in:</p>
      <ul>
        <li>Automated content generation</li>
        <li>More accurate machine translation</li>
        <li>Better sentiment analysis for customer feedback</li>
        <li>Improved question-answering systems</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>With great power comes great responsibility. NLP researchers and practitioners must consider the ethical implications of these technologies, including:</p>
      <ul>
        <li>Potential for bias in language models</li>
        <li>Privacy concerns with text analysis</li>
        <li>Potential misuse of text generation capabilities</li>
      </ul>
      
      <h2>Future Directions</h2>
      <p>Looking forward, we can expect continued advancements in:</p>
      <ul>
        <li>More efficient models that require less computing power</li>
        <li>Better multilingual capabilities</li>
        <li>Improved grounding of language in real-world contexts</li>
        <li>Tighter integration with other AI disciplines like computer vision</li>
      </ul>
      
      <p>These developments will continue to push the boundaries of what's possible with machine understanding of human language.</p>
    `,
  };

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Button variant="outline" asChild className="mb-8">
          <Link to="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-scholar-navy dark:text-white mb-4">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-scholar-gray dark:text-gray-300 gap-4 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" /> 
              {blog.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> 
              {blog.date}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" /> 
              {blog.category}
            </div>
            <div>
              {blog.readTime}
            </div>
          </div>
        </div>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-scholar-navy dark:prose-headings:text-white prose-a:text-scholar-blue"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </Layout>
  );
}
