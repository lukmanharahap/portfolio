import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiMysql,
  SiArduino,
  SiStmicroelectronics,
  SiOpencv,
  SiTableau,
  SiScikitlearn,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiStreamlit,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const TechStack = () => {
  const techs = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'C++', icon: <TbBrandCpp /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Numpy', icon: <SiNumpy /> },
    { name: 'Streamlit', icon: <SiStreamlit /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    // { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
    { name: 'Tableau', icon: <SiTableau /> },
    { name: 'STM32', icon: <SiStmicroelectronics /> },
    { name: 'Arduino', icon: <SiArduino /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'GitHub', icon: <SiGithub /> },
  ];

  return (
    <section
      id="tech-stack"
      className="bg-background text-dark py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-screen-xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-700 max-w-prose mx-auto mb-8">
          Here are some of the technologies and tools I use to build amazing
          projects.
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary text-4xl group-hover:text-secondary transition-colors duration-300">
                {tech.icon}
              </div>
              <p className="mt-2 font-medium text-dark">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
