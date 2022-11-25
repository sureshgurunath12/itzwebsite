import React, { useRef, useState } from "react";
import "../../components/EmailSubscription/EmailSubscription.css";
import "../../components/RequestPrice/RequestPrice.css";
import { RequestForm } from "../../libs/RequestForm";
function RequestPrice(props) {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  console.log("{ props }");
  console.log({ props });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vs3dkc2",
        "template_2jrsnqe",
        form.current,
        "e6D1o0Plsbpl1w2d_"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setIsSuccess(true);
          } else {
            setIsSuccess(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="model">
      <div className="model-container">
        <div className="model-container-img">&nbsp;</div>
        <div className="model-container-data">
          <div className="model-header">
            <span className="model-title">REQUEST PRICE</span>
            <span className="model-close" onClick={props.handler}>
              X
            </span>
          </div>
          <div className="model-body">
            <div className="news-title">THANK YOU FOR CONTACTING KHENSHU.</div>
            <div className="news-sub-txt">
              PLEASE TAKE TIME TO CAREFULLY COMPLETE THE FOLLOWING DETAILS.
            </div>
            <RequestForm
              templateId="template_uynyb35"
              isPasswordHidden={true}
              prodName={props.prodName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestPrice;
