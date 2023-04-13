import Image from "next/image";
import { Inter } from "next/font/google";
import ekene from "../../public/Ekene.png";
import walter from "../../public/walter-image.jpeg";
import tesla from "../../public/tesla-image.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="bg-grey-1 bg-pattern1 ">
			<div className="max-w-7xl mx-auto">
				<nav className="text-base md:text-lg text-yellow-6 pt-6 pl-4 w-max fixed top-0  z-10">
					<ul className="list-none border-2 border-black-6 capitalize flex gap-4 px-4 bg-grey-1">
					<Link href={"#about"} className=" cursor-pointer"><li className="py-1" >about</li></Link>
					<Link href={"#works"} className=" cursor-pointer">	<li className="border-x-2 border-black-6 px-2 py-1">
							Works
						</li></Link>
						<Link href={"#contact"} className=" cursor-pointer"><li className="py-1">Contact</li> </Link>
					</ul>
				</nav>
			</div>
			<div className="max-w-7xl mx-auto">
				<header className="h-half flex flex-col items-center justify-center relative">
					<div>
						<h1 className="font-lato flex text-center leading-[0.8] font-medium text-yellow-6 text-[16vw] md:text-[12vw] xl:text-[10vw] tracking-[-0.09em] -mt-[16px]">
							Ebube Aaron
						</h1>
						<p className="text-lg md:text-2xl md:py-2 text-right font-semibold capitalize text-yellow-7">
							Software developer
						</p>
					</div>
					<div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-6 absolute bottom-8  right-5"></div>
					<div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-6 absolute bottom-14 md:bottom-16 right-12 md:right-14"></div>
				</header>
			</div>

			<section className="bg-black-6 text-white text-2xl md:text-3xl pt-10 pb-20" id="about">
				<h2 className="text-3xl text-center text-yellow-6 mb-4">
					About
				</h2>
				<p className="w-10/12 mx-auto max-w-2xl">
					I am a Sotftware Developer, Involved in building client and
					server web applications. I currently work with Typescript,
					Postgresql, Express, Reactjs, Nodejs, Redux, Redux Toolkit.
				</p>
			</section>

			<section className="py-10" id="works" >
				<h2 className="text-3xl text-center text-yellow-6 mb-4 ">
					Selected Works
				</h2>

				<div className="flex flex-col md:flex-row md:px-4 gap-2 items-center justify-center">
					<a
						href="https://walter-clippers.vercel.app/"
						className="flex gap-3 px-0 py-2 w-[325px] md:w-[350px] h-[400px]"
						target="_blank"
						rel="noreferrer"
						data-splitbee-event="Click on Walter Clippers"
					>
						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-white">
							<div className="w-full flex items-center justify-center">
								<Image src={walter} width={300} height={150} alt="walter clipper"/>
							</div>
							<p className="underline  hover:decoration-dotted text-xl lg:text-2xl flex pt-4">
								Walter Clippers
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.22"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-5 h-5 "
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</p>

							<p className="text-base lg:text-lg text-silver-700  ">
								Book a haircut appointment with walter
							</p>

							<p className="text-lg lg:text-xl underline">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-base lg:text-lg leading-none">
								<span>Typescript</span> <span>reactjs</span>{" "}
								<span>redux</span> <span>express js</span>{" "}
								<span>Postgresql</span>
							</div>
						</div>
					</a>
					<a
						href="https://tesla-dashboard-five.vercel.app/"
						className="flex gap-3 px-0 py-2 w-[325px] md:w-[350px] h-[400px]"
						target="_blank"
						rel="noreferrer"
						data-splitbee-event="Click on"
					>
						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-white">
							<div className="w-full flex items-center justify-center">
								<Image src={tesla} width={300} height={150} alt="telsa image"/>
							</div>
							<p className="underline  hover:decoration-dotted text-xl lg:text-2xl flex pt-4">
								Tesla Dashboard Simulator
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.22"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-5 h-5 "
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</p>

							<p className="text-base lg:text-lg text-silver-700  ">
							A tesla model 3 dashboard simulator
							</p>

							<p className="text-lg lg:text-xl underline">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-base lg:text-lg leading-none">
								<span>javascript</span> <span>reactjs</span>{" "}
								<span>leaflet</span> <span>express js</span>{" "}
								<span>styled components</span>
							</div>
						</div>
					</a>
					<a
						href="https://ekene-designs.netlify.app/"
						className="flex gap-3 px-0 py-2 w-[325px] md:w-[350px] h-[400px]"
						target="_blank"
						rel="noreferrer"
						data-splitbee-event="Click on Ekene Designs"
					>
						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-white">
							<div className="w-full flex items-center justify-center">
								<Image src={ekene} width={300} height={150} alt="ekene design"/>
							</div>
							<p className="underline  hover:decoration-dotted text-xl lg:text-2xl flex pt-4">
								Ekene Designs Portfolio
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.22"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-5 h-5 "
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</p>

							<p className="text-base lg:text-lg text-silver-700  ">
								Portfolio website for Ekene designs
							</p>

							<p className="text-lg lg:text-xl underline">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-base lg:text-lg leading-3">
								<span>Javascript</span> <span>reactjs</span>{" "}
								 <span>Sanity CMS</span>
							</div>
						</div>
					</a>
					
				</div>
				
			</section>

			<section className="bg-black-6 text-white text-2xl md:text-3xl pt-10 pb-20" id="contact">
				<h2 className="text-3xl text-center text-yellow-6 mb-4 ">
					Contact
				</h2>

				<div className=" flex gap-4 items-center justify-center ">
					<a href="https://github.com/jakusha" className="flex gap-3 " target="_blank" rel="noreferrer" data-splitbee-event="Click on GitHub"><div className="flex flex-col gap-0.5"><div className="flex items-center gap-1"><p className="font-normal underline text-silver-600 hover:decoration-dotted  text-lg lg:text-2xl">GitHub</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-silver-600"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a>
					<a href="https://www.linkedin.com/in/ebube-aaron-4a073b193/" className="flex gap-3 " target="_blank" rel="noreferrer" data-splitbee-event="Click on GitHub"><div className="flex flex-col gap-0.5"><div className="flex items-center gap-1"><p className="font-normal underline text-silver-600 hover:decoration-dotted  text-lg lg:text-2xl">Linkedin</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-silver-600"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a>
					<a href="mailto:aaronebube123@gmail.com" className="flex gap-3 " target="_blank" rel="noreferrer" data-splitbee-event="Click on GitHub"><div className="flex flex-col gap-0.5"><div className="flex items-center gap-1"><p className="font-normal underline text-silver-600 hover:decoration-dotted  text-lg lg:text-2xl">Send Email</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.22" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-silver-600"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a>
				
				</div>
			</section>
		</main>
	);
}
