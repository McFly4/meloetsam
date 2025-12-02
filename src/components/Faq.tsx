"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
	{
		question: "Quand devons-nous confirmer notre présence ?\n",
		answer:
			"Merci de confirmer votre présence avant le 15/02/25  via le formulaire RSVP sur le site.",
	},
	{
		question: "Comment se rendre à la mairie de Maisons-Alfort et où se garer ?",
		answer:
			"En transport :\n" +
			"RED D – Arrêt Maisons-Alfort/Alfortville – 5 minutes à pied de la mairie\n" +
			"Ligne 8 – Arrêt Maisons-Alfort Stade – 13 minutes à pied de la mairie\n" +
			"\n" +
			"En voiture, vous pouvez vous garer :\n" +
			"Parking gratuit  : Parking de la Mairie – avenue de la République  - 5 minutes à pied de la mairie\n" +
			"Parking Zone Bleue – En face du 63 avenue du Général de Gaulle – 1 minute à pied de la mairie\n" +
			"Places de stationnement également disponibles dans les rues Jean Jaurès, Maurice Lissac et Louise Lesieur et sur l’avenue de la République.\n",
	},
	{
		question: "Comment se rendre à la Bona Venture ?",
		answer:
			"En voiture :\n" +
			"L’idéal est de s’y rendre en voiture. Le trajet depuis la mairie de Maisons-Alfort prend environ 1h30 à 1h45.Vous pouvez également nous retrouver directement à la Bona Venture dès 16h45  si cela vous arrange. Un parking est disponible sur place.\n" +
			"\n" +
			"En transport : \n" +
			"Prendre la ligne J à Saint-Lazare et descendre à l’arrêt Bonnières. (environ 55 minutes de trajet) \n" +
			"Puis compter 15 minutes en taxi depuis la gare. \n" +
			"      Pour réserver un taxi, vous pouvez contacter la société Taxis Bonnières sur Seine au  01.30.93.28.81\n",
	},
	{
		question: "La cérémonie civile est-elle obligatoire ?",
		answer:
			"Pas du tout ! Vous êtes tous conviés, mais si vous préférez, vous pouvez nous rejoindre directement au domaine de la Bona Venture pour la cérémonie laïque qui aura lieu à 17h00.\n",
	},
	{
		question: "Peut-on venir avec nos enfants ?",
		answer:
			"Vos enfants sont les bienvenus à notre mariage \n" +
			"Merci de nous communiquer leur âge afin que nous puissions organiser au mieux. \n" +
			"Une baby-sitter sera prévue.\n",
	},
	{
		question: "Y a-t-il un dress code à respecter ?",
		answer:
			"Pas de dress code imposé ! L’essentiel, c’est que vous soyez à l’aise… et que vous puissiez danser jusqu’au bout de la nuit !\n",
	},
	{
		question: "Y aura-t-il des navettes ?",
		answer:
			"Il n’y aura pas de navettes mises en place.Le lieu est accessible en voiture, et un parking sera disponible sur place.Pensez à organiser vos trajets à l’avance, et pourquoi pas créer un groupe WhatsApp pour le covoiturage entre invités !\n" +
			"Si vous souhaitez réserver un taxi, vous pouvez contacter la société Taxis Bonnières sur Seine au  01.30.93.28.81\n",
	},
	{
		question: "Où peut-on dormir à proximité ?\n",
		answer:
			"Dans la rubrique « Hébergement », vous trouverez une liste de chambres disponibles, situées entre 5 et15 minutes en voiture de la Bona Venture Venture.",
	},
	{
		question: "Y a-t-il un brunch le lendemain ?\n",
		answer:
			"Oui ! Rendez-vous à 11h00 pour un moment convivial. Merci de nous confirmer votre présence.Et si vous souhaitez profiter de la piscine jusqu’à 16h00, pensez à prendre votre maillot de bain !",
	},
	{
		question: "Et si j’ai des allergies ou un régime alimentaire particulier ?\n",
		answer:
			"Merci de nous le signaler via le formulaire RSVP. Nous ferons notre possible pour adapter le menu.\n",
	},
	{
		question: "Avez-vous une liste de mariage ?\n",
		answer:
			"Votre présence est déjà un immense cadeau !Mais si vous souhaitez participer à notre voyage de noces, une urne sera à votre disposition le jour du mariage.\n",
	},
	{
		question: "Qui contacter en cas de questions le jour J ?\n",
		answer:
			"Le 30/06, nous risquons d’être un peu occupés 😊N’hésitez pas à contacter Stéphane au 06.20.00.17.07 ou Cherif au 06.51.06.97.23, nos supers témoins qui seront là pour vous aider !\n",
	},
	{
		question: "J’ai une autre question !\n",
		answer:
			"Écrivez-nous à l’adresse meloetsam@gmail.com ou contactez Mélodie au 07.60.87.27.11 et Samuel au 06.29.86.70.89Nous serons ravis de vous aider !\n",
	},
];

function AccordionItem({ question, answer, isOpen, onClick }: any) {
	return (
		<div className="bg-[#F8F8F8] rounded-lg">
			<button
				onClick={onClick}
				className="w-full py-6 px-6 flex justify-between items-center text-left  rounded-lg"
			>
        <span className="text-xl font-medium font-[family-name:var(--font-playfair-display)]">
          {question}
        </span>
				<ChevronDown
					className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-6 py-6 font-[family-name:var(--font-hind-vadodara)] ">
					{answer}
				</div>
			</div>
		</div>
	);
}

export default function Page() {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full">
			{/* FAQ Section */}
			<div className="mt-[60px] mb-[60px] max-w-4xl mx-auto px-6">
				<div className="flex flex-col gap-6">
					{faqData.map((faq, index) => (
						<AccordionItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}