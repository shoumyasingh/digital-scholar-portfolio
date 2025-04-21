
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, FileCode, Users } from "lucide-react";

export default function Research() {
  const publications = [
    {
      title: "Optimizing IoT Networks Using Adaptive Learning Algorithms",
      authors: "Doe, J., Smith, A., & Johnson, B.",
      journal: "Journal of Network and Computer Applications",
      year: 2023,
      doi: "10.1016/j.jnca.2023.05.012",
      pdf: "#",
      id: "intelligent-systems"
    },
    {
      title: "Context-Aware Interfaces: A Comprehensive Survey",
      authors: "Doe, J. & Williams, C.",
      journal: "ACM Transactions on Computer-Human Interaction",
      year: 2022,
      doi: "10.1145/3491102.3502025",
      pdf: "#",
      id: "adaptive-ui"
    },
    {
      title: "Heterogeneous Computing in Distributed Environments: Challenges and Solutions",
      authors: "Doe, J., Miller, R., Garcia, L., & Chen, H.",
      journal: "IEEE Transactions on Parallel and Distributed Systems",
      year: 2021,
      doi: "10.1109/TPDS.2021.3061520",
      pdf: "#",
      id: "distributed-computing"
    },
    {
      title: "Machine Learning Approaches for Anomaly Detection in IoT Networks",
      authors: "Smith, A., Doe, J., & Taylor, E.",
      journal: "Sensors Journal",
      year: 2020,
      doi: "10.3390/s20102876",
      pdf: "#"
    }
  ];

  const conferences = [
    {
      name: "International Conference on Information Systems (ICIS)",
      year: 2023,
      role: "Speaker",
      topic: "Distributed Computing Paradigms for Edge Networks",
      location: "Copenhagen, Denmark"
    },
    {
      name: "IEEE International Conference on Software Engineering (ICSE)",
      year: 2022,
      role: "Session Chair",
      topic: "AI-Powered Software Development",
      location: "Pittsburgh, USA"
    },
    {
      name: "ACM Conference on Human Factors in Computing Systems (CHI)",
      year: 2021,
      role: "Poster Presenter",
      topic: "Adaptive User Interfaces",
      location: "Virtual Event"
    }
  ];

  const researchInterests = [
    {
      title: "Artificial Intelligence",
      description: "Machine learning algorithms, neural networks, and AI ethics",
      icon: <FileCode className="h-6 w-6" />
    },
    {
      title: "Human-Computer Interaction",
      description: "User experience, adaptive interfaces, accessibility",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Distributed Systems",
      description: "Edge computing, IoT networks, system optimization",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-scholar-navy dark:text-white mb-6">
            Research
          </h1>
          <p className="text-lg text-center text-scholar-gray dark:text-gray-300 max-w-3xl mx-auto mb-12">
            My research explores the intersection of artificial intelligence, human-computer interaction, and distributed systems, with a focus on practical applications.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-scholar-navy dark:text-white mb-8">
            Research Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {researchInterests.map((interest, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="text-scholar-blue mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                  {interest.title}
                </h3>
                <p className="text-scholar-gray dark:text-gray-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
          
          <h2 id="publications" className="text-3xl font-bold text-scholar-navy dark:text-white mb-8">
            Publications
          </h2>
          
          <div className="space-y-8 mb-16">
            {publications.map((pub, index) => (
              <div 
                key={index}
                id={pub.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                  {pub.title}
                </h3>
                <p className="italic text-scholar-gray dark:text-gray-300 mb-2">
                  {pub.authors}
                </p>
                <p className="text-scholar-gray dark:text-gray-300 mb-4">
                  <span className="font-medium">{pub.journal}</span>, {pub.year}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doi}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={pub.pdf}>
                      PDF
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <h2 id="conferences" className="text-3xl font-bold text-scholar-navy dark:text-white mb-8">
            Conference Participation
          </h2>
          
          <div className="space-y-8">
            {conferences.map((conf, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-2 text-scholar-navy dark:text-white">
                  {conf.name}
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 mb-2">
                  <span className="font-medium">Role:</span> {conf.role} | <span className="font-medium">Year:</span> {conf.year}
                </p>
                <p className="text-scholar-gray dark:text-gray-300 mb-2">
                  <span className="font-medium">Topic:</span> {conf.topic}
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  <span className="font-medium">Location:</span> {conf.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
