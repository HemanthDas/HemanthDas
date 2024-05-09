import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, subject, email, message);
    await emailjs
      .send(
        "service_vzmfvx5",
        "template_2830o1n",
        {
          subject: subject,
          name: name,
          email: email,
          message: message,
        },
        "dzLhV2M42nUxMOFEx"
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Message sent successfully");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div id="contact">
      <p
        onClick={() => {
          document.getElementById("contact").style.display = "none";
        }}
      >
        X
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <div>
          <select
            defaultValue={"Select Subject"}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="select">Select Subject</option>
            <option value="Collab">Collab</option>
            <option value="Hire">Hire</option>
            <option value="Complement">Complement</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Contact;
