import Link from 'next/link';
import Image from 'next/image';

export default function BackButton() {
  return (
    <Link 
      href="/" 
      aria-label="Back to home"
      className="inline-flex items-center gap-2 mb-6 md:mb-40 hover:opacity-80 transition-opacity duration-200"
    >
      <Image src="/back.svg" alt="Back" width={24} height={24} priority />
      <span className="lato-bold text-sm md:text-base text-[var(--charcoal)]">Back</span>
    </Link>
  );
} 