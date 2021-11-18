import axios from "axios";
import { useEffect, useState } from "react";

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

  return (
    <section>
      {topics.map((currentTopic) => {
        return (
          <>
            <h2>{currentTopic.title}</h2>
            <p>{currentTopic.body}</p>
          </>
        );
      })}
    </section>
  );
}

export default Home;
