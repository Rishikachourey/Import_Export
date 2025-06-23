import React from 'react'
import { useTranslation } from 'react-i18next'

const Product = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // Check if the language is Arabic
  return (
    <div className={isRTL ? 'rtl' : ''}>
      {/* subpage header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header box Start */}
              <div className="section-title">
                <h2 style={{ color: "white" }} className="text-anime-style-3">{t('product_Head')}</h2>
                <p style={{ color: "white" }} className="wow fadeInUp" data-wow-delay="0.25s">{t('product_p1')}<br /> {t('product_p2')}</p>
              </div>

              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Services List Page Start */}
      <div className="service-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Our Service Item Start */}
              <div className="our-service-item wow fadeInUp" data-wow-delay="0.25s">
                {/* Our Service Image Start */}
                <div className="our-service-image">
                  <figure className="image-anime">
                    <img src="./assets/images/product/household.jpg" alt />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-1.svg" alt />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('household_Product')}</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">{t('household_Detail')}</p>
                    </div>
                  </div>
                  <div className="our-service-content-button">
                    <a href="#"><i className="fa-regular fa-circle-right" /></a>
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
                    <img src="./assets/images/product/perfume.jpg" alt />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-2.svg" alt />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('perfume_Cosmetics_Product')}</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">{t('perfume_Cosmetics_Detail')}</p>
                    </div>
                  </div>
                  <div className="our-service-content-button">
                    <a href="#"><i className="fa-regular fa-circle-right" /></a>
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
                    <img src="./assets/images/product/hygine.jpg" alt />
                  </figure>
                </div>
                {/* Our Service Image End */}
                {/* Our Service Content Start */}
                <div className="our-service-content">
                  <div className="service-content-box">
                    <div className="our-service-icon">
                      <img src="./assets/images/icon-cargo-3.svg" alt />
                    </div>
                    <div className="our-service-title">
                      <h2>{t('personal_Hygiene_Product')}</h2>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">{t('personal_Hygiene_Detail')}</p>


                    </div>
                  </div>
                  <div className="our-service-content-button">
                    <a href="#"><i className="fa-regular fa-circle-right" /></a>
                  </div>
                </div>
                {/* Our Service Content End */}
              </div>
              {/* Our Service Item End */}
            </div>


          </div>
        </div>
      </div>
      {/* Services List Page End */}
      <div className="our-contract parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              {/* Our Cta Box Start */}
              <div className="our-cta-box">
                <div className="our-contract-title">
                  <h2 className="text-anime-style-3">{t('product_Head2')}</h2>
                </div>
                <div className="our-contract-body">
                  <p className="wow fadeInUp" data-wow-delay="0.25s">{t('product_p3')}</p>
                  <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.5s">{t('contact_btn')}</a>
                </div>
              </div>
              {/* Our Cta Box End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product