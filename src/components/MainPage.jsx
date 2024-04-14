import React, { useState, useEffect } from 'react';
import { useSpringRef, animated, useTransition } from '@react-spring/web';

import styles from '../styles.module.css';

const images = [
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/bluespring.jpeg")} alt="Image 1" />,
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/hiphop.jpeg")} alt="Image 2" />,
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/bml.jpeg")} alt="Image 3" />,
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/jazz.jpeg")} alt="Image 4" />,
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/umf.jpeg")} alt="Image 5" />,
  ({ style }) => <animated.img style={{ ...style }} src={require("../Assets/worlddj.jpeg")} alt="Image 6" />,
];

const MainPage = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % images.length);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  useEffect(() => {
    transRef.start();
  }, );

  return (
    <div className="main">
      <div className="col col1">
        <h2>Festivals</h2>
        <p>
          In Here. <br />
          We Will Show You Our Contents. <br />
          If U wanna find more, Click the Image!!
        </p>
      </div>
      <div className={`flex fill ${styles.container}`} onClick={onClick}>
        {transitions((style, i) => {
          const Image = images[i];
          return <Image style={style} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;