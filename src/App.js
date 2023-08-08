import { useState } from "react";
import Footer from "./components/Footer";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";


function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");


  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">

        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails clientName={clientName} clientAddress={clientAddress} />

            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <Table />

            <Notes notes={notes}/>

            <Footer 
            name={name} 
            address={address} 
            website={website} 
            email={email} 
            phone={phone}
            bankAccount={bankAccount}
            bankName={bankName}
            
            />
            <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500 hover:bg-transparent 
            hover:text-blue-500 transition-all 
            duration-300">Edit Information</button>
          </div>
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number,
          website client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />


              <label htmlFor="address">Enter your Address</label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">Enter your Email</label>
              <input
                type="text"
                name="text"
                id="email"
                placeholder="Enter your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />


              <label htmlFor="website">Enter your Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter your Website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="phone">Enter your phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter youaccountNumberr phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName">Enter your bankName</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your Bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">Enter your Account Number</label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your Bank Account"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName">Enter your Client Name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your clientName"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter your Address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your clientAddress"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                type="text"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />   

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="text"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              /> 

              <label htmlFor="notes">Additional Notes</label>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client"
              value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
              <input
                type="text"notes
                name="notes"
                id="notes"
                placeholder="Enter your notes"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <button onClick={() => setShowInvoice(true)} 
                className="bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500 hover:bg-transparent 
            hover:text-blue-500 transition-all 
            duration-300
            ">
                Preview Invoice
              </button>
            </div>

          </>
        )}

      </main>

    </>

  );
}

export default App;
