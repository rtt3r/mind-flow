import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Sidenav } from '../components/sidenav';

export const Root = () => {
  return (
    <main className="flex h-screen">
      <Sidenav />
      <div className="flex flex-col w-full">
        <Header />
        <section className="flex h-full w-full px-4 py-7">
          <Outlet />
        </section>
      </div>
    </main>
  );
};
