"use client";
import { useEffect, useState } from "react";
import Departure from "./Departure";

interface DepartureApi {
	line: { designation: string };
	destination: string;
	display: string;
	stop_area: { name: string };
}

interface UpcomingDeparturesProps {
	station: string;
}

export default function UpcomingDepartures({ station }: UpcomingDeparturesProps) {
	const [departures, setDepartures] = useState<DepartureApi[]>([]);

	useEffect(() => {
		fetch(`https://transport.integration.sl.se/v1/sites/${station}/departures`)
			.then((res) => res.json())
			.then((data) => {
				setDepartures(data.departures.slice(0, 6));
			});
	}, [station]);

	return (
		<div className="flex flex-col gap-[6vw] items-center">
			<div className="flex gap-4 items-center flex-col bg-neutral-900 w-full p-[2vw] border-[0.5vw] border-neutral-600 rounded-[0.5vw]">
				{departures.map((dep, i) => (
					<Departure
						key={i}
						lineId={dep.line.designation}
						stationName={dep.destination}
						timeUntilDeparture={dep.display}
					/>
				))}
			</div>
		</div>
	);
}
