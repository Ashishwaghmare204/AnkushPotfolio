import '../styles/globals.css';
import '../styles/hero.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/sections.css';
import { Inter, Space_Grotesk } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
export const metadata = {
    title: 'Ankush Waghmare | EV Scooter & Two-Wheeler Specialist',
    description: 'Experienced EV scooter mechanic in PCMC Pune, Maharashtra. Honest diagnosis and reliable two-wheeler repairs.',
    openGraph: {
        images: [
            {
                url: 'https://bolt.new/static/og_default.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        images: [
            {
                url: 'https://bolt.new/static/og_default.png',
            },
        ],
    },
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
    <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>);
}
