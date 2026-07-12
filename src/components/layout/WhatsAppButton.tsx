"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    // Always rendered so it reserves space in the flex row from the start.
    // Only opacity/scale animate — no layout shift to neighbouring buttons.
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow duration-300 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <FaWhatsapp className="size-8" />

      {/* Ping animation behind the icon */}
      {isVisible && (
        <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      )}
    </motion.a>
  );
}
