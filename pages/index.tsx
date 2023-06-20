import Head from "next/head";
import { Header, Button } from "@/components";

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
				</main>
			</div>
		</>
	);
}
