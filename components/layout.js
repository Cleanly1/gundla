import Head from "next/head";
import Navigation from "./navigation";
import MobileNav from "./mobileNav";
import Footer from "./footer";
import Popup from "./mobilPopup";

function Layout(props) {
	return (
		<div className="body">
			<Head>
				<title>{props.title || "Gundla"}</title>
			</Head>

			<Navigation />
			<MobileNav />
			<div className="content" style={{ zIndex: 1 }}>
				{props.children}
			</div>
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
					color: #4d4d4d;
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
