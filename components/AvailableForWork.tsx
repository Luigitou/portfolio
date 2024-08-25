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
                    'flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white bg-opacity-10 px-8 py-2'
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
