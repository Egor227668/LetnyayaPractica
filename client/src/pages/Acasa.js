import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            Адвокат Барнаул | Юридическая фирма и банкротство Егор Караваев
          </title>
          
          <meta
            name="description"
            content="Наш юридический и банкротный кабинет, возглавляемый Караваевым Егором, предоставляет консультации, сопровождение и представительство по юридическим вопросам, а также по вопросам банкротства и взыскания задолженностей в судах и государственных органах."
          />
        </Helmet>
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">Егор Караваев</div>
                <div className="text-2 fs-4">
                  Юридическая фирма и банкротство
                  <span className="fw-bold">
                    <br></br> Барнаул{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "Там, где нет справедливости, нет и истинного правосудия, а справедливость нельзя найти там, где нет истины."
                  - <span>Луций Анней Сенека</span>
                </div>
              </div>
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Запись на приём
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Запросите оценку
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Оплата за услуги
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Запись на приём
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Запросите оценку
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Оплата за услуги
                </button>
              </Link>
            </div>
          </div>
        </div>


        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">Введение</h6>
                <h5 className="lh-base text-center pb-4">
                  Вы столкнулись с юридической проблемой или вопросом банкротства?
                </h5>

                <p className="text-separator fw-normal">
                  Наш юридический и банкротный кабинет, возглавляемый Караваевым Егором, предоставляет консультации, 
                  сопровождение и представительство по юридическим вопросам, 
                  а также по вопросам банкротства и взыскания задолженностей в судах и государственных органах.
                  <br />
                  <span className="ms-4"></span>Мы хотим быть рядом с вами и 
                  найти лучшие решения для ваших проблем, 
                  сохраняя при этом безупречную репутацию в деловом мире.
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">Услуги</h6>

                  <h5 className="lh-base text-center pb-3">
                    Направления деятельности
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Юридическая фирма
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/barou.webp"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Bucuresti"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Юридическая консультация и представительство в областях коммерческого права, 
                        регистрации предприятий, гражданского права, трудового права, 
                        семейного права, процедур банкротства, взыскания долгов, 
                        административного права и др.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Подробнее...
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Юридическая фирма по вопросам банкротства
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/unpir.webp"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="sigla unpir"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Услуги на стадии досудебного банкротства, слияния и разделения коммерческих компаний, 
                        банкротство, судебная реструктуризация и реорганизация, конкурсное производство (фалъшивое состояние), 
                        судебная и административная ликвидация, взыскание долгов, оценка и реализация активов.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Подробнее...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">О НАС</p>
                <h5 className="lh-base text-center pb-4">Кто мы?</h5>

                <p className="text-separator fw-normal">
                  Мы будем вашим партнёром в профессиональном решении всех коммерческих, налоговых, договорных вопросов.
                  <br></br>
                  <span className="ms-4"></span>Мы молодая команда адвокатов, практикующих в сфере банкротства, 
                  а также экономистов — специалистов в финансово-юридической области,
                   с новым подходом к анализу и решению проблем. 
                  Нас рекомендуют опыт более чем в 10 лет, профессионализм и ответственность.
                  <br></br> <span className="ms-4"></span>Руководитель юридического и банкротного бюро Аллина Марин — адвокат 
                  с опытом более 15 лет в коммерческом, договорном и других направлениях права, 
                  а также практикующий специалист по банкротству с 8-летним стажем, имеющий опыт спасения компаний от банкротства, их ликвидации, 
                  а также разработки и реализации планов реорганизации и т. д.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">НАША ЭКСПЕРТИЗА</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">Чем мы можем похвастаться?</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Большой опыт работы в сфере</li>
                <li>
                  Высокий уровень профессионализма и клиентоориентированный подход.
                </li>
                <li> Активное участие в проектах и их поддержка.</li>
                <li> Открытое и честное взаимодействие с клиентами.</li>
                <li> Стремление к полному удовлетворению клиентов.</li>
                <li>
                  {" "}
                  Предоставление комплексных решений благодаря сотрудничеству с другими профессионалами.
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>10+</div>
                <div>лет опыта</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acasa;
