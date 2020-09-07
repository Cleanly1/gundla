import Link from "next/link";
import Head from "next/head";

export default function Layout(props, { children }) {
	return (
		<main>
			<Head>
				<title>{props.title || "Gundla"}</title>
			</Head>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="about">
					<a>About</a>
				</Link>
				<Link href="contact">
					<a>Contact</a>
				</Link>
				<Link href="events">
					<a>Events</a>
				</Link>
				<Link href="menu">
					<a>Menu</a>
				</Link>
			</nav>
			<div>{children}</div>
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
				}
			`}</style>
		</main>
	);
}
