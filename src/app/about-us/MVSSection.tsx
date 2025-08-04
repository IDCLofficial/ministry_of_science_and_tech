import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To drive sustainable development in Imo State through the advancement of science, innovation, and engineering by fostering research, empowering local talents, promoting digital skills, and supporting technological solutions that enhance economic growth and improve the well-being of citizens."
    },
    {
        title: "Our Vision",
        description: "Rendering Scientific and Technological Services to the public as  well as fishing out individuals with innovative ideas for empowerment by the Government."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}