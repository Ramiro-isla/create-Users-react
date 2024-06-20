import React, { useState } from "react";
import "./Card.scss";

const Card = ({ deleteUser, editUser, user }) => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [form, setForm] = useState(user);
  const [showAlert, setShowAlert] = useState(false);

  const renderCard = () => {
    return (
      <div className="user-cards">
        <img src={user.image} alt={user.name} className="user-image" />
        <h2>
          Nombre:
          {user.name.length > 8 ? user.name.substring(0, 8) + "..." : user.name}
        </h2>
        <h2>
          Apellido:
          {user.lastName.length > 8
            ? user.lastName.substring(0, 8) + "..."
            : user.lastName}
        </h2>
        <p>Edad: {user.age}</p>

        <div>
          <button onClick={() => deleteUser(user)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              alt="trash"
              className="trash"
            />
          </button>
          <button onClick={() => setIsEditingMode(true)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
              alt="edit icon"
            />
          </button>
        </div>
      </div>
    );
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!form.name || !form.lastName || !form.age || !form.image) {
      setShowAlert(true);
      return;
    } else {
      setShowAlert(false);
      editUser(user, form);
      setIsEditingMode(false);
    }
  };

  const renderEditMode = () => {
    return (
      <div className="user-cards">
        <form onSubmit={submitForm}>
          {showAlert && (
            <div className="alert_edit_form">
              <h2>Faltan campos por completar</h2>
              <p>Por favor rellene todos los campos</p>
            </div>
          )}
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
            />
          </label>

          <label>
            <p>LastName</p>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleInput}
            />
          </label>

          <label>
            <p>Age</p>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleInput}
            />
          </label>

          <label>
            <p>Image</p>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleInput}
            />
          </label>
          <div>{form.image && <img src={form.image} alt="alumn avatar" />}</div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  };

  return (
    <div className="user-cards-container">
      {isEditingMode ? renderEditMode() : renderCard()}
    </div>
  );
};

export default Card;
