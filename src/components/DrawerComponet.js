import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';

const DrawerComponet = () => {
    const [openDrawer, setOpenDrawer] = useState(false);


    return (
        <div>
            <Drawer
                open={openDrawer}
                anchor='right'
            >
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ListItemText>Liked Countries</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default DrawerComponet
