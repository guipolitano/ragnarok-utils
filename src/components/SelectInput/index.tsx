"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

import { IGroupOption, IOption } from "@/@types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectInputProps {
  className?: string;
  value?: any;
  options: IGroupOption[];
  onSelect?: (e: string | number) => void;
}

export default function SelectInput({
  className,
  onSelect,
  options,
  value,
}: SelectInputProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<IOption>(
    options[0].options[0]
  );

  React.useEffect(() => {
    if (value) {
      setSelectedOption(
        options.map((e) => {
          const finded = e.options.find((o) => o.value === value);
          if (finded) {
            return finded;
          }
        })?.[0] || options[0].options[0]
      );
    }
  }, [value, options]);

  return (
    <React.Suspense>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a Job"
            className={cn("w-[200px] justify-between", className)}
          >
            {selectedOption.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Buscar..." />
              <CommandEmpty>Não encontrado</CommandEmpty>
              {options.map((option) => (
                <CommandGroup key={option.label} heading={option.label}>
                  {option.options.map((op) => (
                    <CommandItem
                      key={op.value}
                      onSelect={() => {
                        setSelectedOption(op);
                        setOpen(false);
                        onSelect?.(op.value);
                      }}
                      className="text-sm"
                    >
                      {op.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedOption.value === op.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </React.Suspense>
  );
}
