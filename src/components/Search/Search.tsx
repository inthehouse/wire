import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={7}>
                    <Typography>
                        Search your modules here
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        size="small"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit" variant="contained" size="small" color="primary" fullWidth>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;
