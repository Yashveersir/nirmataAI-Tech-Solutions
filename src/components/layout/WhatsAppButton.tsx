"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+919546694750";
  const message = encodeURIComponent("Hi NirmataAI team, I'd like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`;

  useEffect(() => {
    // Show button after a small delay to not distract immediately on load
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 sm:bottom-8 sm:right-8"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="size-8" />
          
          {/* Ping animation behind the icon */}
          <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40"></span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
