import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-deep-black/80 backdrop-blur-lg border-b border-neon-purple/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="https://i.postimg.cc/VdQsx69Q/9b768131.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-white font-orbitron font-bold hover:text-neon-purple transition-colors">
            About
          </Link>
          <Link href="#socials" className="text-white font-orbitron font-bold hover:text-neon-purple transition-colors">
            Socials
          </Link>
          <Link href="#contact" className="text-white font-orbitron font-bold hover:text-neon-purple transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
