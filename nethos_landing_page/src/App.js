import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src="https://nethos.pl/assets/img/logo.png" alt="Nethos LOGO" className='logo'></img>
        {/* <img src="%PUBLIC_URL%/img/logo.png" alt="Nethos LOGO" className='logo'></img> */}
      </header>
      <body className='App-body'>
        <hero className='App-hero'>
          <div className='App-hero-text-box'>
          <p>Masz wiele obaw związanych z nadchodzącym wdrożeniem systemów IT w Twojej 
            firmie? Z naszym doświadczonym zespołem konsultantów możesz mieć 
            pewność, że Twój projekt będzie realizowany sprawnie i efektywnie!</p>
            </div>
        </hero>
      </body>
    </div>
  );
}

export default App;