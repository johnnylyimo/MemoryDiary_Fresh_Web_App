import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Header from "./Header.tsx";

export default function PageLayout({children, title}:{children:ComponentChildren, title:string}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="MemoryDiary's home page" />
            </Head>
            <main class='w-full h-full bg-[#E1BEE7]'> 
             {children}
            </main>
        </>
    )
}