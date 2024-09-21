import { useState } from 'react';
import mainGraph from 'assets/images/auth/mainGraph.png';
import leftGraph from 'assets/images/auth/leftGraph.png';
import rightGraph from 'assets/images/auth/rightGraph.png';
import Left from 'assets/images/left.svg';
import Right from 'assets/images/right.svg';
import {
  ImageWithPadding,
  MainGraph,
  LeftGraph,
  RightGraph,
  TitleImg,
  Slider,
} from './ImageWrapper.styles';

export const ImageWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <ImageWithPadding>
      <MainGraph src={mainGraph} alt="mainGraph" />
      <LeftGraph src={leftGraph} alt="leftGraph" />
      <RightGraph src={rightGraph} alt="rightGraph" />
      <TitleImg>
        <h1>Simplify Your Job Search with JobBox</h1>
        <h2>
          At JobBox, we make it easy to find job opportunities tailored to your
          skills and preferences. Our platform offers a wealth of resources to
          support you in landing your ideal position
        </h2>
        <Slider>
          <div>
            <a href="#">
              <Left />
            </a>
          </div>
          <ul>
            {[0, 1, 2, 3].map((index) => (
              <li key={index}>
                <a
                  href="#"
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <a href="#">
              <Right />
            </a>
          </div>
        </Slider>
      </TitleImg>
    </ImageWithPadding>
  );
};
