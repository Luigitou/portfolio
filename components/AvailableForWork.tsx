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
                target="_blank"
                rel="noopener noreferrer"
            >
                <span
                    className={'aspect-square w-3 rounded-full bg-green'}
                ></span>
                <h2>Available for work</h2>
            </a>
        </div>
    );
}
