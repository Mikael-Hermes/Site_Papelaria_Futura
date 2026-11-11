


function WhatsappBubble() {
  return (
    <a
    href={import.meta.env.VITE_WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Converse no Whatsapp"
    className="fixed bottom-16 right-16 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
        <img src="src/assets/whatsapp.svg" role="img" className="w-11/12"></img>
    </a>
  )
}

export default WhatsappBubble