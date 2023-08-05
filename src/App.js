
function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li><button onClick={handlePrint}
            className="btn btn-print">
              Print
              </button>
              </li>
            <li>
              <button className="btn btn-download">Download</button>
              </li>
            <li>
              <button className="btn btn-send">Send</button></li>
          </ul>
        </div>
      </header>
        {/* End of Header */}

        {/* Your Details */}
        <section className=" flex flex-col items-end justify-end">
          <h2 className="text-xl uppercase">Victor Vallin</h2>
          <p>Your Address</p>
        
        </section>
        {/* End of your details */}
        {/* client details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* end client details */}

    {/* dates */}
    <article className="mt-5 flex flex-col items-end justity-end">
      <ul>
        <li><span className="font-bold">Invoicer number:</span></li>
        <li><span className="font-bold">Invoice date:</span></li>
        <li><span className="font-bold">Due date:</span></li>
      </ul>
    </article>

    {/* end of dates */}


    {/* Table */}
    <div className="my-5">this is the table</div>
    {/* End of Table */}


    {/* Notes */}
    <section className="mb-5">
      {/* Textarea */}
      <p>Notes to the client...</p>
    </section>

    {/* End of notes */}

    {/* Footer */}

    <footer>
      <ul className="flex flex-wrap items-center justsify-center">
        <li><span>Your Name: </span>Victor Vallin </li>
        <li><span>Your email: </span>victorvallinavila@gmail.com</li>
        <li><span>Phone Number: </span>Victor Vallin</li>
        <li><span>Bank: </span>Victor Vallin</li>
        <li><span>Account holder: </span>Victor Vallin</li>
        <li><span>Account number: </span>Victor Vallin</li>
        <li><span>Website:</span> Victor Vallin</li>
      </ul>
    </footer>
    {/* End of footer */}
    </main>

    </>

  );
}

export default App;
