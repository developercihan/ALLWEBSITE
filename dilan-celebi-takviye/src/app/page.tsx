import Image from "next/image";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Quiz />
      <Products />
      <Footer />
    </main>
  );
}
