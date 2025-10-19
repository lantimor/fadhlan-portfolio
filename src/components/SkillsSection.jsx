import { useState } from "react"
import { cn } from "@/lib/utils"
// Pastikan path ini benar!
import LucideIcon  from "@/components/ui/LucideIcon" 

// Catatan: Ikon yang TIDAK ada di Lucide (seperti logo software spesifik) 
// menggunakan iconPath dan harus Anda siapkan di folder public/logos.

const skills = [
  // DA & Visualizations
  // iconName = Ikon dari Lucide React
  // iconPath = Path ke logo kustom (misal: public/logos/excel.svg)
  { name: "SQL Server Management Studio", level: 80, category: "Data Tools", iconName: "Database" },
  { name: "Python", level: 70, category: "Data Tools", iconName: "Code" }, 
  { name: "Microsoft Excel", level: 80, category: "Data Tools", iconName: "Table" }, 
  { name: "Tableau", level: 85, category: "Data Tools", iconName: "BarChart3" }, 
  { name: "Power BI", level: 90, category: "Data Tools", iconName: "Gauge" }, 
  { name: "PostgreSQL", level: 80, category: "Data Tools", iconName: "Database" },

  // D&P
  { name: "Figma", level: 95, category: "Design", iconName: "Figma" },
  { name: "Canva", level: 90, category: "Design", iconName: "Palette" }, 
  { name: "Flowchart", level: 90, category: "Design", iconName: "Split" },

  // DE & Tools
  { name: "Visual Studio Code", level: 80, category: "Productivity", iconName: "Braces" },
  { name: "Java Eclipse", level: 70, category: "Productivity", iconName: "SquareCode" },
];

const categories = ["all", "Data Tools", "Design", "Productivity"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* --- Category Filter Buttons (Tidak ada perubahan) --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bg-secondary" // Perbaikan typo 'bd-secondary' menjadi 'bg-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Skills Grid (Revisi di sini) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center text-left mb-4">
                
                {/* Logika Tampilan Ikon/Logo */}
                <div className="flex-shrink-0 mr-3">
                  {skill.iconPath ? (
                    // Tampilkan logo kustom (SVG/PNG)
                    <img 
                      src={skill.iconPath} 
                      alt={`${skill.name} Logo`} 
                      className="w-7 h-7 object-contain" // w-7, h-7 untuk ukuran seragam
                    />
                  ) : skill.iconName ? (
                    // Tampilkan ikon dari Lucide React
                    <LucideIcon 
                      name={skill.iconName} 
                      size={28} 
                      className="text-primary" 
                    />
                  ) : (
                    // Fallback jika tidak ada iconName/iconPath
                    <LucideIcon 
                        name="HelpCircle" 
                        size={28} 
                        className="text-muted-foreground" 
                    />
                  )}
                </div>

                {/* Nama Skill */}
                <h3 className="font-semibold text-lg flex-grow"> {skill.name}</h3>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Level Persentase */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};