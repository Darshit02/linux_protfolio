import { useEffect, useState } from "react";

export default function About() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Hello EveryOne</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
				My Name is Darshit Mistry. I am a software developer and UI Designer.
				I am passionate about web development and like to learn new things.
			</p>
		</div>
	);
}
