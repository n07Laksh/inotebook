import React, { useRef } from 'react';

const About = () => {
  const handleClick = () => {
    alert('Hii');
  };
  const html = (
    <>
      <h1>Hello Ji</h1>
      <button onClick={() => handleClick()}>Click Me!</button>
    </>
  );
  return <>{html}</>;
};

export default About;
