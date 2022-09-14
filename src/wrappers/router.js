import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from 'react-router-dom';

function loadComponent(name) {
  name = name.split(':');
  if (name.length > 1) {
    name = name.join('');
  } else {
    name = name[0];
  }
  const Component = React.lazy(() => import(`../pages${name}`));
  return <Component />;
}

export default function index() {
  const rootRouter = [
    {
      url: '/',
      exact: true,
    },
    {
      url: "/pokemon/:id",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Switch>
            {rootRouter.map((el) => (
              <Route
                path={el.url}
                exact={el.exact || null}
                element={loadComponent(el.url)}
              />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
