import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Guestbook from '@/components/Guestbook';
import VisitorCounter from '@/components/VisitorCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />  
        <Experience />
        <Projects />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
      <div className="pb-4">
        <VisitorCounter />
      </div>
    </div>
  );
}
