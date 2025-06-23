import React from 'react'
import { useTranslation } from 'react-i18next'

const Service = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar'; // Check if the language is Arabic
  return (
    <div className={isRTL ? 'rtl' : ''}>
      {/* subpage header Start */}
      {/* Get In Touch Section Start */}
      <div className="get-in-touch">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              {/* Get Quote Start */}
              <div className="get-quote">
                <h2 className="text-anime-style-3">{t('customer_Area')}</h2>
                <div className="get-quote-form wow fadeInUp" data-wow-delay="0.75s">
                  <form id="contactForm" action="#" method="post" data-toggle="validator">
                    <div className="row">
                      <div className="form-group col-md-12 mb-3">
                        <label>{t('company_Name')}*</label>
                        <input type="text" className="form-control" id="company" placeholder={t('company_Name_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group  col-md-12 mb-3">
                        <label>{t('tax_ID_no')}*</label>
                        <input type="text" className="form-control" id="taxid" placeholder={t('tax_ID_no_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group  col-md-12 mb-3">
                        <label>{t('address')}*</label>
                        <input type="text" className="form-control" id="address" placeholder={t('address_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="row">
                        <div className="form-group col-md-4 mb-3">
                          <label>{t('country')}*</label>
                          <input type="text" name="country" className="form-control" id="country" placeholder={t('country_Placeholder')} required defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                          <label>{t('city')}*</label>
                          <input type="text" name="city" className="form-control" id="city" placeholder={t('city_Placeholder')} required defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                          <label>{t('postal_Code')}*</label>
                          <input text="text" name="postalcode" className="form-control" id="postalcode" placeholder={t('postal_Code_Placeholder')} required defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="form-group  col-md-12 mb-3">
                        <label>{t('contact_Person')}*</label>
                        <input type="text" className="form-control" id="contactperson" placeholder={t('contact_Person_Placeholder')} required />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-3">
                          <label>{t('email')}*</label>
                          <input type="email" className="form-control" id="email" placeholder={t('email_Placeholder')} required defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                          <label>{t('phone')}*</label>
                          <input text="phone" className="form-control" id="phone" placeholder={t('phone_Placeholder')} required defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-default">{t('submit')}</button>
                        <div id="msgSubmit" className="h3 hidden" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Get Quote End */}
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="contact-us">
                <div className="home-transportation-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="text-anime-style-3">{t('heading_1')} <br /><span>{t('heading_2')}</span></h3>
                  </div>
                  {/* Section Title End */}
                  {/* Home Transportation Body Start */}
                  <div className="home-transportation-body">
                    <p className="wow fadeInUp" data-wow-delay="0.25s">{t('service_p')}</p>
                  </div>
                  {/* Home Transportation Body End */}

                </div>
                <img src="./assets/images/product/hh3.jpg" alt />

                {/* Contact Us Info Start */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Section End */}
      {/* Page Header End */}
      {/* Services List Page Start */}

      {/* Services List Page End */}
    </div>

  )
}

export default Service
