import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef();
  const form = useRef();
  const [isVerified, setVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1zzwyda",
        "template_s2a681w",
        form.current,
        "sPQBPBVry3r0wJmrI"
      )
      .then(
        (result) => {
          alert("Form submitted! Will respond within 48 hours.");
          window.location.reload(false);
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleRecaptchaChange = () => {
    setVerified(true);
  };

  const handleRecaptchaExpired = () => {
    setVerified(false);
  };

  return (
    <form
      ref={form}
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 25px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "10px 0px",
        }}
      >
        <InputLabel
          className="contact-label"
          style={{ color: "white", fontFamily: "Press Start 2P" }}
        >
          From:
        </InputLabel>
        <TextField
          fullWidth
          required
          id="email"
          name="email"
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
      </div>
      <div
        style={{
          margin: "10px 0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <InputLabel
          className="contact-label"
          style={{ color: "white", fontFamily: "Press Start 2P" }}
        >
          Subject:
        </InputLabel>
        <TextField
          fullWidth
          required
          id="subject"
          name="subject"
          onChange={(e) => handleChange(e, setSubject)}
          value={subject}
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
      </div>
      <div
        style={{
          margin: "10px 0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <InputLabel
          className="contact-label"
          style={{ color: "white", fontFamily: "Press Start 2P" }}
        >
          Message:
        </InputLabel>
        <TextField
          fullWidth
          required
          id="message"
          name="message"
          onChange={(e) => handleChange(e, setMessage)}
          value={message}
          margin="normal"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
          multiline
        />
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Ld_7PokAAAAADcN4HUKS8IbBdJz1vYbITN2nBJy"
        onChange={handleRecaptchaChange}
        onExpired={handleRecaptchaExpired}
        style={{ margin: "20px 0px" }}
      />
      {isVerified && email && subject && message && (
        <Button onClick={sendEmail} type="submit" variant="contained">
          Submit
        </Button>
      )}
    </form>
  );
}
