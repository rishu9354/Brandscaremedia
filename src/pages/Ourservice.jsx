import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Ourservice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      title: "Social Media Marketing (SMM)",
      desc: "We turn social media into your strongest sales engine. Our team builds brand strategies that blend content creativity with platform intelligence.",
      result:
        "→ 3x engagement boost and consistent conversion-ready community growth.",
    },
    {
      title: "Performance Marketing (PPC & Paid Ads)",
      desc: "Smart spending. Bigger returns. We run high-performance ad campaigns across Google, Meta, and YouTube that generate measurable sales.",
      result: "→ 200–400% improvement in ROAS within 90 days.",
    },
    {
      title: "Online Reputation Management (ORM)",
      desc: "Your digital image defines trust. We actively monitor, manage, and improve your brand’s reputation — 24/7.",
      result:
        "→ 90% improvement in positive sentiment & stronger brand credibility.",
    },
    {
      title: "Content Creation & Copywriting",
      desc: "Every word matters. Every story sells. We craft data-driven, conversion-focused content that establishes authority and builds emotional connection.",
      result: "→ 5x higher engagement and stronger keyword visibility.",
    },
    {
      title: "Influencer Marketing",
      desc: "We connect brands with the right creators to drive real conversations and measurable impact.",
      result: "→ Up to 4x boost in brand awareness and engagement.",
    },
    {
      title: "Social Media Optimization (SMO)",
      desc: "We optimize every aspect of your social presence to increase reach organically.",
      result:
        "→ Consistent organic follower growth and improved engagement rate.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.3 },
    }),
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Integrated Digital Marketing That Delivers — Not Just Promises
          </h1>
          <p className="text-gray-600 text-lg">
            Our services work together as a unified growth engine. From first
            impression to final conversion, we create connected brand journeys
            that are data-backed, creative-led, and performance-obsessed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-500 mb-2">{service.desc}</p>
              <p className="text-gray-700 font-bold mt-3">{service.result}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🚀 Request a Custom Growth Plan
          </h2>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Ourservice;
