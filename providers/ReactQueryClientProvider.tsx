'use client';

import { useState } from 'react';

import {
  QueryClient,
  QueryClientProvider,
  QueryObserverOptions,
} from '@tanstack/react-query';

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            suspense: true,
          } as QueryObserverOptions,
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
