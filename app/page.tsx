import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Stats  from "../components/Stats";
import Clients from "../components/Clients";
import AccredianEdge from "../components/Accredian";
import DomainExpertise from "../components/DomainExpertise";
import CourseSegmentation from "../components/CourseSegmentation";
import WhoShouldJoin from "../components/WhoShouldJoin";
import Cats from "../components/Cats";
import HowItWorks from "../components/Works";
import FAQs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import SupportSection from "../components/Support";
import Footer from "../components/Footer";

export default function All() {
  return (
    <>
    <Navbar />
    <Home />
    <Stats />
    <Clients />
    <AccredianEdge />
    <DomainExpertise />
    <CourseSegmentation />
    <WhoShouldJoin />
    <Cats />
    <HowItWorks />
    <FAQs />
    <Testimonials />
    <SupportSection />
    <Footer />
    </>
  );
}
