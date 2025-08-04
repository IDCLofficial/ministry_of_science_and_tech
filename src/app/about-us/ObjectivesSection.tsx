export const ObjectivesSection = () => {
    const objectives: { title: string; description: string }[] = [
        {
          title: "Advance Research and Innovation",
          description: "Encourage groundbreaking research and local innovations to address societal challenges and boost technological progress."
        },
        {
          title: "Develop Digital Infrastructure",
          description: "Improve internet connectivity, promote e-governance, and expand ICT facilities across Imo State."
        },
        {
          title: "Enhance STEM Education",
          description: "Promote science, technology, engineering, and mathematics education in schools and technical institutions."
        },
        {
          title: "Empower Technology Startups",
          description: "Offer support, mentorship, and funding opportunities to tech innovators and small businesses."
        },
        {
          title: "Foster Strategic Partnerships",
          description: "Collaborate with academic institutions, research bodies, and global partners to share knowledge and drive development."
        },
        {
          title: "Apply Technology to Public Services",
          description: "Introduce digital tools and systems in sectors like health, agriculture, and environmental management for efficient service delivery."
        }
    ]
      

    const coreValues = [
        "Enlightenment",
        "Empowerment",
        "Excellence",
        "Social Responsibility"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-xl md:text-[22px] mb-2 md:mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-base md:text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 w-full text-center">
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 