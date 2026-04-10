import { whatsappLinks, trackingIds } from '../data/businessInfo'

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappLinks.floating}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={trackingIds.floating}
      className="fixed bottom-5 right-5 z-50 bg-inslem-orange text-white w-14 h-14 rounded-full shadow-xl hover:bg-inslem-orange-hover transition flex items-center justify-center md:hidden"
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  )
}

export default WhatsAppButton
