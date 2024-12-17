import { motion } from "motion/react"; // Importing motion for animations
import Navbar from './Navbar'; // Importing the Navbar component

// Header Component: Represents the hero section of the page with background image and animated content
const Header = () => {
    return (
        <div
            className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
            style={{ backgroundImage: "url('/header_img.png')" }} // Inline style for setting background image
            id='Header' // Section ID for navigation or linking
        >
            {/* Navbar Component */}
            <Navbar />

            {/* Animated Content using motion.div */}
            <motion.div
                initial={{ opacity: 0, y: 100 }} // Initial animation state: hidden with vertical offset
                transition={{ duration: 1.5 }} // Transition duration for smooth animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when the component is in view
                viewport={{ once: true }} // Ensures the animation only runs once when in view
                className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
            >
                {/* Heading Text */}
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                    Explore homes that fit your dreams
                </h2>

                {/* Action Buttons Section */}
                <div className='space-x-6 mt-16'>
                    {/* Projects Button */}
                    <a href="#Projects" className='border border-white px-8 py-3 rounded'>
                        Projects
                    </a>
                    {/* Contact Us Button */}
                    <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>
                        Contact Us
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;
