"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
	{
		question: "À quelle heure doit-on arriver ?",
		answer:
			"Nous vous demandons d'arriver 15 minutes avant le début de chaque cérémonie. Pour la cérémonie civile, merci d'être présent à 13h45, et pour la cérémonie laïque à 16h45.",
	},
	{
		question: "Y a-t-il un code vestimentaire ?",
		answer:
			"Nous vous recommandons une tenue élégante et confortable. Pour les dames, évitez les talons aiguilles si possible car une partie de la réception se déroule en extérieur. La couleur blanche est réservée à la mariée.",
	},
	{
		question: "Puis-je venir accompagné(e) ?",
		answer:
			"Les invitations sont nominatives. Si vous souhaitez venir accompagné(e) et que cela n'est pas précisé sur votre invitation, merci de nous contacter avant de confirmer votre présence.",
	},
	{
		question: "Où puis-je me garer ?",
		answer:
			"Un parking gratuit est disponible au domaine. Des indications seront affichées à l'entrée pour vous guider.",
	},
	{
		question: "Y a-t-il des options d'hébergement à proximité ?",
		answer:
			"Oui, nous avons réservé des chambres dans plusieurs hôtels à proximité. Vous trouverez la liste complète et les codes de réduction sur la page 'Informations pratiques'.",
	},
	{
		question: "Les enfants sont-ils les bienvenus ?",
		answer:
			"Nous aimons beaucoup les enfants, cependant nous avons choisi de célébrer cette journée entre adultes. Nous espérons que vous comprendrez et profiterez de cette soirée pour vous détendre.",
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