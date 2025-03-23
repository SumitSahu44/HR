import React from 'react';
import CommonHeading from './CommonHeading';
const cardData = [
  {
    title: 'Empowered Performance',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Leadership Coaching & Development',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Team Solutions',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Advisory & People Processes',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Card = ({ title, description }) => (
  <div className="flex ml-[5vw] mt-[20px]  items-start border-l-6 border-[#969696] pl-4 p-6  bg-white">
    <img alt="Pink gears icon" className="mr-4 mt-1" src="https://placehold.co/30x30" />
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
  <div className='mt-[2vw] relative'>
     <CommonHeading title="Services Architecture"/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;