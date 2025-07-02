import Image from 'next/image';
import logo from '@/images/home/logo.png';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Nepal2Germany Logo"
        width={32} // Adjust width as needed
        height={32} // Adjust height as needed
        className="rounded-full" // Optional: adds a rounded shape
      />
      <span className="font-headline text-xl font-bold text-foreground">
        Nepal2Germany
      </span>
    </div>
  );
}
