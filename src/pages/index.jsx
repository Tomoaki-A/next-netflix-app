import { Raw } from "src/components/Raw";
import { fetchUrl } from "src/utils/fetchUrl";

export default function Home() {
  return (
    <div>
      {fetchUrl.map((i, index) => {
        return (
          <div key={index}>
            <Raw url={i.url} title={i.title} />
          </div>
        );
      })}
    </div>
  );
}
