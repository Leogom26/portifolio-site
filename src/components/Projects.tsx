const projects = [
  { name: "Board Tarefas", url: "https://github.com/Leogom26/boardTarefa" },
  {
    name: "Leogom Links",
    url: "https://github.com/Leogom26/linktree/tree/main",
  },
  { name: "Criptomoedas", url: "https://github.com/Leogom26/cripto" },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>🚀 Projetos em destaque</h2>
      <ul className="projects-list">
        {projects.map((proj, index) => (
          <li key={index}>
            <a href={proj.url} target="_blank" rel="noopener noreferrer">
              🔗 {proj.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
