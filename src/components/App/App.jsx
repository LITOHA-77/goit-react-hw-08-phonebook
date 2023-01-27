import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';

import AppBar from '../AppBar/AppBar';
import {
  getIsFetchCurrentUser,
  getIsAuth,
} from '../../redux/auth/auth-selectors';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Container from '../Container/Container';
import { getCurrentUser } from '../../redux/auth/auth-operations';

const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */
  ),
);
const Register = lazy(() =>
  import(
    '../../pages/Register/Register' /* webpackChunkName: "register-page" */
  ),
);
const Login = lazy(() =>
  import('../../pages/Login/Login' /* webpackChunkName: "login-page" */),
);
const Phonebook = lazy(() =>
  import(
    '../../pages/Phonebook/Phonebook' /* webpackChunkName: "phonebook-page" */
  ),
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <>
        
        <Container>
          <AppBar />
          <ToastContainer />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={<PublicRoute isAuth={isAuth} component={HomePage} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute isAuth={isAuth} component={Phonebook} />}
              />
              <Route
                path="/login"
                element={<PublicRoute isAuth={isAuth} component={Login} />}
              />
              <Route
                path="/register"
                element={<PublicRoute isAuth={isAuth} component={Register} />}
              />
            </Routes>
          </Suspense>
        </Container>
      </>
    )
  );
};

export default App;