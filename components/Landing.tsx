import Image from 'next/image';

export function Landing() {
    return (
        <>
            <section className={'flex h-full flex-col justify-center gap-3'}>
                <span className={'pl-64 text-4xl font-light italic'}>
                    Hey !
                </span>
                <h1
                    className={
                        'relative text-8xl font-black ' +
                        'after:absolute after:left-full after:top-1/2 after:h-[2px] after:w-16 after:bg-white after:opacity-50 after:content-[""]'
                    }
                >
                    LOUIS BELLEFEMINE.
                </h1>
                <h2 className={'pl-32 text-4xl italic'}>
                    Freelance Front-End Developer
                </h2>
            </section>

            <aside className={'flex items-center justify-center gap-20'}>
                <Image
                    src={'/stormshield.jpg'}
                    alt={'Stormshield Logo'}
                    width={200}
                    height={100}
                />
                <Image
                    src={'/mercedes.png'}
                    alt={'Mercedes Benz Logo'}
                    width={200}
                    height={100}
                />
            </aside>
        </>
    );
}
