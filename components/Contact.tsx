export function Contact() {
    return (
        <section
            className={
                'flex h-full w-full flex-col items-center justify-center gap-12'
            }
        >
            <h2
                className={
                    'relative w-fit text-4xl font-black text-white ' +
                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]'
                }
            >
                Contact Me.
            </h2>
            <div className={'flex flex-col gap-6'}>
                <p>
                    If you have any questions or feedback, please don&apos;t
                    hesitate to reach out to me. I&apos;m always happy to hear
                    from you!
                </p>
                <p>You can reach me on any of the following platforms:</p>
                <ul className={'list-disc pl-6'}>
                    <li>
                        <a
                            href={
                                'https://www.linkedin.com/in/louis-bellefemine/'
                            }
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href={'https://github.com/Luigitou'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href={
                                'https://www.malt.fr/profile/louisbellefemine?overview'
                            }
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            Malt
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
