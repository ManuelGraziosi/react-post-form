import axios from "axios";
import { useEffect, useState } from "react"
import PostCard from "./assets/components/PostCard";

function App() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false
  }
  const [formData, setFormData] = useState(initialFormData);
  const [recivedPosts, setRecivedPosts] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then((resp)=>{
      setRecivedPosts(resp.data);
      setDataUpdated(false);
    })
  },[dataUpdated])

  function handleChange(event) {
    const newFormData = { ...formData }
    const key = event.target.name;
    const type = event.target.type;
    let value = event.target.value;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    newFormData[key] = value;
    setFormData(newFormData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:3001/posts", formData).then((resp) => setDataUpdated(true));
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
        <hr />
        {/* sezione post pubblicati */}
        <section>
          <h2>Elenco Post Caricati</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {
              recivedPosts.map((curPost)=>(
                <div key={curPost.id} className="col g-3">
                  <PostCard post={curPost}/>
                </div>

              ))
            }

          </div>
        </section>
      </div>
    </>
  )
}

export default App
