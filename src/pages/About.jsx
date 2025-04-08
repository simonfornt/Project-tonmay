import React from 'react';
import { HandHelping, BookOpen, HeartPulse, Leaf } from 'lucide-react';

const principles = [
  {
    id: 1,
    title: 'Empowerment',
    icon: <HandHelping className="w-8 h-8 text-orange-500" />,
    description:
      'We believe in a comprehensive and sustainable approach to empowerment, addressing the multifaceted challenges of disadvantaged communities. Our initiatives encompass education, healthcare, livelihoods, and community development to create lasting and positive change.',
  },
  {
    id: 2,
    title: 'Education',
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    description:
      'Providing access to quality education for underprivileged children to break the cycle of poverty and create opportunities for a better future.',
  },
  {
    id: 3,
    title: 'Healthcare',
    icon: <HeartPulse className="w-8 h-8 text-orange-500" />,
    description:
      'Ensuring emergency healthcare and medical support for the marginalized, aiming for a healthier and more resilient society.',
  },
  {
    id: 4,
    title: 'Sustainability',
    icon: <Leaf className="w-8 h-8 text-orange-500" />,
    description:
      'Promoting sustainable development practices to protect the environment and ensure a better future for generations to come.',
  },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-3 space-y-10">
          <section>
            <h2 className="text-3xl font-semibold text-orange-500 font-domine mb-4">About Us</h2>
            <p className="text-base leading-relaxed">
              Founded in 2023, Shuddhangan is a non-profit voluntary educational institution in Bangladesh dedicated to
              serving underprivileged children. Focused on youth power, we actively work to eradicate poverty, ensure access
              to education, healthcare, and nutrition, and overcome socio-economic challenges. Our initiatives include
              financially empowering marginalized communities, providing free education, emergency healthcare, and relief
              assistance. Our ultimate goal is to empower the underprivileged, promote self-sufficiency, and eradicate
              poverty and illiteracy from Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-orange-500 font-domine mb-4">Mission</h2>
            <p className="text-base leading-relaxed">
              To actively contribute to the development of underprivileged communities in Bangladesh. Since our founding in
              2023, we have dedicated ourselves to addressing important issues such as poverty alleviation, education,
              health and nutrition, human rights, and environmental sustainability. We strive to create a positive impact by
              creating a platform for youth to realize their ideas and contribute to building a more socially stable
              Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-orange-500 font-domine mb-4">Vision</h2>
            <p className="text-base leading-relaxed">
              Envisioning a Bangladesh where every person, regardless of their background, has equal opportunities for growth
              and development. We aspire to create a society where poverty is eradicated, education is accessible to all,
              healthcare is a basic right, human rights are protected, and the environment is preserved for future
              generations. Through our holistic and sustainable approach, we aim to contribute to a transformed and
              empowered Bangladesh.
            </p>
          </section>
        </div>

        {/* Right Sidebar - Principles */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold text-orange-500 font-domine mb-6">Principles</h2>
          <div className="space-y-6">
            {principles.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-orange-100 rounded-xl shadow-sm p-5 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 font-domine">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-snug">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
