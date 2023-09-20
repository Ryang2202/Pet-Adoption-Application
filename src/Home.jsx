import './Home.css';
import { useState } from 'react';

import panel1 from "./Home Panel 1.jpeg";
import panel2 from "./Home Panel 2.jpeg";
import panel3 from "./Home Panel 3.jpeg";

import carousel1 from "./Home Carousel1.jpeg";
import carousel2 from "./Home Carousel2.jpeg";
import carousel3 from "./Home Carousel3.jpeg";


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    {
      imageSrc: carousel1,
      imageAlt: "Four cute kittens sitting together"
    },
    {
      imageSrc: carousel2,
      imageAlt: "A cute brown and white kitten with bright green eyes lying on a chair"
    },
    {
      imageSrc: carousel3,
      imageAlt: "A cat standing on snow"
    }
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1);
  };

  const panelsData = [
    {
      imageSrc: panel1,
      imageAlt: 'A orange and white kitten with bright green eyes perked up its ears.',
      title: 'How Do You Get A Stray Cat To Come To You?',
      text: 'To get a stray cat to come to you, start by approaching slowly and calmly, speaking to the cat in a soft and soothing tone. Avoid making direct eye contact, as this can be perceived as a threat. Offer the cat some food or treats, but be patient and allow the cat to come to you on its own terms. Try sitting or lying down on the ground to make yourself more approachable. If the cat seems hesitant, try leaving some food and shelter in a safe location and continue to check back regularly. Building trust with a stray cat takes time and patience, but with some persistence, you may be able to earn trust.'
    },
    {
      imageSrc: panel2,
      imageAlt: 'A fluffy black and orange kitten with big, round blue eyes looking directly at the camera',
      title: 'Why Do Cats’ Eyes Glow In The Dark?',
      text: 'Cat eyes have a layer of cells called the tapetum lucidum that reflects light back through the retina, which helps to improve their night vision. This layer appears to glow when light is shone into a cat eyes, resulting in the distinctive glowing effect that is often seen in photographs taken with flash. The tapetum lucidum reflects light with different colors depending on the species, so some cat eyes may appear to glow green, yellow, or blue. This adaptation allows cats to see much better in low light conditions than humans, making them more effective hunters in the dark.'
    },
    {
      imageSrc: panel3,
      imageAlt: 'A gray and white kitten is held in one hand and looking downward.',
      title: 'How Cold Is Too Cold For Cats?',
      text: 'Cats can tolerate cold weather better than humans, but they still need protection from extreme cold temperatures. Generally, cats are comfortable in temperatures between 60-80°F (15-27°C). Anything below 45°F (7°C) can be too cold for cats, and they can suffer from hypothermia or frostbite. It is important to provide cats with a warm and dry place to rest during cold weather, such as a cozy bed indoors or in a sheltered outdoor area with blankets and a heat source. Outdoor cats should also have access to fresh water that is not frozen and be fed enough to maintain their body weight during cold weather.'
    }
  ];

  return (

    <div className="home" >

      <div className="carousel">
        <img className="carousel__image" alt={carouselImages[currentIndex].imageAlt} src={carouselImages[currentIndex].imageSrc} />

        <button aria-label="Previous Button for Carousel" className="carousel-button previous" onClick={handlePrevious}>	&#60;</button>
        <button aria-label="Next Button for Carousel" className="carousel-button next" onClick={handleNext}>&#62;</button>
      </div>

      <div className="home__header" id="main">
        <h2 className="home__header-title"> Cat Care Made Easy: Expert Guides and Tips</h2>
        <h3 className="home__header-subtitle">YOU'RE THERE FOR YOUR CAT. WE'RE HERE TO MAKE IT EASIER.</h3>
        <p className="home__header-content">Expert-reviewed, thoroughly-researched guides to help you do the best for the feline in your life.We’ve developed a step-by-step guide to creating a stress-free schedule that brings out your cat’s best. </p>
      </div>

      <h3 className="pannels__header-subtitle">POPULAR IN THE COMMUNITY</h3>
      <div className="pannels">
        {panelsData.map(item => (
          <div className="home__panel" key={item.title}>
            <img className="home__panel-pic" alt={item.imageAlt} src={item.imageSrc} />
            <h4 className="home__panel-title">{item.title}</h4>
            <p className="home__panel-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Home;