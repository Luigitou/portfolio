import classNames from 'classnames';
import { jost } from '@/assets';
import { Landing, Work } from '@/components';

export default function Home() {
    return (
        <main
            className={classNames(jost.className, 'h-full w-full text-white')}
        >
            <article
                id={'home'}
                className={
                    'flex h-full grow flex-col items-center justify-center'
                }
            >
                <Landing />
            </article>
            <article
                id={'work'}
                className={'flex h-full w-full items-center justify-center'}
            >
                <Work />
            </article>
        </main>
    );
}
