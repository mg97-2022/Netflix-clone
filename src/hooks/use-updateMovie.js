import { useDispatch, useSelector } from "react-redux";
import useHttp from "./use-http";
import { myListActions } from "../store/myList";

const useUpdateMovies = () => {
  const dispatch = useDispatch();
  const { sendRequest, error, isLoading } = useHttp();
  const userIdToken = useSelector((state) => state.signin.idToken);

  const updateMovies = async (movie, method) => {
    await sendRequest({
      url: `https://netflix-mg97-default-rtdb.firebaseio.com/${userIdToken}.json`,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: movie,
    });

    const data = await sendRequest({
      url: `https://netflix-mg97-default-rtdb.firebaseio.com/${userIdToken}.json`,
    });

    const fetchedShows = [];
    for (const key in data) {
      fetchedShows.push(data[key]);
    }
    dispatch(myListActions.addToList(fetchedShows));
  };

  return { updateMovies, error, isLoading };
};

export default useUpdateMovies;
