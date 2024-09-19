'use client';

import { config } from '@/assets';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export function Work() {
    const [activeProject, setActiveProject] = useState(0);

    const handleNextProject = () => {
        if (activeProject === config.PROJECTS.length - 1) {
            setActiveProject(0);
            return;
        }
        setActiveProject(activeProject + 1);
    };

    const handlePreviousProject = () => {
        if (activeProject === 0) {
            setActiveProject(config.PROJECTS.length - 1);
            return;
        }
        setActiveProject(activeProject - 1);
    };

    return (
        <>
            <div
                className={
                    'relative flex h-full w-1/2 flex-col items-center justify-center gap-16'
                }
            >
                {config.PROJECTS.map((project, index) => {
                    if (index === activeProject) {
                        return (
                            <section
                                key={index}
                                className={
                                    'flex h-full w-full flex-col justify-center gap-2'
                                }
                            >
                                <span
                                    className={'flex items-end justify-between'}
                                >
                                    <a
                                        href={project.url}
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
                                            {project.online ? (
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
                                                    'after:transition-all after:duration-300 after:ease-in-out'
                                            )}
                                        >
                                            {project.name}.
                                        </h2>
                                    </a>
                                    <p className={'text-xl italic'}>
                                        {project.description}
                                    </p>
                                </span>
                                <div
                                    className={
                                        'aspect-video w-full rounded-xl bg-amber-50 opacity-50'
                                    }
                                ></div>
                                <div
                                    className={
                                        'mt-5 flex items-center justify-center gap-4'
                                    }
                                >
                                    {project.techs.map((tech, index) => {
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
                                    })}
                                </div>
                            </section>
                        );
                    }
                })}

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
