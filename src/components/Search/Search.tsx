import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        label="Search for a module"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;
