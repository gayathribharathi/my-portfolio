import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_comcc6f",
      "template_9410hwj",
      form.current,
      "2IFr9z47dbrtw3Whp"
    )
    .then(() => {
      alert("Message Sent!");
    })
    .catch((error) => {
      console.log(error);
    });

    e.target.reset();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#240046",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}
    >

      <h1>Contact Me</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={{ padding: "15px" }}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          style={{ padding: "15px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{
            padding: "15px",
            height: "150px"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "15px",
            background: "#9d4edd",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Send Message
        </button>

      </form>
      <div
  style={{
    marginTop: "40px",
    textAlign: "center",
    color: "white"
  }}
>
  <h2>Thank You for Visiting!</h2>

  <p>
    © Designed and Developed by Gayathri Bharathi
  </p>
</div>

    </div>
  );
}