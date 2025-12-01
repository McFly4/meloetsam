import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div>
			{/* Section Galerie */}
			<div className="flex h-[545px] gap-1">
				{/* Grande image à gauche */}
				<div className="relative w-[35%]">
					<Image
						src="/gallery/photo1.jpg"
						alt="Photo couple 1"
						fill
						className="object-cover"
					/>
				</div>

				{/* Colonne centrale avec 4 images */}
				<div className="flex flex-col w-[30%] gap-1">
					{/* Ligne du haut */}
					<div className="flex h-1/2 gap-1">
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
					<div className="flex h-1/2 gap-1">
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
				<div className="flex w-[35%] gap-1">
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

			<div className="font-[family-name:var(--font-playfair-display)] px-[120px] py-[30px] flex justify-between">
				<p className="text-xl">Mélodie & Samuel</p>
				<Link className="text-[20px] font-medium underline" href="/rsvp">
					Confirmer ma présence
				</Link>
			</div>
		</div>
	);
}