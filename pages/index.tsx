import Head from "next/head";
import { Header, Button, ImageSection } from "@/components";
import { Modal, LoginForm, RegistrationForm } from "@/components";
import { useState } from "react";

export default function Home() {
	const [isModalVisible, setModalVisible] = useState(false);
	const [activeForm, setActiveForm] = useState("");

	const openSignUpModal = () => {
		setModalVisible(true);
		setActiveForm("signup");
	};

	const openLogInModal = () => {
		setModalVisible(true);
		setActiveForm("login");
	};
	return (
		<>
			<Head>
				<title>Epic Movies</title>
			</Head>

			<div className="text-white bg-black">
				<Header onSignUp={openSignUpModal} onLogIn={openLogInModal} />

				<main>
					<section className="flex flex-col items-center justify-center min-h-screen gap-6">
						<h1 className="text-6xl leading-normal text-center text-orange-200">
							Find any quote in <br />
							millions of movie lines
						</h1>
						<Button className="inline-block bg-red-600">
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

			<Modal isVisible={isModalVisible}>
				{activeForm === "signup" && <RegistrationForm />}
				{activeForm === "login" && <LoginForm />}
			</Modal>
		</>
	);
}
