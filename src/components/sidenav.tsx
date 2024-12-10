import { Contact, Home, Mail } from 'lucide-react';

export const Sidenav = () => {
  return (
    <nav className="flex flex-col gap-4 w-20 border-r border-gray-3">
      <section className="p-5">
        <img src="./logo.svg" alt="Logo" />
      </section>

      <ul className="list-none flex flex-col gap-1 mt-8 w-full">
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-blue">
          <a href="#" className="text-sm font-medium text-blue">
            <Home className="text-blue" />
          </a>
        </li>
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-transparent hover:border-gray-3">
          <a href="#" className="text-sm font-medium text-blue">
            <Mail className="text-gray-3" />
          </a>
        </li>
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-transparent hover:border-gray-3">
          <a href="#" className="text-sm font-medium text-blue">
            <Contact className="text-gray-3" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
