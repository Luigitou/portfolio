import classNames from 'classnames';
import { jost } from '@/assets';
import { About, Landing, Work } from '@/components';

export default function Home() {
    return (
        <main
            className={classNames(
                jost.className,
                'h-screen w-screen text-white'
            )}
        >
            <article
                id={'home'}
                className={'flex h-full flex-col items-center justify-center'}
            >
                <Landing />
            </article>
            <article
                id={'work'}
                className={'flex h-full w-full items-center justify-center'}
            >
                <Work />
            </article>
            <article
                id={'about'}
                className={'flex h-full w-full items-center justify-center'}
            >
                <About />
            </article>
        </main>
    );
}
