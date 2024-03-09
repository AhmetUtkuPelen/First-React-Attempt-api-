import { useState } from "react"

function Search_Header({search}){

const [value , setValue ] = useState('')

const handleFormSubmit = (event) => {

    // ! preventDefault fonksiyonunu çalıştırmak sayfanın default olarak kendini refreshlemesini engeller ! \\
    event.preventDefault()

    search(value)

}

const handleChange = (event) => {

    setValue(event.target.value)

}

    return (
        <div>
            <form className="searchform" onSubmit={handleFormSubmit} >
                <label className="lookfor">What Are You Looking For ?</label>
                <input className="typehere" placeholder="Search What You Want Here" type="text" value={value} onChange={handleChange} />
            </form>
        </div>
    )

}

export default Search_Header