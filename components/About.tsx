import classNames from 'classnames';
import { jost } from '@/assets';
import Image from 'next/image';

export function About() {
    return (
        <>
            <section
                className={classNames(
                    'flex h-full w-1/2 flex-col justify-center gap-12',
                    jost.className
                )}
            >
                <h2
                    className={
                        'relative w-fit text-4xl font-black text-white ' +
                        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]'
                    }
                >
                    About Me.
                </h2>
                <div className={'flex flex-col gap-6'}>
                    <p>
                        I&apos;m a freelance front-end developer based in Paris.
                        I&apos;m passionate about web development and I&apos;m
                        always looking for new challenges to push myself to the
                        next level. I&apos;m a self-taught developer and
                        I&apos;m always learning new things. I&apos;m also a big
                        fan of open-source projects and I&apos;m always looking
                        for ways to contribute to the community.
                    </p>
                    <p>
                        I&apos;m currently working on a project called Kusodu, a
                        modern multiplayer sudoku game. I&apos;m excited to be
                        able to contribute to this project and help make it even
                        better.
                    </p>
                </div>
                <button
                    className={classNames(
                        'flex w-fit items-center gap-2 rounded-full bg-white bg-opacity-10' +
                            ' border-2 border-transparent px-4 py-2 hover:border-white hover:border-opacity-10'
                    )}
                >
                    <Image
                        src={'/download.svg'}
                        alt={'Download my CV in PDF format'}
                        width={20}
                        height={20}
                    />
                    <span className={'pl-2'}>Curriculum Vitae</span>
                </button>
            </section>
        </>
    );
}
