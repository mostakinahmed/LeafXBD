import React from "react";
import { motion } from "framer-motion";

// DynamicOfferCards.jsx
// Default-exported React component showing 5 dynamic offer cards with full-width images.
// Uses Tailwind CSS classes. Drop this file into a React project that has Tailwind and Framer Motion installed.

// Example usage:
// <DynamicOfferCards offers={offersArray} />

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
  hover: { scale: 1.02 },
};

export function Offer({ offers }) {
  // If no offers are passed, fall back to a sample 5-item array
  const fallbackOffers = [
    {
      id: 1,
      title: "Spring Sale: Up to 50% Off",
      subtitle: "Selected items",
      price: "From $19",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
      badge: "Hot",
    },
    {
      id: 2,
      title: "Weekend Deal: Buy 1 Get 1",
      subtitle: "Limited time",
      price: "Free shipping",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
      badge: "Limited",
    },
    {
      id: 3,
      title: "New Arrival: Smartwatch X",
      subtitle: "Latest tech",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
      badge: "New",
    },
    {
      id: 4,
      title: "Home Essentials: Up to 40% Off",
      subtitle: "Refresh your space",
      price: "From $9",
      image:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
      badge: "Save",
    },
    {
      id: 5,
      title: "Fitness Gear: Bundle Offer",
      subtitle: "Train smarter",
      price: "$59",
      image:
        "https://cdn.hiconsumption.com/wp-content/uploads/2020/10/Best-Home-Gym-Equipment-0-Hero.jpg",
      badge: "Bundle",
    },
  ];

  const items = (offers && offers.length ? offers : fallbackOffers).slice(0, 5);

  return (
    <section className="max-w-[1400px] mt-[5rem] lg:mt-[6rem] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((offer, idx) => (
          <motion.article
            key={offer.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Full-width image */}
            <div className="h-48 sm:h-56 lg:h-44 w-full relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Top-left badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-md text-slate-800">
                  {offer.badge}
                </span>
              </div>

              {/* Gradient overlay bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Card body */}
            <div className="p-4 sm:p-5">
              <h4 className="text-lg font-bold text-slate-900">
                {offer.title}
              </h4>
              <p className="text-sm text-slate-500 mt-1">{offer.subtitle}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Starting at</div>
                  <div className="text-xl font-semibold text-slate-900">
                    {offer.price}
                  </div>
                </div>

                <button
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-indigo-600 text-white shadow-md transition-transform transform hover:-translate-y-0.5 focus:outline-none"
                  onClick={() => window.alert(`Selected: ${offer.title}`)}
                >
                  Grab Deal
                </button>
              </div>

              {/* subtle meta row */}
              <div className="mt-3 flex items-center text-xs text-slate-400 justify-between">
                <span>Ends in 3d</span>
                <span>Free returns</span>
              </div>
            </div>

            {/* Floating accent bar on right for visual dynamism */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent to-indigo-400 opacity-60 transform group-hover:translate-x-0 transition-transform" />
          </motion.article>
        ))}
      </div>

      {/* Optional: small footer CTA */}
      <div className="mt-6 text-center">
        <button
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-slate-900 text-white shadow-lg hover:brightness-105"
          onClick={() => window.alert("Show more offers")}
        >
          View all offers
        </button>
      </div>
    </section>
  );
}
