import './global.css';

import { ErrorBoundary } from '@/components/error-boundary.tsx';
import { ThemeProvider } from '@/providers/theming.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { DashboardPage } from './pages/dashboard/index.tsx';
import { InboxPage } from './pages/inbox/index.tsx';
import { Layout } from './pages/layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    handle: {
      crumb: {
        title: 'Home',
      },
    },
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        handle: {
          crumb: {
            title: 'Dashboard',
          },
        },
      },
      {
        path: 'inbox',
        element: <InboxPage />,
        handle: {
          crumb: {
            title: 'Inbox',
          },
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
