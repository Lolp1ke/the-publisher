import { ReactNode } from "react";
import { Metadata, ServerRuntime } from "next";

import "@assets/styles/default.scss";
import "@assets/styles/general.scss";

export const metadata: Metadata = {
	title: "The publisher",
};

// export const runtime: ServerRuntime = "edge";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="kk">
			<body>{children}</body>
		</html>
	);
}
