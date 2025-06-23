import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Template() {
  const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  // const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
    return (
      <div>
        {/* Header Start */}
<header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo Start */}


        <Link className="navbar-brand" to="/"><img src="./assets/images/sealogo1.png" alt /></Link>

        {/* Logo End */}
        {/* Main Menu Start */}
        <div className="collapse navbar-collapse main-menu">
          <ul className="navbar-nav mr-auto" id="menu">
            
            <li className="nav-item"><Link className="nav-link" to="/about">{t('about_us')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service">{t('customer_area')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/product">{t('product')}</Link></li>

            <li className="nav-item"><Link className="nav-link" to="/work">{t('work')}</Link></li>                            
           
            <li className="nav-item"><Link className="nav-link" to="/contact">{t('contact')}</Link></li>
          </ul>
          {/* Language Switcher */}
         <div className="language-switcher">
      <select onChange={handleLanguageChange} value={i18n.language}>
       
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="ru">Russian</option>
      <option value="ta">Tamil</option>
      </select>
    </div>
      &nbsp;
        </div>
         
        {/* Main Menu End */}
          
        {/*Get Contact Us Start*/}
        <div className="header-contact-us">
          <Link to="#"><img src="./assets/images/icon-phone.svg" alt /><h3>{t('call_anytime')} <span>808 707 6060</span></h3></Link>
        </div>                           
        {/*Get Contact Us End*/}
        <div className="navbar-toggle" />                         
      </div>
    </nav>
    <div className="responsive-menu" />
  </div>
</header>
{/* Header End */}

      </div>
    )
  }
  export default Template;