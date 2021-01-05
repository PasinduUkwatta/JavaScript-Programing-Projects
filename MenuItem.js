import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const options = [
    'Select Your Payment Type',
    'PayPal',
    'Credit Card',

];

export default function SimpleListMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const paymentType = () => {

        console.log(selectedIndex)
        if(selectedIndex===1){
            console.log("Paypal")
            return (
                <div>
                    <GridContainer spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="paymentType"
                                label="Payment Type :"
                                name="paymentType"
                                autoComplete="paymentType"
                                // value={paymentType }
                                // onChange={e => setPaymentType(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="paymentAmount"
                                label="Payment Amount :"
                                name="paymentAmount"
                                autoComplete="paymentAmount"
                                // value={paymentAmount }
                                // onChange={e => setPaymentAmount(e.target.value)}
                            />
                        </Grid>
                    </GridContainer>
                </div>
            )
        }
        else if(selectedIndex===2){
            console.log("Credit Card")

            return (
                <div>
                    <p>Hi Thiwanka</p>
                </div>
            )
        }

    };


    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Device settings">
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="Select Your Payment Type"
                    onClick={handleClickListItem}
                >
                    <ListItemText primary="Select Your Payment Type" secondary={options[selectedIndex]} />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        value={selectedIndex}
                        onChange={e => setSelectedIndex(e.target.value)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
            <div>
                {paymentType()}
            </div>
        </div>
    );
}
