import React, { useState } from 'react';  // Import useState from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/al-sama-impex/contact.php', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('An error occurred while sending your message.');
    }
  };



  return (
    <div className={isRTL ? 'rtl' : ''}>
      {/* Get In Touch Section Start */}
      <div className="get-in-touch">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              {/* Get Quote Start */}
              <div className="get-quote">
                <h2 className="text-anime-style-3">{t('contact_Heading_1')}</h2>
                <div className="get-quote-form wow fadeInUp" data-wow-delay="0.75s">
                  <form onSubmit={handleSubmit} data-toggle="validator">
                    <div className="row">
                      <div className="form-group col-md-12 mb-3">
                        <input type="text" name="name" value={formData.name} onChange={handleChange}  className="form-control" id="name" placeholder={t('contact_Name_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group  col-md-12 mb-3">
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" id="phone" placeholder={t('contact_Mobile_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group  col-md-12 mb-3">
                        <input type="email" name="email" value={formData.email} onChange={handleChange}  className="form-control" id="email" placeholder={t('contact_Email_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <textarea name="message" value={formData.message} onChange={handleChange}  className="form-control" id="msg" rows={3} placeholder={t('contact_Message_Placeholder')} required defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-default">{t('submit_btn')}</button>
                        <div id="msgSubmit" className="h3 hidden" />
                        {responseMessage && <p>{responseMessage}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Get Quote End */}
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="contact-us">
                <h2 className="text-anime-style-3">SeaRoute Exports</h2>
                {/* Contact Us Info Start */}
                <div className="contact-us-info">
                  <div className="footer-info-box wow fadeInUp" data-wow-delay="0.25s">
                    <div className="icon-box">
                      <img src="./assets/images/icon-mail.svg" alt />
                    </div>
                    <p>alsamaimpex@gmail.com</p>
                  </div>
                  <div className="footer-info-box wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon-box">
                      <img src="./assets/images/icon-location.svg" alt />
                    </div>
                    <p>{t('contact_Address')}</p>
                  </div>
                  <div className="footer-info-box wow fadeInUp" data-wow-delay="0.75s">
                    <div className="icon-box">
                      <img src="./assets/images/icon-call.svg" alt />
                    </div>
                    <p>808 707 6060</p>
                  </div>
                </div>
                {/* Contact Us Info End */}
                {/* Contact Us Footer Start */}
                <div className="contact-us-footer wow fadeInUp" data-wow-delay="1s">
                  <div className="topbar-social-links contact-details">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                  {/*Get Contact Us Start*/}
                  <div className="header-contact-us">
                    <a href="#"><img src="./assets/images/icon-phone.svg" alt /><h3>{t('call_Anytime')} <span>808 707 6060</span></h3></a>
                  </div>
                  {/*Get Contact Us End*/}
                </div>
                {/* Contact Us Footer End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Section End */}
      {/* Google Map Iframe Start */}
      <div className="google-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="google-map-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675033077!2d-0.12209412310046139!3d51.503189711010585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1706532987654!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Iframe End */}
    </div>

  )
}

export default Contact