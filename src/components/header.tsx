import { InputIcon } from '@/components/input-icon';
import { SearchIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-28 border-b border-gray-1 dark:border-dark-1 px-5">
      <InputIcon
        placeholder="Search here..."
        icon={<SearchIcon className="h-4 w-4 ml-3 text-blue" />}
        className="border-0 rounded-xl text-xs dark:bg-dark-1 pl-12 w-[250px] focus-visible:ring-0"
      />
    </header>
  );
};
