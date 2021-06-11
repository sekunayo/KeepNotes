import React from "react";
import testimonial1 from "../../images/testmonial-1.jpg";
function Testimonials() {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-first">
          <div className="testimonial-first-box">
            <h2 className="testimonial-heading">TESTIM</h2>
            <div className="testimonial-first-box-image">
              <img src={testimonial1} alt="testimonial__image"></img>
            </div>
          </div>
        </div>
        <div className="testimonial-second">
          <div className="testimonial-second-box">
            <h2 className="white-text testimonial-heading">ONIALS</h2>
            <div className="testimonial-second-box-text">
              <div className="testimonial-second-box-name-description">
                <h2>Kathrin Beckinsale</h2>
                <p className="text">Business owner</p>
              </div>
              <div className="testimonial-second-box-description">
                <p class="text small-text">
                  Nullam arcu felis, porta vel ligula non, ullamcorper porta
                  risus. Suspendisse et neque sit amet enim consectetur
                  facilisis ac vel odio. antevolutpat gravida. Integer non
                  ultrices ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
