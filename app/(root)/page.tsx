import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <section className="flexStart flex-col paddings">
          <Hero />
          <About />
          <Work />
          <Contact />
      </section>
    </div>
  )
}
