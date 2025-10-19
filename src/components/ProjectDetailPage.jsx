import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

// --- DATA PROYEK LENGKAP ---
// Data ini harus memiliki ID yang SAMA PERSIS dengan yang digunakan di ProjectsSection.jsx
const projectsData = [
    { 
        id: "global-climate-change", 
        title: "Global Climate Change", 
        tags: ["Kaggle", "Google Colab", "Tableau"], 
        description: "Proyek ini dimulai dengan pembersihan data besar dari Kaggle. Kemudian, data diolah menggunakan Google Colab untuk analisis statistik. Hasil akhirnya divisualisasikan menggunakan dashboard interaktif Tableau, mengungkap korelasi antara aktivitas industri dan peningkatan suhu rata-rata global. Tantangan utama adalah memastikan konsistensi data selama lima dekade, menyajikan temuan tentang anomali suhu dan variasi curah hujan.",
        detailImages: [
            "/Projects/Project 1.png", // Gambar utama/thumbnail
            "/Projects/GlobalTemperatureCSV.png", // Placeholder gambar detail 1
            "/Projects/GoogleColab-Filtered.png", // Placeholder gambar detail 2
        ],
        demoUrl: "https://public.tableau.com/views/GlobalClimateChangeByTemperature/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        githubUrl: "",
    },
    { 
        id: "astra-tbk-dashboard", 
        title: "Astra International Financial Dashboard (2019-2024)", 
        tags: ["Python", "SQL Server", "Power BI"], 
        description: "Dashboard ini menampilkan tren pendapatan, laba bersih, pertumbuhan ekuitas, serta rasio profitabilitas secara interaktif. Melalui integrasi data end-to-end, proyek ini menggambarkan bagaimana data mentah dari laporan tahunan dapat diolah menjadi visualisasi yang informatif dan mendukung pengambilan keputusan bisnis.",
        detailImages: [
            "/Projects/AstraFinancialsVisual.png",
            "/Projects/PythonVisual.png",
            "/Projects/SQLVisual.png"
        ],
        demoUrl: "https://drive.google.com/drive/folders/1dTHg0yN6GexDFp8TfhUC3QNWRLq8uYzD?usp=sharing",
        githubUrl: "https://github.com/lantimor/Python-Astra",
    },
    { 
        id: "application-prototype", 
        title: "Application Prototype", 
        tags: ["Figma", "Artboard"], 
        description: "Pembuatan prototipe fungsional untuk platform aplikasi baru, berfokus pada desain UX/UI yang intuitif dan alur pengguna yang mulus. Menggunakan Figma untuk merancang wireframe awal dan dikembangkan menjadi prototipe fidelitas tinggi. Proses melibatkan pengujian pengguna dan iterasi desain cepat untuk memastikan kemudahan penggunaan. Proyek ini menunjukkan kemampuan dalam desain interaktif dan pemikiran berorientasi pengguna (user-centric).",
        detailImages: [
            "/Projects/Project 3.jpg",
            "/Projects/Mockup Figma 2.jpeg",
            "/Projects/MockUp Figma 3.png",
            "/Projects/Wireframe.png",
        ],
        demoUrl: "https://docs.google.com/document/d/1UnA-E_V62XB3NYGd30-WtTEr1JUYVI2DRJ-hJHBySck/edit?usp=sharing",
        githubUrl: "", // Tidak ada GitHub untuk desain
    },
];

const ProjectDetailPage = () => {
  // Ambil ID dari URL (misal: "global-climate-change")
  const { id } = useParams(); 
  
  // Cari data proyek yang sesuai
  const project = projectsData.find(p => p.id === id);

  // Tampilan 404 jika proyek tidak ditemukan
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground py-24 px-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Proyek Tidak Ditemukan</h1>
        <p className="text-lg mb-6">ID proyek {id} tidak valid.</p>
        <Link to="/" className="cosmic-button flex items-center gap-2">
            <ArrowLeft size={20} /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 px-4">
        <div className="container mx-auto max-w-4xl">
            {/* Tombol Kembali */}
            <Link to="/" className="text-primary hover:underline mb-10 inline-flex items-center font-medium text-lg transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Kembali ke Portofolio
            </Link>

            {/* Header Proyek */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-foreground leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                ))}
            </div>

            {/* Tautan Eksternal */}
            <div className="flex space-x-6 mb-12 text-muted-foreground">
                {project.demoUrl && project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-primary transition-colors">
                        <ExternalLink size={20} className="mr-2" /> Lihat Demo
                    </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-primary transition-colors">
                        <Github size={20} className="mr-2" /> GitHub
                    </a>
                )}
            </div>

            {/* Deskripsi Detail */}
            <div className="bg-card p-8 rounded-xl shadow-2xl mb-16 border border-primary/20">
                <h2 className="text-3xl font-bold mb-4 text-primary">Detail dan Metodologi</h2>
                <p className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                    {project.description}
                </p>
            </div>

            {/* Galeri Foto Proyek */}
            <h2 className="text-4xl font-bold mb-10 text-foreground">Galeri Visualisasi</h2>
            <div className="grid grid-cols-1 gap-12">
                {project.detailImages.map((imgSrc, index) => (
                    <div key={index} className="bg-card p-4 rounded-xl shadow-xl border border-border/50">
                        <img 
                            src={imgSrc} 
                            alt={`${project.title} Screenshot ${index + 1}`} 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Tampilan detail {index + 1} dari proyek {project.title}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectDetailPage;
