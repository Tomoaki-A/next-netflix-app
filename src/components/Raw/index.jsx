import styles from "./Raw.module.scss";
import Image from "next/image";
import { IMAGE_DOMAIN } from "src/utils/fetchUrl";
import { useFetchMovie } from "src/hooks/useFetchMovie";

export const Raw = (props) => {
  const url = props.url;
  const { movies, error, isLoading } = useFetchMovie(url);

  const upperCase = (arg) => {
    const newTitle = arg.charAt(0).toUpperCase() + arg.slice(1);
    return newTitle;
  };
  const title = upperCase(props.title);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="loading">ERROR</div>;
  }

  return (
    <div className={styles.raw}>
      <h2 className={styles.raw__title}>{title}</h2>
      <div className={styles.list}>
        {movies
          ? movies.map((item, index) => {
              return (
                <div className={styles.list__item}>
                  <Image
                    key={index}
                    src={`${IMAGE_DOMAIN}${item.poster_path}?api_key=f7036a0037614a473cd5152290cc19c4`}
                    alt=""
                    width={200}
                    height={300}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
