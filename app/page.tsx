"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HomeFaq from "@/components/home/faq";
import HomeFeature from "@/components/home/feature";
import HomeHero from "@/components/home/hero";
import HomeHowItWorks from "@/components/home/how-it-works";
import HomePricing from "@/components/home/pricing";
import HomeProblemSolution from "@/components/home/problem-solution";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeFeature />
      <HomeProblemSolution />
      <HomeHowItWorks />
      <HomePricing />
      <HomeFaq />
      <Footer />
    </>
  );
}
