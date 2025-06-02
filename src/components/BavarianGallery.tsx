import { useState } from 'react';
import { motion } from 'framer-motion';
import { bavarianGallery } from './bavarianGalleryData';

const BavarianGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () =>
    setActiveIndex((prev) => (prev! + 1) % bavarianGallery.length);
  const prev = () =>
    setActiveIndex((prev) => (prev! - 1 + bavarianGallery.length) % bavarianGallery.length);
  const close = () => setActiveIndex(null);

  return (
    <div className="mt-12">
      {/* GALLERY GRID VIEW */}
      {activeIndex === null ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {bavarianGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bg-white rounded shadow hover:shadow-xl transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={item.file}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-md font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // FULL-WIDTH INLINE CAROUSEL VIEW
        <div className="relative bg-white rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prev}
              className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              ← Previous
            </button>
            <button
              onClick={close}
              className="text-sm px-3 py-1 bg-red-100 hover:bg-red-200 rounded"
            >
              ✕ Exit Carousel
            </button>
            <button
              onClick={next}
              className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Next →
            </button>
          </div>

          <motion.div
            key={bavarianGallery[activeIndex].id}
            className="relative overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={bavarianGallery[activeIndex].file}
              alt={bavarianGallery[activeIndex].title}
              className="w-full max-h-[75vh] object-contain hover:scale-105 transition-transform duration-300"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {bavarianGallery[activeIndex].title}
              </h3>
              <p className="text-sm text-gray-600">
                {bavarianGallery[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BavarianGallery;
