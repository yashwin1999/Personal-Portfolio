import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineer",
    description:
      "Strong foundations in computer science with hands-on experience building scalable full-stack and enterprise applications.",
  },
  {
    icon: Rocket,
    title: "Automation-Focused",
    description:
      "Driven to optimize workflows using scripting, APIs, and cloud tools, cutting manual effort and improving delivery speed.",
  },
  {
    icon: Users,
    title: "Industry-Tested Team Player",
    description: "Experienced working in Agile teams, collaborating with stakeholders, and handling direct client communication in real-world environments.",
  },
  {
    icon: Lightbulb,
    title: "Curious & Adaptive",
    description:
      "Always exploring new tools and technologies, with a strong interest in learning and applying better ways to solve problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into scalable,
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world software.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I am a software engineer with industry experience at IBM and a 
                Master's student in Computer Science specializing in Cloud Computing,
                Big Data, and Artificial Intelligence. I build scalable, efficient
                systems spanning full-stack development, distributed data processing,
                and cloud infrastructure.
              </p>
              <p>
                My experience spans backend development with Java, Python, and
                SQL, modern frontend frameworks like React and Next.js, and
                cloud-native tools across AWS and CI/CD pipelines. I focus on
                writing clean, maintainable code that scales.
              </p>
              <p>
                Currently pursuing my Master's in Computer Science at UT
                Arlington, I am expanding my interests into data engineering,
                distributed systems, and machine learning through hands-on
                projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I enjoy building software that's efficient under the hood,
                simple on the surface, and genuinely useful to the people who
                rely on it."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};