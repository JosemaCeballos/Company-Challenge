import React, { useState } from "react";
import data from "../../data/data.json";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const history = useNavigate();
  const initialValues = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "argentina",
    terms_and_conditions: false,
  };
  const [info, setInfo] = useState(initialValues);
  const [msg, setMsg] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setInfo({
        ...info,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInfo({
        ...info,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "information"), info);
    setInfo(initialValues);
    setMsg(!msg);
  };

  const creationStatus = () => {
    if (msg) {
      Swal.fire({
        icon: "success",
        text: '¡Encuesta enviada con éxito!',
        confirmButtonText: "Ver encuestas!",
        customClass: {
          container: "popup-container",
          popup: "popup",
          confirmButton: "confirm",
          denyButton: "deny",
          cancelButton: "cancel",
        },
      }).then((r) => {
        if (r.isConfirmed) {
          history("/informacion");
          setMsg(!msg);
        }
      });
    }
  };

  return (
    <>
      <div className="center-form">
        <section id="content-form">
          <h1 className="subheader">Ingresá tus datos</h1>
          <form onSubmit={handleSubmit} className="mid-form">
            {data.items.map((e) => (
              <div key={e.id} className="form-group">
                {e.type === "submit" ? (
                  <>
                    <div className="clearfix"></div>
                    <input
                      type={e.type}
                      value={e.label}
                      onChange={handleChange}
                      className="btn btn-success"
                      onClick={creationStatus()}
                    />
                  </>
                ) : e.type === "select" ? (
                  <>
                    <label>{e.label}: </label>
                    <select
                      onChange={handleChange}
                      name={e.name}
                      required={e.required}
                    >
                      {e.options.map((el) => (
                        <option value={el.value} key={el.label}>
                          {el.label}
                        </option>
                      ))}
                    </select>
                  </>
                ) : (
                  <>
                    <label>{e.label}: </label>
                    <input
                      type={e.type}
                      name={e.name}
                      placeholder="Tu respuesta"
                      value={info[`${e.name}`]}
                      onChange={handleChange}
                      required={e.required}
                    />
                  </>
                )}
              </div>
            ))}
          </form>
        </section>
      </div>
    </>
  );
}

export default Form;
