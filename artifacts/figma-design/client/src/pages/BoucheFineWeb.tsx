import { Button } from "@/components/ui/button";
const socialLinks = [
  {
    label: "Facebook",
    src: "/figmaAssets/icone-02-1.svg",
    className: "h-[40px] w-[40px]",
    href: "https://www.facebook.com/boucheefine/?locale=fr_FR",
  },
  {
    label: "Instagram",
    src: "/figmaAssets/icone-03-1.svg",
    className: "h-[40px] w-[40px]",
    href: "https://www.instagram.com/boucheefine/",
  },
];
export const BoucheFineWeb = (): JSX.Element => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt="Dsc"
        src="/figmaAssets/dsc00354-1.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,1)_100%)]" />
      {/* <div className="absolute -left-[68.39%] -top-[117.5%] h-[157.22vw] w-[157.22vw] rounded-full bg-[#df8f00] blur-[13.02vw]" /> */}
      {/* <div className="absolute left-[78.23%] top-[55.74%] h-[157.22vw] w-[157.22vw] rounded-full bg-[#df8f00] blur-[13.02vw]" /> */}
      {/* Top-left glow */}
<div
  className="
    absolute
    -left-[12%]
    -top-[15%]
    h-[40vw]
    w-[40vw]
    rounded-full
    bg-[#df8f00]/50
    blur-[6vw]
    pointer-events-none
  "
/>

{/* Bottom-right glow */}
<div
  className="
    absolute
    -right-[12%]
    -bottom-[15%]
    h-[40vw]
    w-[40vw]
    rounded-full
    bg-[#df8f00]/50
    blur-[6vw]
    pointer-events-none
  "
/>
      <section
        className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center"
        aria-labelledby="hero-title"
      >
        <img
          className="mt-[9.26vh] h-auto w-[13.91vw] min-w-[111px] max-w-[267px]"
          alt="Logo"
          src="/figmaAssets/logo-1.svg"
        />
<div className="mt-[12vh] flex w-full flex-col items-center px-4">

  {/* ---------- Title ---------- */}
  <h1
    id="hero-title"
    className="
      text-center
      [font-family:'Aletheia']
      font-[400]
      text-[clamp(48px,6.5vw,120px)]
      leading-[1.1]
      tracking-[0.02em]
      text-transparent
      bg-[linear-gradient(90deg,#bc6b3e_0%,#df8f00_100%)]
      bg-clip-text
      [-webkit-background-clip:text]
      [-webkit-text-fill-color:transparent]
    "
  >
    La Passion de l&apos;Authenticité
  </h1>

  {/* ---------- Subtitle ---------- */}
 <p
  className="
    mt-[0.5vh]
    w-[45vw]
    min-w-[300px]
    max-w-[750px]
    text-center
    [font-family:'Cormorant_Garamond','Georgia',serif]
    text-[clamp(16px,1.3vw,20px)]
    font-normal
    leading-[1.4]
    text-white
  "
>
  Notre passion pour le patrimoine culinaire propose un large éventail
  de mets savoureux et originaux, dès le départ notre service
  s&apos;adresse aux particuliers et aux entreprises. Saveur,
  excellence, et authenticité seront la base de nos produits.
</p>  

  {/* ---------- Button + Social Icons ---------- */}
  <nav
    className="mt-[4.5vh] flex items-center gap-3"
    aria-label="Contact et réseaux sociaux"
  >
<Button
  type="button"
  onClick={() => {
    window.location.href = "mailto:contact@boucheefine.com";
  }}
  className="
    h-[44px]
    rounded-full
    bg-[linear-gradient(90deg,#bc6b3e_0%,#df8f00_100%)]
    px-9
    py-2
    text-white
    hover:opacity-90
    transition-opacity
    [font-family:'Cormorant_Garamond','Georgia',serif]
    text-[17px]
    font-medium
    leading-[1.2]
    tracking-wide
  "
>
  Contactez-nous
</Button>
<div className="flex items-center gap-1">
 {socialLinks.map((socialLink) => (
  <a
    key={socialLink.label}
    href={socialLink.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={socialLink.label}
    className="flex items-center justify-center"
  >
    <img
      className={`${socialLink.className} hover:opacity-80 transition-opacity`}
      alt={socialLink.label}
      src={socialLink.src}
    />
  </a>
))}
</div>
  </nav>

</div>
      </section>
    </main>
  );
};
