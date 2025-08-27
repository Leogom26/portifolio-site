type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal-bg active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Entre em contato</h3>
        <p>
          Você pode me enviar um email para: <br />
          <a href="mailto:leogomdesenvolvimento@gmail.com">
            leogomdesenvolvimento@gmail.com
          </a>
        </p>
        <button className="close-btn" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
