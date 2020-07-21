import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Autosuggest from "react-autosuggest";
import { selectAllUsers } from "../../store/users/selectors";

export default function Search() {
  const [searchName, setSearchName] = useState("");
  const allUsers = useSelector(selectAllUsers);
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();
  console.log("newList", suggestions);

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : allUsers.filter(
          (user) => user.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  }
  function handleSearch() {
    console.log("hello");
    history.push("/user/3");
    setSearchName("");
  }
  return (
    <div>
      <Autosuggest
        inputProps={{
          placeholder: "Search",
          autoComplete: "abc",
          name: "user",
          id: "user",
          value: searchName,
          onChange: (_event, { newValue }) => {
            setSearchName(newValue);
          },
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) => {
          if (!value) {
            setSuggestions([]);
            return;
          } else {
            setSuggestions(getSuggestions(value));
          }
        }}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name} </div>}
      />

      <Button onClick={handleSearch}>
        <BsSearch />
      </Button>
    </div>
  );
}
