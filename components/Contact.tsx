import Image from 'next/image';

export function Contact() {
    return (
        <section
            className={
                'flex h-full w-11/12 flex-col justify-center gap-4 xl:w-7/12'
            }
        >
            <h2
                className={
                    'relative w-fit text-4xl font-black text-white ' +
                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/4 after:bg-white after:opacity-50 after:content-[""]'
                }
            >
                Contact.
            </h2>
            <div
                className={
                    'flex w-full flex-col items-center justify-between gap-8 md:flex-row md:items-start'
                }
            >
                <form className={'flex h-full w-full flex-col gap-4 xl:w-1/2'}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full border-[1px] border-transparent border-b-white border-opacity-50 bg-black bg-opacity-50 px-4 py-2 text-sm placeholder:italic focus:border-white focus:border-opacity-50 focus:outline-none focus:ring-0"
                    />

                    <textarea
                        rows={5}
                        placeholder={'Your message'}
                        className="w-full border-[1px] border-transparent border-b-white border-opacity-50 bg-black bg-opacity-50 px-4 py-2 text-sm placeholder:italic focus:border-white focus:border-opacity-50 focus:outline-none focus:ring-0"
                    />
                    <button
                        className={
                            'flex w-full justify-center gap-2 rounded-lg border-2 border-transparent bg-white bg-opacity-10 px-8 py-2 text-sm hover:border-white hover:border-opacity-25 xl:w-fit'
                        }
                    >
                        <Image
                            src={'/send.svg'}
                            alt={'Send message'}
                            width={20}
                            height={20}
                        />
                        Send
                    </button>
                </form>

                <div className={'flex w-full flex-col gap-4 text-lg xl:w-1/2'}>
                    <p className={'font-bold'}>
                        Want to collaborate on a project or just have a chat ?
                    </p>
                    <p>
                        I&apos;m always open to new connections and
                        opportunities. <br />
                        Send me a message, and let&apos;s get the conversation
                        started.
                    </p>
                </div>
            </div>
        </section>
    );
}
