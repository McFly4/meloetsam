export default function Header(){
	return (
		<div className="text-white z-30 absolute top-[30px] left-0 right-0 flex justify-center gap-[45px] pl font-[family-name:var(--font-playfair-display)]">
			<a className="text-[17px]" href="/programme">Programme</a>
			<a className="text-[17px]" href="/hebergement">Hebergement</a>
			<a className="text-[17px]" href="/faq">FAQ</a>
			<a className="text-[17px]" href="/rsvp">RSVP</a>
		</div>
	)
}