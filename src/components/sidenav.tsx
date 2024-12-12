import { Contact, Home, Mail } from 'lucide-react';

export const Sidenav = () => {
  return (
    <nav className="flex flex-col gap-4 w-24 border-r border-gray-1 dark:border-dark-1">
      <section className="p-6">
        <img src="./logo.svg" alt="Logo" />
      </section>

      <ul className="list-none flex flex-col gap-4 mt-4 w-full">
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-blue">
          <a href="#" className="text-sm font-medium text-blue">
            <Home className="text-blue" size={24} />
          </a>
        </li>
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-transparent hover:border-gray-3">
          <a href="#" className="text-sm font-medium text-gray-3">
            <Mail className="text-gray-3" size={24} />
          </a>
        </li>
        <li className="flex items-center justify-center py-2 pl-2 pr-1 border-r-4 border-transparent hover:border-gray-3">
          <a href="#" className="text-sm font-medium text-gray-3">
            <Contact className="text-gray-3" size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
