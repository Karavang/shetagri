import axios from "axios";
import { useState } from "react";

const CallMeFrom = ({ closeModal }) => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "phone") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });

    if (name === "phone") {
      setContactData({
        ...contactData,
        phone: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactData);
    const contactDataTo = {
      ...contactData,
      message: contactData.message.replace('"', "'"),
    };
    console.log(contactDataTo);
    axios.defaults.baseURL = "https://shetagri-back.onrender.com";
    await axios.post("/modal", contactDataTo);
    closeModal();
  };

  return (
    <div id="contact">
      <div>
        <form
          onSubmit={handleSubmit}
          className="form-editing"
        >
          <div className="d-block">
            <h4 className="mb-1">Ім`я</h4>
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                value={contactData.name || ""}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                pattern="^[a-zA-Zа-яА-ЯёЁ]+([-'\s][a-zA-Zа-яА-ЯёЁ]+)*$"
                placeholder="Наприклад: Тетяна"
                required
              />
            </div>
          </div>
          <div className="d-block">
            <h4 className="mb-1">Номер телефону</h4>
            <div className="form-group">
              <input
                name="phone"
                type="tel"
                minLength={10}
                maxLength={16}
                className="form-control"
                onBlur={handleBlur}
                value={contactData.phone || ""}
                onChange={(e) => handleChange(e)}
                pattern="^\+?\d+$"
                placeholder="Наприклад: +380774774747"
                required
              />
            </div>
          </div>
          <div className="d-block">
            <h4 className="mb-1">Email</h4>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                value={contactData.email || ""}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                placeholder="Наприклад: abc@gmail.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
              />
            </div>
          </div>
          <div className="d-block">
            <h4 className="mb-1">Опишіть свою ситуацію</h4>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                value={contactData.message || ""}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                rows="3"
                placeholder="Опишіть свою проблему чи питання в декількох реченнях,щоб я розуміла в чому проблема"
                required
              />
            </div>
          </div>
          <p className="text-right mb-0">
            <button className="openModal">Відправити</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CallMeFrom;
