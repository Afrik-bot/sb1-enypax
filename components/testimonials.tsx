"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Negus Consulting's expertise in data protection law was instrumental in helping us navigate GDPR compliance. Their guidance was clear, practical, and invaluable.",
    author: "Emily Rodriguez",
    title: "CTO, TechVision Inc.",
  },
  {
    quote: "Their understanding of AI regulations helped us launch our machine learning platform with confidence. The team's technical knowledge combined with legal expertise is unmatched.",
    author: "Michael Chang",
    title: "CEO, AI Solutions Ltd",
  },
  {
    quote: "When we faced a cybersecurity incident, their rapid response and expert guidance helped us manage the situation effectively and strengthen our security protocols.",
    author: "Lisa Thompson",
    title: "CISO, SecureNet Systems",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Hear from our clients about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-white/80">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}