import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <p className="text">How it works</p>
            <p className="text">Testimonials</p>
            <p className="text">Careers</p>
            <p className="text">Investors</p>
            <p className="text">Terms of Service</p>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <p className="text">Contact</p>
            <p className="text">Support</p>
            <p className="text">Destinations</p>
            <p className="text">Sponsorships</p>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <p className="text">Submit Video</p>
            <p className="text">Ambassadors</p>
            <p className="text">Agency</p>
            <p className="text">Influencer</p>
          </div>
          <div class="footer-link-items">
            <h2 className="text">Social Media</h2>
            <p className="text">Instagram</p>
            <p className="text">Facebook</p>
            <p className="text">Youtube</p>
            <p className="text">Twitter</p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <p className="social-logo">touch stone </p>
          </div>
          <small class="website-rights">touch stone © 2020</small>
          <div class="social-icons">
            <p class="social-icon-link facebook" aria-label="Facebook">
              <i class="fab fa-facebook-f" />
            </p>
            <p class="social-icon-link instagram" aria-label="Instagram">
              <i class="fab fa-instagram" />
            </p>
            <p class="social-icon-link youtube" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </p>
            <p class="social-icon-link twitter" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </p>
            <p class="social-icon-link twitter" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
