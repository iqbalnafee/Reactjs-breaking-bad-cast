import React,{useState} from 'react'

const Search = (props) => {

    const {getQuery} = props;

    const [text,setText] = useState("");

    const setQuery = (query) => {
        setText(query);
        getQuery(query);
    }

    return (
        <section className="search">

            <form>

                <input type="text"
                  className="form-control"
                  placeholder="Search Characters"
                  value={text}
                  onChange = {(e) => setQuery(e.target.value)} 
                  autoFocus />

            </form>

        </section>
    )
}

export default Search
