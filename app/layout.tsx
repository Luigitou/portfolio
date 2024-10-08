import type { Metadata } from 'next';
import './globals.css';
import classNames from 'classnames';
import {
    AvailableForWork,
    Flare,
    MobileProvider,
    MousePointer,
    Nav,
    Signature,
    Socials
} from '@/components';
import { jost } from '@/assets';

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
            <MobileProvider>
                <body
                    className={classNames(
                        'relative flex w-screen flex-col bg-background',
                        jost.className,
                        afterNoiseBackground
                    )}
                    suppressHydrationWarning={true}
                >
                    <div
                        className={
                            'fixed left-1/2 top-1/2 aspect-video w-6/12 transform' +
                            ' -z-50 -translate-x-1/2 -translate-y-1/2 opacity-10'
                        }
                    >
                        <Flare />
                    </div>
                    <header
                        className={classNames(
                            'fixed top-0 z-50 flex w-full grow-0 items-center justify-between bg-opacity-0 px-6 py-4 backdrop-blur'
                        )}
                    >
                        <Signature />
                        <AvailableForWork />
                    </header>
                    <div
                        className={
                            'flex grow items-center justify-between px-6'
                        }
                    >
                        <Socials />
                        {children}
                        <Nav />
                    </div>
                    <MousePointer />
                </body>
            </MobileProvider>
        </html>
    );
}
