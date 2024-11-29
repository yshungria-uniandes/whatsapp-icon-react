    
import './WhatsAppIcon.css'; // Archivo CSS para estilos

const WhatsAppIcon = () => {
    return (
        <a
        className="whatsapp-icon"
        href="https://api.whatsapp.com/send?phone=573123456789"
        target="_blank"
        rel="noreferrer"
        >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
        />
        </a>
    );
};

export default WhatsAppIcon;