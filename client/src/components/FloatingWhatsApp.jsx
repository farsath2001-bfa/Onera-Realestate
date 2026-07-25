import { Whatsapp } from 'react-bootstrap-icons';

function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi, I'm interested in Onera Real Estate's services. Could you share more details?"
  );

  return (
    
      <a href={`https://wa.me/971543732303?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <Whatsapp size={28} />
    </a>
  );
}

export default FloatingWhatsApp;