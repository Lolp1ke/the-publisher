import { ReactNode } from "react";
import { Metadata } from "next";

import "@assets/styles/default.scss";

export const metadata: Metadata = {
	title: "The publisher",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
