import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Autosuggest from "react-autosuggest";
import "./style.css";
import { selectAllUsers } from "../../store/users/selectors";

export default function Search() {
  const [searchName, setSearchName] = useState("");
  const allUsers = useSelector(selectAllUsers);
  const [suggestions, setSuggestions] = useState([]);
  const [chosenUser, setChosenUser] = useState({});
  const history = useHistory();

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
    history.push(`/user/${chosenUser.id}`);
    setSearchName("");
  }
  return (
    <div>
      <Row>
        <Col className="pr-0">
          <Autosuggest
            className="autoContainer"
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
            onSuggestionSelected={(event, { suggestion, method }) => {
              if (method === "enter") {
                event.preventDefault();
              }
              setSearchName(suggestion.name);
              setChosenUser(suggestion);
            }}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => (
              <div className="options">{suggestion.name} </div>
            )}
          />
        </Col>
        <Col>
          <Button variant="info" onClick={handleSearch}>
            <BsSearch />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
