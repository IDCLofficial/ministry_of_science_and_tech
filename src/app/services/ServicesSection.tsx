import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "/images/consultation.jpg",
    title: "Engineering Consultations",
    description: "Access expert technical advice and engineering solutions for innovation, product design, and research implementation."
  },
  {
    imgSrc: "/images/research.jpg",
    title: "Research & Development Collaboration",
    description: "Collaborate with research institutions, universities, and industry leaders to drive technological advancement and solve real-world problems."
  },
  {
    imgSrc: "/images/grant.jpg",
    title: "Grants and Partnership Opportunities",
    description: "Explore available funding programs, innovation grants, and strategic partnerships to scale your technology-driven initiatives."
  },
  {
    imgSrc: "/images/school.jpg",
    title: "Science Outreach & School Engagement",
    description: "Engage students and educators through science fairs, STEM clubs, workshops, and hands-on innovation activities in schools."
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
} 