import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="/assets/LOGO3.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                />
              </span>
              <p className="content pt-3 px-3">
                Наш юридический и банкротный кабинет поможет вам разобраться в сложных юридических и финансовых вопросах. 
                Мы посвятили себя защите ваших интересов и предлагаем индивидуальные решения, адаптированные под ваши потребности.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h6 className="pb-2">Наши контакты</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="Egor060705@yandex.ru"
                  />
                  <span className="fw-light px-2">Egor060705@yandex.ru</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+7 929 345 4920"
                  />
                  <span className="px-2 fw-light">+7 929 345 4920</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Bucuresti"
                  />
                  <span className="px-2 fw-light">Барнаул РОССИЯ</span>
                </span>
              </div>
            </div>

            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">График работы</h6>
                <p className="fw-light">
                  Понедельник – Пятница: 10:00 – 18:00 <br /> Суббота – Воскресенье: Выходной
                </p>
                <a href="/sitemap.xml" className="">
                  Карта сайта
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2024 Адвокат Егор Караваев</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;