import React from 'react';
import { useState, useContext } from 'react';
import {useDispatch} from 'react-redux';
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
import { favouriteCountries } from '../redux/actions/actions';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        overflowX: 'auto',
        paddingTop: theme.spacing(11),
        color: '#F5D238',
    },
    table: {
        margin: 'auto',
        color: 'white !important'
    }
}));

const CountriesList = () => {
    const allCountries = useCountries();
    const classes = useStyles();
    const dispatch = useDispatch();
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
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow className={classes.table}>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Flag</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Name</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Code</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Region</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Capital</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Population</strong></TableCell>
                            <TableCell style={toggle ? themes.dark: {}}><strong>Liked Countries</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={toggle ? themes.dark: {}}>
                        {allCountries.filteredCountries.length !== 0 ? allCountries.filteredCountries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => (
                            <TableRow key={country.name}>
                                <TableCell style={toggle ? themes.dark: {}}>
                                    <img src={country.flag} width="100px" height="60px" alt="flag" />
                                </TableCell>
                                <TableCell style={toggle ? themes.dark: {}}><Link to={`/countries/${country.name}`} style={{ textDecoration: 'none', color:'#546E7A' }}>{country.name}</Link></TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.alpha2Code}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.region}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.capital}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.population}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>
                                    <IconButton onClick={() => dispatch(favouriteCountries(country))} disabled={allCountries.favouriteCountries.includes(country) ? true: false}>
                                        <ThumbUpRoundedIcon variant="contained" style={{color: 'rgb(87, 145, 170)'}} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : allCountries.countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => (
                            <TableRow key={country.name}>
                                <TableCell style={toggle ? themes.dark: {}}>
                                    <img src={country.flag} width="100px" height="60px" alt="flag" />
                                </TableCell>
                                <TableCell style={toggle ? themes.dark: {}}><Link to={`/countries/${country.name}`} style={{ textDecoration: 'none', color:'#546E7A' }}>{country.name}</Link></TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.alpha2Code}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.region}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.capital}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>{country.population}</TableCell>
                                <TableCell style={toggle ? themes.dark: {}}>
                                    <IconButton onClick={() => dispatch(favouriteCountries(country))} disabled={allCountries.favouriteCountries.includes(country) ? true: false}>
                                        <ThumbUpRoundedIcon variant="contained" style={{color: 'rgb(87, 145, 170)'}} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TablePagination
                        style={toggle ? themes.dark: {}}
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