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

      </section>
    </footer>
  )
}
