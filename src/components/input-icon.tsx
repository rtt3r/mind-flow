import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ComponentProps, forwardRef, ReactNode } from 'react';

interface InputIconProps extends ComponentProps<'input'> {
  icon: ReactNode;
}

const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            {icon}
          </div>
          <Input
            id="search"
            type="search"
            placeholder="Search..."
            className={cn('w-full rounded-lg bg-background pl-8', className)}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

InputIcon.displayName = 'InputIcon';

export { InputIcon };
