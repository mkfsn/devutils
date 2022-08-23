import React, {Dispatch, SetStateAction} from 'react'
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import moduleConfigs from '../config/module';

interface Props {
    setModuleName: Dispatch<SetStateAction<string>>
}

export default class Sidebar extends React.Component<Props> {
    private readonly moduleNames = Object.keys(moduleConfigs);

    render() {
        return (
            <Drawer variant="permanent" anchor="left">
                <Toolbar />
                <List>
                    {this.moduleNames.map((text: string) => (
                        <ListItem key={text} disablePadding onClick={() => this.props.setModuleName(text)}>
                            <ListItemButton dense={true}>
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    {moduleConfigs[text].Icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        )
    }
}
