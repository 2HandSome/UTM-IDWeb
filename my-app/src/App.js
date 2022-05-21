import WrappedAdvancedSearchForm from "./WrappedAdvancedSearchForm";
import "./App.css";

function App() {
    return (
        <div className="App">
            <WrappedAdvancedSearchForm/>
            <div className="search-result-list">
                <SearchResult/>
            </div>
        </div>
    );
}

export default App;

