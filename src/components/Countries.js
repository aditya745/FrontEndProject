import React from 'react';
import { useState } from 'react';
import {
    TablePagination,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton
} from '@material-ui/core';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';

import useCountries from '../customHooks/countryHook';
import { makeStyles, TableContainer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        overflowX: 'auto',
        paddingTop: theme.spacing(11),
    },
}));

const Countries = () => {
    const countries = useCountries();
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const onChangePage = (event, nextPage) => {
        setPage(nextPage)
    }

    const onChangeRows = (event) => {
        setRowsPerPage(event.target.value)
    }

    return (
        <div className={classes.root}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Flag</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Code</strong></TableCell>
                            <TableCell><strong>Region</strong></TableCell>
                            <TableCell><strong>Capital</strong></TableCell>
                            <TableCell><strong>Population</strong></TableCell>
                            <TableCell><strong>Liked Countries</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => (
                            <TableRow key={country.name}>
                                <TableCell>
                                    <img src={country.flag} width="100px" height="60px" alt="flag" />
                                </TableCell>
                                <TableCell>{country.name}</TableCell>
                                <TableCell>{country.alpha2Code}</TableCell>
                                <TableCell>{country.region}</TableCell>
                                <TableCell>{country.capital}</TableCell>
                                <TableCell>{country.population}</TableCell>
                                <TableCell>
                                    <IconButton>
                                    <ThumbUpRoundedIcon variant="contained" color="primary" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15, 20]}
                        count={countries.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={onChangePage}
                        onChangeRowsPerPage={onChangeRows}
                    />
                </Table>
            </TableContainer>
        </div>
    )
}
export default Countries;
