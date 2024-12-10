import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';

export const Header = () => {
  return (
    <header className="flex items-center content-between h-24 border-b border-gray-3">
      <div className="ml-8">
        <Input placeholder="Pesquisar" />
      </div>

      <div className="mr-8">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt-BR">Português (PT)</SelectItem>
            <SelectItem value="en-US">English (US)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};
