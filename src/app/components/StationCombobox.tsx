"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { stations } from "@/app/data/stations";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface StationComboboxProps {
	value: string;
	onChange: (value: string) => void;
}

export default function StationCombobox({ value, onChange }: StationComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const selectedStation = stations.find((station) => station.id.toString() === value);
	const sortedStations = React.useMemo(
		() => [...stations].sort((a, b) => a.name.localeCompare(b.name)),
		[]
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between text-[1.5vw] h-auto py-2">
					{selectedStation ? (
						<span>
							{selectedStation.name}
							{selectedStation.abbreviation ? ` (${selectedStation.abbreviation})` : ""}
						</span>
					) : (
						"Select station..."
					)}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command
					filter={(value, search) => {
						const station = sortedStations.find((s) => s.id.toString() === value);
						if (!station) return 0;

						const searchLower = search.toLowerCase();
						const nameMatch = station.name.toLowerCase().includes(searchLower);
						const abbrMatch = station.abbreviation?.toLowerCase().includes(searchLower) || false;

						return nameMatch || abbrMatch ? 1 : 0;
					}}>
					<CommandInput placeholder="Search station..." />
					<CommandList>
						<CommandEmpty>No station found.</CommandEmpty>
						<CommandGroup>
							{sortedStations.map((station) => (
								<CommandItem
									key={station.id}
									value={station.id.toString()}
									onSelect={(currentValue) => {
										onChange(currentValue);
										setOpen(false);
									}}>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === station.id.toString() ? "opacity-100" : "opacity-0"
										)}
									/>
									{station.name}
									{station.abbreviation ? ` (${station.abbreviation})` : ""}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
