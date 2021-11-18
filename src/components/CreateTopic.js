import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateTopic() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    setTopic({
      ...topic,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("https://ironrest.herokuapp.com/ironhelp", topic);
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <form>
      <label htmlFor="title">Titulo: </label>
      <input
        id="title"
        value={topic.title}
        type="text"
        onChange={handleChange}
        name="title"
      />

      <label htmlFor="body">Descreva a sua duvida:</label>
      <textarea
        id="body"
        placeholder="Eu cai no VIM e não sei sair, me AJUDA!"
        value={topic.body}
        type="text"
        onChange={handleChange}
        name="body"
      />

      <button type="submit" onClick={handleSubmit}>
        Mande sua pergunta
      </button>
    </form>
  );
}
