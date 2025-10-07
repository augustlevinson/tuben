interface DepartureProps {
	lineId: string;
	stationName: string;
	timeUntilDeparture: string;
}

export default function Departure({ lineId, stationName, timeUntilDeparture }: DepartureProps) {
	// This component displays a departure information line.
	// It includes the station name and the time until the next departure.

	return (
		<div className="grid grid-cols-24 w-full">
			<p className="col-span-4 font-display text-amber-500 text-lg sm:text-3xl">{lineId}</p>
			<p className="col-span-14 font-display text-amber-500 text-lg sm:text-3xl">{stationName}</p>
			<p className="col-span-6 font-display text-amber-500 text-lg sm:text-3xl text-end">
				{timeUntilDeparture}
			</p>
		</div>
	);
}
