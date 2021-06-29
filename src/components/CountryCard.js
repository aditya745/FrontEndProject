import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { ThemeContext, themes } from '../themes/themes-context';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: 86,
    },
    media: {
        height: 300,
    },
});
const CountryCard = ({country}) => {
    const classes = useStyles();
    const { toggle } = useContext(ThemeContext);
    return (
        <div style={toggle ? themes.dark: {}}>
            <Card className={classes.root} elevation={3} >
                    <CardActionArea>
                        <CardMedia className={classes.media}
                        image= {country.flag} title='flag'
                        />
                        <CardContent>
                            <h3>Name: {country.name}</h3>
                            <p>Capital: {country.capital}</p>
                            <p>Region: {country.region}</p>
                            <p>Sub Region: {country.subregion}</p>
                            <p>Area: {country.area} Sq Kms</p>
                            <p>Population: {country.population}</p>
                            <p>Numeric Code: {country.numericCode}</p>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button><Link to={'/'} style={{textDecoration: 'none', color: '#546E7A'}}>Back</Link></Button>
                    </CardActions>

                </Card>
        </div>
    )
}

export default CountryCard;