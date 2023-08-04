
function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main>
      {/* Header */}
      <header>
        <div>
          <h2>Invoicer</h2>
        </div>

        <div>
          <ul>
            <li><button onClick={handlePrint}>Print</button></li>
            <li>Download</li>
            <li>Send</li>
          </ul>
        </div>
      </header>
        {/* End of Header */}

        {/* Your Details */}
        <section>
          <input type="text" name="text" id="text"
          placeholder = "Enter your name" required/>
          <h2>Victor Vallin</h2>

        </section>
        {/* End of your details */}
    </main>
    </>

  );
}

export default App;
