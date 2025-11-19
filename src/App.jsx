import { useState } from "react"

function App() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false
  }

  function handleChange(propName, propValue) {

  }

  const [formData, setFormData] = useState({ initialFormData })

  return (
    <>
      <div className="container">
        <h2>Form con POST dei dati:</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Nome Autore:</label>
            <input type="text" value={formData.name} className="form-control" id="author" aria-describedby="author" name="author" />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo del post:</label>
            <input type="text" value={formData.title} className="form-control" id="title" aria-describedby="title" name="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Testo del post:</label>
            <textarea value={formData.body} className="form-control" id="body" aria-describedby="body" name="body" />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="public">rendere pubblico il post?</label>
            <input type="checkbox" checked={formData.public} className="form-check-input" id="public" name="public" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
