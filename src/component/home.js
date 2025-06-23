import React, { Component } from 'react'

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar'; // Check if the language is Arabic
    return (
      <div className={isRTL ? 'rtl' : ''}> {/* Apply RTL class conditionally */}
         
  {/* Hero Section Start */}
  <div className="hero hero-video">
    {/* Video Start */}
    <div className="hero-bg-video">
      {/* Selfhosted Video Start */}
      <video autoPlay muted loop id="myVideo"><source src="./assets/images/product/vedio3.mp4" type="video/mp4" /></video>
      {/* Selfhosted Video End */}
      {/* Youtube Video Start */}
      {/* <div id="herovideo" class="player" data-property="{videoURL:'TzfnlPxCZv0',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
      {/* Youtube Video End */}
    </div>
    {/* Video End */}
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-7">
          {/* Hero Left Content Start */}
          <div className="hero-content">
            <div className="hero-content-title">
              <h1 className="text-anime-style-3">{t('hero_title')}<span></span></h1>
            </div>
            <div className="hero-content-body wow fadeInUp" data-wow-delay="0.25s">
              <p>"{t('hero_subtitle')}"<br />{t('hero_experience')}</p>
            </div>
            <div className="hero-content-footer wow fadeInUp" data-wow-delay="0.5s">
              <a href="#" className="btn-default">{t('hero_about_us')}</a>
            </div>
          </div>
          {/* Hero Left Content End */}
        </div>
        <div className="col-lg-6 col-md-5">
          {/* Hero Video Section Start */}
          {/* <div className="video-play-button">
            <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video">
              <img src="./assets/images/play.svg" alt />
            </a>                      
          </div> */}
          {/* Hero Video Section End */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End */}
  {/* Cargo Shipment Section Start */}

  {/* Cargo Shipment Section End */}

   {/* Transportation Section Start */}
   <div className="home-transportation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
              {/* Home Transportation Content Start */}
              <div className="home-transportation-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('transportation_title')}<br/></span>{t('transportation_subtitle')}</h3>
                </div>
                {/* Section Title End */}
                {/* Home Transportation Body Start */}
                <div className="home-transportation-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('transportation_body')}</p>
                </div>
                {/* Home Transportation Body End */}
                {/* Home Transportation Footer Start */}
                <div className="home-transportation-footer wow fadeInUp" data-wow-delay="0.75s">
                  <div className="transportation-footer-btn">
                    <a href="#" className="btn-default">{t('learn_more')}</a>
                  </div>
                </div>
                {/* Home Transportation Footer End */}
              </div>
              {/* Home Transportation Content End */}
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
              {/* Home Transportation Image Start */}
              <div className="home-transportation-right">
                <div className="transportation-img-1">
                  <figure className="image-anime">
                    <img src="./assets/images/product/staff1.jpg" alt="Staff 1" />
                  </figure>
                </div>
                <div className="transportation-img-2">
                  <figure className="image-anime">
                    <img src="./assets/images/product/staff2.jpg" alt="Staff 2" />
                  </figure>
                </div>
              </div>
              {/* Home Transportation Image End */}
            </div>
            </div>
            </div>
            </div>

 
      {/* Transportation Section End */}

      {/* Providing Service Section Start */}
      <div className="providing-service">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="home-transportation-right">
                <figure className="image-anime">
                  <img src="./assets/images/product/beauty1.jpg" alt="Beauty Product" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Providing Content Start */}
              <div className="providing-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="text-anime-style-3">{t('service_title')}<br/><span>{t('service_subtitle')}</span></h3>
                </div>
                {/* Section Title End */}
                {/* Providing Content Body Start */}
                <div className="providing-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('service_body')}</p>
                  <div className="providing-item-box">
                    <div className="providing-item wow fadeInUp" data-wow-delay="0.25s">
                      <div className="icon-box">
                        <img src="./assets/images/icon-porviding-1.svg" alt="Cost Optimisation" />
                      </div>
                      <span>{t('cost_optimization')}</span>
                    </div>
                    <div className="providing-item wow fadeInUp" data-wow-delay="0.5s">
                      <div className="icon-box">
                        <img src="./assets/images/icon-porviding-2.svg" alt="Reduced Transit Time" />
                      </div>
                      <span>{t('reduced_transit_time')}</span>
                    </div>
                    <div className="providing-item wow fadeInUp" data-wow-delay="0.75s">
                      <div className="icon-box">
                        <img src="./assets/images/icon-porviding-3.svg" alt="Real Time Monitoring" />
                      </div>
                      <span>{t('real_time_monitoring')}</span>
                    </div>
                  </div>
                </div>
                {/* Providing Content Body End */}
              </div>
              {/* Providing Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Providing Service Section End */}

      {/* Products Section Start */}
      <div className="home-transportation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
              {/* Home Transportation Content Start */}
              <div className="home-transportation-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-3"><span>{t('products_title')}<br/></span>{t('products_subtitle')}</h2>
                </div>
                {/* Section Title End */}
                {/* Home Transportation Body Start */}
                <div className="home-transportation-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('products_body')}</p>
                </div>
                {/* Home Transportation Body End */}
              </div>
              {/* Home Transportation Content End */}
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
              {/* Home Transportation Image Start */}
              <div className="home-transportation-right">
                <div className="transportation-img-1">
                  <figure className="image-anime">
                    <img src="./assets/images/product/warehouse1.jpg" alt="Warehouse 1" />
                  </figure>
                </div>
                <div className="transportation-img-2">
                  <figure className="image-anime">
                    <img src="./assets/images/product/warehouse2.jpg" alt="Warehouse 2" />
                  </figure>
                </div>
              </div>
              {/* Home Transportation Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Products Section End */}
      {/* Explore Our Service Section Start */}
      <div className="our-service">
        <div className="container">
          <div className="row">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="text-anime-style-3">
                {t('remember_title')}<span>{t('remember_subtitle')}</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Our Service Item Start */}
              <div className="our-service-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Our Service Image Start */}
                <div className="our-service-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/hh1.jpg" alt={t('household_product_industry_alt')} />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-1.svg" alt={t('household_product_icon_alt')} />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('household_product_industry_title')}</h2><br/>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">
                        {t('household_product_industry_body')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Our Service Item Start */}
              <div className="our-service-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Our Service Image Start */}
                <div className="our-service-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/hh2.jpg" alt={t('international_market_alt')} />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-2.svg" alt={t('international_market_icon_alt')} />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('international_market_title')}</h2><br/>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">
                        {t('international_market_body')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Our Service Item Start */}
              <div className="our-service-item wow fadeInUp" data-wow-delay="0.75s">
                {/* Our Service Image Start */}
                <div className="our-service-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/hh3.jpg" alt={t('minimum_order_alt')} />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-3.svg" alt={t('minimum_order_icon_alt')} />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('minimum_order_title')}</h2><br/>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">
                        {t('minimum_order_body')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Explore Our Service Section End */}
     
    
 

 
 
 
</div>
    

      
    )
  }
  export default Home;
