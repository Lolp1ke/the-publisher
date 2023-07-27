import { ReactNode } from "react";

import Header from "@components/Header/Header";

interface LayoutProps {
	className: string;
	children: ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className={className}>{children}</main>;
		</>
	);
}
