import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="container">
        <About onContactClick={() => setShowModal(true)} />
        <Skills />
        <Projects />
      </main>
      <footer>© 2025 Leo Gomes. Todos os direitos reservados.</footer>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default App;
