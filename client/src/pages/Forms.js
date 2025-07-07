import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8888/return-form";

const Forms = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [editingEntry, setEditingEntry] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    status: "новая",
  });

  // Загрузка данных при монтировании
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await axios.get(API_URL);
      setEntries(res.data);
    } catch (err) {
      alert("Ошибка загрузки заявок");
    }
  };

  // === Работа с формой ===

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newEntry);
      fetchEntries();
      setNewEntry({ name: "", email: "", phone: "", query: "" });
    } catch (err) {
      alert("Не удалось отправить заявку");
    }
  };

  // === Редактирование ===

  const startEditing = (entry) => {
    setEditingEntry(entry.id);
    setFormValues({ ...entry });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const saveEditedEntry = async () => {
    try {
      await axios.put(`${API_URL}/${editingEntry}`, formValues);
      fetchEntries();
      setEditingEntry(null);
    } catch (err) {
      alert("Не удалось обновить заявку");
    }
  };

  // === Удаление ===

  const deleteEntry = async (id) => {
    if (!window.confirm("Вы уверены, что хотите удалить эту заявку?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEntries();
    } catch (err) {
      alert("Не удалось удалить заявку");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Заявки</h2>

      {/* Таблица */}
      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Сообщение</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>
                {editingEntry === entry.id ? (
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                ) : (
                  entry.name
                )}
              </td>
              <td>
                {editingEntry === entry.id ? (
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                ) : (
                  entry.email
                )}
              </td>
              <td>
                {editingEntry === entry.id ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                ) : (
                  entry.phone
                )}
              </td>
              <td>
                {editingEntry === entry.id ? (
                  <textarea
                    name="query"
                    value={formValues.query}
                    onChange={handleEditChange}
                    className="form-control"
                  />
                ) : (
                  entry.query
                )}
              </td>
              <td>
                {editingEntry === entry.id ? (
                  <select
                    name="status"
                    value={formValues.status}
                    onChange={handleEditChange}
                    className="form-control"
                  >
                    <option value="новая">Новая</option>
                    <option value="в работе">В работе</option>
                    <option value="завершено">Завершено</option>
                  </select>
                ) : (
                  entry.status
                )}
              </td>
              <td>
                {editingEntry === entry.id ? (
                  <button onClick={saveEditedEntry} className="btn btn-success btn-sm me-1">
                    Сохранить
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(entry)}
                    className="btn btn-primary btn-sm me-1"
                  >
                    Редактировать
                  </button>
                )}
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="btn btn-danger btn-sm"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Форма добавления новой заявки */}
      <h4>Добавить заявку</h4>
      <form onSubmit={handleAddEntry} className="mb-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={newEntry.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newEntry.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={newEntry.phone}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-10 mb-3">
            <textarea
              name="query"
              placeholder="Сообщение"
              value={newEntry.query}
              onChange={handleInputChange}
              className="form-control"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-outline-primary">
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;