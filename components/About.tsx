import classNames from 'classnames';
import { jost } from '@/assets';
import Image from 'next/image';

export function About() {
    return (
        <>
            <section
                className={classNames(
                    'flex h-full w-1/2 flex-col justify-center gap-8',
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
                <div className={'flex flex-col gap-4 leading-relaxed'}>
                    <p>
                        Hello everyone, <br />I am Louis Bellefemine, a
                        <strong> freelance full-stack developer</strong>.
                    </p>
                    <p>
                        With 4 years of experience at major companies such as
                        <strong> Daimler Truck</strong> (Mercedes-Benz brand)
                        and <strong> Stormshield</strong>, I have had the
                        opportunity to work in complex environments with high
                        expectations.
                        <br />
                        Over these years, I have progressed to take on
                        increasing responsibilities, eventually becoming the
                        <strong> front-end lead</strong> of the team I was part
                        of.
                    </p>
                    <p>
                        Today, I aim to offer these skills to my clients and
                        help them develop <strong>web applications</strong> that
                        perfectly meet their needs.
                        <br />
                        I am now seeking new challenges to further refine my
                        skills and explore new working environments.
                        <br />
                        If you&apos;re looking for a{' '}
                        <strong>
                            versatile, autonomous full-stack developer
                        </strong>
                        who can quickly <strong>adapt to any situation</strong>,
                        don&apos;t hesitate to contact me via my Malt profile,
                        LinkedIn, or by email.
                    </p>
                    <p>
                        Thank you for taking the time to read, and I look
                        forward to hearing from you.
                    </p>
                    <p>Louis</p>
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
