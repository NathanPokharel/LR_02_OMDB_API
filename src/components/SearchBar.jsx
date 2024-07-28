export default function SearchBar({ setTitle, searchMovie }) {
    return (
        <div className="search-holder">
            <input placeholder="Enter Movie To Search For ..." className="search_bar" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => searchMovie()}>Search</button>
        </div>
    )
}
