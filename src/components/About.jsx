import { motion } from "motion/react" // Importing motion for animations
import { assets } from "../assets/assets" // Importing the assets for image usage

const About = () => {
    return (
        // Container for the About section with responsive padding and alignment
        // Animated Content using motion.div
        <motion.div
            initial={{ opacity: 0, x: 100 }} // Initial animation state: hidden with vertical offset
            transition={{ duration: 1 }} // Transition duration for smooth animation
            whileInView={{ opacity: 1, x: 0 }} // Animation when the component is in view
            viewport={{ once: true }} // Ensures the animation only runs once when in view
            className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
            id="About" // Anchor ID for navigation
        >
            {/* Section Heading */}
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
            </h1>

            {/* Subheading Text */}
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate about properties, Dedicated to your Vision
            </p>

            {/* Main Content: Flex container for image and statistics */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                {/* Brand Image */}
                <img
                    src={assets.brand_img}
                    alt="Brand"
                    className="w-full sm:w-1/2 max-w-lg"
                />

                {/* Right Section: Statistics and Description */}
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    {/* Grid Layout for Key Statistics */}
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        {/* Statistic 1 */}
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p className="">Years of Excellence</p>
                        </div>
                        {/* Statistic 2 */}
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p className="">Projects Completed</p>
                        </div>
                        {/* Statistic 3 */}
                        <div>
                            <p className="text-4xl font-medium text-gray-800">20+</p>
                            <p className="">Min. Sq. Ft. Delivered</p>
                        </div>
                        {/* Statistic 4 */}
                        <div>
                            <p className="text-4xl font-medium text-gray-800">25+</p>
                            <p className="">Ongoing Projects</p>
                        </div>
                    </div>

                    {/* Company Description */}
                    <p className="my-10 max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    {/* Learn More Button */}
                    <button className="bg-blue-600 text-white px-8 py-2 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default About
