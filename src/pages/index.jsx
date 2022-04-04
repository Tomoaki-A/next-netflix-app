import { Raw } from "src/components/Raw";
import { fetchUrl } from "src/utils/fetchUrl";

export default function Home() {
  return <Raw url={fetchUrl.trend} title={"trend"} />;
}
