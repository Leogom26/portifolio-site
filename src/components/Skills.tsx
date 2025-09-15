const techs = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    alt: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    alt: "TypeScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    alt: "React.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  { src: "https://nestjs.com/img/logo-small.svg", alt: "NestJS" },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    alt: "Prisma",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>🛠️ Tecnologias que utilizo</h2>
      <div className="tech-icons">
        {techs.map((tech, index) => (
          <img key={index} src={tech.src} alt={tech.alt} title={tech.alt} />
        ))}
      </div>
    </section>
  );
}
