import type { ReactNode } from "react";

import Protected from "@components/Protected/Protected";

interface LayoutProps {
	children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
	return <Protected>{children}</Protected>;
}
