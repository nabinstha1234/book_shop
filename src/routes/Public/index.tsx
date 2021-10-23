import { useEffect, Suspense } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { Spinner } from 'components/Elements';

interface IProps extends RouteProps {}

const PublicRoute = (props: IProps) => {
  const history = useHistory();

  /*
  Later we need to access the user's token and check if it's valid.
  */
  const token = { token: '0557692809' };

  useEffect(() => {
    if (token?.token) {
      history.push('/');
    }
  }, [history, token?.token]);

  if (token?.token) {
    return null;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Route {...props} />
    </Suspense>
  );
};

export default PublicRoute;
