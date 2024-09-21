import Image from 'next/image';

export function Landing() {
    return (
        <>
            <section className="mt-16 flex h-full flex-col justify-center gap-3">
                <span className="text-center text-2xl font-light italic sm:text-3xl md:text-4xl xl:pl-64 xl:text-left">
                    Hey !
                </span>
                <h1 className="relative text-center text-5xl font-black after:absolute after:left-full after:top-1/2 after:hidden after:h-[2px] after:w-12 after:bg-white after:opacity-50 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl xl:text-left xl:after:block">
                    LOUIS BELLEFEMINE.
                </h1>
                <h2 className="text-center text-xl italic sm:text-2xl md:text-3xl lg:text-4xl xl:pl-32 xl:text-left">
                    🇫🇷 Freelance FullStack Developer
                </h2>
            </section>

            <aside className="my-8 flex flex-wrap items-center justify-center gap-10">
                <Image
                    src="/stormshield.webp"
                    alt="Stormshield Logo"
                    width={150}
                    height={75}
                    className="opacity-50"
                />
                <Image
                    src="/mercedes.png"
                    alt="Mercedes Benz Logo"
                    width={150}
                    height={75}
                    className="opacity-20"
                />
            </aside>
        </>
    );
}
