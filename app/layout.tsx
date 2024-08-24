import type { Metadata } from 'next';
import './globals.css';
import classNames from 'classnames';
import { AvailableForWork, Flare } from '@/components';
import { jost } from '@/assets';
import { Signature } from '@/components/Signature';

export const metadata: Metadata = {
    title: 'Louis Bellefemine',
    description:
        "My personal portfolio website. I'm a fullstack web developer with a focus on React / Next / TypeScript."
};

const afterNoiseBackground = classNames(
    "after:content-[''] after:absolute after:top-0 after:h-full after:w-full after:bg-Noise after:-z-50 after:opacity-10"
);

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={classNames(
                    'relative h-screen w-screen bg-background',
                    jost.className,
                    afterNoiseBackground
                )}
            >
                <div
                    className={
                        'absolute left-1/2 top-1/2 aspect-video w-6/12 transform' +
                        ' z-0 -translate-x-1/2 -translate-y-1/2 opacity-10'
                    }
                >
                    <Flare />
                </div>
                <header
                    className={classNames(
                        'relative flex w-full items-center justify-between px-6 py-4'
                    )}
                >
                    <Signature />
                    <AvailableForWork />
                </header>
                {children}
            </body>
        </html>
    );
}
