
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import ResearchPreview from "@/components/home/ResearchPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import BlogPreview from "@/components/home/BlogPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <ResearchPreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactCTA />
    </Layout>
  );
}
