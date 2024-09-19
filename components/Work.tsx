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
            <div
                className={
                    'relative flex h-full w-1/2 flex-col items-center justify-center gap-16'
                }
            >
                <section
                    className={
                        'flex h-full w-full flex-col justify-center gap-2'
                    }
                >
                    <span
                        className={classNames(
                            'flex items-end justify-between',
                            firstUpdate.current
                                ? null
                                : isAnimating
                                  ? 'animate-move-out'
                                  : 'animate-move-in'
                        )}
                    >
                        <a
                            href={config.PROJECTS[newActiveProject].url}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className={
                                'flex items-center justify-between gap-3'
                            }
                        >
                            <div
                                className={
                                    'flex h-full items-center justify-center'
                                }
                            >
                                {config.PROJECTS[newActiveProject].online ? (
                                    <span
                                        className={
                                            'mt-2 aspect-square w-2 rounded-full bg-green'
                                        }
                                    ></span>
                                ) : (
                                    <span
                                        className={
                                            'mt-2 aspect-square w-2 rounded-full bg-red-500'
                                        }
                                    ></span>
                                )}
                            </div>

                            <h2
                                className={classNames(
                                    'relative text-4xl font-black hover:after:w-3/4 hover:after:opacity-100 ' +
                                        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]' +
                                        ' after:transition-all after:duration-300 after:ease-in-out'
                                )}
                            >
                                {config.PROJECTS[newActiveProject].name}.
                            </h2>
                        </a>
                        <p className={classNames('text-xl italic')}>
                            {config.PROJECTS[newActiveProject].description}
                        </p>
                    </span>
                    <div
                        className={classNames(
                            'no-wrap flex aspect-video w-full overflow-hidden rounded-xl'
                        )}
                    >
                        {config.PROJECTS.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className={classNames(
                                        'relative aspect-video w-[100%] flex-shrink-0 transition-transform duration-700 ease-out'
                                    )}
                                    style={{
                                        transform: `translateX(-${100 * activeProject}%)`
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={`${project.name} background`}
                                        layout={'fill'}
                                        objectFit={'cover'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className={classNames(
                            'mt-5 flex items-center justify-center gap-4',
                            firstUpdate.current
                                ? null
                                : isAnimating
                                  ? 'animate-move-out-top'
                                  : 'animate-move-in-top'
                        )}
                    >
                        {config.PROJECTS[newActiveProject].techs.map(
                            (tech, index) => {
                                return (
                                    <a
                                        href={tech.url}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                        key={index}
                                        className={
                                            'flex items-center justify-center gap-2 rounded-full bg-white' +
                                            ' border-2 border-transparent bg-opacity-10 px-3 py-1 text-sm' +
                                            ' hover:border-white hover:border-opacity-10'
                                        }
                                    >
                                        <Image
                                            src={tech.icon}
                                            alt={`${tech.name} icon`}
                                            width={'25'}
                                            height={40}
                                        />
                                        {tech.name}
                                    </a>
                                );
                            }
                        )}
                    </div>
                </section>

                <div
                    className={
                        'left-50 absolute bottom-6 flex items-center justify-center'
                    }
                >
                    <span
                        className={
                            'cursor-pointer opacity-50 transition-opacity duration-150 ease-in hover:opacity-100'
                        }
                        onClick={handlePreviousProject}
                    >
                        <Image
                            src={'/caret.svg'}
                            alt={'previous projet'}
                            width={70}
                            height={50}
                        />
                    </span>
                    <div
                        className={
                            'flex w-1/2 items-center justify-center gap-[35px]'
                        }
                    >
                        {config.PROJECTS.map((project, index) => {
                            return (
                                <span
                                    key={index}
                                    className={classNames(
                                        'aspect-square h-3 rounded-full border-[1px] border-white',
                                        index === activeProject
                                            ? 'bg-white'
                                            : 'opacity-50',
                                        'cursor-pointer transition-all duration-150 ease-in-out',
                                        index !== activeProject
                                            ? 'hover:bg-white hover:opacity-50'
                                            : ''
                                    )}
                                    onClick={() => {
                                        setActiveProject(index);
                                    }}
                                ></span>
                            );
                        })}
                    </div>
                    <span
                        className={
                            'cursor-pointer opacity-50 transition-opacity duration-150 ease-in hover:opacity-100'
                        }
                        onClick={handleNextProject}
                    >
                        <Image
                            src={'/caret.svg'}
                            alt={'previous projet'}
                            width={70}
                            height={50}
                            className={'rotate-180'}
                        />
                    </span>
                </div>
            </div>
        </>
    );
}
