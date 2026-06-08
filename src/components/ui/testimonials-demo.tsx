import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type TestimonialItem,
} from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "Die Zusammenarbeit läuft zuverlässig und sauber. Unsere Büroflächen sind konstant gepflegt, ohne dass wir täglich nachsteuern müssen.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Martin Breuer",
    role: "Objektleiter, Köln",
  },
  {
    text: "Kurzfristige Einsätze funktionieren wirklich. Nach einem Umbau war das Team schnell vor Ort und hat alles termingerecht übergeben.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Nadine Wolf",
    role: "Projektkoordinatorin",
  },
  {
    text: "Wir schätzen den direkten Kontakt und die klare Kommunikation. Zusagen werden eingehalten, auch bei engen Zeitfenstern.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Kemal Yildiz",
    role: "Facility Manager",
  },
  {
    text: "Die Glasreinigung ist jedes Mal streifenfrei und professionell umgesetzt. Freundliches Team und saubere Abstimmung.",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    name: "Sabine Hartmann",
    role: "Verwaltung, Mülheim",
  },
  {
    text: "Transport und Logistik wurden zuverlässig organisiert. Besonders hilfreich war die schnelle Reaktionszeit bei spontanen Anforderungen.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "David Klein",
    role: "Betriebsleiter",
  },
  {
    text: "Man merkt sofort, dass hier ein eingespieltes Team arbeitet. Qualität, Pünktlichkeit und Diskretion stimmen einfach.",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Esra Demir",
    role: "Assistenz der Geschäftsführung",
  },
  {
    text: "Für uns war wichtig, einen Ansprechpartner für mehrere Gewerke zu haben. Genau das liefert RM Clean Bau zuverlässig.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Lukas Franke",
    role: "Standortverantwortlicher",
  },
  {
    text: "Vom Erstgespräch bis zur laufenden Betreuung sehr professionell. Die Qualität ist konstant hoch und nachvollziehbar.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Julia Petersen",
    role: "Office Management",
  },
  {
    text: "Auch bei hohem Druck bleibt das Team verbindlich und lösungsorientiert. Genau so wünscht man sich einen Dienstleister.",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Sven Albrecht",
    role: "Technischer Leiter",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsDemo = () => {
  return (
    <section className="relative bg-bg py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[640px] flex-col items-center"
        >
          <div className="border border-border px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            Stimmen unserer Kunden
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold text-primary sm:text-4xl">
            Vertrauen entsteht durch Ergebnisse
          </h2>
          <p className="mt-4 text-center text-base text-primary/75">
            Unternehmen und Privatkunden aus Köln berichten, warum sie mit uns langfristig
            zusammenarbeiten.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDemo;
