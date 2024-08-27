'use client';

import classNames from 'classnames';
import { config, jost } from '@/assets';

export function AvailableForWork() {
    return (
        <div
            className={classNames(
                'flex w-full items-center justify-center text-white',
                jost.className
            )}
        >
            <a
                className={
                    'relative flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-white bg-white bg-opacity-10 px-8 py-2 hover:before:translate-x-[150%] hover:after:translate-x-[150%] ' +
                    'before:absolute before:right-1/2 before:top-0 before:h-full before:w-[150%] before:rotate-45 before:bg-green before:opacity-35 before:transition-transform before:duration-1000 before:ease-in-out before:content-[""]' +
                    ' after:absolute after:right-1/2 after:top-[140%] after:h-full after:w-[150%] after:rotate-45 after:bg-green after:opacity-25 after:transition-transform after:duration-1000 after:ease-in-out after:content-[""]'
                }
                href={config.AVAILABLE_FOR_WORK_REDIRECT_URI}
            >
                <span
                    className={classNames(
                        'aspect-square w-3 rounded-full',
                        config.AVAILABLE_FOR_WORK ? 'bg-green' : 'bg-red-500'
                    )}
                ></span>
                <h2>
                    {config.AVAILABLE_FOR_WORK
                        ? 'Available for work ! '
                        : 'Working for someone, somewhere !'}
                </h2>
            </a>
        </div>
    );
}
