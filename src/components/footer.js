import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { FaYoutube, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      markdownRemark(id: { eq: "a27f1ffb-1ba5-50c3-b1e3-64ba5214889b" }) {
        frontmatter {
          instagram
          pinterest
          twitter
          youtube
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="grid-item">
          <div className="footer-logo">
            <h2 className="first-name">Sophie</h2>
            <h2>Studio</h2>
          </div>
        </div>
        <div className="grid-item">
          <div className="footer-item footer-sign-up">
            <div className="text-block">
              <p>
                Sign up for our email updates so you can shop for more products!
              </p>
            </div>
            <input></input>
          </div>
        </div>
        <div className="grid-item">
          <ul className="links">
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop-projects">Shop Projects</Link>
            </li>
          </ul>
        </div>

        <div className="grid-item">
          <ul className="links">
            <li>
              <Link to="/returns">Returns & Exchanges</Link>
            </li>
            <li>
              <Link to="/faq">Help & Faq</Link>
            </li>
            <li>
              <Link to="/free-things">Free Things</Link>
            </li>
            <li>
              <div className="social-media-links">
                <a
                  href={data.markdownRemark.frontmatter.pinterest}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPinterest></FaPinterest>
                </a>
                <a
                  href={data.markdownRemark.frontmatter.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube></FaYoutube>
                </a>
                <a
                  href={data.markdownRemark.frontmatter.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href={data.markdownRemark.frontmatter.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
