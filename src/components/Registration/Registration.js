import React, { useState } from "react";
import "../../components/EmailSubscription/EmailSubscription.css";
import "../../components/Registration/Registration.css";
import { RequestForm } from "../../libs/RequestForm";
import classNames from "classnames";

function Registration({ handler }) {
  const [isSignInOpen, setSignInOpen] = useState(false);
  return (
    <div className="model registration">
      <div className="model-container">
        <div className="model-container-img">&nbsp;</div>
        <div className="model-container-data">
          <div className="model-header">
            <div>
              <button
                className={classNames("tab", isSignInOpen ? "" : "active")}
                onClick={() => setSignInOpen(!isSignInOpen)}
              >
                Sign In
              </button>
              <button
                className={classNames("tab", isSignInOpen ? "active" : "")}
                onClick={() => setSignInOpen(!isSignInOpen)}
              >
                Register
              </button>
            </div>
            <span className="model-close" onClick={handler}>
              X
            </span>
          </div>
          <div className="model-body">
            {!isSignInOpen && (
              <div className="sign-in">
                <RequestForm
                  isFullNameHidden={true}
                  isEmailHidden={false}
                  isPasswordHidden={false}
                  isMobileHidden={true}
                  isMessageHidden={true}
                  isProductHidden={true}
                  templateId="template_2jrsnqe"
                  isTitle="Sign in to access all your notifications, offers, saved
                searches,profile, messages and more."
                />
              </div>
            )}
            {isSignInOpen && (
              <div className="register">
                <RequestForm
                  isFullNameHidden={false}
                  isEmailHidden={false}
                  isPasswordHidden={false}
                  isMobileHidden={false}
                  isMessageHidden={true}
                  isProductHidden={true}
                  templateId="template_2jrsnqe"
                  isTitle="Register with Khenshu to 'favorite' products, Buy Products 24/7,
                and receive instant updates."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
