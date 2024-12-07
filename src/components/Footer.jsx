import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Arulprakash</h3>
            <p>I Design & BuildUnique Visuals and Graphics</p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+917449257762" className="contact-info-link">
                  +91 74492 57762
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:arulprakashv0107@gmail.com"
                  className="contact-info-link"
                >
                  arulprakashv0107@gmail.com
                </a>
              </li>
              <li> Erode</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://github.com/Arul0107"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/arulprakash_0107/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/arulprakash-v-4b537826a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Arulprakash. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
