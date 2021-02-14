import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';
import userRouter from '../../router/usresRouter';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import PublicRoute from '../PublicRoute/PublicRoute';

const NavigationsRouters = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {userRouter.map(router =>
          router.private ? (
            <PrivateRouter key={router.path} {...router} />
          ) : (
            <PublicRoute
              key={router.path}
              {...router}
              restricted={router.restricted}
            />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationsRouters;
