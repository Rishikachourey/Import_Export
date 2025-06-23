import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // Check if the language is Arabic
  return (
    <div className={isRTL ? 'rtl' : ''}>
      {/* Page header Start */}

      {/* Page Header End */}
      {/* Transportation Section Start */}
      <div className="home-transportation about-transportation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
              {/* Home Transportation Content Start */}
              <div className="home-transportation-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('hero_about1')} SeaRoute Exports<br /></span>{t('hero_about2')}
                  </h3>
                </div>
                {/* Section Title End */}
                {/* Home Transportation Body Start */}
                <div className="home-transportation-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('about_p1')}</p>
                  <p className="wow fadeInUp" data-wow-delay="0.5s">* {t('point1')}<br />
                    * {t('point2')}</p>
                </div>
                {/* Home Transportation Body End */}

              </div>
              {/* Home Transportation content End */}
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
              {/* Home Transportation Image Start */}
              <div className="home-transportation-right">
                <div className="indurstry-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/staff1.jpg" alt />
                  </figure>
                </div>


              </div>
              {/* Home Transportation Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Transportation Section End */}
      {/* About Transport Section Start */}
      {/* Section Title Start */}
      <div className="section-title">
        <h2 className="text-anime-style-3"><span>{t('section-title')}</span></h2>
      </div>
      {/* Section Title End */}
      <div className="about-transport">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4">

              {/* Transport Item Start */}

              <div className="transport-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Transport Icon Start */}

                {/* Transport Icon End */}
                {/* Transport Content Start */}
                <div className="transport-content">
                  <h3><span>{t('transport-content1')}</span></h3>
                  <p>{t('transport-content2')}</p>
                </div>
                {/* Transport Content End */}
              </div>
              {/* Transport Item End */}
            </div>
            <div className="col-md-4">
              {/* Transport Item Start */}
              <div className="transport-item wow fadeInUp" data-wow-delay="0.5s">
                {/* Transport Icon Start */}

                {/* Transport Icon End */}
                {/* Transport Content Start */}
                <div className="transport-content">
                  <h3><span>{t('transport-content3')}</span></h3>
                  <p>{t('transport-content4')}</p>
                </div>
                {/* Transport Content End */}
              </div>
              {/* Transport Item End */}
            </div>
            <div className="col-md-4">
              {/* Transport Item Start */}
              <div className="transport-item wow fadeInUp" data-wow-delay="0.75s">
                {/* Transport Icon Start */}

                {/* Transport Icon End */}
                {/* Transport Content Start */}
                <div className="transport-content">
                  <h3><span>{t('transport-content5')}</span></h3>
                  <p>{t('transport-content6')}</p>
                </div>
                {/* Transport Content End */}
              </div>
              {/* Transport Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Transport Section End */}

      {/* Transportation Section Start */}
      <div className="home-transportation about-transportation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
              {/* Home Transportation Content Start */}
              <div className="home-transportation-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h5 className="text-anime-style-3">{t('section-title0')}<br /><span>{t('section-title0_1')}</span></h5>
                </div>
                {/* Section Title End */}
                {/* Home Transportation Body Start */}
                <div className="home-transportation-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('section-title0_2')} <b>Europe, America, Africa, Asia and the Middle East</b>. {t('section-title0_2_1')}</p>
                </div>
                {/* Home Transportation Body End */}

              </div>
              {/* Home Transportation content End */}
            </div>
            <div className=" col-md-12 order-lg-2 ">
              {/* Home Transportation Image Start */}
              <div className="home-transportation-right">
                <div className="indurstry-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/map-oceanic.png" alt />
                  </figure>
                </div>


              </div>
              {/* Home Transportation Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Transportation Section End */}

      {/* Our Industry Section Start */}
      <div className="our-indurstry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Indurstry Image Start */}
              <div className="indurstry-image">
                <figure className="image-anime">
                  <img src="./assets/images/product/warehouse3.jpg" alt />
                </figure>
              </div>
              {/* Indurstry Image End */}
            </div>
            <div className="col-lg-6">
              <div className="our-indurstry-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('section-title2')}</span></h3>
                </div>
                {/* Section Title End */}
                {/* Indurstry Content Start */}
                <div className="indurstry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('industry-content1')}</p>
                </div>

                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('section-title3')}</span></h3>
                </div>
                <div className="indurstry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('industry-content2')}<b> 22.000 m2.</b></p>
                </div>


                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('section-title4')}</span></h3>
                </div>
                <div className="indurstry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('industry-content3')} <b>{t('industry-content3_3')}</b></p>
                </div>

                <div className="section-title">
                  <h3 className="text-anime-style-3"><span>{t('section-title5')}</span></h3>
                </div>
                <div className="indurstry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('industry-content4')} <b>{t('industry-content4_4')}</b></p>
                </div>
                {/* Indurstry Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Industry Section End */}
      {/* Export Team Section Start */}

      {/* Export Team Section End */}
      {/* Our Contract Section Start */}
      <div className="our-contract1 parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Our Cta Box Start */}
              <div className="our-cta-box">
                <div className="our-contract-title">
                  <h2 className="text-anime-style-3">{t('our-contract-title')}</h2>
                </div>
                <div className="our-contract-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('our-contract-body')}</p>
                  <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.5s">{t('our-contract-body1')}</a>
                </div>
              </div>
              {/* Our Cta Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Contract Section End */}
    </div>
  )
}

export default About