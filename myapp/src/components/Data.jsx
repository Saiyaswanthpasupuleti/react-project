import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export const Data = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://lottie.host/f7ee55f2-8fca-4929-a24c-0ff4f1f277b3/J6aYnopsOa.lottie')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);


  return (
    <Lottie animationData={animationData} loop={true} autoplay={true} />
  );
};
