import { useReveal } from "@/hooks/useReveal";
import { Countdown } from "@/components/Countdown";
import { Divider } from "@/components/Divider";
import couple from "@/assets/couple.jpg";
import paper from "@/assets/paper-texture.jpg";
import groomPhoto from "@/assets/groom.png";
import bridePhoto from "@/assets/bride.png";

const GoldButton = ({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) => {
  const Tag: any = href ? "a" : "button";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
      className="shimmer inline-flex items-center justify-center gap-2 px-8 py-3 font-display text-sm tracking-[0.25em] text-[hsl(var(--gold-foreground))] uppercase border border-[hsl(var(--gold-deep))] shadow-[var(--shadow-gold)] hover:scale-[1.03] transition-transform duration-500"
      style={{ background: "var(--gradient-gold)" }}
    >
      {children}
    </Tag>
  );
};

const SectionTitle = ({ devanagari, english }: { devanagari?: string; english: string }) => (
  <div className="text-center mb-10">
    {devanagari && (
      <p className="font-devanagari text-2xl md:text-3xl text-[hsl(var(--crimson))] mb-2">{devanagari}</p>
    )}
    <h2 className="font-display text-3xl md:text-5xl text-gold-gradient">{english}</h2>
    <div className="mx-auto mt-4 h-px w-24 bg-[hsl(var(--gold))]" />
  </div>
);

