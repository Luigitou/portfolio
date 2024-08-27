import classNames from 'classnames';
import { jost } from '@/assets';

export function Nav() {
    return (
        <div
            className={classNames(
                'top-1/8 fixed right-0 flex h-3/4 w-20 flex-col items-center justify-center gap-32 border-l-[1px] border-white border-opacity-50 text-sm text-white',
                jost.className
            )}
        >
            {pages.map((page, index) => (
                <a
                    key={index}
                    href={page.href}
                    className={
                        'rotate-90 opacity-50 transition-opacity duration-150 hover:opacity-100 hover:after:w-3/4 hover:after:opacity-100 ' +
                        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]' +
                        'after:transition-all after:duration-300 after:ease-in-out'
                    }
                >
                    {page.title}
                </a>
            ))}
        </div>
    );
}

const pages = [
    {
        title: 'HOME',
        href: '/#home'
    },
    {
        title: 'WORK',
        href: '/#work'
    },
    {
        title: 'ABOUT',
        href: '/#about'
    }
];