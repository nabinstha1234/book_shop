import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, Spinner } from '../components/Elements';

const ErrorFallback = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <h2 className="text-danger">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="w-100 h-100 d-flex justfy-content-center align-items-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
    </React.Suspense>
  );
};
