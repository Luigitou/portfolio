import { config } from '@/assets';
import classNames from 'classnames';

export function Work() {
    return (
        <>
            {config.PROJECTS.map((project, index) => (
                <section
                    key={index}
                    className={'flex h-full w-6/12 flex-col justify-center'}
                >
                    <span className={'flex items-end justify-between'}>
                        <a
                            href={project.url}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className={'flex items-end justify-between gap-3'}
                        >
                            <h1
                                className={classNames(
                                    'relative text-4xl font-black hover:after:w-3/4 hover:after:opacity-100 ' +
                                        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]' +
                                        'after:transition-all after:duration-300 after:ease-in-out'
                                )}
                            >
                                {project.name}.
                            </h1>
                        </a>
                        <p className={'text-xl italic'}>
                            {project.description}
                        </p>
                    </span>
                </section>
            ))}
        </>
    );
}
