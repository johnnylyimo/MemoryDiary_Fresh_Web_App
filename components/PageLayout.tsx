import { Head } from "$fresh/runtime.ts";
import Header from "./Header.tsx";

export default function PageLayout({children, title}:{children:any, title:string}) {
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