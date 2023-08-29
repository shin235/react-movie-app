// 여기서는 whole app component를 보여준다.
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year`
      )
    ).json();

    // 좀 더 간단히 위와 같이 쓰기.
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.3&sort_by=year`
    // );
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    // .then  사용. 하지만 asyn-await가 더 보편적. 이것은 함수가 필요하다. getMovies() 만들기.
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // ).then((response) =>
    //   response.json().then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false); // 이 부분 잊지말기. 로딩을 끝냈기 때문에 setLoading을 False로 만들어야한다.
    //   }) // 시작할 때 한번만 실행. 받아온 response에서 json 파일을 얻게 된다. 그리고나서(.then) 그 json 받아와서 console.log(json)으로 확인해보자.
    // );
    getMovies();
  }, []);
  // console.log(movies);
  return (
    // state로부터 받은 data 보여주기. 그 state는 data를 API로부터 받아온다.
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
