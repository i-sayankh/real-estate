import { assets } from "../assets/assets"

// Footer Component
const Footer = () => {
    return (
        // Footer Container with padding, background color, and overflow settings
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
            {/* Main Content Wrapper: Flex container with responsive layout */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Logo and About Section */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    {/* Company Logo */}
                    <img src={assets.logo_dark} alt="Company Logo" />
                    {/* Company Description */}
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Navigation Links Section */}
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    {/* Section Title */}
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white">Home</a>
                        <a href="#About" className="hover:text-white">About Us</a>
                        <a href="#Contact" className="hover:text-white">Contact Us</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </ul>
                </div>

                {/* Newsletter Subscription Section */}
                <div className="w-full md:w-1/3">
                    {/* Section Title */}
                    <h3 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
                    {/* Newsletter Description */}
                    <p className="text-gray-400 mb-4 max-w-80">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    {/* Subscription Input and Button */}
                    <div className="flex gap-2">
                        <input
                            className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
                            type="email" placeholder="Enter your email"
                        />
                        <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Footer Copyright Section */}
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2024 © Sayan Khutia. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
