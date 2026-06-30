import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <p class="episode">{selectedEpisode.title}</p>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  function Episodes() {
    return (
      <section className="episodes">
        <h1 class="title">Dark Echoes</h1>
        <h2>Episodes</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
