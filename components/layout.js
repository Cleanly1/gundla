import Link from "next/link";
import Head from "next/head";
import Navigation from "./navigation";
import MobileNav from "./mobileNav";

function Layout(props, { children }) {
	return (
		<main>
			<Head>
				<title>{props.title || "Gundla"}</title>
			</Head>
			<Navigation />
			<MobileNav />
			<div>{children}</div>
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					overflow: hidden;
				}
			`}</style>
		</main>
	);
}

export default Layout;
