import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Page(){
	return (
		<div>
			<div className="relative w-full h-[280px] md:h-[445px]">
				<Image
					src="/programme/programHeader.jpg"
					alt="Programme Header"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/20" />
				<h1 className="absolute inset-0 flex items-center justify-center text-[36px] md:text-[64px] font-medium text-white z-10 font-[family-name:var(--font-playfair-display)] px-4">
					Hébergement
				</h1>
			</div>
			<p className="text-center font-medium font-[family-name:var(--font-playfair-display)] my-[40px] px-6">Vous trouverez de nombreux hébergements <br className="hidden md:block"/> entre 5 et 15 minutes en voiture de la Bona Venture.</p>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						La petite ferme
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">5min - 4km</p>
							<p className="text-[18px]">Gîte de 6 pers & 5 chambres d’hôtes</p>
							<br/>

							<p className="text-[18px]">Adresse: 2 Rte des Crêtes, 95510 Chérence</p>
							<p className="text-[18px]">Téléphone: 01 34 78 23 18/06 18 63 92 48</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://cherence-lapetiteferme.com">cherence-lapetiteferme.com</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 92€ pour les chambres et 330€ pour le gîte</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/1.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Maison desfourgeres et gite
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">5min - 4km</p>
							<br/>

							<p className="text-[18px]">Adresse: 4 Rue des Fosses, 27630 Fourges</p>
							<p className="text-[18px]">Téléphone: NC</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://https://www.booking.com/hotel/fr/au-fil-de-l-eau-vexin-sur-epte.fr.html?chal_t=1764616047825&force_referer=">Booking</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 109€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/2.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center ">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						B&B Les Agapanthes
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">5min - 3km</p>
							<br/>

							<p className="text-[18px]">Adresse: 26 Rue de Paris, 27620 Gasny</p>
							<p className="text-[18px]">Téléphone: 02 77 74 12 62</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://bblesagapanthesgasnygiverny.com">Site Web: bblesagapanthesgasnygiverny.com</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 125€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/3.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Le moulin de Fourges
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">5min - 4km</p>
							<br/>

							<p className="text-[18px]">Adresse: 38 rue du Moulin, 27530 Vexin-sur-Epte</p>
							<p className="text-[18px]">Téléphone: 02 32 52 12 12</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://moulindefourges.com">Site Web: moulindefourges.com</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 90€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/4.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center ">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Logis Hôtel les Bords de Seine
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">6min - 4km</p>
							<br/>

							<p className="text-[18px]">Adresse: 21 Rue du Dr Duval, 95780 La Roche-Guyon</p>
							<p className="text-[18px]">Téléphone: 01 30 98 32 52</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://logishotel.com">Site Web: logishotel.com</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 109€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/5.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						B&B "L'Orée de Giverny"
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">10min - 8km</p>
							<br/>

							<p className="text-[18px]">Adresse: 17 Rue de l'Eau, 78270 Limetz-Villez</p>
							<p className="text-[18px]">Téléphone: 06 25 99 44 84</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://giverny-rent.fr">Site Web: giverny-rent.fr</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 160€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/6.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center ">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Le Clos de Chaussy
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">10min - 9km</p>
							<br/>

							<p className="text-[18px]">Adresse: 18 Rte de Villers, 95710 Chaussy</p>
							<p className="text-[18px]">Téléphone: 01 34 21 76 04</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://leclosdechaussy.fr">Site Web: leclosdechaussy.fr</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 127€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/7.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Le Jardin des Plumes
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">10min - 9km</p>
							<br/>

							<p className="text-[18px]">Adresse: 1 Rue du Milieu, 27620 Giverny</p>
							<p className="text-[18px]">Téléphone: 02 32 54 26 35</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://jardindesplumes.fr">Site Web: jardindesplumes.fr</Link>
							</p>
							<br/><br/>
							<p className="text-[18px]">à partir de 119€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/8.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center ">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						La Véthinoise
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">11min - 8.5km</p>
							<br/>

							<p className="text-[18px]">Adresse: 22 Av. des Millonets, 95510 Vétheuil</p>
							<p className="text-[18px]">Téléphone: 06 60 91 53 67</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://lavethinoise.blogspot.fr">Site Web: lavethinoise.blogspot.fr</Link>
							</p>

							<br/><br/>
							<p className="text-[18px]">à partir de 95€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/9.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Les Rouges Gorges
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">11min - 9km</p>
							<br/>

							<p className="text-[18px]">Adresse: 6 rue aux juifs, 27620 Giverny</p>
							<p className="text-[18px]">Téléphone: 02 32 51 02 96</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://lesrougesgorges.com">Site Web: lesrougesgorges.com</Link>
							</p>

							<br/><br/>
							<p className="text-[18px]">à partir de 104€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/10.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						La villa de Vienne en Arthies
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">12min - 8.5km</p>
							<br/>

							<p className="text-[18px]">12 couchages repartis sur 4 chambres. PDJ inclus avec cuisine partagée.</p>
							<p className="text-[18px]">Adresse: 23 Chem. de la Vallée, 95510 Vienne-en-Arthies</p>
							<p className="text-[18px]">Téléphone: 06 03 17 92 31 (Fabienne)</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://villa-de-vienne-en-arthies.fr">Site Web: villa-de-vienne-en-arthies.fr</Link>
							</p>

							<br/><br/>
							<p className="text-[18px]">à partir de 90€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/11.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center lg:order-2">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						La Musardine en vexin
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">13min - 11km</p>
							<br/>

							<p className="text-[18px]">Adresse: 27 rue des Fontaines, 95420 Omerville</p>
							<p className="text-[18px]">Téléphone: 06 71 05 10 08</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://la-musardine-en-vexin.com">Site Web: la-musardine-en-vexin.com</Link>
							</p>

							<br/><br/>
							<p className="text-[18px]">à partir de 88€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/12.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-2/5 p-[20px] lg:p-16 flex flex-col justify-center ">
					<h2 className="text-2xl font-medium mb-8 font-[family-name:var(--font-playfair-display)]">
						Le Château de la Bûcherie
					</h2>

					<div className="space-y-6 mb-8 font-[family-name:var(--font-hind-vadodara)]">
						<div>
							<p className="font-medium text-xl mb-1">18min - 13km</p>
							<br/>

							<p className="text-[18px]">Adresse: 5 rue du Parc, 95510 Saint-Cyr-en-Arthies</p>
							<p className="text-[18px]">Téléphone: 01 34 76 92 09</p>
							<p className="text-[18px]">Site Web: {" "}
								<Link className="underline" target="_blank" href="https://domainedelabucherie.com">Site Web: domainedelabucherie.com</Link>
							</p>

							<br/><br/>
							<p className="text-[18px]">à partir de 112€</p>
						</div>
					</div>
				</div>

				<div className="relative w-full lg:w-3/5 h-[300px] md:h-[600px]">
					<Image
						src="/gites/12.png"
						alt="Mairie de Maisons-Alfort"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	)
}