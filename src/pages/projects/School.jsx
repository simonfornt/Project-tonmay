import React, { useEffect, useRef, useState } from 'react';

// Custom hook for intersection observer
const useAnimateOnScroll = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

function School() {
  const [headingRef, headingIsVisible] = useAnimateOnScroll();
  const [imagesRef, imagesVisible] = useAnimateOnScroll();
  const [textRef, textVisible] = useAnimateOnScroll();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 
        ref={headingRef}
        className={`text-center text-3xl font-extrabold text-gray-800 mb-8 transition-all duration-1000 ${
          headingIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        About Shuddhangan School
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div ref={imagesRef} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://c8.alamy.com/comp/DH1JPH/indian-village-school-uttar-pradesh-india-asia-DH1JPH.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrouIxdN_Icdcmy55o2mvQYavwhr78ttfYQ&s'
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Shuddhangan School ${index + 1}`}
                className={`w-full h-auto rounded-xl shadow-lg transition-all duration-1000 ${
                  imagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                } delay-${index * 100}`}
              />
            ))}
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzugGYtu1XJuXir64j7KsumGpFRzL061TsDQ&s"
            alt="Shuddhangan School 3"
            className={`w-full h-auto rounded-xl shadow-lg transition-all duration-1000 ${
              imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } delay-300`}
          />
        </div>

        {/* Text Section */}
        <div 
          ref={textRef}
          className={`text-lg text-gray-700 space-y-4 transition-all duration-1000 ${
            textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
        >
          <p>
            Shuddhangan School was established in 2023 at the initiative of Tanmoy Mandal to provide free quality education to the underprivileged children of Bangladesh. Many children living below the poverty line cannot afford to attend school due to the high cost of education in the country.
          </p>
          <p>
            Shuddhangan School aims to bridge this gap by providing free education, enabling these children to escape poverty and become educated. Not only is education free, but to encourage families to send their children to school, Shuddhangan schools provide learning materials, library access, daily meals, monthly grocery bags, health check-ups, and festival assistance.
          </p>
          <p className="font-semibold text-orange-500 mt-6">
            Join us in empowering the future of these children through education!
          </p>
        </div>
      </div>
    </div>
  );
}

export default School;