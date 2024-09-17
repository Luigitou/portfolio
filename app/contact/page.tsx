import { Contact } from '@/components';
import classNames from 'classnames';
import { jost } from '@/assets';

export default function Page() {
    return (
        <main
            className={classNames(
                jost.className,
                'h-screen w-screen text-white'
            )}
        >
            <article
                className={'flex h-full w-full items-center justify-center'}
            >
                <Contact />
            </article>
        </main>
    );
}
