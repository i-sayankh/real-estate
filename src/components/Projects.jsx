import { useEffect, useState } from "react"
import { assets, projectsData } from "../assets/assets"

const Projects = () => {
    // State to track the current index of the displayed project
    const [currentIndex, setCurrentIndex] = useState(0);

    // State to track the number of cards to show based on window size
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        // Function to update the number of cards to show based on window width
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                // For large screens, show all the projects
                setCardsToShow(projectsData.length);
            } else {
                // For smaller screens, show only one project at a time
                setCardsToShow(1);
            }
        }

        // Call the function initially to set the correct number of cards
        updateCardsToShow();

        // Add an event listener to handle window resizing
        window.addEventListener('resize', updateCardsToShow);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []); // Empty dependency array ensures this runs only on mount/unmount

    // Function to show the next project in the slider
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }

    // Function to show the previous project in the slider
    const previousProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    }

    return (
        <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            {/* Section Title */}
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span>
            </h1>
            {/* Section Description */}
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Slider Buttons for Next and Previous */}
            <div className="flex justify-end items-center mb-8">
                {/* Button to navigate to the previous project */}
                <button onClick={previousProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                {/* Button to navigate to the next project */}
                <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className="overflow-hidden">
                {/* Flex container for sliding effect */}
                <div className="flex gap-8 transition-transform duration-500 ease-in-out"
                    // Apply the transform style based on the current index and cards to show
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {/* Loop through the projects data to display each project */}
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            {/* Display the project image */}
                            <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />

                            {/* Overlay containing project details */}
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    {/* Project Title */}
                                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    {/* Project Price and Location */}
                                    <p className="text-gray-500 text-sm">{project.price} <span>|</span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
