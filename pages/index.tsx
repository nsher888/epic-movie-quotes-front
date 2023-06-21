import Head from "next/head";
import { Header, Button, ImageSection } from "@/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Epic Movies</title>
			</Head>

			<div className="bg-black text-white">
				<Header />

				<main>
					<section className="min-h-screen flex flex-col items-center justify-center gap-6">
						<h1 className="text-orange-200  text-6xl text-center  leading-normal">
							Find any quote in <br />
							millions of movie lines
						</h1>
						<Button className="bg-red-600 inline-block">
							Get Started
						</Button>
					</section>

					<ImageSection
						backgroundImage="assets/images/image1.png"
						text="“You have to leave somethig behind to go forward”"
						movietitle="The Interstellar, 2014"
					/>

					<ImageSection
						backgroundImage="assets/images/image2.png"
						text="I think we’re just gonna have
                        to be secretly in love with earch other
                        and leave it that"
						movietitle="The Royal Tenenbaums, 2001 "
					/>

					<ImageSection
						backgroundImage="assets/images/image3.png"
						text="I think we’re just gonna have
                        to be secretly in love with earch other
                        and leave it that"
						movietitle="The Royal Tenenbaums, 2001 "
					/>
				</main>
			</div>
		</>
	);
}
