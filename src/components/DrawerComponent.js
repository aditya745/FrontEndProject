import React, { useState } from 'react';
import { Drawer, List, ListItem, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {useDispatch} from 'react-redux';
import {deleteFavouriteCountry} from '../redux/actions/actions';

import useCountries from '../customHooks/countryHook';

const useStyles = makeStyles({
    list: {
        width: 550
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "rgb(79, 78, 78)",
        color: "white",
        padding: 20,
    },
    list: {
        boxSizing: "none",
        justifyContent: "space-between",
    },
    item: {
        paddingRight: 20
    }
});

const DrawerComponent = () => {
    const [drawerState, setDrawer] = useState(false);
    const favouriteCountries = useCountries();
    const classes = useStyles();
    const dispatch = useDispatch();
    const toggleDrawer = (open) => () => {
        setDrawer(open)
    }
    console.log('fav', favouriteCountries.favouriteCountries)
    const favCountries = () => (favouriteCountries.favouriteCountries.map((favCountry) =>
        <List key={favCountry.name}>
            <ListItem className={classes.list}>
                <img src={favCountry.flag} alt="flag" height="50px" width="100px" className={classes.item} />
                <p className={classes.item}>{favCountry.name}</p>
                <DeleteForeverIcon onClick={() => dispatch(deleteFavouriteCountry(favCountry))}>Delete</DeleteForeverIcon>
            </ListItem>
        </List>
    ))

    return (
        <div>
            <Badge color="secondary" badgeContent={favouriteCountries.favouriteCountries.length}>
                <ThumbUpIcon onClick={toggleDrawer(true)} />
            </Badge>

            <Drawer
                open={drawerState}
                anchor={'right'}
                onClose={toggleDrawer(false)}
                classes={{ paper: classes.paper }}
            >
                {favCountries()}
            </Drawer>
        </div>
    )
}

export default DrawerComponent
