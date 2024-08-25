import { config } from '@/assets';
import Image from 'next/image';

export function Socials() {
    const socials = config.SOCIALS;

    return (
        <div className={'flex flex-col gap-12'}>
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                        'rounded-full border-[1px] border-white p-2 opacity-50 transition-opacity duration-150 hover:opacity-100'
                    }
                >
                    <Image
                        src={social.icon}
                        alt={social.name}
                        width={15}
                        height={15}
                    />
                </a>
            ))}
        </div>
    );
}
