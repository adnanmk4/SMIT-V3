'use client';

import { useEffect, useState } from 'react';

const sponsors = [
  { id: 1, name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png' },
  { id: 2, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Google_logo_2015.svg/1024px-Google_logo_2015.svg.png' },
  { id: 3, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png' },
  { id: 4, name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Netflix_logo.svg/1024px-Netflix_logo.svg.png' },
  { id: 5, name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png' },
  { id: 6, name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png' },
  { id: 7, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Google_logo_2015.svg/1024px-Google_logo_2015.svg.png' },
  { id: 8, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png' },
];

function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length); // Loop back to the first sponsor
      }
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [isHovered]);

  return (
    <div 
      className="relative w-full overflow-hidden mt-12 py-8 bg-gray-50" // Added bg color and padding
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl text-center font-bold mb-4">Our Sponsors</h2><br /> {/* Title for the section */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 8)}%)` }} // Show 4 logos at a time
      >
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="flex-shrink-0 w-1/4 mx-2"> {/* Reduced margin to bring logos closer */}
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-20 h-20 mx-auto transition-transform duration-300 hover:scale-110" // Smaller size for images
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;