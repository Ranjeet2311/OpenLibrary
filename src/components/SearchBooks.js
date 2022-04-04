import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

function SearchBooks() {
  const [input, setInput] = useState("");
  const [bookQuery, setBookQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchBookData = async (query) => {
    const { data } = await axios.get(
      `http://openlibrary.org/search.json?title=${
        bookQuery ? bookQuery : `snow+crash`
      }`
    );

    console.log(data);
    // console.log(data.response.results);

    if (data) {
      setSearchData(data);
    }
  };

  useEffect(() => {
    searchBookData(bookQuery);
  }, [bookQuery]);

  function searchHandler(e) {
    const value = e.target.value;

    setInput(value);
  }

  function clickHandler(e) {
    setBookQuery(input);
    e.preventDefault();
  }

  console.log(bookQuery, searchData);

  return (
    <div>
      <div className="search-wrap">
        <form className="form-wrap">
          <input
            type="text"
            placeholder="Search Your Book"
            onChange={searchHandler}
          />

          <Button
            onClick={clickHandler}
            style={{
              backgroundColor: "#ff0000",
              color: "white",
              padding: "4px 16px",
            }}
            type="submit"
          >
            Search
          </Button>
        </form>
      </div>

      {searchData && searchData.docs
        ? searchData.docs.map((book) => <div>{book.title}</div>)
        : null}
    </div>
  );
}

export default SearchBooks;
