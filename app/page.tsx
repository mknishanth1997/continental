import AboutSection from "@/Components/Hero-Section/About";
import ExecutionProcessSection from "@/Components/Hero-Section/ExecutionProcessSection";
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
    </>
  );
}
