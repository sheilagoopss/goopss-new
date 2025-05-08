import { FaWhatsapp } from "react-icons/fa"

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/972509669655"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#128C7E] transition-colors duration-200 z-50"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="font-medium">צור קשר</span>
    </a>
  )
} 