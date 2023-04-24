import PageLayout  from "../components/PageLayout.tsx";
import CreateDisplayMemory from "../islands/CreateDisplayMemory.tsx";


export default function Home() {
  return (
    <PageLayout title='Home | MemoryDiary'>
        <main>
            <CreateDisplayMemory />
        </main>
    </PageLayout>
  )
}
