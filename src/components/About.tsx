import type { AboutProps } from "./types.ts";
import { FaHandPaper, FaDownload, FaEnvelope } from "react-icons/fa";

export default function About({ onContactClick }: AboutProps) {
  return (
    <section id="about">
      <h1>
        <FaHandPaper className="icon-green" /> Olá! Eu sou o Leo Gomes
      </h1>
      <p>
        Sou desenvolvedor <strong>Full Stack</strong>, apaixonado por tecnologia
        e aprendizado contínuo. Atuo no desenvolvimento{" "}
        <strong>frontend e backend</strong>, focado em construir aplicações web
        modernas, performáticas e escaláveis.
      </p>
      <div className="btn-group">
        <a
          href="/Curriculo_Leonardo_Gomes_Atualizado.pdf"
          download
          className="btn-link"
        >
          <FaDownload className="icon-green" /> Baixar Currículo
        </a>
        <button className="btn-inline" onClick={onContactClick}>
          <FaEnvelope className="icon-white" /> Contact Me
        </button>
      </div>
    </section>
  );
}
