import Link from 'next/link'

export default function Button({
	children,
	onClick,
}: Readonly<{
	children: React.ReactNode;
	onClick: string;
}>) {
	return (
		<Link href={onClick} className="text-[#494949] px-[17px] py-[14px] bg-[#F0F0F0] border border-[#9B8C7C] w-fit font-[family-name:var(--font-playfair-display)] font-medium ">
			{children}
		</Link>
	);
}