import React, { useState } from "react";
import Cover from "../Images/About/aboutcover2.png";
import Beach from "../Images/About/about.jpg";
import Arrow from "@mdi/react";
import { mdiArrowUpCircleOutline } from "@mdi/js";
import DownArrow from "@mdi/react";
import { mdiArrowDownCircle } from "@mdi/js";

function About() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="about-container">
      <div className="about-cover">
        <img src={Cover} alt="" />
        <div className="image-text">
          <p>A SMALL COMPANY WITH BIG DREAMS OF A CLEANER TOMORROW.</p>
          <div className="arrow">
            {!isShown && (
              <div>
                <Arrow
                  path={mdiArrowUpCircleOutline}
                  size={2.5}
                  rotate={180}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
              </div>
            )}
            {isShown && (
              <div>
                <DownArrow
                  path={mdiArrowDownCircle}
                  size={2.5}
                  onMouseLeave={() => setIsShown(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="about-description">
        <h2>What is ZAWN?</h2>
        <p>
          The name takes after the deep and narrow sea-inlet in the British
          Isles near Cornwall. Cut by erosion over the course of thousands of
          years with steep vertical side-walls. Its the immaculate beauty of
          these natural wonders that inspired us to create a brand capable of
          transforming the way we think about our bathroom products without
          sacrificing style.{" "}
        </p>
      </div>
      <div className="our-promise">
        <div className="our-promise-image">
          <img src={Beach} alt="" />
        </div>
        <div className="about-description">
          <h2>Our Promise</h2>
          <p>
            You are already making a huge contribution to our future by cutting
            down your waste and we take that commitment very seriously. We know
            what you expect from us and in turn what we expect from ourselves as
            we transform the way we do business. Here’s what to expect.
            Responsible decisions. Fair treatment for everyone of our employees
            as well as ethically sourced manufacturing. As little waste as
            possible. Transparency. No animal testing or cruelty. All natural
            ingredients. Sustainable packaging. And of course all while
            maintaining high quality products you can rely on. It’s a big task
            but were up for the challenge.
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Like what we're doing?</h2>
        <p>
          Stay up to date with discounts, prizes, and more content that makes
          sustainable living easier and fun
        </p>
        <div className="input-field">
          <input type="text" placeholder="Email" />
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
