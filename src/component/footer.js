import { Link } from 'react-router-dom';
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar'; // Check if the language is Arabic
  return (
    <div className={isRTL ? 'rtl' : ''}>
      <div>
        {/* Main Footer Start  */}
        <footer className="main-footer">
          {/* Mega Footer Start */}
          <div className="mega-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Footer About Start */}
                  <div className="footer-about">
                    {/* Footer Heading Start */}
                    <div className="footer-heading">
                      <figure>
                        <Link to='/'><img src="./assets/images/product/footerlogo.svg" alt /></Link>
                      </figure>
                    </div>
                    {/* Footer Heading End */}
                    {/* Footer Content Start */}
                    <div className="footer-content">
                      <p>{t('footer_p1')}</p>
                    </div>
                    {/* Footer Content End */}
                    {/* Footer Social Link Start */}
                    <div className="footer-social-link">
                      <ul>
                        <li><Link to="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-instagram" /></Link></li>
                      </ul>
                    </div>
                    {/* Footer Social Link End */}
                  </div>
                  {/* Footer About End */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Footer links Start */}
                  <div className="footer-links">
                    <div className="footer-info-heading">
                      <h2>{t('footer_Quick_Links')}</h2>
                    </div>
                    <ul>
                      <li><Link to="/">{t('footer_QL_Home')}</Link></li>
                      <li><Link to="about">{t('about_us')}</Link></li>
                      <li><Link to="service">{t('footer_QL_Customer_Service')}</Link></li>
                      <li><Link to="product">{t('product')}</Link></li>
                      <li><Link to="work">{t('work')}</Link></li>
                      <li><Link to="contact">{t('footer_QL_Contact_Us')}</Link></li>
                    </ul>
                  </div>
                  {/* Footer links End */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Footer Contact Info Start */}
                  <div className="footer-contact-info">
                    {/* footer info heading Start */}
                    <div className="footer-info-heading">
                      <h2>{t('footer_QL_Contact_Us')}</h2>
                    </div>
                    {/* footer info heading End */}
                    {/* Footer Contact Info Box Start */}
                    <div className="footer-contact-box">
                      <div className="footer-info-box">
                        <div className="icon-box">
                          <i className="fa-regular fa-envelope" />
                        </div>
                        <p>info@domain.com</p>
                      </div>
                      <div className="footer-info-box">
                        <div className="icon-box">
                          <i className="fa-solid fa-location-dot" />
                        </div>
                        <p>{t('footer_Address')}</p>
                      </div>
                      <div className="footer-info-box">
                        <div className="icon-box">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <p>808 707 6060</p>
                      </div>
                    </div>
                    {/* Footer Contact Info Box End */}
                  </div>
                </div>
                {/* Footer Contact Info End */}
                {/* Subscribe Newsletters Start  */}
                <div className="col-lg-3 col-md-6 col-12">
                  {/* footer info heading Start */}
                  <div className="footer-info-heading">
                    <h2>{t('footer_News_Letter')}</h2>
                  </div>
                  {/* footer info heading End */}
                  {/* Newsletters Content Start */}
                  <div className="newsletters-content">
                    <p>{t('footer_p2')}</p>
                  </div>
                  {/* Newsletters Content End */}
                  {/* Newsletters Form Start */}
                  <div className="newsletters-form">
                    <form id="newslettersForm" action="#" className="mail-box">
                      <div className="row no-gutters">
                        <div className="form-group col-11">
                          <input type="email" className="form-control" placeholder={t('footer_Placeholder')} required />
                        </div>
                        <div className="col-1">
                          <button type="submit"><i className="fas fa-paper-plane" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Newsletters Form End */}
                </div>
                {/* Subscribe Newsletters End  */}
              </div>
            </div>
          </div>
          {/* Mega Footer End */}
        </footer>
        {/* Main footer End */}
        {/* Footer Copyright Section Start */}
        <div className="footer-copyright-links">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 col-12">
                {/* Footer Copyright Content Start */}
                <div className="footer-copyright">
                  <p>{t('copyright')} 2024  <b>AL SAMA IMPORT EXPORT</b> {t('all_right_reserved')}</p>
                </div>
                {/* Footer Copyright Content End */}
              </div>
              <div className="col-lg-6 col-md-5 col-12">
                {/* Footer Policy Links Start */}
                <div className="footer-policy-links">
                  <ul>
                    <li><Link to="#">{t('privacy_Policy')}</Link></li>
                    <li><Link to="#">{t('term_of_services')}</Link></li>
                  </ul>
                </div>
                {/* Footer Policy Links End */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>

    </div>
  )
}

export default Footer
