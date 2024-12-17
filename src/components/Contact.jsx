import { motion } from "motion/react" // Importing motion for animations
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    // State to manage the submission status
    const [result, setResult] = useState("");

    // Function to handle form submission
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setResult("Sending...."); // Indicate the form is in the process of being sent

        // Collect form data from the event
        const formData = new FormData(event.target);

        // Append the access key for the API
        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        try {
            // Send the form data to Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            // Parse the response data
            const data = await response.json();

            // Check if submission is successful
            if (data.success) {
                setResult(""); // Reset the result state
                toast.success("Form Submitted Successfully"); // Show success toast
                event.target.reset(); // Reset the form fields
            } else {
                // Handle form submission error
                console.log("Error", data);
                toast.error(data.message); // Show error message
                setResult(""); // Reset the result state
            }
        } catch (error) {
            // Handle network or unexpected errors
            console.error("An error occurred:", error);
            toast.error("An unexpected error occurred. Please try again later.");
            setResult(""); // Reset the result state
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }} // Initial animation state: hidden with vertical offset
            transition={{ duration: 1 }} // Transition duration for smooth animation
            whileInView={{ opacity: 1, x: 0 }} // Animation when the component is in view
            viewport={{ once: true }} // Ensures the animation only runs once when in view
            className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact"
        >
            {/* Section Header */}
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                Ready to make a move? Let&apos;s Build Your Future Together
            </p>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                {/* Name and Email Fields */}
                <div className="flex flex-wrap">
                    {/* Name Field */}
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            type="text" placeholder="Your Name" name="Name" required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            type="email" placeholder="Your Email" name="Email" required
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div className="my-6 text-left">
                    Message
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                        name="Message" placeholder="Message" required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
                    {result ? result : 'Send Message'}
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
