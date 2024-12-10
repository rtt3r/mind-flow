import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';

export const Root = () => {
  return (
    <div className="flex h-screen">
      <Sidenav />
      <main className="flex flex-col w-full">
        <Header />
        <section className="flex h-full w-full p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
