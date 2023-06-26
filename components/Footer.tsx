import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"
import IconPhone from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone.tsx"
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin-filled.tsx"


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class='w-full mb-0 p-4 mt-20 bg-[#ce93d8] grid md:grid-cols-5 gap-4'>
      <section class='md:col-span-2 flex flex-col items-center gap-1 text-center'>
      <img src="/brand.png" alt="logo picture" />
      <p>
        MolysTechie is tech startup, specialized on developing Mobile Apps, Web Apps and Wep APIs. It's senior Developer is John L. Lyimo, the guy who developed this Website using Astro Framework
      </p>
      </section>

      <section class='grid md:col-span-3 gap-6 text-center'>
        <div className="grid gap-y-6 md:flex md:justify-around">
          <div className="flex flex-col gap-2">
            <h1 class="text-lg font-bold">
              Follow Me
            </h1>
            <div className="grid gap-y-1">
              <a href="https://github.com/johnnylyimo"  target="_blank" class="text-xl text-blue-500 font-bold">
                GitHub
              </a>
              <a href="https://twitter.com/johnnylyimo" target="_blank" class="text-xl text-blue-500 font-bold">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/johnnylyimo" target="_blank" class="text-xl text-blue-500 font-bold">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 class="text-lg font-bold">
              Find Me
            </h1>
            <div className="flex justify-center gap-x-1">
              <IconMapPinFilled class="w-6 h-6" />
              <p>
                MolysTechie SiliconLab, Kijitonyama, Dar-es-Salaam
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 class="text-lg font-bold">

            </h1>

          </div>

        </div>

      </section>
    </footer>
  )
}
