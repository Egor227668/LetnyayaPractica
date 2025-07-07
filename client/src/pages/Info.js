import React from "react";
import { Helmet } from "react-helmet";

const Info = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Полезная информация | Адвокат в Барнауле | Юридическая фирма и банкротство Егор Караваев</title>
        
        <meta
          name="description"
          content="Полезная информация о юридическом и банкротном кабинете"
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Гонорар
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Общие принципы</h5>
                  <p>
                    {" "}
                    В соответствии с положениями Устава профессии адвоката , 
                    утверждённого решением Первого Всероссийского съезда адвокатов 25 сентября 2004 года 
                    (опубликован в Собрании законодательства РФ, Часть I № 45, 13.01.2005), Глава III, Раздел 2, 
                    отношения между адвокатом и клиентом, в том числе порядок установления гонорара, регулируются 
                    на основе принципов добросовестности, прозрачности и соответствия профессиональным стандартам. 
                    Основой для принятия Устава послужил Федеральный закон от 31.05.2002 № 63-ФЗ "Об адвокатской 
                    деятельности и адвокатуре в Российской Федерации" , в частности, статья 8, предусматривающая право 
                    адвокатов разрабатывать устав профессии.
                  </p>
                  <h5>Гонорары для юридических лиц:</h5>
                  <p>
                    При установлении гонораров для юридических лиц, помимо изложенных ниже принципов, 
                    учитывается также возможность определения порядка оплаты гонораров в различных аспектах, таких как:
                  </p>
                  <ul>
                    <li>фиксированный гонорар</li>
                    <li>почасовой гонорар</li>
                    <li>фиксированный гонорар за результат</li>
                    <li>процентный гонорар от результата</li>
                    <li>ежемесячный абонемент</li>
                  </ul>
                  <h5>Гонорары для физических лиц:</h5>
                  <p>
                    При установлении гонораров для физических лиц адвокатская контора придерживается принципа прямых переговоров, в основе которого лежат следующие критерии:
                  </p>
                  <ul>
                    <li>сложность дела и уровень профессиональной подготовки адвоката, выполняющего работу;</li>
                    <li>срочность выполнения работы;</li>
                    <li>дело и возможности клиента;</li>
                    <li>история сотрудничества с клиентом.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.insolventa========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Инсоляция
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Инсоляция — это ситуация, при которой компания не в состоянии погасить свои 
                    долги перед различными кредиторами — поставщиками, НАДИ или банками (Неплатёжеспособность).
                  </p>
                  <p>
                    Законодательство Российской Федерации также содержит схожее определение неплатёжеспособности. 
                    Так, согласно статье 2 Федерального закона от 26 октября 2002 года № 127-ФЗ «О несостоятельности (банкротстве)», 
                    неплатёжеспособность должника — это неспособность должника исполнить денежные обязательства и 
                    (или) обязанности по уплате обязательных платежей в установленные сроки , что может быть 
                    основанием для возбуждения процедуры банкротства.
                  </p>
                  <p>
                    Инсоляция не обязательно означает банкротство. Дело об 
                    инсоляции может быть открыто также с целью реорганизации 
                    компании на основе плана, который может привести к восстановлению 
                    бизнеса и выходу из состояния инсоляции. Только в случае неудачи 
                    реорганизации может быть запущена процедура банкротства.
                  </p>
                </div>
              </div>
            </div>
            {/* 3.reorganizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Реорганизация
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Реорганизация компании означает её финансовое восстановление под защитой закона о несостоятельности.
                  </p>

                  <p>
                    Цель процедуры несостоятельности — не доведение компании до банкротства и ликвидации, 
                    а оказание помощи в её восстановлении на основе определённого плана. 
                    Фактически, может быть открыта процедура несостоятельности с намерением 
                    реорганизовать компанию в рамках утверждённого плана реорганизации. 
                    Согласно положениям Российского законодательства закрепленного в Федеральном законе от 26 октября 
                    2002 года № 127-ФЗ «О несостоятельности (банкротстве)», где реабилитационные процедуры 
                    направлены на восстановление платежеспособности должника.
                  </p>

                  <p>
                    План реорганизации включает разработку, утверждение, подтверждение и реализацию документа, предусматривающего:
                  </p>
                  <ul>
                    <li>операционную и/или финансовую реструктуризацию должника;</li>
                    <li>корпоративную реструктуризацию посредством изменения структуры уставного капитала;</li>
                    <li>сокращение деятельности посредством частичной или полной ликвидации имущества должника.</li>
                  </ul>

                  <p>
                    Для участников процедуры особое значение имеет график погашения требований кредиторов.
                  </p>

                  <p>
                    Кредиторы должны знать, какие суммы и в какие сроки будут выплачены им по своим требованиям, чтобы иметь возможность провести собственный экономический анализ.
                  </p>

                  <p>
                    В соответствии с пунктом 53 статьи 5 указанного Закона, график погашения требований определяется как «график выплат, указанный в плане реорганизации». 
                    Только в случае неудачи с реализацией этого плана реорганизации и восстановления компании будет запущена процедура банкротства.
                  </p>
                </div>
              </div>
            </div>
            {/* 4.falimentul========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Банкротство
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Банкротство наступает как крайняя мера, когда восстановление должника и реализация плана реорганизации уже невозможны.
                  </p>
                  <p>
                    Банкротство представляет собой вторую стадию процедуры несостоятельности, 
                    применяемую к должнику с целью ликвидации его имущества для погашения обязательств, 
                    после чего должник исключается из государственного реестра юридических лиц.
                    В российском праве эта процедура регулируется Федеральным законом от 26 октября 
                    2002 года № 127-ФЗ «О несостоятельности (банкротстве)».
                  </p>
                  <p>
                    Если выясняется, что в составе имущества должника отсутствуют активы 
                    или они недостаточны для покрытия административных расходов, может быть 
                    вынесено решение об исключении компании из ЕГРЮЛ.
                  </p>
                  <p>
                    Решение о признании должника банкротом и открытии конкурсного 
                    производства выносит арбитражный суд. В этом решении суд назначает 
                    конкурсного управляющего и принимает решение о:
                  </p>
                  <ul>
                    <li>прекращении права управления имуществом должника;</li>
                    <li>назначении конкурсного управляющего;</li>
                    <li>ликвидации имущества компании;</li>
                    <li>исключении общества из Единого государственного реестра юридических лиц (ЕГРЮЛ).</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 5.dizolvarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Расторжение
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Под расторжением понимается прекращение деятельности коммерческой организации, 
                    при этом компания не вправе осуществлять хозяйственную деятельность и выставлять 
                    счета по видам деятельности, указанным в её учредительных документах. 
                    В этот период фирма сосредоточена исключительно на реализации и распределении имущества.
                  </p>
                </div>
              </div>
            </div>
            {/* 6.lichidarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Ликвидация
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Ликвидация фирмы представляет собой совокупность действий, 
                    направленных на завершение коммерческих операций, 
                    находящихся в процессе выполнения на момент ликвидации общества, 
                    превращение имущества компании в денежные средства, 
                    погашение её обязательств перед кредиторами, 
                    а также распределение чистых активов между участниками. 
                    После вступления в законную силу судебного решения о ликвидации общества, 
                    Национальный орган торгового реестра по заявлению общества назначает судебного ликвидатора, 
                    внесённого в список практикующих специалистов по банкротству.
                  </p>
                </div>
              </div>
            </div>
            {/* 7.radierea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Исключение из реестра
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Под исключением из реестра понимается полное прекращение функционирования коммерческой организации. 
                    При этом важно учитывать, что радиация не подразумевает аннулирование данных о предыдущей регистрации 
                    общества — она лишь фиксирует факт окончания его деятельности.
                  </p>
                </div>
              </div>
            </div>
            {/* 8.fuziunea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Фузия
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Фузия представляет собой процедуру, при которой одна или несколько организаций прекращают 
                    свою самостоятельную деятельность без прохождения этапа ликвидации, передавая всё своё имущество другой организации. 
                    Взамен акционеры передающей стороны получают доли или иные формы участия в принимающей компании.
                  </p>
                </div>
              </div>
            </div>
            {/* 9.divizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Дивизия
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Под дивизией понимается процедура, при которой одна компания прекращает своё существование без 
                    прохождения процедуры ликвидации и передаёт всё своё имущество двум и более новым или уже существующим юридическим лицам. 
                    Взамен акционеры реорганизуемой компании получают акции в новых обществах, получающих части её активов.
                  </p>
                  <h5>Этапы процедуры слияния или разделения компании</h5>
                  <h6>Первый этап</h6>
                  <ul>
                    <li>
                      Представление проекта фузии и протокол решения общего собрания 
                      акционеров участвующей в слиянии компании, согласно которому не проводится рассмотрение проекта
                    </li>
                  </ul>
                  <h6>Второй этап</h6>
                  <ul>
                    <li>Протоколы решений общих собраний акционеров (участников) каждой из сторон, одобряющие фузию</li>
                    <li>Устав поглощающей компании, актуализированный с учетом изменений, произошедших в ходе фузии</li>
                    <li>Финансовое состояние компании в рамках процедуры фузии</li>
                    <li>Информация из налоговой системы </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
