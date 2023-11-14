import { useState } from "react";
import "./UserForm.scss";

const INITIAL_STATE = {
  name: "",
  lastName: "",
  age: "",
  image: "",
};
const UserForm = ({ createUser }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  let div = document.getElementById("alert_form");
  const submitForm = (event) => {
    event.preventDefault();
    if (!form.name || !form.lastName || !form.age || !form.image) {
      div.style = "display: block";
      return;
    } else {
      div.style = "display: none";
    }
    createUser(form);
    setForm(INITIAL_STATE);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <section className="form">
      <form onSubmit={submitForm}>
        <div className="alert_form" id="alert_form">
          <h2>Faltan campos por completar</h2>
          <p>Por favor rellene todos los campos</p>
        </div>
        <h1>Nuevo Usuario</h1>
        <label>
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Apellido</p>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Edad</p>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Imagen</p>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleInput}
            placeholder="Introduce la dirección de la imagen"
          />
        </label>
        <div>{form.image && <img src={form.image} alt={"user avatar"} />}</div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};
export default UserForm;
