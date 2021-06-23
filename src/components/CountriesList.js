import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

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
import { ThemeContext, themes } from '../themes/themes-context';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        overflowX: 'auto',
        paddingTop: theme.spacing(11),
        color: '#F5D238',
    },
}));

const CountriesList = () => {
    const allCountries = useCountries();
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { toggle } = useContext(ThemeContext);

    const onChangePage = (event, nextPage) => {
        setPage(nextPage)
    }

    const onChangeRows = (event) => {
        setRowsPerPage(event.target.value)
    }

    return (
        <div className={classes.root} style={toggle ? themes.dark: {}}>
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
                    <TableBody style={toggle ? themes.dark: {}}>
                        {allCountries.filteredCountries.length !== 0 ? allCountries.filteredCountries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => (
                            <TableRow key={country.name}>
                                <TableCell>
                                    <img src={country.flag} width="100px" height="60px" alt="flag" />
                                </TableCell>
                                <TableCell><Link to={`/countries/${country.name}`} style={{ textDecoration: 'none' }}>{country.name}</Link></TableCell>
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
                        )) : allCountries.countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => (
                            <TableRow key={country.name}>
                                <TableCell>
                                    <img src={country.flag} width="100px" height="60px" alt="flag" />
                                </TableCell>
                                <TableCell><Link to={`/countries/${country.name}`} style={{ textDecoration: 'none'}}>{country.name}</Link></TableCell>
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
                        count={allCountries.filteredCountries.length !== 0 ? allCountries.filteredCountries.length : allCountries.countries.length}
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
export default CountriesList;