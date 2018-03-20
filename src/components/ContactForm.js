import React from 'react'

const ContactForm = () => (
          ([<form method="POST" action="/index.html#contact/v1">
            <div className="field half first">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4" ></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
            <div>
              { window.location.hash === '#success' &&
                <div id="success">
                  <p>Your message has been sent!</p>
                </div>
              }
              { window.location.hash === '#error' &&
                <div id="error">
                  <p>An error occured while submitting the form.</p>
                </div>
              }
            </div>
          </form>,
          <ul className="icons">
            <li><a href="https://www.facebook.com/premieraustralianwalnuts/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
        ])
      )
export default ContactForm;
