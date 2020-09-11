import Head from "next/head";
import Navigation from "./navigation";
import MobileNav from "./mobileNav";
import Footer from "./footer";

function Layout(props) {
	return (
		<div className="body">
			<Head>
				<title>{props.title || "Gundla"}</title>
			</Head>

			<Navigation />
			<MobileNav />
			<div className="content">{props.children}</div>
			<Footer />
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
				}

				.body {
					min-height: 100vh;
					max-width: 100vw;
					overflow: hidden;
				}

				.content {
					padding-top: 13.5vh;
				}

				@media (min-width: 770px) {
					.content {
						padding-top: 0;
					}
				}
			`}</style>
		</div>
	);
}

export default Layout;
