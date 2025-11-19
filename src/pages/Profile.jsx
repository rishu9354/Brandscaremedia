import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.3 },
    }),
  };

  const caseStudies = [
    {
      title: "E-Commerce Brand",
      challenge: "Low conversions from Meta Ads.",
      strategy: "Funnel-based retargeting + creative optimization.",
      result: "↑240% ROAS & 3x increase in sales.",
    },
    {
      title: "Healthcare Client",
      challenge: "Negative press impacting trust.",
      strategy: "ORM + Review Generation + PR articles.",
      result: "95% reduction in negative sentiment.",
    },
    {
      title: "Fashion Label",
      challenge: "Low organic reach & engagement.",
      strategy: "SMO + Influencer collaborations.",
      result: "4x engagement boost in 60 days.",
    },
    // Add more case studies if needed
  ];
  return (
    <>
      <div className="min-h-screen scroll-behavor: scroll-smooth bg-gray-50 py-16 px-6 md:px-20">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          // initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Real Brands. Real Stories. Real Results.
          </h1>
          <p className="text-gray-600 text-lg">
            See how our strategies have helped businesses scale their reach,
            reputation, and revenue — all through one integrated digital growth
            system.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
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
                {caseStudy.title}
              </h2>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold">Challenge:</span>{" "}
                {caseStudy.challenge}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold">Strategy:</span>{" "}
                {caseStudy.strategy}
              </p>
              <p className="text-gray-700 font-bold mt-3">{caseStudy.result}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Start Your Growth Story With Us
          </h2>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            🚀 Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Profile;
