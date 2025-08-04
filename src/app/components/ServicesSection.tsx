import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "/images/tech-dev.png", // Replace with actual image paths
    title: "Technological Development",
    description:
      "IMDEEG actively drives technological development by fostering innovation, promoting research and development, and encouraging the adoption of emerging technologies. Through this service, the Ministry creates an environment that enables technological advancement and digital transformation.",
  },
  {
    imgSrc: "/images/e-gov.png",
    title: "E-Government",
    description:
      "IMDEEG’s e-Government services involve the development of customized digital solutions that enhance governance practices, such as eCommerce, eSchool, eBusiness, and digital governance. The Ministry formulates policies and strategies to ensure effective management and monitoring of these digital initiatives.",
  },
  {
    imgSrc: "/images/cyber-security.png",
    title: "Cyber Security Support",
    description:
      "To safeguard data and information, IMDEEG provides support in the form of cybersecurity measures and data protection. This includes threat assessments, network monitoring, penetration testing, and the deployment and management of firewalls. By prioritizing cybersecurity, IMDEEG ensures the integrity and security of digital systems.",
  },
  {
    imgSrc: "/images/training.png",
    title: "Training and Capacity Development",
    description:
      "The Ministry plans, organizes, and executes various training programs and interventions to enhance the skills and capacities of individuals and organizations. This includes ongoing reskilling and upskilling initiatives for Imo State civil servants and external participants, enabling them to adapt to the demands of the digital era.",
  },
  {
    imgSrc: "/images/infrastructure.png",
    title: "Infrastructure",
    description:
      "IMDEEG focuses on infrastructure involving the development and modernization of digital infrastructure and data centers. IMDEEG is committed to availability and reliability of the state’s digital networks that support special digital initiatives. By maintaining robust infrastructure, the Ministry creates a solid foundation for a digitally empowered Imo State.",
  },
  {
    imgSrc: "/images/single-window.png",
    title: "Single Window Portal",
    description:
      "The Single Window Portal provides a centralized platform for accessing government services and information. It increases efficiency and transparency for individuals and businesses who interact with the Government digitally. Through these comprehensive services, the Ministry is committed to driving the digital transformation of Imo State and creating a prosperous future for its residents.",
  },
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