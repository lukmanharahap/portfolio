import { FaBriefcase } from 'react-icons/fa6';

const experiences = [
  //   {
  //     role: 'Data Scientist Intern',
  //     company: 'Telkom Indonesia',
  //     duration: 'Jan 2025 - Present',
  //     description:
  //       'Working on machine learning models to enhance customer insights and operational efficiency.',
  //   },
  //   {
  //     role: 'Supply Chain Intern',
  //     company: 'Paragon Technology & Innovation',
  //     duration: 'Aug 2024 - Dec 2024',
  //     description:
  //       'Optimized logistics workflows and implemented data-driven inventory strategies.',
  //   },
  {
    role: 'Software Engineer',
    company: 'Brawijaya Robotics Team',
    duration: '2022 - 2024',
    description:
      'Developed autonomous robotics systems that excelled in national competitions, utilizing computer vision and control algorithms.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-background text-dark py-24 px-6 md:px-32"
    >
      <div className="container mx-auto max-w-screen-xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-primary pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 last:mb-0 relative">
              {/* Dot */}
              <div className="absolute -left-5 -top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <FaBriefcase className="text-white text-lg" />
              </div>

              {/* Content */}
              <div className="ml-8">
                <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                <p className="text-lg text-gray-700 font-medium">
                  {exp.company}
                </p>
                <span className="text-sm text-gray-500 italic">
                  {exp.duration}
                </span>
                <p className="text-base text-gray-700 mt-1 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
