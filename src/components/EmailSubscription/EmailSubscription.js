import React from "react";
import "../../components/EmailSubscription/EmailSubscription.css";
import { RequestForm } from "../../libs/RequestForm";

function EmailSubscription({ handler }) {
  return (
    <div className="model">
      <div className="model-container">
        <div className="model-container-img">&nbsp;</div>
        <div className="model-container-data">
          <div className="model-header">
            <span className="model-title">BOOK A VIRTUAL CONSULTAION</span>
            <span className="model-close" onClick={handler}>
              X
            </span>
          </div>
          <div className="model-body">
            <div className="news-title">Let's talk design</div>
            <div className="news-sub-txt">
              Virtual Consultation: Let's come up with your dream product.
              <br />
              <br /> Our team of product designers will help you choose the best
            </div>
            <RequestForm
              isMessageHidden={false}
              isPasswordHidden={true}
              isProductHidden={true}
              templateId="template_2jrsnqe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;
