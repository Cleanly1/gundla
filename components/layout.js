import Head from "next/head";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import Popup from "./MobilePopup";

function Layout(props) {
	return (
		<div className="body">
			<Head>
				<title>{props.title || "Gundla"}</title>
			</Head>

			<Navigation />
			<MobileNav />
			<div className="content">{props.children}</div>
			<Popup openHours={props.openHours} />
			<Footer openHours={props.openHours} />
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
					padding: 10px 0;
					padding-top: 13.5vh;
				}

				@media (min-width: 768px) {
					.content {
						padding-top: 0;
					}
				}
			`}</style>
		</div>
	);
}

export default Layout;

export async function getStaticProps() {
	console.log(posts);

	return {
		props: {
			posts,
		},
	};
}
