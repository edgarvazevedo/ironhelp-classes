import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditTopic() {
  const params = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/ironhelp/${params.id}`
        );
        delete response.data._id;
        setTopic({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchTopic();
  }, [params.id]);

  function handleChange(event) {
    setTopic({
      ...topic,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.put(
        `https://ironrest.herokuapp.com/ironhelp/${params.id}`,
        topic
      );
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
