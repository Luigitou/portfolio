import classNames from 'classnames';
import { jost } from '@/assets';
import { About, Landing, Work } from '@/components';

export default function Home() {
    return (
        <main
            className={classNames(jost.className, 'w-screen text-white')}
            id={'auto-scroll'}
        >
            <article
                id={'home'}
                className={'flex h-dvh flex-col items-center justify-center'}
            >
                <Landing />
            </article>
            <article
                id={'work'}
                className={'flex h-dvh w-full items-center justify-center'}
            >
                <Work />
            </article>
            <article
                id={'about'}
                className={'flex h-dvh w-full items-center justify-center'}
            >
                <About />
            </article>
        </main>
    );
}
