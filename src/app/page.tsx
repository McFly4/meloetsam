import Image from "next/image";
import Button from "@/components/Button";

export default function HomePage() {
	return (
		<main className="h-screen w-full relative flex flex-col gap-2 justify-center items-center font-[family-name:var(--font-playfair-display)]">
			<Image
				src="/home.jpg"
				alt="Mélodie et Samuel"
				fill
				className="object-cover"
				priority
			/>

			<div className="absolute inset-0 bg-black/50" />

			<div className="relative z-10 flex flex-col gap-2 justify-center items-center text-white">
				<h1 className="text-[96px] font-[500] mb-[100px]">30 juin 2026</h1>
				<p className="text-[64px] font-medium">On se dit oui !</p>
				<p className="text-[35px] font-medium mb-[40px]">Mélodie & Samuel</p>
				<Button onClick="/rsvp">Confirmer ma présence</Button>
			</div>
		</main>
	);
}