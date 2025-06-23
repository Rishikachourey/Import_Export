import React from 'react'
import { useTranslation } from 'react-i18next'

const Work = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';
  return (
    <div className={isRTL ? 'rtl' : ''}>

      {/* subpage header Start */}
      <div className="page-header2 parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header box Start */}
              <div className="section-title">
                <h1 className="text-anime-style-3"><span>{t('work_Heading1')}</span></h1>
                <div class="transportation-footer-btn justify-content-between">
                  <a href="#" class="btn-default">{t('work_Btn1_Connect')}</a>
                  <a href="#" class="btn-default">{t('work_Btn2_Vacancies')}</a>
                </div>
                <p className="wow fadeInUp" data-wow-delay="0.25s"></p>
              </div>

              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      <div class="container">
        <div class="row">
          {/* Section Title Start */}
          <div class="section-title">
            <h2 class="text-anime-style-3"><br />{t('work_Heading2')}</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      {/* Section Title End */}
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
                  <h3 className="text-anime-style-3"><span>{t('work_Heading2_SubHeading')}<br /></span></h3>
                </div>
                {/* Section Title End */}
                {/* Home Transportation Body Start */}
                <div className="home-transportation-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('work_Heading2_p1')}</p>
                  <p className="wow fadeInUp" data-wow-delay="0.5s">{t('work_Heading2_p2')}</p>
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
                    <img src="./assets/images/product/workplace.jpg" alt />
                  </figure>
                </div>


              </div>
              {/* Home Transportation Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Transportation Section End */}


      {/* Explore Our Service Section Start */}
      <div class="our-service">
        <div class="container">
          <div class="row">
            {/* Section Title Start */}
            <div class="section-title">
              <h2 class="text-anime-style-3">{t('work_Heading3')}<span></span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6">
              {/* Our Service Item Start */}
              <div class="our-service-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Our Service Image Start */}
                <div class="our-service-image">
                  <figure class="image-anime">
                    <img src="./assets/images/product/v2.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Service Image End */}

                {/* Our Service Content Start */}
                <div class="our-service-content">
                  <div class="service-content-box">
                    <div class="our-service-icon">
                      <img src="..images/icon-cargo-1.svg" alt="" />

                    </div>
                    <div class="our-service-title">
                      <h2>{t('work_Heading3_SubHeading1')}</h2>
                      <p>{t('work_Heading3_p1')}</p>
                    </div>
                  </div>
                  <div class="our-service-content-button">
                    <a href="#"><i class="fa-regular fa-circle-right"></i></a>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>
            <div class="col-lg-6 col-md-6">
              {/* Our Service Item Start */}
              <div class="our-service-item wow fadeInUp" data-wow-delay="0.75s">
                {/* Our Service Image Start */}
                <div class="our-service-image">
                  <figure class="image-anime">
                    <img src="./assets/images/product/v3.jpg" alt="" />
                  </figure>
                </div>
                {/* Our Service Image End */}

                {/* Our Service Content Start */}
                <div class="our-service-content">
                  <div class="service-content-box">
                    <div class="our-service-icon">
                      <img src="images/icon-cargo-3.svg" alt="" />
                    </div>
                    <div class="our-service-title">
                      <h2>{t('work_Heading3_SubHeading2')}</h2>
                      <p>{t('work_Heading3_p2')}</p>
                    </div>
                  </div>
                  <div class="our-service-content-button">
                    <a href="#"><i class="fa-regular fa-circle-right"></i></a>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>

            {/* Our Service Footer Start */}
            <div class="our-service-footer wow fadeInUp" data-wow-delay="1s">
              <a href="#" class="btn-default">{t('work_Btn3_All_Vacancies')}</a>
            </div>
            {/* Our Service Footer End */}
          </div>
        </div>
      </div>
      {/* Explore Our Service Section End */}
      {/* Export Team Section Start */}
      <div class="export-team">
        <div class="container">
          <div class="row">
            {/* Section Title Start */}
            <div class="section-title">
              <h2 class="text-anime-style-3">{t('work_Heading4.1')}<span> {t('work_Heading4.2')}</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div class="team-item wow fadeInUp" data-wow-delay="0.25s">
                <div class="team-image">
                  <figure class="image-anime">
                    <img src="assets/images/product/p1.jpg" alt="" />
                  </figure>
                </div>
                <div class="team-content">
                  <p>{t('employ1_designation')}</p>
                  <h3><a href="#">{t('employ1_Name')}</a></h3>
                </div>
              </div>
              {/* Team Item End */}
            </div>

            <div class="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div class="team-item wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-image">
                  <figure class="image-anime">
                    <img src="assets/images/product/p2.jpg" alt="" />
                  </figure>
                </div>
                <div class="team-content">
                  <p>{t('employ2_designation')}</p>
                  <h3><a href="#">{t('employ2_Name')}</a></h3>
                </div>
              </div>
              {/* Team Item End */}
            </div>


            <div class="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div class="team-item wow fadeInUp" data-wow-delay="0.75s">
                <div class="team-image">
                  <figure class="image-anime">
                    <img src="assets/images/product/p3.jpg" alt="" />
                  </figure>
                </div>
                <div class="team-content">
                  <p>{t('employ3_designation')}</p>
                  <h3><a href="#">{t('employ3_Name')}</a></h3>
                </div>
              </div>
              {/* Team Item End */}
            </div>

            <div class="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div class="team-item wow fadeInUp" data-wow-delay="0.75s">
                <div class="team-image">
                  <figure class="image-anime">
                    <img src="assets/images/product/p4.jpg" alt="" />
                  </figure>
                </div>
                <div class="team-content">
                  <p>{t('employ4_designation')}</p>
                  <h3><a href="#">{t('employ4_Name')}</a></h3>
                </div>
              </div>
              {/* Team Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Export Team Section End */}


      {/* Section Title Start */}
      <div className="section-title">
        <h2 className="text-anime-style-3">{t('work_Heading5')}</h2>
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
                  <h3><span>{t('work_Heading5_SubHeading1')}</span></h3>
                  <p>{t('work_Heading5_p1')}</p>
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
                  <h3><span>{t('work_Heading5_SubHeading2')}</span></h3>
                  <p>{t('work_Heading5_p2')}</p>
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
                  <h3><span>{t('work_Heading5_SubHeading3')}</span></h3>
                  <p>{t('work_Heading5_p3')}</p>
                </div>
                {/* Transport Content End */}
              </div>
              {/* Transport Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Transport Section End */}


      {/* Our Contract Section Start */}
      <div class="our-contract2 parallaxie">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12">
              {/* Our Cta Box Start */}
              <div class="our-cta-box">
                <div class="our-contract-title">
                  <h2 class="text-anime-style-3">{t('work_Heading6')}</h2>
                </div>
                <div class="our-contract-body">
                  <p class="wow fadeInUp" data-wow-delay="0.25s">{t('work_Heading6_p1')}</p>
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

export default Work