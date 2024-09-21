'use client';

import classNames from 'classnames';
import { jost } from '@/assets';
import Image from 'next/image';

export function About() {
    const downloadFile = (filePath: string = '/CV.pdf') => {
        const link = document.createElement('a');
        link.href = filePath;
        const fileName = filePath.split('/').pop();
        if (!fileName) {
            return;
        }
        link.download = fileName;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section
                className={classNames(
                    'mx-auto mt-16 flex w-11/12 flex-col justify-center gap-6 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2',
                    jost.className
                )}
            >
                <h2
                    className={
                        'relative w-fit text-3xl font-black text-white ' +
                        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""] sm:text-4xl md:text-5xl'
                    }
                >
                    About Me.
                </h2>
                <div
                    className={'flex flex-col gap-4 text-base leading-relaxed'}
                >
                    <p>
                        Hello everyone, <br />I am Louis Bellefemine, a
                        <strong className="font-semibold">
                            {' '}
                            freelance full-stack developer
                        </strong>{' '}
                        specialized in{' '}
                        <strong className="font-semibold italic">
                            React, NestJS and TypeScript
                        </strong>
                        .
                    </p>
                    <p>
                        With 4 years of experience at major companies such as
                        <strong className="font-semibold">
                            {' '}
                            Daimler Truck
                        </strong>{' '}
                        (Mercedes-Benz brand) and{' '}
                        <strong className="font-semibold"> Stormshield</strong>,
                        I have had the opportunity to work in complex
                        environments with high expectations.
                        <br />
                        Over these years, I have progressed to take on
                        increasing responsibilities, eventually becoming the
                        <strong className="font-semibold">
                            {' '}
                            front-end lead
                        </strong>{' '}
                        of the team I was part of.
                    </p>
                    <p>
                        Today, I aim to offer these skills to my clients and
                        help them develop{' '}
                        <strong className="font-semibold">
                            web applications
                        </strong>{' '}
                        that perfectly meet their needs.
                        <br />
                        I am now seeking new challenges to further refine my
                        skills and explore new working environments.
                        <br />
                        If you&apos;re looking for a{' '}
                        <strong className="font-semibold">
                            versatile, autonomous full-stack developer
                        </strong>{' '}
                        who can quickly{' '}
                        <strong className="font-semibold">
                            adapt to any situation
                        </strong>
                        , don&apos;t hesitate to contact me via my Malt profile,
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
                        'flex w-full items-center justify-center gap-2 rounded-full bg-white bg-opacity-10 lg:w-fit ' +
                            'border-2 border-transparent px-4 py-2 transition-colors duration-300 hover:border-white hover:border-opacity-10',
                        'md:text-md mb-4 text-sm sm:text-base'
                    )}
                    onClick={() => downloadFile('/CV.pdf')}
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
