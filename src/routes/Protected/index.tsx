import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Spinner } from 'components/Elements';
import Footer from 'components/Footer';
import Header from 'components/Header';

interface IProps extends RouteProps {}

const AuthenticatedRoute = (props: IProps) => {
  /*
    TODO: Add a check to see if the user is authenticated. Roles cames from props. Check user group here in oreder to give right access to the particular route.
    */
  return (
    <Container fluid>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Route {...props} />
      </Suspense>
      <Footer />
    </Container>
  );
};

export default AuthenticatedRoute;
