import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
function SearchResults() {
  const location = useLocation();
  const arr = location.search
    .slice(1)
    .split("&")
    .map((item) => {
      return item.split("=")[1];
    });
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q")); // Example of using useSearchParams
  console.log(searchParams.get("a")); // Example of using useSearchParams

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Search query: {location.search}</p>
    </div>
  );
}

export default SearchResults;
