import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

export const BtnSubmit = () => {
  return (
    <>
      <Button as="input" type="submit" value="Sign in" size="sm" />
    </>
  );
};

export const BtnAdd = () => {
  return (
    <>
      <Button as="input" type="submit" value="Add contact" size="sm" />
    </>
  );
};

export const BtnLogOut = ({onClick}) => {
  return (
    <>
      <Button as="input" type="button" value="Log out" size="sm" onClick={onClick} />
    </>
  );
};