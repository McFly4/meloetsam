import Image from "next/image";
import Faq from "@/components/Faq";

export default function Page(){
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
					FAQ
				</h1>
			</div>
			<div className="mt-[60px] mb-[60px]">
			<Faq />
			</div>
		</div>
	)
}