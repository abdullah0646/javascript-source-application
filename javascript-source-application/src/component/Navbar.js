import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import Search from "./SearchBar";
import javascript from "../assets/images/javascript.png";
import problemLists from "../base/labels"
import JavaScriptSource from "./main/JavaScriptSource";
import "../assets/css/style.css";

function Header() {

  const filterlists = (lists, query) => {
    if (!query) {
      return lists;
    }

    return lists.filter((list) => {
      const listName = list.problem.toLowerCase();
      return listName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredlists = filterlists(problemLists, searchQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearch, setIsSearch] = useState(false);


  useEffect(() => {
    if (searchQuery?.length >= 0) {
      setIsSearching(true);
    }
    if (searchQuery?.length > 0) {
      setIsSearch(true);
    }

    if (searchQuery?.length === 0) {
      setIsSearch(false);
    }
  }, [searchQuery])

  return (
    <>
      <Navbar className=" text-white bg-dark">
        <NavbarBrand href="/" className=" my-2 text-white bg-dark">
          <img
            src={javascript}
            className="App-logo"
            alt="logo"
            style={{
              height: 100,
              width: 100,
            }}
          />
          JavaScript Source

        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
          
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem
          >
        
          </NavItem>
        </Nav>

      </Navbar>
      <JavaScriptSource filteredlists={filteredlists} isSearching={isSearching} setIsSearching={setIsSearching} isSearch={isSearch} />
    </>
  );
}

export default Header;



