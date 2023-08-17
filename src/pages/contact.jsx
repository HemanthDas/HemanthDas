import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const emailjsServiceId = "";
  const emailjsTemplateId = "";
  const emailjsUserId = "";

  const [isClicked, setIsClicked] = useState(false);
  const [userEmail, setuserEmil] = useState("");
  const [userRemarks, setuserRemarks] = useState("");

  const sendEmail = () => {
    const templateParams = {
      gmail_id: userEmail,
      message: userRemarks,
    };

    emailjs
      .send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsUserId)
      .then((result) => {
        console.log(result.text);
        alert("Thank you for contacting us. We will get back to you soon.");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={"contact " + (isClicked ? "set" : "no")}>
      <button
        className="btn"
        style={{ fontSize: "1.3rem" }}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        Contact
      </button>
      <div className={"cbox " + (isClicked ? "unwrap" : "wrap")}>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setuserEmil(e.target.value);
          }}
          required
          style={{
            outline: "none",
            border: "0px",
            width: "100%",
            backgroundColor: "transparent",
            borderBottom: "1px solid black",
          }}
          placeholder="Enter Your Email"
        />
        <textarea
          onChange={(e) => {
            setuserRemarks(e.target.value);
          }}
          id="remarks"
          cols={100}
          rows={10}
          placeholder="Enter Your Message"
        />
        <button onClick={sendEmail}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
