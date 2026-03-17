import { Navbar, Hero, About, Services, Gallery, Testimonials, Contact, Footer } from '../sections';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
