import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/ironhelp"
        );
        setTopics([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTopics();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/ironhelp/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section>
      <Link to="/create-topic">
        <button type="button">Crie um topico!</button>
      </Link>
      {topics.map((currentTopic) => {
        return (
          <div className="topic-card" key={currentTopic._id}>
            <h2>{currentTopic.title}</h2>
            <p>{currentTopic.body}</p>
            <Link to={`/edit-topic/${currentTopic._id}`}>
              <button type="button">Edite esse topico!</button>
            </Link>
            <button
              type="button"
              onClick={() => {
                handleDelete(currentTopic._id);
              }}
            >
              Delete esse topico
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Home;
