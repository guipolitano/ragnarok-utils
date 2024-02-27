"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { jobData } from "@/data/job_table";
import { JobNames } from "@/@types";

const groups = [
  {
    label: "Aprendiz",
    jobs: Object.keys(jobData)
      .filter((job: string) => jobData[job as JobNames].category === "novice")
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Primeira Classe",
    jobs: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "first_job"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Segunda Classe",
    jobs: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "second_job"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Primeira Classe T.",
    jobs: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "first_job_trans"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Segunda Classe T.",
    jobs: Object.keys(jobData)
      .filter(
        (job: string) =>
          jobData[job as JobNames].category === "second_job_trans"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Expandidas",
    jobs: Object.keys(jobData)
      .filter((job: string) => jobData[job as JobNames].category === "expanded")
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
];

type Job = (typeof groups)[number]["jobs"][number];

interface JobSwitcherProps {
  className?: string;
  onSelect?: (e: JobNames) => void;
}

export default function SelectInput({ className, onSelect }: JobSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState<Job>(groups[0].jobs[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id="job"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a Job"
          className={cn("w-[200px] justify-between", className)}
        >
          {selectedJob.label}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Buscar..." />
            <CommandEmpty>Classe não encontrada</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.jobs.map((job) => (
                  <CommandItem
                    key={job.value}
                    onSelect={() => {
                      setSelectedJob(job);
                      setOpen(false);
                      onSelect?.(job.value as JobNames);
                    }}
                    className="text-sm"
                  >
                    {job.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedJob.value === job.value
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
  );
}
