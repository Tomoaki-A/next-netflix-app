import styles from "./Raw.module.scss";
import Image from "next/image";
import { IMAGE_DOMAIN } from "src/utils/fetchUrl";
import { useFetchMovie } from "src/hooks/useFetchMovie";

export const Raw = (props) => {
  const url = props.url;
  console.log(url);
  const { movies, error, isLoading } = useFetchMovie(url);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="loading">ERROR</div>;
  }

  return (
    <div className={styles.text}>
      <ul>
        {movies
          ? movies.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={`${IMAGE_DOMAIN}${item.backdrop_path}?api_key=f7036a0037614a473cd5152290cc19c4`}
                    alt=""
                    width={100}
                    height={100}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
