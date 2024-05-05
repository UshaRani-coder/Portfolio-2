// import React from 'react';

// function AnimatedBackground(){
  
//     const random = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//       };
    
//       // Create an array of glowing stars with random positions and sizes
//       const stars = Array.from({ length: 50 }).map((_, index) => {
//         const size = random(1, 4); // Random size between 1 and 4 pixels
//         const duration = random(2, 4); // Random duration between 2 and 4 seconds
//         const delay = random(0, 4); // Random delay between 0 and 4 seconds
//         const style = {
//           width: `${size}px`,
//           height: `${size}px`,
//           animationDuration: `${duration}s`,
//           animationDelay: `${delay}s`,
//         };
//         return <div key={index} className="star" style={style}></div>;
//       });
    
//       return <div className="background">{stars}</div>;
    
  
// }

// export default AnimatedBackground;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function AnimatedBackground(){
  const starsCount = 250; 
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const newStars = Array.from({ length: starsCount }, (_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight, 
        size: Math.random() * 3 + 1, 
        opacity: Math.random(), 
        duration: Math.random() * 5 + 2, 
      }));
      setStars(newStars);
    };

    createStars();
  }, []); // Run only once on component mount

  return (
    <div style={{ position: 'fixed', top: 0, left: 0,zIndex:'0', width: '100%', height: '100%', pointerEvents: 'none' }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, y: star.y, x: star.x }}
          animate={{ opacity: [0, 1], y: [star.y, star.y - 10], x: [star.x, star.x] }}
          transition={{ duration: star.duration, loop: Infinity, delay: Math.random() }}
          style={{
            position: 'absolute',
            top: star.y,
            left: star.x,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'white',
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
