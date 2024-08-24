import classNames from 'classnames';
import { jost } from '@/assets';

export function AvailableForWork() {
    return (
        <div
            className={classNames(
                'flex w-full items-center justify-center text-white',
                jost.className
            )}
        >
            <button
                className={
                    'flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white bg-opacity-10 px-8 py-2'
                }
            >
                <span
                    className={'aspect-square w-3 rounded-full bg-green'}
                ></span>
                <h2>Available for work</h2>
            </button>
        </div>
    );
}
