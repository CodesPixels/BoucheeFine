import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Facebook",
    src: "/figmaAssets/icone-02-1.svg",
    className: "h-[55px] w-[55px]",
  },
  {
    label: "Instagram",
    src: "/figmaAssets/icone-03-1.svg",
    className: "h-[54px] w-[54px]",
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
      <div className="absolute -left-[68.39%] -top-[117.5%] h-[157.22vw] w-[157.22vw] rounded-full bg-[#df8f00] blur-[13.02vw]" />
      <div className="absolute left-[78.23%] top-[55.74%] h-[157.22vw] w-[157.22vw] rounded-full bg-[#df8f00] blur-[13.02vw]" />
      <section
        className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center"
        aria-labelledby="hero-title"
      >
        <img
          className="mt-[9.26vh] h-auto w-[13.91vw] min-w-[111px] max-w-[267px]"
          alt="Logo"
          src="/figmaAssets/logo-1.svg"
        />
        <div className="mt-[18.8vh] flex w-full flex-col items-center px-4">
          <h1
            id="hero-title"
            className="whitespace-nowrap bg-[linear-gradient(90deg,rgba(188,107,62,1)_0%,rgba(223,143,0,1)_100%)] bg-clip-text text-center [font-family:'Aletheia-Regular',Helvetica] text-[clamp(42px,7.29vw,140px)] font-normal leading-[0.243] tracking-[0] text-transparent [-webkit-text-fill-color:transparent]"
          >
            La Passion de l&apos;Authenticité
          </h1>
          <p className="mt-[4.8vh] w-[45.31vw] min-w-[360px] max-w-[870px] text-center [font-family:'Aldhabi-Regular',Helvetica] text-[clamp(20px,1.98vw,38px)] font-normal leading-[0.895] tracking-[0] text-white">
            Notre passion pour le patrimoine culinaire propose un large éventail
            de mets savoureux et originaux, dès le départ notre service
            s&apos;adresse aux particuliers et aux entreprises. Saveur,
            excellence, et authenticité seront la base de nos produits.
          </p>
          <nav
            className="mt-[3.65vh] flex items-center gap-[0.68vw]"
            aria-label="Contact et réseaux sociaux"
          >
            <Button
              type="button"
              className="h-[5.09vh] min-h-[38px] rounded-full bg-[linear-gradient(90deg,rgba(188,107,62,1)_0%,rgba(223,143,0,1)_100%)] px-[2.6vw] py-0 shadow-none hover:opacity-90 [font-family:'Aldhabi-Regular',Helvetica] text-[clamp(23px,2.19vw,42px)] font-normal leading-[0.1px] tracking-[0] text-white"
            >
              Contactez-nous
            </Button>
            {socialLinks.map((socialLink) => (
              <Button
                key={socialLink.label}
                type="button"
                variant="ghost"
                size="icon"
                className={`h-auto rounded-full p-0 hover:bg-transparent hover:opacity-80 ${socialLink.className}`}
                aria-label={socialLink.label}
              >
                <img className="h-full w-full" alt="" src={socialLink.src} />
              </Button>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
};
