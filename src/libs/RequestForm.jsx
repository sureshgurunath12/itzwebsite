import React, { useRef, useState } from "react";
import "../../src/libs/RequestForm.css";

import emailjs from "@emailjs/browser";
export const RequestForm = (props) => {
  const form = useRef();
  const prodName = props?.prodName || false;
  const isFullNameHidden = props?.isFullNameHidden || false;
  const isEmailHidden = props?.isEmailHidden || false;
  const isMobileHidden = props?.isMobileHidden || false;
  const isMessageHidden = props?.isMessageHidden || false;
  const isProductHidden = props?.isProductHidden || false;
  const isPasswordHidden = props?.isPasswordHidden || false;
  const isTitle = props?.isTitle || "";
  console.log(isTitle);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const productRef = useRef();

  const validateEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const result = pattern.test(email);
    if (result === true) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    if (e.target.name === "user_name") {
      if (e.target.value === "" || e.target.value === null) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }
    if (e.target.name === "user_email") {
      validateEmail(e.target.value);
    }
    if (e.target.name === "user_mobile") {
      if (e.target.value === "" || e.target.value === null) {
        setMobileError(true);
      } else {
        setMobileError(false);
      }
    }
    if (e.target.name === "user_password") {
      if (e.target.value === "" || e.target.value === null) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }

    if (e.target.name === "user_message") {
      if (e.target.value === "" || e.target.value === null) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
    if (!nameError || !emailError || !mobileError || !messageError) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsDisabled(false);

    if (!isFullNameHidden) {
      document.getElementById(nameRef?.current.id).focus();
      document.getElementById(nameRef?.current.id).blur();
    }
    if (!isEmailHidden) {
      document.getElementById(emailRef?.current.id).focus();
      document.getElementById(emailRef?.current.id).blur();
    }
    if (!isPasswordHidden) {
      document.getElementById(passwordRef?.current.id).focus();
      document.getElementById(passwordRef?.current.id).blur();
    }
    if (!isMobileHidden) {
      document.getElementById(mobileRef?.current.id).focus();
      document.getElementById(mobileRef?.current.id).blur();
    }
    if (!isMessageHidden) {
      document.getElementById(messageRef.current.id).focus();
      document.getElementById(messageRef.current.id).blur();
    }
    if (!isProductHidden) {
      document.getElementById(productRef.current.id).focus();
      document.getElementById(productRef.current.id).blur();
    }
    if (isDisabled) {
      console.log(123456789);
      return;
    } else {
      emailjs
        .sendForm(
          "service_vs3dkc2",
          props?.templateId || "template_uynyb35",
          form.current,
          "e6D1o0Plsbpl1w2d_"
        )
        .then((result) => {
          if (result.text === "OK") {
            setIsSuccess(true);
          } else {
            setIsSuccess(false);
          }
        });
    }
  };

  return (
    <div className="formFields">
      {isSuccess ? (
        <div className="successMess">
          Thanks for submiting the details. <br />
          Khenshu team will get in touch with you shortly.
        </div>
      ) : (
        <>
          <div className="news-title">{isTitle}</div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-us-container">
              <div className="contact-us-left">
                {!isProductHidden ? (
                  <div className="field">
                    <div className="inputContainer">
                      <input
                        type="text"
                        name="user_product"
                        id="product_name"
                        className="disabled"
                        placeholder="Product Name"
                        ref={productRef}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                        value={prodName}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {nameError ? "" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
                {!isFullNameHidden ? (
                  <div className="field">
                    <div className="text-container">Name</div>
                    <div className="inputContainer">
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="Full Name"
                        ref={nameRef}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {nameError ? "Please enter your value" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
                {!isEmailHidden ? (
                  <div className="field">
                    <div className="text-container">Email</div>
                    <div className="inputContainer">
                      <input
                        type="text"
                        name="user_email"
                        id="user_email"
                        placeholder="Email Address"
                        ref={emailRef}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {emailError ? "Please enter valid email" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
                {!isPasswordHidden ? (
                  <div className="field">
                    <div className="text-container">Name</div>
                    <div className="inputContainer">
                      <input
                        type="password"
                        name="user_password"
                        id="user_password"
                        placeholder="Password"
                        ref={passwordRef}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        autoComplete="off"
                      />
                      <div className="error" style={{ color: "red" }}>
                        {passwordError ? "Please enter valid password" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
                {!isMobileHidden ? (
                  <div className="field">
                    <div className="text-container">Mobile</div>
                    <div className="inputContainer">
                      <input
                        type="number"
                        name="user_mobile"
                        id="user_mobile"
                        placeholder="Mobile"
                        ref={mobileRef}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        maxLength="9"
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {mobileError ? "Please enter mobile number" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="contact-us-right">
                {!isMessageHidden ? (
                  <div className="field">
                    <div className="text-container">Message</div>
                    <div className="inputContainer">
                      <textarea
                        type="text"
                        name="user_message"
                        id="user_message"
                        placeholder="Message"
                        ref={messageRef}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {messageError ? "" : ""}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="field">
              <input type="submit" className="sub-btn" value="Submit" />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RequestForm;
