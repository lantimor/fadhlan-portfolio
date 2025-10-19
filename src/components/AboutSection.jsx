import { Palette, LineChart, Target } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Analyst & Business Analyst
            </h3>

            <p className="text-muted-foreground">
             I'm a fifth-semester student at BINUS University, currently preparing for my internship. 
             I'm passionate about turning data into insights and building user-centered solutions that drive better business decisions.
            </p>

            <p className="text-muted-foreground">
              I specialize in data analysis, business process evaluation, and UI/UX design — combining analytical thinking with creativity to deliver meaningful outcomes. 
              I'm continuously learning to improve my technical and design skills, aiming to make a real impact in both the business and technology landscapes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="CV-Fadhlan.docx"
                download
                target="blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Transforming raw data into actionable insights using tools and visualization techniques to support data-driven decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Analysis</h4>
                  <p className="text-muted-foreground">
                    Identifying business needs, analyzing processes, and creating strategic recommendations that align with organizational goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-centered interfaces to enhance digital experiences through usability and aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};