import { Fragment, ReactNode } from "react";

import { useUser } from "@hooks/user/useUser";

import Header from "@components/Header/Header";

interface LayoutProps {
	className: string;
	children: ReactNode;
}

export default async function Layout({ className, children }: LayoutProps) {
	const user = await useUser().then((props) => {
		return props.user;
	});

	return (
		<Fragment>
			<Header user={user} />
			<main className={className}>{children}</main>
		</Fragment>
	);
}
