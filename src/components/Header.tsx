export default function Header(){
	return (
		<div className="text-white z-30 absolute top-[20px] md:top-[30px] left-0 right-0 flex justify-center gap-[20px] md:gap-[45px] px-4 font-[family-name:var(--font-playfair-display)]">
			<a className="text-[14px] md:text-[17px]" href="/programme">Programme</a>
			<a className="text-[14px] md:text-[17px]" href="/hebergement">Hebergement</a>
			<a className="text-[14px] md:text-[17px]" href="/faq">FAQ</a>
			<a className="text-[14px] md:text-[17px]" href="/rsvp">RSVP</a>
		</div>
	)
}