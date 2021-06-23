import React from "react";
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top-box">
        <h2 className="footer-top-heading">
          Get KeepNotes for free,<br></br>Boost your productivity today
        </h2>
        <p className="text text__center">
          Nullam arcu felis, porta vel ligula non, ullamcorper porta risus.
          Suspendisse et neque sit amet enim consectetur facilisis ac vel odio.
          antevolutpat gravida.
        </p>
        <div className="footer-top-button">
          <Link to="/signup">
            <button className="background--button--style">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
