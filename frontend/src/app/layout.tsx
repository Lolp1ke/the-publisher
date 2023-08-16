import type { ReactNode } from "react";
import type { Metadata, ServerRuntime } from "next";

import "@assets/styles/default.scss";
import "@assets/styles/general.scss";

export const metadata: Metadata = {
	title: "The publisher",
};

export const runtime: ServerRuntime = "nodejs";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
