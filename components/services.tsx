"use client";

import { Shield, Server, Scale, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shield,
    title: "Data Protection & Privacy Law",
    description: "Comprehensive guidance on GDPR, CCPA, and international data protection regulations to ensure your business maintains compliance while maximizing data value.",
  },
  {
    icon: Server,
    title: "Cybersecurity Law",
    description: "Expert legal counsel on cybersecurity regulations, incident response planning, and liability protection in the digital age.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Strategic advice on navigating complex regulatory frameworks across jurisdictions, ensuring your operations remain compliant and efficient.",
  },
  {
    icon: Cpu,
    title: "AI & Robotics Law",
    description: "Cutting-edge legal expertise in artificial intelligence, machine learning, and robotics regulations, helping you innovate within legal boundaries.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal solutions for the modern digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}