
export default function CreateDisplayMemory() {
  return (
      <div className="w-full h-screen flex flex-col lg:flex-row lg:justify-around gap-8 text-center p-4">
        <section class="max-w-screen-sm mx-auto lg:max-w-xxl rounded-lg p-2 bg-[#ce93d8] self-start">
          <h1 class="text-2xl font-bold uppercase pt-4 tracking-wide">
            Word of the day
          </h1>
          <p class='text-xl font-bold'>
            Today will be better than yesterday
          </p>
          <p class='text-xl font-medium mt-6'>
            Anytime something positive happens, make a note of it and come back to it later.
          </p>
          <form class='p-2 mt-6'>

          </form >
        </section>
      </div>
  );
}
