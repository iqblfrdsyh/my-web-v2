import { Container } from "react-bootstrap";
import axios from "axios";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import "./secreto.css";

const SecretoChat = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [times, setTime] = useState("");

  const saveMessage = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://data.mongodb-api.com/app/data-drebe/endpoint/addMessage",
        {
          name,
          message,
          times,
        }
      );
      setTime(moment().format("LLL"));

      setName("Anonymous");
      setMessage("");
      getMessage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    try {
      const res = await axios.get(
        "https://data.mongodb-api.com/app/data-drebe/endpoint/getMessage"
      );
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="secreto-chat">
      <a href="/">
        <i className="bi bi-arrow-left-circle"></i>
      </a>
      <h1>
        Iqbal <span style={{ color: "slateblue" }}>Message</span>
      </h1>
      <Container>
        <form onSubmit={saveMessage}>
          <div class="Inputmessage">
            <input
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInvalid={(e) => {
                e.target.setCustomValidity("Message cannot be empety");
              }}
              onInput={(e) => {
                e.target.setCustomValidity("");
              }}
            />
            <span class="highlight"></span>
            <span class="bar"></span>

            <label>Give Message</label>
            <button className="btn btn-primary btn-md">Submit</button>
          </div>
        </form>
        <div className="boxMessage">
          <div className="container mt-1">
            {messages.map((mess) => {
              return (
                <div className="row">
                  <div className="col d-flex border-bottom pt-3 pb-2">
                    <div className="photo">
                      <div className="profile" />
                    </div>
                    <div className="message ms-2">
                      <h5 className="opacity-50">Anonymous</h5>
                      <p>{mess.message}</p>
                      <div
                        className="time"
                        style={{
                          fontSize: "15px",
                          opacity: "0.4",
                          marginTop: "-10px",
                        }}
                      >
                        <p style={{ color: "red" }}>{mess.times}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecretoChat;
