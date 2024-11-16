import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <CaseStudies />
      <Blog />
      <Contact />
    </>
  );
}