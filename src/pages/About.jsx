import React from 'react';
import Navbar from '../components/Navbar';

const principles = [
  {
    id: 1,
    title: 'Empowerment',
    icon: 'fa-solid fa-hands-holding-circle',
    description:
      'We believe in a comprehensive and sustainable approach to empowerment, addressing the multifaceted challenges of disadvantaged communities. Our initiatives encompass education, healthcare, livelihoods, and community development to create lasting and positive change.',
  },
  {
    id: 2,
    title: 'Education',
    icon: 'fa-solid fa-book-open',
    description:
      'Providing access to quality education for underprivileged children to break the cycle of poverty and create opportunities for a better future.',
  },
  {
    id: 3,
    title: 'Healthcare',
    icon: 'fa-solid fa-heartbeat',
    description:
      'Ensuring emergency healthcare and medical support for the marginalized, aiming for a healthier and more resilient society.',
  },
  {
    id: 4,
    title: 'Sustainability',
    icon: 'fa-solid fa-leaf',
    description:
      'Promoting sustainable development practices to protect the environment and ensure a better future for generations to come.',
  },
];

function About() {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-10 px-4'>
        <div className='flex flex-col lg:flex-row gap-9'>
          <div className='lg:basis-3/5'>
            <div className='mb-8'>
              <h1 className='text-orange-400 font-bold text-2xl'>About Us</h1>
              <p>
                Founded in 2023, Shuddhangan is a non-profit voluntary educational institution in Bangladesh dedicated to
                serving underprivileged children. Focused on youth power, we actively work to eradicate poverty, ensure access
                to education, healthcare, and nutrition, and overcome socio-economic challenges. Our initiatives include
                financially empowering marginalized communities, providing free education, emergency healthcare, and relief
                assistance. Our ultimate goal is to empower the underprivileged, promote self-sufficiency, and eradicate
                poverty and illiteracy from Bangladesh.
              </p>
            </div>
            <div className='mb-8'>
              <h1 className='text-orange-400 font-bold text-2xl'>Mission</h1>
              <p>
                To actively contribute to the development of underprivileged communities in Bangladesh. Since our founding in
                2023, we have dedicated ourselves to addressing important issues such as poverty alleviation, education,
                health and nutrition, human rights, and environmental sustainability. We strive to create a positive impact by
                creating a platform for youth to realize their ideas and contribute to building a more socially stable
                Bangladesh.
              </p>
            </div>
            <div>
              <h1 className='text-orange-400 font-bold text-2xl'>Vision</h1>
              <p>
                Envisioning a Bangladesh where every person, regardless of their background, has equal opportunities for growth
                and development. We aspire to create a society where poverty is eradicated, education is accessible to all,
                healthcare is a basic right, human rights are protected, and the environment is preserved for future
                generations. Through our holistic and sustainable approach, we aim to contribute to a transformed and
                empowered Bangladesh.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className='lg:basis-2/5'>
            <h1 className='text-3xl text-orange-400 font-bold mb-8'>Principles</h1>
            <div>
              {principles.map((principle) => (
                <div key={principle.id} className='flex items-center mb-7 gap-5'>
                  <div className='text-center'>
                    <span className='text-orange-500 text-5xl'>
                      <i className={principle.icon}></i>
                    </span>
                    <p className='text-[12px]'>{principle.title}</p>
                  </div>
                  <div>
                    <p className='text-[10px]'>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;