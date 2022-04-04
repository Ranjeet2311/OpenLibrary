import React, { useEffect, useState } from "react";
import axios from "axios";
import OneBook from "./components/OneBook";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [books, setBooks] = useState([]);

  const bookData = async () => {
    const apiKey = `ISBN:9783442236862`;
    const apiURL = `http://openlibrary.org/api/books?bibkeys=${apiKey}&jscmd=details&format=json`;
    const { data } = await axios.get(`${apiURL}`);

    // console.log(data["ISBN:9783442236862"].bib_key);
    // console.log(data["ISBN:9783442236862"].details.title);

    // console.log(data);

    if (data) {
      console.log(data["ISBN:9783442236862"]);
      setBooks(data["ISBN:9783442236862"]);
    }
  };

  console.log(books);
  // console.log(books.details.title);

  useEffect(() => {
    bookData();
  }, []);

  return (
    <div>
      <div className="app-wrapper">
        <OneBook book={books} />
        <SearchBooks />
      </div>
    </div>
  );
}

export default App;
