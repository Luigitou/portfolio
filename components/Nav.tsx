'use client';

import classNames from 'classnames';
import { jost } from '@/assets';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Nav() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const currentPath = usePathname();

    const handleScroll = (href: string) => {
        if (currentPath === '/contact') {
            // redirect to home page if not on home page
            window.location.href = href;
            return;
        }

        const element = document.getElementById(href.slice(2));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getActiveSection = () => {
        const articles = document.querySelectorAll('article');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        articles.forEach((article) => {
            observer.observe(article);
        });

        return () => {
            articles.forEach((article) => {
                observer.unobserve(article);
            });
        };
    };

    useEffect(() => {
        getActiveSection();
    }, []);

    return (
        <div
            className={
                'fixed right-0 top-0 flex h-dvh w-20 flex-col items-center justify-center'
            }
        >
            <div
                className={classNames(
                    'flex h-3/4 flex-col items-center justify-center gap-32 border-l-[1px] border-white border-opacity-50 text-sm text-white',
                    jost.className
                )}
            >
                {pages.map((page, index) => (
                    <a
                        key={page.href}
                        onClick={() => handleScroll(page.href)}
                        className={classNames(
                            'rotate-90 cursor-pointer transition-opacity duration-150 hover:opacity-100 hover:after:w-3/4 hover:after:opacity-100 ' +
                                'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]' +
                                ' after:transition-all after:duration-300 after:ease-in-out',
                            activeSection === page.title.toLowerCase()
                                ? 'opacity-100'
                                : 'opacity-50'
                        )}
                    >
                        {page.title}
                    </a>
                ))}
            </div>
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
