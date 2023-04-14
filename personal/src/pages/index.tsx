import Image from "next/image";
import ekene from "../../public/Ekene.png";
import walter from "../../public/walter-image.jpeg";
import tesla from "../../public/tesla-image.png";
import Link from "next/link";


export default function Home() {
	return (
		<main className="bg-grey-1 bg-pattern1 ">
			<div className="max-w-7xl mx-auto">
				<nav className="text-base md:text-lg text-grey-2 pt-6 pl-4 w-max fixed top-0 right-4 z-10">
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
				<header className="h-screen flex flex-col items-center justify-center relative">
					<div className="relative">
						<h1 className="font-lato flex text-center leading-[0.8] font-medium text-grey-2 text-[16vw] md:text-[12vw] xl:text-[10vw] tracking-[-0.09em] -mt-[16px]">
							Ebube Aaron
						</h1>
						<p className="text-lg md:text-2xl md:py-2 text-right font-semibold capitalize text-yellow-7">
							Software developer
						</p>
						
					</div>
					
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 absolute bottom-4 text-white animate-bounce">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

				</header>
			</div>

			<section className="bg-black-6 text-white text-xl lg:text-2xl pt-10 pb-20" id="about">
				<h2 className=" text-center text-yellow-6 mb-4 text-3xl md:text-4xl font-semibold">
					About
				</h2>
				<p className="w-10/12 mx-auto max-w-2xl">
					I am a Software Developer, involved in building client and
					server web applications. I currently work with Typescript,
					Postgresql, Express, Reactjs, Nodejs, Redux, Redux Toolkit.
				</p>
			</section>

			<section className="py-10 lg:pb-16" id="works" >
			<h2 className=" text-center text-yellow-6 mb-4 text-3xl md:text-4xl font-semibold">
					Selected Works
				</h2>

				<div className="flex flex-col md:flex-row md:px-4 gap-2 items-center justify-center flex-wrap ">
					
					
						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-grey-2 w-[325px] md:w-[350px]  h-[425px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
							<a href="https://walter-clippers.vercel.app/" className="w-full block cursor-pointer">
								<Image src={walter} width={300} height={150} alt="walter clipper" />
							</a>
							<h3 className="text-lg lg:text-xl flex pt-4 text-slate-200 font-bold">
								Walter Clippers
							</h3>

							<p className="text-sm text-silver-700">
								Book a haircut appointment with walter
							</p>

							<p className="text-base text-slate-200 font-bold pt-2">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-sm  leading-none">
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">Typescript</span> <span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">reactjs</span>{" "}
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">redux</span> <span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">express js</span>{" "}
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">Postgresql</span>
							</div>
							<div className="flex justify-between pt-4 capitalize">
								<a className="flex gap-1 items-center hover:text-white cursor-pointer underline underline-offset-2" href="https://walter-clippers.vercel.app/">live demo <svg
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
								</svg></a>
								<a className="flex gap-1 items-center cursor-pointer hover:text-white underline underline-offset-2" href="https://github.com/jakusha/walter-clippers">source code <svg
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
								</svg></a>

							</div>
						</div>
					

						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-grey-2 w-[325px] md:w-[350px] h-[425px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
							<a href="https://tesla-dashboard-five.vercel.app/" className="w-full block cursor-pointer">
								<Image src={tesla} width={300} height={150} alt="telsa image"/>
							</a>
							<h3 className="text-lg lg:text-xl flex pt-4 text-slate-200 font-bold">
							Tesla Dashboard Simulator
							</h3>

							<p className="text-sm text-silver-700">
							A tesla model 3 dashboard simulator
							</p>

							<p className="text-base text-slate-200 font-bold pt-2">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-sm  leading-none">
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">javascript</span> <span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">reactjs</span>{" "}
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">leaflet</span> <span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">express js</span>{" "}
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">styled components</span>
							</div>
							<div className="flex justify-between pt-4 capitalize">
								<a className="flex gap-1 items-center hover:text-white cursor-pointer underline underline-offset-2" href="https://tesla-dashboard-five.vercel.app/">live demo <svg
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
								</svg></a>
								<a className="flex gap-1 items-center cursor-pointer hover:text-white underline underline-offset-2" href="https://github.com/jakusha/tesla-dashboard">source code <svg
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
								</svg></a>

							</div>
						</div>

						<div className="flex flex-col gap-0.5 bg-black-5 p-4 py-6 text-grey-2 w-[325px] md:w-[350px] h-[425px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
							<a href="https://ekene-designs.netlify.app/" className="w-full block cursor-pointer">
							<Image src={ekene} width={300} height={150} alt="ekene design"/>
							</a>
							<h3 className="text-lg lg:text-xl flex pt-4 text-slate-200 font-bold">
							Ekene Designs Portfolio
							</h3>

							<p className="text-sm text-silver-700">
							Portfolio website for Ekene designs
							</p>

							<p className="text-base text-slate-200 font-bold pt-2">Technologies:</p>

							<div className="capitalize flex flex-wrap gap-2 text-sm  leading-none">
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">javascript</span> <span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">reactjs</span>{" "}
								<span className="bg-slate-300 p-2 grid place-content-center text-grey-1 font-semibold rounded-md">sanity CMS</span> 
							</div>
							<div className="flex justify-between pt-14 capitalize">
								<a className="flex gap-1 items-center hover:text-white cursor-pointer underline underline-offset-2" href="https://ekene-designs.netlify.app/">live demo <svg
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
								</svg></a>
								

							</div>
						</div>

				
					
				</div>
				
			</section>

			<section className="bg-black-6 text-white text-2xl md:text-3xl pt-10 pb-10" id="contact">
			<h2 className=" text-center text-yellow-6 mb-4 text-3xl md:text-4xl font-semibold">
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
