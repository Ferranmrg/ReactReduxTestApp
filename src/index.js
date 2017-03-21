import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyATPSJDjnG0xXYkFx9YwaR50RNnqfO9AGQ";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector(".container"));