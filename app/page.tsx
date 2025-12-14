import AboutSection from "@/Components/Hero-Section/About";
import ContactInfoSection from "@/Components/Hero-Section/ContactUsSection";
import ExecutionProcessSection from "@/Components/Hero-Section/ExecutionProcessSection";
import { FooterComp } from "@/Components/Hero-Section/Footer";
import Hero from "@/Components/Hero-Section/Hero";
import PartnersSection from "@/Components/Hero-Section/PatrnerSection";
import SolutionsSection from "@/Components/Hero-Section/ProductListing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <SolutionsSection></SolutionsSection>
      <ExecutionProcessSection></ExecutionProcessSection>
      <PartnersSection></PartnersSection>
      <ContactInfoSection></ContactInfoSection>
      <FooterComp></FooterComp>
    </>
  );
}
