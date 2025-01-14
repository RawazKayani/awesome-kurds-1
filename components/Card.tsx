import { KurdWithTopics } from "../kurds";
import { getPhoto } from "../utils";

export default function Card({ kurd }: { kurd: KurdWithTopics }) {
  return (
    <a className="card" href={kurd.link} target="_blank" rel="noreferrer">
      <img src={getPhoto(kurd)} alt={kurd.name} />
      <h1>{kurd.name}</h1>
      <p>{kurd.topics.join(", ")}</p>
      <div>
        {kurd.tags.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </a>
  );
}
