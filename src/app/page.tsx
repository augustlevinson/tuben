"use client";
import { useState } from "react";
import StationCombobox from "./components/StationCombobox";
import UpcomingDepartures from "./components/UpcomingDepartures";

export default function Home() {
	const [station, setStation] = useState("9144");

	return (
		<div className="flex flex-col font-sans min-h-screen p-8 gap-8">
			<main className="flex flex-col gap-8 row-start-2 items-center">
				<div className="flex flex-col gap-4 items-center">
					<StationCombobox value={station} onChange={setStation} />
				</div>
				<UpcomingDepartures station={station} />
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a href="https://augustlevinson.com">&copy; August Levinson</a>
			</footer>
		</div>
	);
}
