import Image from "next/image";
import Button from "@/components/Button";

export default function Page() {
	return (
		<div className="w-full">
			{/* Section header avec image de fond */}
			<div className="relative w-full h-[445px]">
				<Image
					src="/programme/programHeader.jpg"
					alt="Programme Header"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/20" />
				<h1 className="absolute inset-0 flex items-center justify-center text-[64px] font-medium text-white z-10 font-[family-name:var(--font-playfair-display)]">
					Programme
				</h1>
			</div>

			{/* Section Mardi 30 juin 2026 */}
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Mardi 30 juin 2026
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">14h00 CÉRÉMONIE CIVILE</p>
							<p className="text-[18px]">À la mairie de Maisons-Alfort</p>
							<p className="text-[18px]">118 avenue du Général de Gaulle</p>
							<p className="text-[18px]">94700 Maisons-Alfort</p>
						</div>

						<div>
							<p className="font-medium text-xl mb-1">17h00 CÉRÉMONIE LAÏQUE</p>
							<p className="text-[18px]">À la Bona Venture, Domaine des Aulnaies</p>
							<p className="text-[18px]">25 rue des Moulins</p>
							<p className="text-[18px]">95510 Amérincourt</p>
						</div>

						<div>
							<p className="font-medium text-xl">18h30-04h00 PLACE À LA FÊTE !</p>
						</div>
					</div>
					<Button onClick="/rsvp">Confirmer ma présence</Button>
				</div>

				<div className="relative w-full lg:w-3/5 h-[600px]">
					<Image
						src="/home.jpg"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			{/* Section Mercredi 1 juin 2026 */}
			<div className="flex flex-col lg:flex-row">
				{/* Colonne image (inversée sur desktop) */}
				<div className="relative w-full lg:w-3/5 h-[600px] order-2 lg:order-1">
					<Image
						src="/programme/program2.jpg"
						alt="Domaine des Aulnaies"
						fill
						className="object-cover"
					/>
				</div>

				{/* Colonne texte (inversée sur desktop) */}
				<div className="w-full lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Mercredi 1 juin 2026
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">11h00-16h00 BRUNCH</p>
							<p className="text-[18px]">À la Bona Venture, Domaine des Aulnaies</p>
						</div>

						<div>
							<p className="text-[18px] italic">
								Ps : Si vous le souhaitez, apportez votre maillot de bain pour un après-midi détente au bord de la piscine !
							</p>
						</div>
					</div>

					<Button onClick="/rsvp">Confirmer ma présence</Button>
				</div>
			</div>
		</div>
	);
}