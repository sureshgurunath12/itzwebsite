import React, { useState } from "react";
import "../VirtualConsultant/VirtualConsultant.css";
import Virtual from "../../../assets/images/home/virtual/virtual-banner-d.jpeg";
import Modal from "../../../components/EmailSubscription/EmailSubscription.js";

function Catalouge() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="virtual-container">
      <div className="virtual-sub-container">
        <div className="row ">
          <div className="col-lg-12 align-items-center">
            <img
              src={Virtual}
              alt="BOOK A VIRTUAL CONSULTATION"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal handler={toggleModal} />}
    </div>
  );
}

export default Catalouge;
