import React, { useReducer, useEffect, useContext, useState } from "react";

// 1. Создаём контекст
const ThemeContext = React.createContext("light");

// 2. Инициализируем начальное состояние формы
const initialState = {
  name: "",
  email: "",
  phone: "",
  query: "",
  status: "Отправить",
};

// 3. Редюсер
const formReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    case "set_status":
      return { ...state, status: action.status };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, email, phone, query, status } = state;

  const theme = useContext(ThemeContext);

  // Добавляем новое состояние с помощью useState
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Логика при загрузке/сбросе формы
  useEffect(() => {
    console.log("Форма загружена или сброшена");
    document.getElementById("name")?.focus();
    setIsSubmitted(false); // Сбрасываем статус после сброса формы
  }, []);

  // 6. Отправка формы (реальная)
  const sendToServer = async () => {
    try {
      const response = await fetch("http://localhost:8888/return-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          query,
          status: "новая",
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки данных");
      }

      const result = await response.json();
      console.log("Успешно отправлено:", result);
      return true;
    } catch (err) {
      console.error(err);
      setError("Не удалось отправить запрос. Попробуйте позже.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "set_status", status: "Отправка..." });

    const success = await sendToServer();

    if (success) {
      alert("Ваше обращение успешно отправлено!");
      dispatch({ type: "reset" });
      setIsSubmitted(true); // Устанавливаем флаг успешной отправки
      setError(""); // Очищаем ошибку
    } else {
      dispatch({ type: "set_status", status: "Ошибка" });
    }
  };

  const handleChange = (field) => (e) => {
    dispatch({ type: "change", field, value: e.target.value });
  };

  return (
    <div className={`form-wrap p-5 mb-5 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
      <div className="form-overlay"></div>
      <div className="contact-form text-center">
        <p className="lead text-light">Запросить консультацию</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label text-light">
              Ваши Фамилия и Имя:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange("name")}
              className="form-control"
              required
            />
            <label htmlFor="email" className="form-label text-light pt-2">
              Е-mail:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange("email")}
              className="form-control"
              required
            />
            <label htmlFor="phone" className="form-label text-light pt-2">
              Номер телефона:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handleChange("phone")}
              className="form-control"
              required
            />
            <div>
              <label htmlFor="query" className="form-label text-light pt-2">
                Ваше сообщение:
              </label>
              <textarea
                className="form-control"
                id="query"
                value={query}
                onChange={handleChange("query")}
                required
              ></textarea>
            </div>

            {/* Сообщение об ошибке */}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}

            {/* Сообщение об успехе */}
            {isSubmitted && (
              <div className="alert alert-success mt-3" role="alert">
                Спасибо за ваш запрос!
              </div>
            )}

            <div className="my-4 text-center pt-2">
              <button type="submit" className="btn btn-outline-dark" aria-label="Отправить">
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;