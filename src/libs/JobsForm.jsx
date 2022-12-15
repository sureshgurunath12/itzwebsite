import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../../src/libs/ContactUsForm.css";

import emailjs from "@emailjs/browser";
export const JobsForm = (props) => {
  const form = useRef();
  const recaptchaRef = React.useRef();
  const isFullNameHidden = props?.isFullNameHidden || false;
  const isEmailHidden = props?.isEmailHidden || false;
  const isMobileHidden = props?.isMobileHidden || false;
  const isMessageHidden = props?.isMessageHidden || false;
  const isTitle = props?.isTitle || "";
  console.log(isTitle);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [jobcategoryError, setJobCategoryError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const resumeRef = useRef();
  const jobcategoryRef = useRef();
  

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
  
    if (e.target.name === "job_category") {
      if (e.target.value === "Select" || e.target.value === null) {
        setJobCategoryError(true);
      } else {
        setJobCategoryError(false);
      }
    }
    if (e.target.name === "user_resume") {
      if (e.target.value === "" || e.target.value === null) {
        setResumeError(true);
      } else {
        setResumeError(false);
      }
    }

    if (e.target.name === "user_message") {
      if (e.target.value === "" || e.target.value === null) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
    if (!nameError || !emailError || !mobileError || !messageError || !resumeError ||  !jobcategoryError) {
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
  const onChange = (value) => {
    console.log("Captcha value:", value);
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
    if (!isMobileHidden) {
      document.getElementById(mobileRef?.current.id).focus();
      document.getElementById(mobileRef?.current.id).blur();
    }
    if (!isMessageHidden) {
      document.getElementById(messageRef.current.id).focus();
      document.getElementById(messageRef.current.id).blur();
    }
    
    const recaptchaValue = recaptchaRef.current.getValue();

    if (isDisabled || !recaptchaValue) {
      console.log(123456789);
      return;
    } else {
      emailjs
        .sendForm(
          "service_qpe98ng",
          props?.templateId || "jobs_temp",
          form.current,
          "pCLrF0tkS5wxlsivM"
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
          ITechnoWiz team will get in touch with you shortly.
        </div>
      ) : (
        <>
          <div className="news-title">{isTitle}</div>

          <form ref={form} enctype="multipart/form-data" onSubmit={sendEmail}>
            <div className="contact-us-container">
              <div className="contact-us-section">
                <div className="contact-us-left">
                  {!isFullNameHidden ? (
                    <div className="field">
                      <div className="text-container">
                        Name<sup>*</sup>
                      </div>
                      <div className="inputContainer">
                        <input
                          className="input"
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
                      <div className="text-container">
                        Email<sup>*</sup>
                      </div>
                      <div className="inputContainer">
                        <input
                          type="text"
                          className="input"
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
                </div>
                <div className="contact-us-right">
                  {!isMobileHidden ? (
                    <div className="field">
                      <div className="text-container">
                        Mobile<sup>*</sup>
                      </div>
                      <div className="inputContainer">
                        <input
                          type="number"
                          className="input"
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
              </div>
              <div>
                  <div className="field">
                    <div className="text-container">
                      Attach Resume (.PDF Only) <sup>*</sup>
                    </div>
                    <div className="inputContainer1">
                      <input
                        type="file"
                        name="user_resume"
                        id="user_resume"
                        placeholder="No File Choosen"
                        ref={resumeRef}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleChange(e);
                        }}
                      />
                      <div className="error" style={{ color: "red" }}>
                        {resumeError ? "" : ""}
                      </div>
                    </div>
                  </div>
                {!isMessageHidden ? (
                  <div className="field">
                    <div className="text-container">Message</div>
                    <div className="inputContainer1">
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
            <div className="field submit-section">
              <div>
                <ReCAPTCHA
                  sitekey="6Lcww3ojAAAAAE81KvJxrUeRoqpuq8ma9-MxsUgU"
                  onChange={onChange}
                  ref={recaptchaRef}
                />
              </div>
              <input type="submit" className="sub-btn" value="" />
            </div>
            <br />
            <br />
            <br />
          </form>
        </>
      )}
    </div>
  );
};

export default JobsForm;
