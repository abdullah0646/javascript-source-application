import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/css/style.css"

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: "0px auto 10% auto" }}>
            <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
            <TextField label="Search" variant="standard"
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                InputProps={{ inputProps: { style: { color: '#fff' } } }}
            />
        </Box>
    );
};

export default Search;