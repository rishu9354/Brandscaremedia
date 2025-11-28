import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative text-white overflow-hidden">
        {/* 🔹 Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* 🔹 Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Transform Your Brand Into a{" "}
            <span className="text-blue-500">Digital Powerhouse</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 max-w-2xl text-lg text-gray-200"
          >
            We don’t just manage your marketing — we build ecosystems that make
            your brand visible, trusted, and profitable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row gap-4"
          ></motion.div>
        </section>

        {/* 🔹 Floating Scroll Animation */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300"
        >
          <p className="text-sm">Scroll to explore ↓</p>
        </motion.div>

        {/* 🔹 Section 2: Why Choose Us */}
        <section className="relative bg-gray-900 py-20 px-6 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Trusted by Ambitious Brands that Believe in Real Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl text-center text-gray-300 mx-auto"
          >
            From startups finding their voice to established brands expanding
            globally — we’ve helped businesses dominate digital spaces with
            strategic clarity and creative precision.
          </motion.p>
        </section>

        {/* 🔹 Section 3: Services Overview */}
        <section className="relative bg-black py-20 px-6 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our <span className="text-blue-500">Core Expertise</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Social Media Marketing",
              "Performance Marketing",
              "Reputation Management",
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {title}
                </h3>
                <p className="text-gray-300">
                  Expert strategies designed to scale your brand and deliver
                  measurable ROI across every platform.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
