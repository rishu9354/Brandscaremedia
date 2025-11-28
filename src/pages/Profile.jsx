import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import img from "../../src/assets/img2.jpg";
import ECB from "../../src/assets/graph.svg";
import fl from "../../src/assets/ecommerce.svg";
import hc from "../../src/assets/Planning.svg";
import bg from "../../src/assets/peak_background.svg";

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

  const caseStudies = useMemo(
    () => [
      {
        title: "E-Commerce Brand",
        challenge: "Low conversions from Meta Ads.",
        strategy: "Funnel-based retargeting + creative optimization.",
        result: "↑240% ROAS & 3x increase in sales.",
        img: ECB,
      },
      {
        title: "Healthcare Client",
        challenge: "Negative press impacting trust.",
        strategy: "ORM + Review Generation + PR articles.",
        result: "95% reduction in negative sentiment.",
        img: hc,
      },
      {
        title: "Fashion Label",
        challenge: "Low organic reach & engagement.",
        strategy: "SMO + Influencer collaborations.",
        result: "4x engagement boost in 60 days.",
        img: fl,
      },
      // Add more case studies if needed
    ],
    []
  );
  return (
    <>
      <div className=" min-h-screen scroll-behavor: scroll-smooth bg-gray-700 py-16 px-6 md:px-20">
        <div
          className=" absolute inset-0
          
          
          bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: ` url(${img})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-bold text-sky-500 mb-4">
            Real Brands. Real Stories. Real Results.
          </h1>
          <p className="text-orange-400 text-2xl">
            See how our strategies have helped businesses scale their reach,
            reputation, and revenue — all through one integrated digital growth
            system.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="skew-y-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className=" p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              style={{
                backgroundImage: ` url(${bg}) `,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <img
                src={caseStudy.img}
                alt={caseStudy.title}
                className=" w-24 h-24 md:w-48 md:h-59 md:rounded-md rounded-full mx-auto  skew-x-10  shadow-2xl transition-shadow"
              />
              <h2 className="text-2xl font-semibold text-stone-100 mb-3">
                {caseStudy.title}
              </h2>
              <p className="text-stone-400 mb-2">
                <span className="text-stone-300  font-semibold">
                  Challenge:
                </span>{" "}
                {caseStudy.challenge}
              </p>
              <p className="text-stone-400 mb-2">
                <span className="font-semibold">Strategy:</span>{" "}
                {caseStudy.strategy}
              </p>
              <p className="text-stone-400 font-bold mt-3">
                {caseStudy.result}
              </p>
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
        ></motion.div>
      </div>
    </>
  );
}

export default Profile;