const Index = () => {
  useReveal();

  return (
    <main className="bg-paper text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 px-4 pb-12">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
          <p className="font-devanagari text-4xl sm:text-5xl md:text-6xl text-[hsl(var(--crimson))] text-center animate-unfurl pulse-gold" style={{ animationDelay: "0.2s" }}>
            ॐ श्री गणेशाय नमः
          </p>

          <div className="my-6 sm:my-10 w-full max-w-xs sm:max-w-sm animate-bloom" style={{ animationDelay: "0.5s" }}>
            <div className="relative p-2 gold-border bg-paper">
              <img src={couple} alt="Arun and Vinny" className="w-full h-auto sepia-[0.15] contrast-[1.05]" />
            </div>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-6xl text-[hsl(var(--crimson))] text-center animate-bloom leading-tight" style={{ animationDelay: "0.7s" }}>
            Arun <span className="font-serif-elegant italic text-[hsl(var(--gold-deep))]">&</span> Vinny
          </h1>
          <p className="hidden sm:block mt-1 font-serif-elegant italic text-sm md:text-base text-[hsl(var(--crimson))] tracking-widest animate-bloom" style={{ animationDelay: "0.9s" }}>
            1 · v · 2026
          </p>

          <div className="mt-8 sm:mt-12 animate-bloom" style={{ animationDelay: "1.1s" }}>
            <GoldButton onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}>
              Our Story
            </GoldButton>
          </div>
        </div>
      </section>

      <Divider />

      {/* INVITATION TEXT */}
      <section id="story" className="relative px-4 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
        />
        <div className="relative max-w-3xl mx-auto reveal text-center">
          <SectionTitle devanagari="शुभ विवाह" english="Wedding Invitation" />

          <div className="font-serif-elegant text-xl md:text-2xl text-[hsl(var(--crimson-deep))] leading-loose max-w-2xl mx-auto tracking-wide">
            <p className="mb-4">With the divine blessings of our beloved parents</p>
            <p className="font-bold text-2xl md:text-3xl text-[hsl(var(--crimson))] mb-8">Late Mr. A. R. Krishnadas <span className="font-serif-elegant italic text-[hsl(var(--gold-deep))]/80">&</span> Late Mrs. Rejany Das</p>

            <p className="mb-2">We, <span className="font-bold text-[hsl(var(--crimson))]">Arathy Das & Rohit R Nath</span></p>
            <p>solicit your gracious presence on the auspicious<br />occasion of the wedding of our beloved brother</p>
          </div>

          <div className="my-10 flex flex-col items-center">
            {/* Groom Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden gold-border p-1 mx-auto">
                <img src={groomPhoto} alt="Arun Das" className="w-full h-full object-cover rounded-full sepia-[0.1] contrast-[1.05]" />
              </div>
              <p className="font-display text-5xl md:text-7xl text-[hsl(var(--crimson))] mt-4 font-bold tracking-wider">Arun Das</p>
              <p className="font-serif-elegant text-lg md:text-xl text-[hsl(var(--crimson-deep))] mt-4 max-w-lg mx-auto leading-relaxed">
                Grandson of <span className="font-medium text-[hsl(var(--crimson))]">Late S. Raman Pillai & Late K. Chellamma</span>, Akkattu House<br />
                and <span className="font-medium text-[hsl(var(--crimson))]">Late Narayanan Nair & Smt. Savithri Amma</span>, Panayanchery
              </p>
            </div>

            <p className="font-serif-elegant italic text-2xl md:text-3xl text-[hsl(var(--gold-deep))] my-4">with</p>

            {/* Bride Section */}
            <div className="flex flex-col items-center mt-8">
              <div className="mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden gold-border p-1 mx-auto">
                <img src={bridePhoto} alt="Vinny Vincent" className="w-full h-full object-cover rounded-full sepia-[0.1] contrast-[1.05]" />
              </div>
              <p className="font-display text-5xl md:text-7xl text-[hsl(var(--crimson))] mt-4 font-bold tracking-wider">Vinny Vincent</p>
              <p className="font-serif-elegant text-lg md:text-xl text-[hsl(var(--crimson-deep))] mt-4 max-w-lg mx-auto leading-relaxed">
                Daughter of <span className="font-medium text-[hsl(var(--crimson))]">Mr. Vincent KJ & Mrs. Shiny Vincent</span><br />
                Beloved sister of <span className="font-medium text-[hsl(var(--crimson))]">Mr. Joseph KV</span><br />
                Kuttivelil House, Cherupara, Kannur
              </p>
            </div>
          </div>

          <Divider className="!my-8" />

          <div className="bg-paper/90 backdrop-blur-sm p-8 md:p-12 gold-border shadow-[var(--shadow-paper)] mt-16 rounded-sm max-w-3xl mx-auto relative overflow-hidden text-center z-10 transition-all hover:shadow-[var(--shadow-paper-hover)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--gold-light))]/10 rounded-full blur-3xl pointer-events-none"></div>

            <p className="font-serif-elegant text-xl md:text-2xl text-[hsl(var(--crimson-deep))] font-semibold">
              Muhurtham: <span className="font-display font-normal text-[hsl(var(--gold-deep))] ml-2 tracking-wide text-lg md:text-xl">Between 9:30 AM & 10:30 AM</span><br />
              <span className="inline-block mt-3">On <span className="font-display font-normal text-[hsl(var(--gold-deep))] ml-2 tracking-wide text-lg md:text-xl">Friday, 1st May 2026</span></span>
            </p>

            <Divider className="!my-8 max-w-xs mx-auto opacity-50" />

            <p className="font-serif-elegant text-lg md:text-2xl text-[hsl(var(--crimson-deep))]/90 mt-6 tracking-wide">
              The wedding will be solemnised in the divine premises of
            </p>
            <p className="mt-3 font-display text-3xl md:text-5xl text-[hsl(var(--crimson))] font-bold shadow-sm drop-shadow-sm tracking-wide">
              Kaithakkadu Mahavishnu Kshethram
            </p>

            <p className="mt-10 font-serif-elegant text-lg md:text-2xl text-[hsl(var(--crimson-deep))]/90 tracking-wide">
              and thereafter other functions and lunch will be held at
            </p>
            <p className="mt-3 font-display text-3xl md:text-5xl text-[hsl(var(--crimson))] font-bold shadow-sm drop-shadow-sm tracking-wide leading-tight">
              NSS Kanaka Jubilee Hall Punnorcode
            </p>
          </div>
        </div>

      </section>

      <Divider />

      {/* COUNTDOWN */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="absolute inset-0" style={{ background: "var(--gradient-crimson)" }} />
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
        />
        <div className="relative max-w-4xl mx-auto reveal text-center">
          <p className="font-devanagari text-2xl text-[hsl(var(--gold-light))] mb-2">शुभ मुहूर्त</p>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient">Counting the Moments</h2>
          <p className="mt-4 font-serif-elegant italic text-[hsl(var(--crimson-foreground))] text-lg">
            Until two souls become one — 1st May 2026, 9:30 AM
          </p>
          <div className="mt-12">
            <Countdown />
          </div>
        </div>
      </section>

      <Divider />

      {/* RSVP / NOTE */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto reveal text-center">
          <SectionTitle english="A Note From Us" />
          <p className="font-serif-elegant italic text-xl md:text-2xl text-[hsl(var(--crimson-deep))] leading-relaxed">
            "Your presence and blessings will make this day truly special for us."
          </p>
          <p className="mt-8 font-display tracking-[0.4em] text-sm text-[hsl(var(--gold-deep))]">— ARUN & VINNY —</p>


        </div>
      </section>

      <Divider />

      {/* LOCATION */}
      <section className="relative px-4 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <SectionTitle devanagari="स्थल" english="The Venues" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal reveal-left p-8 bg-paper gold-border shadow-[var(--shadow-paper)] text-center">
              <p className="font-display text-xs tracking-[0.3em] text-[hsl(var(--gold-deep))] mb-4">CEREMONY</p>
              <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--crimson))]">Kaithakkadu Mahavishnu Kshethram</h3>
              <p className="mt-4 font-serif-elegant text-lg text-[hsl(var(--crimson-deep))]/80">
                Friday, 1st May 2026<br />9:30 AM
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <GoldButton href="https://www.google.com/maps/search/Kaithakkadu+Mahavishnu+Kshethram">
                  ⛩ View Map
                </GoldButton>
                <GoldButton href="https://www.google.com/maps/dir/?api=1&destination=Kaithakkadu+Mahavishnu+Kshethram">
                  ➤ Directions
                </GoldButton>
              </div>
            </div>

            <div className="reveal reveal-right p-8 bg-paper gold-border shadow-[var(--shadow-paper)] text-center">
              <p className="font-display text-xs tracking-[0.3em] text-[hsl(var(--gold-deep))] mb-4">RECEPTION</p>
              <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--crimson))]">NSS Kanaka Jubilee Hall</h3>
              <p className="mt-2 font-serif-elegant text-lg text-[hsl(var(--crimson-deep))]/80">Punnorcode</p>
              <p className="mt-4 font-serif-elegant text-lg text-[hsl(var(--crimson-deep))]/80">
                Friday, 1st May 2026<br />Following the ceremony
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <GoldButton href="https://www.google.com/maps/search/NSS+Kanaka+Jubilee+Hall+Punnorcode">
                  ⛩ View Map
                </GoldButton>
                <GoldButton href="https://www.google.com/maps/dir/?api=1&destination=NSS+Kanaka+Jubilee+Hall+Punnorcode">
                  ➤ Directions
                </GoldButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-4 py-16 text-center" style={{ background: "var(--gradient-crimson)" }}>
        <p className="font-devanagari text-2xl text-[hsl(var(--gold-light))] pulse-gold">शुभमस्तु</p>
        <p className="mt-3 font-display tracking-[0.4em] text-sm text-[hsl(var(--gold-light))]">ARUN · VINNY · </p>
        <p className="mt-2 font-serif-elegant italic text-[hsl(var(--crimson-foreground))]/70 text-sm">
          With love & gratitude
        </p>
      </footer>
    </main>
  );
};

export default Index;
