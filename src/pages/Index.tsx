
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ResearchPreview from "@/components/home/ResearchPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import BlogPreview from "@/components/home/BlogPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <ResearchPreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCTA />
    </Layout>
  );
}
