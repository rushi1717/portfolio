import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [time, setTime] = useState("");
  const [zone, setZone] = useState("");
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setZone(timezone);

    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="contact-profile">
          <div className="contact-profile-pic">
            <img src="/images/rushi-photo.png" alt="rushi-harke" />
          </div>
          <div className="contact-profile-text">
            <span>Let's work toghter!</span>
          </div>
        </div>
        <div className="contact-email-main">
          <div className="contact-email">
            <span>me.rushikeshharke@gmail.com</span>
          </div>
          <div className="contact-page-main">
            <span>Contact me</span>
          </div>
        </div>
        <div className="contact-footer-main">
          <div className="contact-info-main">
            <div className="contact-info">
              <span>
                Full Stack Developer | Java Developer | MERN Stack | GSAP |
                Passionate about using technology to make the world a better
                place.
              </span>
            </div>
          </div>
          <div className="contact-timezone-main">
            <div className="contact-version">
              <div className="contact-version-heading">
                <span>Version</span>
              </div>
              <div className="contact-version-value">
                <span>2025 &copy; Edition</span>
              </div>
            </div>
            <div className="contact-timezone">
              <div className="contact-timezone-heading">
                <span>Timezone</span>
              </div>
              <div className="timezone-value">
                <span>
                  {time} <span style={{ fontSize: ".8rem" }}>({zone})</span>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-social">
            <div className="social-heading">
              <span>Socials</span>
            </div>
            <div className="social-value">
              <span>Linkedin</span>
              <span>Behance</span>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
