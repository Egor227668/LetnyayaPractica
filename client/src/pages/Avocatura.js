import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const Avocatura = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Услуги адвоката | Адвокат в Барнауле | Юридическая фирма и банкротство Караваев Егор
          </title>
          
          <meta
            name="description"
            content="Мы предоставляем юридические консультации и квалифицированную помощь в различных областях права, включая гражданское право, уголовное право, принудительное исполнение решений суда, семейное право, трудовое право, коммерческое и корпоративное право."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">Услуги адвоката</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Полный спектр юридических услуг
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              Предоставляем юридическую консультацию и специализированное сопровождение по широкому кругу правовых вопросов
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ГРАЖДАНСКОЕ ПРАВО</h6>
                  <p className="card-text mx-1">
                    Мы предоставляем услуги юридической консультации, сопровождения и представительства в судах, составления исковых заявлений. 
                    Помогаем вам оперативно решить вашу юридическую проблему.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">УГОЛОВНОЕ ПРАВО</h6>
                  <p className="card-text mx-1">
                    Юридическая помощь и представительство перед органами предварительного расследования и судами, 
                    составление жалоб и заявлений против мер и действий предварительного следствия, подготовка заявления о реабилитации.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ПРИНУДИТЕЛЬНОЕ ИСПОЛНЕНИЕ</h6>
                  <p className="card-text mx-1">
                    В сфере принудительного исполнения судебных решений наши услуги предоставляются независимо от 
                    вашего статуса в данной процедуре — должник вы или кредитор. 
                    Пассивность может иметь особенно тяжелые последствия как для кредитора, так и для должника.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    СЕМЕЙНОЕ ПРАВО — РАЗВОД И РАЗДЕЛ ИМУЩЕСТВА
                  </h6>
                  <p className="card-text mx-1">
                    Услуги юридической помощи и представительства в делах о разводе, разделе имущества, 
                    осуществлении родительской власти, алиментах, графике общения с несовершеннолетним ребёнком.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ТРУДОВОЕ ПРАВО</h6>
                  <p className="card-text mx-1">
                    Мы предоставляем профессиональные юридические услуги, включая составление жалобы против решения об увольнении, 
                    против дисциплинарного взыскания, истребование от работодателя выплаты причитающихся заработных прав, 
                    а также подготовку юридических заключений по вопросам трудового права.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    КОММЕРЧЕСКОЕ И КОРПОРАТИВНОЕ ПРАВО
                  </h6>
                  <p className="card-text mx-1">
                    Регистрация коммерческих компаний в Торговом реестре, изменение юридического адреса, создание/ликвидация филиала, 
                    составление учредительных документов, решений общего собрания участников.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Другие направления деятельности, по которым мы предоставляем консультации, 
              сопровождение и представительство в судах или других государственных органах: 
              ВЗЫСКАНИЕ ДОЛГОВ, ПЕНСИИ И ДРУГИЕ СОЦИАЛЬНЫЕ ВЫПЛАТЫ, ТОВАРИЩЕСТВА СОБСТВЕННИКОВ ЖИЛЬЯ (ТСЖ), 
              ОБЖАЛОВАНИЕ АДМИНИСТРАТИВНЫХ ПРАВОНАРУШЕНИЙ И ШТРАФОВ, 
              КОМПЕНСАЦИИ ПО ДТП, составление заявлений и прочих документов, необходимых в ходе деятельности.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avocatura;
