import "../App.css";
import heroPic from "../sections/img/dreamstime_xl_65272350.jpg";

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
