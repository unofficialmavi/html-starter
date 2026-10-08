import { Search, MapPin, Home, ShieldCheck, MessageSquare } from "lucide-react";

const highlights = [
  [ShieldCheck, "Verified listings", "Built to help renters discover real properties with clearer listing information and trust signals."],
  [MessageSquare, "Direct inquiries", "Renters can contact the property owner or manager about a specific available unit."],
  [Home, "Homes, rooms & hostels", "A focused marketplace for finding available rental spaces across Uganda and beyond."]
] as const;

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <header className="topbar">
          <a className="brand" href="/"><span className="brand-mark">M</span>MavRent</a>
          <nav className="nav">
            <a href="#discover">Discover</a>
            <a href="#how">How it works</a>
            <a href="/dashboard">List a property</a>
          </nav>
        </header>

        <section className="hero" id="discover">
          <span className="eyebrow">RENTAL MARKETPLACE</span>
          <h1>Find a place that feels like home.</h1>
          <p>
            MavRent Platform connects people looking for rentals with landlords,
            property managers and agents who have available spaces.
          </p>

          <div className="card" style={{ marginTop: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 10 }}>
              <label>
                <span style={{ display: "block", color: "var(--muted)", fontSize: 12, marginBottom: 7 }}>Location</span>
                <div className="btn"><MapPin size={17} /> Kampala</div>
              </label>
              <label>
                <span style={{ display: "block", color: "var(--muted)", fontSize: 12, marginBottom: 7 }}>What are you looking for?</span>
                <div className="btn"><Home size={17} /> Apartment, room or hostel</div>
              </label>
              <a className="btn primary" href="/listings" style={{ alignSelf: "end", justifyContent: "center" }}>
                <Search size={17} /> Search
              </a>
            </div>
          </div>
        </section>

        <section className="grid" id="how">
          {highlights.map(([Icon, title, text]) => (
            <article className="card" key={title}>
              <div className="icon"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="card section-title" style={{ marginBottom: 70 }}>
          <span className="eyebrow">FOR PROPERTY OWNERS</span>
          <h2>Turn vacant units into visible opportunities.</h2>
          <p>
            Add a property, publish available units, upload photos and videos,
            receive inquiries and manage viewing requests from one platform.
          </p>
          <div className="actions">
            <a className="btn primary" href="/dashboard">Start listing</a>
            <a className="btn" href="#discover">Browse rentals</a>
          </div>
        </section>
      </div>
    </main>
  );
}
