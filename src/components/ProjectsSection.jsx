import { ArrowRight, ExternalLink, Github } from "lucide-react";
// 1. Impor komponen Link dari React Router DOM
import { Link } from 'react-router-dom';

const projects = [
  // PENTING: ID diubah menjadi string slug agar sesuai dengan ProjectDetailPage
  {
    id: "global-climate-change", 
    title: "Global Climate Change",
    description: "Insights into climate change patterns from 1968 to 2016.",
    image: "/Projects/Project 1.png",
    tags: ["Kaggle", "Google Colab", "Tableau"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "astra-tbk-dashboard",
    title: "Astra International Financial Dashboard (2019-2024)",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/Projects/AstraFinancialsVisual.png",
    tags: ["Python", "SQL Server", "Power BI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "application-prototype",
    title: "Application Prototype",
    description:
      "Full-featured Application platform with interactive design and seamless user experience.",
    image: "/Projects/Project 3.jpg",
    tags: ["Figma", "Artboard"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            // 2. GANTI <div> TERLUAR DENGAN <Link>
            <Link
              key={project.id} // Perbaikan 1: Key untuk Link (sudah benar)
              to={`/projects/${project.id}`} // Tautkan ke halaman detail
              
              // Pindahkan semua class styling kartu ke komponen Link
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => ( // Tambahkan 'index' di sini
                    <span 
                        key={`${project.id}-${index}`} // Perbaikan 2: Gunakan kombinasi tag dan index sebagai key
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* 3. HAPUS BAGIAN TAUTAN GITHUB/DEMO */}
                {/* Tautan eksternal ini dipindahkan ke halaman ProjectDetailPage agar tidak bertentangan dengan Link utama */}
                
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/lantimor"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
