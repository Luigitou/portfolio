import classNames from 'classnames';
import { parisienne } from '@/assets';

export function Signature() {
    return (
        <div className={classNames('')}>
            <span
                className={classNames(
                    parisienne.className,
                    'text-3xl text-white'
                )}
            >
                lb
            </span>
        </div>
    );
}
