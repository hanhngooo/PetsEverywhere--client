import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { selectAllUsers } from "../../store/users/selectors";

export default function Search() {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSearch() {
    console.log("hello");
    history.push("/user/3");
  }
  return (
    <div>
      <Form inline>
        <Form.Control
          className="mr-sm-2"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
          type="search"
          placeholder="Search"
        />
        <Button onClick={handleSearch}>
          <BsSearch />
        </Button>
      </Form>
    </div>
  );
}
