
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
            <label class='block text(md gray-900) font-medium mb-2'>
              Write new memory below
            </label>
            <textarea rows={4} class='block w-full text(base gray-900) p-2 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none placeholder-gray-500' placeholder='Write new memory here...'>
            </textarea>
            <button class='text-white text-2xl font-medium bg-[#ac5eb9dc] mt-6 px-3 py-2 rounded-lg hover:bg-[#800080]'>
              Save
            </button>
            <label class='block text(xl center) font-medium mt-4'>
              Remember the good times
            </label>
          </form >
        </section>
        <section class='max-w-screen-md lg:w-full mx-auto rounded-lg p-2'>
          <h1>
            Highlights
          </h1>

        </section>
      </div>
  );
}
