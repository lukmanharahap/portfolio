import HoaXGY from '../assets/hoaxgy_home.jpeg';
import Robot from '../assets/robot.jpeg';
import AirAnalysis from '../assets/dashboard-1.jpg';

const projects = [
  {
    title: 'HoaXGY - Android Application for Hoax Detection',
    description:
      'An Android app to detect fake news using Natural Language Processing model integrated with TensorFlow.',
    tech: ['Python', 'Google Colab', 'Pandas', 'TensorFlow'],
    image: HoaXGY,
    demo: 'https://drive.google.com/file/d/1SLHX_6--09NHHK9nI0-zbzKBGX_yIzha/view?usp=drive_link',
    link: 'https://github.com/lukmanharahap/fake-news-detection',
  },
  {
    title: 'Robot for Kontes Robot ABU Indonesia 2024',
    description:
      'Developed manual and autonomous robot for Kontes Robot ABU Indonesia 2024 with computer vision integrated.',
    tech: ['Python', 'C/C++', 'OpenCV', 'YOLO', 'STM32', 'Arduino'],
    image: Robot,
    demo: 'https://drive.google.com/file/d/1cqb1ohYsukunoYu_7H_ezQfLq5JHBKi9/view?usp=drive_link',
    link: 'https://github.com/lukmanharahap/INVICTO-2024',
  },
  {
    title: 'Air Quality Analysis Dashboard',
    description:
      'Built an interactive dashboard to analyze and present air quality data using Streamlit.',
    tech: ['Python', 'Pandas', 'Streamlit'],
    image: AirAnalysis,
    demo: 'https://air-quality-analysis-project.streamlit.app/',
    link: 'https://github.com/lukmanharahap/Air-Quality-Analysis',
  },
  {
    title: 'Telecom Customer Churn prediction',
    description:
      'Built machine learning model for telecom customer churn prediction and built an interactive dashboard for real-time predictions using Streamlit.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    image: AirAnalysis,
    demo: 'https://telecom-customer-churn-prediction.streamlit.app/',
    link: 'https://github.com/lukmanharahap/Telecom-Customer-Churn-Prediction',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-background text-dark py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-screen-xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg shadow-md p-4 bg-gray-100"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full object-cover mb-4 h-40"
              />

              {/* Project Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-dark font-display">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Project's Tech */}
              <div className="flex flex-wrap font-display font-medium gap-2 my-4">
                {project.tech.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-primary/80 text-white text-sm px-2 py-1 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between font-display">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-primary px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 text-sm"
                >
                  Demo
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-dark px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
