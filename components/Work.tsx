'use client';

import { config } from '@/assets';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function Work() {
    const [activeProject, setActiveProject] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [newActiveProject, setNewActiveProject] = useState(0);
    const firstUpdate = useRef(true);

    /*const isMobileTouchDevice = () => {
        const userAgent = navigator.userAgent;

        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            userAgent
        );
    };*/

    const handleNextProject = () => {
        if (isAnimating) {
            return;
        }
        if (activeProject === config.PROJECTS.length - 1) {
            setActiveProject(0);
            return;
        }
        setActiveProject(activeProject + 1);
    };

    const handlePreviousProject = () => {
        if (isAnimating) {
            return;
        }
        if (activeProject === 0) {
            setActiveProject(config.PROJECTS.length - 1);
            return;
        }
        setActiveProject(activeProject - 1);
    };

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        setIsAnimating(true);

        const timeout = setTimeout(() => {
            setNewActiveProject(activeProject);
            setIsAnimating(false);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [activeProject]);

    return (
        <>
            <div className="relative flex h-full w-11/12 flex-col items-center justify-center gap-8 xl:w-8/12 2xl:w-7/12">
                <section className="flex h-full w-full flex-col justify-center gap-4">
                    <span
                        className={classNames(
                            'flex flex-col items-start justify-between md:flex-row md:items-end',
                            firstUpdate.current
                                ? null
                                : isAnimating
                                  ? 'animate-move-out'
                                  : 'animate-move-in'
                        )}
                    >
                        <a
                            href={config.PROJECTS[newActiveProject].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-full items-center justify-center">
                                {config.PROJECTS[newActiveProject].online ? (
                                    <span className="mt-2 aspect-square w-2 rounded-full bg-green"></span>
                                ) : (
                                    <span className="mt-2 aspect-square w-2 rounded-full bg-red-500"></span>
                                )}
                            </div>

                            <h2
                                className={classNames(
                                    'relative text-2xl font-black hover:after:w-3/4 hover:after:opacity-100 sm:text-3xl md:text-4xl',
                                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]',
                                    'after:transition-all after:duration-300 after:ease-in-out'
                                )}
                            >
                                {config.PROJECTS[newActiveProject].name}.
                            </h2>
                        </a>
                        <p className="mt-2 text-base italic sm:text-lg md:mt-0 md:text-xl">
                            {config.PROJECTS[newActiveProject].description}
                        </p>
                    </span>
                    <div className="mt-4 flex aspect-video w-full overflow-hidden rounded-xl">
                        {config.PROJECTS.map((project, index) => (
                            <div
                                key={index}
                                className="relative aspect-video w-full flex-shrink-0 transition-transform duration-700 ease-out"
                                style={{
                                    transform: `translateX(-${100 * activeProject}%)`
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={`${project.name} background`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div
                        className={classNames(
                            'mt-5 flex flex-wrap items-center justify-center gap-2',
                            firstUpdate.current
                                ? null
                                : isAnimating
                                  ? 'animate-move-out-top'
                                  : 'animate-move-in-top'
                        )}
                    >
                        {config.PROJECTS[newActiveProject].techs.map(
                            (tech, index) => (
                                <a
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    className="flex items-center justify-center gap-2 rounded-full border-2 border-transparent bg-white bg-opacity-10 px-3 py-1 text-xs hover:border-white hover:border-opacity-10 sm:text-sm"
                                >
                                    <Image
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        width={20}
                                        height={20}
                                    />
                                    {tech.name}
                                </a>
                            )
                        )}
                    </div>
                </section>

                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
                    <button
                        className="cursor-pointer opacity-50 transition-opacity duration-150 ease-in hover:opacity-100"
                        onClick={handlePreviousProject}
                    >
                        <Image
                            src="/caret.svg"
                            alt="previous project"
                            width={50}
                            height={20}
                        />
                    </button>
                    {config.PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className={'flex w-12 items-center justify-center'}
                        >
                            <button
                                className={classNames(
                                    'aspect-square h-3 rounded-full border border-white',
                                    index === activeProject
                                        ? 'bg-white'
                                        : 'opacity-50',
                                    'cursor-pointer transition-all duration-150 ease-in-out',
                                    index !== activeProject
                                        ? 'hover:bg-white hover:opacity-50'
                                        : ''
                                )}
                                onClick={() => setActiveProject(index)}
                            ></button>
                        </div>
                    ))}
                    <button
                        className="cursor-pointer opacity-50 transition-opacity duration-150 ease-in hover:opacity-100"
                        onClick={handleNextProject}
                    >
                        <Image
                            src="/caret.svg"
                            alt="next project"
                            width={50}
                            height={20}
                            className="rotate-180"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}
