import "../App.css";
import { ClientSlider } from "./slider";

export function SectionHeader() {
  return (
    <header className="App-header">
      <div>
        <img
          src={"https://nethos.pl/assets/img/logo.png"}
          alt="Nethos LOGO"
          className="logo"
        ></img>
      </div>
    </header>
  );
}

export function SectionHero() {
  return (
    <hero className="App-hero">
      <div className="App-hero-background">
        <div className="App-hero-text-box">
          <p>
            Masz wiele obaw związanych z nadchodzącym wdrożeniem systemów IT w
            Twojej firmie? Z naszym doświadczonym zespołem konsultantów możesz
            mieć pewność, że Twój projekt będzie realizowany sprawnie i
            efektywnie!
          </p>
        </div>
      </div>
    </hero>
  );
}

export function SectionProducts() {
  return (
    <section className="App-products">
      <div>
        <h2>Usługi Konsultacyjne Nethos</h2>
      </div>
      <div className="App-products-box">
        <ProductBox
          title="Analiza potrzeb biznesowych"
          description=" pomagamy zdefiniować cele i 
        wymagania Twojego projektu. "
        />
        <ProductBox
          title="Wybór optymalnych rozwiązań:"
          description=" doradzamy w wyborze najlepszych 
rozwiązań IT dla Twojej organizacji, biorąc pod uwagę zarówno aspekty 
techniczne, jak i biznesowe. "
        />
        <ProductBox
          title=" Planowanie projektu: "
          description=" opracowujemy szczegółowy plan wdrażania, 
uwzględniając harmonogram, budżet oraz zasoby niezbędne do realizacji 
projektu. "
        />
        <ProductBox
          title="Wsparcie implementacyjne:"
          description=" pomagamy w skutecznej implementacji 
nowych rozwiązań, zapewniając ciągłość działania Twoich systemów i 
minimalizując ewentualne przestoje.  "
        />
      </div>
    </section>
  );
}

function ProductBox(args) {
  return (
    <div className="product-box">
      <h3>{args.title}</h3>
      <p>{args.description}</p>
    </div>
  );
}

export function SectionWhy() {
  return (
    <section className="section-why">
      <div>
        <h2>Dlaczego wybrać Nethos?</h2>
      </div>
      <ul>
        <li>
          <span>Doświadczony zespół specjalistów</span>
        </li>
        <li>
          <span>Indywidualne podejście </span>
        </li>
        <li>
          <span>Nowoczesne technologie </span>
        </li>
        <li>
          <span>Bezpieczeństwo danych </span>
        </li>
      </ul>
      <div className="button-container">
        <button>Napisz do nas!</button>
      </div>
    </section>
  );
}

export function AboutUs() {
  function MemberBox({ src, name, position }) {
    return (
      <section className="member-box">
        <RoundedImage pic={src} />
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </section>
    );
  }

  return (
    <section className="about-us">
      <div>
        <h2>O nas</h2>
        <div>
          <p>
            Nethos zdajemy sobie sprawę, że ludzie to podstawa dobrze
            funkcjonującej firmy z ambicjami na przyszłość. Ludzie są dla nas
            bardzo ważni. Nasza siła leży przede wszystkim w zespole. Od naszych
            pracowników zależy jakość oferowanych przez nas usług. Atmosfera w
            firmie jest bardzo przyjazna i nieformalna. Nasi klienci nieustannie
            stawiają przed nami nowe wyzwania. Każdego dnia rozwijamy się
            poszukując nowych talentów, metodyk i narzędzi.
          </p>
        </div>
        <container className="members">
          <MemberBox
            src="https://nethos.pl/assets/img/team/kalkus.jpg"
            name="Jan Kowalicki"
            position="CEO / Architekt Systemów"
          />
          <MemberBox
            src="https://nethos.pl/assets/img/team/peterkot.jpg"
            name="Piotr Kociński"
            position="COO / Architekt Systemów"
          />
          <MemberBox
            src="https://nethos.pl/assets/img/team/drzazga.jpg"
            name="Bartosz Drzazgowski"
            position="CTO / Architekt Systemów"
          />
        </container>
      </div>
    </section>
  );
}

function RoundedImage({ pic }) {
  return (
    <div
      className="roundedImage"
      style={{
        backgroundImage: `url(${pic})`,
      }}
    ></div>
  );
}


export function Clients() {
  return (
    <section className="clients">
      <div>
        <h2>Poznaj zadowolonych klientów Nethos!</h2>
      </div>
      <container>
      <p>
      Zadaliśmy naszym klientom kilka pytań: Jaki był największy problem przed wdrożeniem systemu? Co sprawiło, że wybrano właśnie Nethos? Jakich argumentów można by użyć by polecić Nethos innym? Co było najbardziej zaskakujące we współpracy z Nethos? Nethos to firma z 9-letnim doświadczeniem w branży, mogąca się pochwalić ponad 50-oma przeprowadzonymi projektami.
          </p>
          </container>
      <ClientSlider/>
      <div className="button-container">
        <button>Dołącz do nich już dziś!</button>
      </div>
    </section>
  );
}
