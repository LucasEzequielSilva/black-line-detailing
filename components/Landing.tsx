import type { Business } from "@/data/businesses";
import Navbar from "./Navbar";
import Hero from "./Hero";
import QualityGallery from "./QualityGallery";
import BeforeAfter from "./BeforeAfter";
import Inventory from "./Inventory";
import Warranty from "./Warranty";
import Location from "./Location";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Landing({ biz }: { biz: Business }) {
  return (
    <>
      <Navbar biz={biz} />
      <Hero biz={biz} />
      <QualityGallery biz={biz} />
      <BeforeAfter />
      <Inventory biz={biz} />
      <Warranty />
      <Location biz={biz} />
      <Footer biz={biz} />
      <WhatsAppFloat biz={biz} />
    </>
  );
}
