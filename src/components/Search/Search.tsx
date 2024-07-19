import React, { useState } from 'react';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <Typography variant="h5">Search your modules here</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        margin="dense"
                        size="small"
                        hiddenLabel
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        inputProps={{ 'data-testid': 'search-input' }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        color="primary"
                        data-testid="search-button"
                        disabled={!query.trim()}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;
