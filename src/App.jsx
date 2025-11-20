import axios from "axios";
import { useState } from "react"

function App() {
  const initialFormData = {
    "author": "",
    "title": "",
    "body": "",
    "public": false
  }
  const [formData, setFormData] = useState({ ...initialFormData })

  function handleChange(event) {
    const newFormData = { ...formData }
    const changedAtribute = event.target.name;
    let newValue = event.target.value;
    if (changedAtribute === "public") {
      newValue = event.target.checked;
    }
    newFormData[changedAtribute] = newValue;
    setFormData(newFormData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    axios.post("http://localhost:3001/posts", formData).then((resp) => console.log(resp));
    setFormData(initialFormData);
  }
  return (
    <>
      <div className="container">
        <h2>Form con POST dei dati:</h2>
        <form type="submit">
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Nome Autore:</label>
            <input type="text" value={formData.author} onChange={handleChange} className="form-control" id="author" aria-describedby="author" name="author" />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo del post:</label>
            <input type="text" value={formData.title} onChange={handleChange} className="form-control" id="title" aria-describedby="title" name="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Testo del post:</label>
            <textarea value={formData.body} onChange={handleChange} className="form-control" id="body" aria-describedby="body" name="body" />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="public">rendere pubblico il post?</label>
            <input type="checkbox" checked={formData.public} onChange={handleChange} className="form-check-input" id="public" name="public" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
