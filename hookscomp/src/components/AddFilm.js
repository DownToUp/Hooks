import React,{ useState } from 'react'

const AddFilm = ({AddNewFilm}) => {

    const [titre, settitre] = useState("")
    const [description, setDesc] = useState("")
    const [lien, setLien] = useState("")
    const [note, setNote] = useState(0)

    const handleFilm = (e) =>{
        e.preventDefault()
        AddNewFilm(titre,description,lien,note)
        
    }
    return (
        <div>
            <form onSubmit={handleFilm}>
                <h2>Add Movies</h2>
                <div className="container">
                <label>Titre:</label> <input className="form-control mb-3" type="text" value={titre} onChange={(e)=>settitre(e.target.value)} />
                <label>Description:</label> <input className="form-control mb-3" type="text" value={description} onChange={(e)=>setDesc(e.target.value)}  />
                <label>lien:</label> <input className="form-control mb-3" type="text"  value={lien} onChange={(e)=>setLien(e.target.value)} />
                <label>note:</label> <input className="form-control mb-3" type="text"  value={note} onChange={(e)=>setNote(e.target.value)} />
                <button className="btn btn-success mt-2"type="submit">Ajouter</button>
                </div>
            </form>
            
        </div>
    )
}

export default AddFilm
