import React, { useRef } from "react";
import "./Testimonials.css";
import next_btn from "../../assets/arrow-right.svg";
import back_btn from "../../assets/arrow-left.svg";
import user_1 from "../../assets/user1.jpg";
import user_2 from "../../assets/user2.jpg";
import user_3 from "../../assets/user3.webp";
import user_4 from "../../assets/user4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jonathon Jacks</h3>
                  <span>Evergreen, USA</span>
                </div>
              </div>
              <p>
                Studying at this university has been an incredible journey. The
                supportive faculty, state-of-the-art facilities, and diverse
                learning opportunities have truly enriched my academic and
                personal growth. I am grateful for the unforgettable experiences
                and the strong foundation for my future.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emily Parker</h3>
                  <span>Evergreen, USA</span>
                </div>
              </div>
              <p>
                My time at this university has been transformative. The
                dedicated professors, innovative curriculum, and vibrant campus
                community have fostered my intellectual and personal
                development. I am immensely thankful for the knowledge,
                friendships, and opportunities I've gained here.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Michael Johnson</h3>
                  <span>Evergreen, USA</span>
                </div>
              </div>
              <p>
                Attending this university has been a remarkable experience. The
                excellent academic programs, passionate instructors, and
                inclusive environment have greatly contributed to my growth. I
                deeply appreciate the invaluable skills and lasting friendships
                I've gained during my time here.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>David Thompson</h3>
                  <span>Evergreen, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Evergreen was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
