import React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import img from "../../src/assets/Media.svg";
import bimg from "../../src/assets/alessio-zaccaria-MplUOXqEUK0-unsplash.jpg";

function Ourservice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = useMemo(
    () => [
      {
        title: "Social Media Marketing (SMM)",
        desc: "Turn social media into your most powerful sales engine.Our SMM services combine deep brand strategy, creative storytelling, and platform algorithms to unlock real business growth — not just vanity metrics.",
        result: "→ What We Deliver.",
        l1: "→ Tailor-made social media strategies for Instagram, Facebook, LinkedIn, YouTube, X, etc.",
        l2: "→High-impact content frameworks designed to boost awareness & conversions ",
        l3: "→Community building that drives trust and long-term customer relationships ",
        l4: "→ Trend-based content planning to stay relevant and ahead of competitors",
        l5: "→Monthly reporting with insights, growth metrics, & actionable improvements ",
        l6: "→Expected Outcomes: ",
        l7: "→✔ Up to 3X engagement boost ",
        l8: "→✔ Stronger brand visibility ",
        l9: "→✔ A “conversion-ready” social community ",
      },
      {
        title: "Performance Marketing (PPC & Paid Ads)",
        desc: "Spend smarter, grow faster.We build and optimize high-performance ad campaigns that focus on generating measurable business results — leads, sales, and revenue.",
        result: "→ What We Offer:",
        l1: "→Google Search, Display & YouTube Ads",
        l2: "→Meta (Facebook & Instagram) Ads",
        l3: "→Remarketing & retargeting funnels",
        l4: "→Advanced audience segmentation",
        l5: "→Campaign A/B testing + ROI optimization",
        l6: "→Real-time performance tracking",
        l7: "→Expected Outcomes:",
        l8: "→✔ 200–400% increase in ROAS within 90 days",
        l9: "→✔ More qualified leads and accelerated sales",
        l10: "→✔ Profit-focused ad scaling",
      },
      {
        title: "Online Reputation Management (ORM)",
        desc: "Your digital reputation determines customer trust.We monitor, protect, and enhance your brand’s presence across all digital touchpoints.",
        result: "→ What We Handle",
        l1: "Real-time brand sentiment monitoring",
        l2: "Negative review suppression & handling",
        l3: "Positive review growth strategy",
        l4: "Brand mention tracking across platforms",
        l5: "Profile clean-ups, Google visibility improvements",
        l6: "Crisis management & reputation repair",
        l7: "Expected Outcomes:",
        l8: "✔ Up to 90% improvement in positive sentiment",
        l9: "✔ Higher credibility & trust",
        l10: "✔ Better conversion rates from new customers",
      },
      {
        title: "Content Creation & Copywriting",
        desc: "Content that informs, inspires, and converts.We create high-impact content backed by data and psychology to attract, engage, and drive people to take action.",
        result: "→ What We Create:",
        l1: "Social media creatives & captions",
        l2: "Ad copy for high-performing campaigns",
        l3: "Website content, blogs & SEO-oriented articles",
        l4: "Brand storytelling & messaging frameworks",
        l5: "Scripts for reels, shorts & YouTube videos",
        l6: "Expected Outcomes:",
        l7: "✔ 5X higher engagement",
        l8: "✔ Stronger keyword ranking",
        l9: "✔ Clear brand identity & consistent messaging",
      },
      {
        title: "Influencer Marketing",
        desc: "Real creators. Real conversations. Real results.We connect brands with influencers who can authentically amplify their message and drive meaningful engagement.",
        result: "→ What We Provide:",
        l1: "Influencer identification & shortlisting",
        l2: "Contracting & communication",
        l3: "Campaign planning & creative direction",
        l4: "Performance analytics & ROI measurement",
        l5: "Multi-influencer & micro-influencer campaigns",
        l6: "Expected Outcomes:",
        l7: "✔ Up to 4X boost in awareness & engagement",
        l8: "✔ Higher audience trust through creator credibility",
        l9: "✔ Measurable results from influencer activities",
      },

      {
        title: "Social Media Optimization (SMO)",
        desc: "Optimize your digital presence for maximum reach & visibility.We strengthen your social media performance by ensuring your profiles, content formats, and posting strategies are fully optimized.",
        result: "→ What We Optimize:",
        l1: "Profile branding (bio, highlights, visuals)",
        l2: "Best posting times & content structure",
        l3: "Hashtags & keyword optimization",
        l4: "Consistency planning & scheduling",
        l5: "Engagement strategy for organic growth",
        l6: "Expected Outcomes:",
        l7: "✔ Organic follower growth",
        l8: "✔ Higher post reach & interaction",
        l9: "✔ Consistent audience engagement",
      },
    ],
    []
  );

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
      <div className="min-h-screen bg-orange-600 py-16 px-6 md:px-20">
        <div
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: ` url(${bimg})`,
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
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Integrated Digital Marketing That Delivers — Not Just Promises
          </h1>
          <p className="text-white text-lg">
            Our services work together as a unified growth engine. From first
            impression to final conversion, we create connected brand journeys
            that are data-backed, creative-led, and performance-obsessed.
          </p>
        </motion.div>
        <img className="mx-auto mt-80  " src={img} alt="" />
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-sky-900 skew-x-2  p-6  rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <h2 className="text-2xl font-semibold text-white [text-shadow:0_0_15px] mb-3">
                {service.title}
              </h2>
              <p className="text-stone-200 mb-2">{service.desc}</p>
              <p className="text-stone-300 font-bold mt-3">{service.result}</p>
              <p className="text-stone-400 mb-2">{service.l1}</p>
              <p className="text-stone-400 mb-2">{service.l2}</p>
              <p className="text-stone-400 mb-2">{service.l3}</p>
              <p className="text-stone-400 mb-2">{service.l4}</p>
              <p className="text-stone-400 mb-2">{service.l5}</p>
              <p className="text-stone-400 mb-2">{service.l6}</p>
              <p className="text-stone-400 mb-2">{service.l7}</p>
              <p className="text-stone-400 mb-2">{service.l7}</p>
              <p className="text-stone-400 mb-2">{service.l9}</p>
              <p className="text-stone-400 mb-2">{service.l10}</p>
              <p className="text-stone-400 mb-2">{service.l11}</p>
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
        ></motion.div>
      </div>
    </>
  );
}

export default Ourservice;
