import React from "react";
import image from "../../../images/testmonial-1.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-header-text">Grace Okereke</h2>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item active">
          <div className="sidebar-nav-icon">
            <i class="far fa-file-alt"></i>
          </div>
          <h3 className="sidebar-nav-text ">My Notes</h3>
          <p>33</p>
        </li>
        <li className="sidebar-nav-item not-active">
          <div className="sidebar-nav-icon">
            <i class="fas fa-tasks"></i>
          </div>
          <h3 className="sidebar-nav-text">My Tasks</h3>
          <p>33</p>
        </li>
        <li className="sidebar-nav-item not-active">
          <div className="sidebar-nav-icon">
            <i class="fas fa-bell"></i>
          </div>
          <h3 className="sidebar-nav-text">Reminders</h3>
          <p>33</p>
        </li>
      </ul>
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <div className="sidebar-footer-icon">
            <i class="fas fa-plus"></i>
          </div>
          <h3 className="sidebar-footer-text text-black">Add new note</h3>
        </div>
        <div className="sidebar-footer-item">
          <div className="sidebar-footer-icon">
            <i class="fas fa-plus"></i>
          </div>
          <h3 className="sidebar-footer-text text-black">Add new task</h3>
        </div>
        <div className="sidebar-footer-item">
          <div className="sidebar-footer-icon">
            <i class="fas fa-cog"></i>
          </div>
          <h3 className="sidebar-footer-text text-black">Settings</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
