import React from "react";
import CustomEditor from "../../../Components/CustomEditor/CustomEditor";

function ProductHeader() {
  return (
    <div className="product-header">
      <div className="product-header-top">
        <div className="product-header-breadcrumbs">
          <h3>
            <span>My Notes</span> <i class="fas fa-chevron-right"></i>{" "}
            <span>Title here</span>
          </h3>
        </div>
        <div className="product-header-container">
          <h2>Title is here</h2>
          <p>
            <span className="product-header-container-title">Created by</span>{" "}
            <span>Floyd Lawson</span>
          </p>
          <p>
            <span className="product-header-container-title">
              Last modified
            </span>{" "}
            <span>11111</span>
          </p>
          <p>
            <span className="product-header-container-title">Tags</span>
            <span>
              <button className="">
                <i class="fas fa-plus"></i> Add new tag
              </button>
            </span>
          </p>
        </div>
        <div>
          <CustomEditor />
          {/* <div className="product-header-icons-item">
            <select>
              <option value="Poppins">Poppins</option>
              <option value="Raleway">Raleway</option>
            </select>
          </div>
          <div className="product-header-icons-item">
            <select>
              <option value="16">16</option>
              <option value="18">18</option>
            </select>
          </div>
          <div className="product-header-icons-item">
            <p>
              <i class="fas fa-bold"></i>
            </p>
            <p>
              <i class="fas fa-italic"></i>
            </p>
            <p>
              <i class="fas fa-link"></i>
            </p>
            <p>
              <i class="fas fa-list-ul"></i>
            </p>
            <p>
              <i class="fas fa-list-ol"></i>
            </p>
          </div>
          <div className="product-header-icons-item">
            <p>
              <i class="fas fa-align-left"></i>
            </p>
            <p>
              <i class="fas fa-align-center"></i>
            </p>
            <p>
              <i class="fas fa-align-right"></i>
            </p>
            <p>
              <i class="fas fa-align-justify"></i>
            </p>
          </div>
          <div className="product-header-icons-item">
            <p>
              <i class="fas fa-image"></i>
            </p>
            <p>
              <i class="fab fa-youtube"></i>
            </p>
            <p>
              <i class="fas fa-table"></i>
            </p>
            <p>
              <i class="fas fa-calendar-alt"></i>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
