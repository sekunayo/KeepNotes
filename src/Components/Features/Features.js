import React from "react";

function Features() {
  return (
    <div className="features">
      <p className="text text__center">
        With KeepNotes,you can do everything in a collaborative space
      </p>
      <div className="features-container">
        <div className="features-container-box">
          <div className="features-container-box-inner">
            <span className="features-heading-box">
              <i class="far fa-file-alt"></i>
              <h3>Notes,Labels</h3>
            </span>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              molestie varius libero sit amet pretium.
            </p>
          </div>
        </div>
        <div className="features-container-box flex-center">
          <div className="features-container-box-inner ">
            <span className="features-heading-box">
              <i class="fas fa-tasks"></i>
              <h3>Checklists,Textnotes</h3>
            </span>
            <p className="text">
              Nullam facilisis turpis ut augue ultrices, consequat feugiat dui
              blandit.
            </p>
          </div>
        </div>
        <div className="features-container-box flex-center">
          <div className="features-container-box-inner">
            <span className="features-heading-box">
              <i class="fas fa-bell"></i>
              <h3>Reminders</h3>
            </span>
            <p className="text">
              Mauris luctus id diam sed accumsan. Morbi posuere velit ut mauris
              placerat interdum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
