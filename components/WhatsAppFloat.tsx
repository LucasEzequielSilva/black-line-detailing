"use client";

import { FaWhatsapp } from "react-icons/fa";
import { type Business, MSG_PRESUPUESTO, waHref } from "@/data/businesses";

export default function WhatsAppFloat({ biz }: { biz: Business }) {
  if (!biz.whatsapp) return null;
  return (
    <a
      href={waHref(biz, MSG_PRESUPUESTO)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: "#25D366", color: "#0b0b0b" }}
    >
      <FaWhatsapp aria-hidden className="size-6" />
    </a>
  );
}
