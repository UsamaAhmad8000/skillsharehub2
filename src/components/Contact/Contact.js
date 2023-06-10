import React from "react";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <span className="text-color">Send a message</span>
              <h3 className="text-md mb-5">Contact Form</h3>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-8-desktop">
              <form
                id="contact-form"
                className="contact__form"
                method="post"
                action="mail.php"
              >
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <div
                      className="notification is-success contact__msg mb-4"
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>

                    <select className="input" id="exampleFormControlSelect1">
                      <option>I Need help in ...</option>
                      <option>Software Design</option>
                      <option>Development cycle</option>
                      <option>Software Development</option>
                      <option>Maintenance</option>
                      <option>Process Query</option>
                      <option>Cost and Duration</option>
                      <option>Modal Delivery</option>
                    </select>
                  </div>
                  <div className="column is-12">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="input"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="column is-12">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="column is-12">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="column is-12">
                    <textarea
                      name="message"
                      id="message"
                      className="input"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="column is-12">
                    <button className="btn btn-main" name="submit" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="column is-4-desktop">
              <div className="short-info">
                <ul className="list-unstyled">
                  <li>
                    <h5>Call Us</h5>
                    +88 01672 506 744
                  </li>
                  <li>
                    <h5>Email Us</h5>
                    contact@mail.com
                  </li>
                  <li>
                    <h5>Location Map</h5>
                    North Main Street,Brooklyn Australia
                  </li>
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-12">
              <div className="google-map mt-90 mb-6">
                <div id="map"></div>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-4-desktop is-6-tablet">
              <div className="contact-content">
                <h4 className="mb-4">Corporate Office</h4>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="contact-info">
                <h4 className="mb-4">USA Location</h4>
                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>

            <div className="column is-4-desktop is-6-tablet">
              <div className="contact-info">
                <h4 className="mb-4">Europe</h4>
                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-location-pin mr-3"></i>North Main
                    Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
