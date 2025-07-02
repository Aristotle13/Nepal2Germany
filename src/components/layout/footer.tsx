import { Instagram, Mail, Music2, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Your guide for Nepali student's education in Germany.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/application-process" className="text-sm text-muted-foreground hover:text-primary">Application Process</Link></li>
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">Resources</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Connect With Us/Mail Us</h3>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon">
                <a href="https://www.instagram.com/nepal2germany?igsh=MXJ4YTFyOGVhYWZsOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.tiktok.com/@nepal2germany?is_from_webapp=1&sender_device=pc" target="_blank" aria-label="Tiktok">
                  <Music2 className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=nep2ger@gmail.com" target="_blank" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="https://wa.me/+9779827355425" target="_blank" rel="noopener noreferrer"  aria-label="WhatsApp">
                <MessageCircleMore className="h-5 w-5" />
               </a>
              </Button>
            </div>
            <h4 className='pt-2 pl-3 text-bold'>nep2ger@gmail.com</h4>
         
            
          </div>
         
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nepal2Germany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
