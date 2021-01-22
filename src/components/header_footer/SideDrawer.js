import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            <List component="nav">
                <ListItem button onClick={() => scrollToElement ('featured')}>
                    Event starts in
                </ListItem>

<<<<<<< HEAD
                <ListItem button onClick={() => scrollToElement ('venueNfo')}>
                Meet the Staff
=======
                <ListItem button onClick={() => scrollToElement ('venueHfo')}>
                    Staff
>>>>>>> 9ac8abb7e642b9bb0326331d865c089e8bb0b1e7
                </ListItem>

                <ListItem button onClick={() => scrollToElement ('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={() => scrollToElement ('pricing')}>
                    Internships
                </ListItem>
                
                <ListItem button onClick={() => scrollToElement ('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
    
};

export default SideDrawer;