import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import useHttp from "./hooks/use-http";
import { myListActions } from "./store/myList";

const HomePage = React.lazy(() => import("./pages/homePage/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/moviesPage/MoviesPage"));
const LoginPage = React.lazy(() => import("./pages/loginPage/LoginPage"));
const FirstStepOne = React.lazy(() =>
  import("./pages/getStarted/FirstStepOne/FirstStepOne")
);
const FirstStepTwo = React.lazy(() =>
  import("./pages/getStarted/FirstStepTwo/FirstStepTwo")
);
const ErrorPage = React.lazy(() => import("./pages/errorPage/ErrorPage"));
const MovieDetail = React.lazy(() => import("./pages/MovieDetail/MovieDetail"));
const MyList = React.lazy(() => import("./pages/myList/MyList"));

let isInitial = true;

function App() {
  const loggedIn = useSelector((state) => state.signin.loggedIn);
  const userIdToken = useSelector((state) => state.signin.idToken);
  const { sendRequest } = useHttp();
  const myList = useSelector((state) => state.myList.myList);
  const listChanged = useSelector((state) => state.myList.changed);
  const dispatch = useDispatch();

  // sending http req to update user list
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (listChanged) {
      sendRequest({
        url: `https://netflix-mg97-default-rtdb.firebaseio.com/${userIdToken}.json`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: myList,
      });
      dispatch(myListActions.resetListChanged());
    }
  }, [myList, userIdToken, sendRequest, listChanged, dispatch]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        {loggedIn && (
          <Route path="/shows">
            <Route index element={<MoviesPage />} />
            <Route path=":showId" element={<MovieDetail />} />
            <Route path="mylist" element={<MyList />} />
          </Route>
        )}
        <Route path="/signup/*">
          <Route path="registration" element={<FirstStepOne />} />
          <Route path="regform" element={<FirstStepTwo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
