import { motion } from "motion/react" // Importing motion for animations
import { assets, testimonialsData } from "../assets/assets" // Import required assets and data

const Testimonials = () => {
  return (
    // Container for the Testimonials section
    <motion.div
      initial={{ opacity: 0, x: 200 }} // Initial animation state: hidden with vertical offset
      transition={{ duration: 1 }} // Transition duration for smooth animation
      whileInView={{ opacity: 1, x: 0 }} // Animation when the component is in view
      viewport={{ once: true }} // Ensures the animation only runs once when in view
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      {/* Section Header */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>

      {/* Subtitle / Description */}
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real stories from those Who Found Home with Us
      </p>

      {/* Container for all testimonial cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Map over the testimonialsData to render each testimonial card */}
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            {/* Testimonial Image */}
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />

            {/* Testimonial Name */}
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>

            {/* Testimonial Title */}
            <p className="text-gray-500 mb-4 text-sm">
              {testimonial.title}
            </p>

            {/* Star Ratings */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="Star Icon"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
