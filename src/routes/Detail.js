import { useEffect } from "react";
import { useParams } from "react-router-dom"; // react router에서 제공하는 함수. URL에 있는 값을 반환해준다.
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
