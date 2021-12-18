import React from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import classes from './Header.module.css';


const Header = (props) => {

    const removePost = () => {
        localStorage.clear();
    }

    return (
        <div className={classes.header}>
            <Button variant='text' color='secondary' style={{ marginRight: '30%' }} onClick={removePost}>Clear</Button>
            <div className={classes.findTask}>
                <Autocomplete
                    options={props.posts}
                    getOptionLabel={(option) => option.message}
                    renderInput={(params) => (
                        <Grid ref={params.InputProps.ref}>
                            <Input 
                                className={classes.input}
                                style={{ width: 250, height: 26, borderRadius: 10, backgroundColor: "white" }} 
                                {...params} 
                            />
                        </Grid>
                    )}
                />
                <div><button className={classes.button}>Find</button></div>
            </div>
        </div>
    )
}

export default Header;

