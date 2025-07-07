import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Контактная информация | Адвокат в Барнауле | Юридическая фирма и банкротство Егор Караваев
        </title>
        
        <meta
          name="description"
          content="Contacteaza-ne pentru orice problema juridica cu care te confrunti. Oferim consultanta si reprezentare in diverse domenii legale. Locatie: Bucuresti, Program: Luni - Vineri: 9 - 17, E-mail: av_alinamarin@yahoo.com, Telefon: +40769 935 716."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">Контакты</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Местоположение:</h5>
                  <p>Барнаул</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>График работы:</h5>
                  <p>Понедельник - Пятница: 10:00 – 18:00</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>Egor060705@yandex.ru</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Телефон:</h5>
                  <p>+7 929 345 4920</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  Не стесняйтесь связаться с нами!
                </h5>
                <p>
                  Мы здесь, чтобы оказать вам поддержку в решении всех ваших правовых проблем.{" "}
                </p>
                <p>
                  Пожалуйста, свяжитесь с нами, заполнив форму ниже, и мы с радостью окажем вам нашу помощь.
                </p>
                <p>
                  Мы примем вашу заявку и свяжемся с вами в ближайшее время для уточнения деталей.
                </p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
