import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div>
			{/* Section Galerie */}
			<div className="flex flex-col md:flex-row h-auto md:h-[700px] gap-1">
				{/* Grande image à gauche */}
				<div className="relative w-full md:w-[35%] h-[250px] md:h-auto">
					<Image
						src="/gallery/photo1.jpg"
						alt="Photo couple 1"
						fill
						className="object-cover"
					/>
				</div>

				{/* Colonne centrale avec 4 images */}
				<div className="flex flex-col w-full md:w-[30%] gap-1">
					{/* Ligne du haut */}
					<div className="flex h-[300px] md:h-1/2 gap-1">
						<div className="relative w-[45%]">
							<Image
								src="/gallery/photo2.jpg"
								alt="Photo couple 2"
								fill
								className="object-cover"
							/>
						</div>
						<div className="relative w-[55%]">
							<Image
								src="/gallery/photo3.jpg"
								alt="Photo couple 3"
								fill
								className="object-cover"
							/>
						</div>
					</div>

					{/* Ligne du bas */}
					<div className="flex h-[300px] md:h-1/2 gap-1">
						<div className="relative w-[55%]">
							<Image
								src="/gallery/photo4.jpg"
								alt="Photo couple 4"
								fill
								className="object-cover"
							/>
						</div>
						<div className="relative w-[45%]">
							<Image
								src="/gallery/photo5.jpg"
								alt="Photo couple 5"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Deux images portrait à droite */}
				<div className="flex w-full md:w-[35%] h-[250px] md:h-auto gap-1">
					<div className="relative w-1/2">
						<Image
							src="/gallery/photo6.jpg"
							alt="Photo couple 6"
							fill
							className="object-cover"
						/>
					</div>
					<div className="relative w-1/2">
						<Image
							src="/gallery/photo7.jpg"
							alt="Photo couple 7"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="font-[family-name:var(--font-playfair-display)] px-6 md:px-[120px] py-[30px] flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
				<p className="text-lg md:text-xl">Mélodie & Samuel</p>
				<Link className="text-lg md:text-[20px] font-medium underline" href="/rsvp">
					Confirmer ma présence
				</Link>
			</div>
		</div>
	);
}