import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar.js'
import TagLine from './TagLine.js'
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import Skills from './Skills.js'
import Paper from '@material-ui/core/Paper';


const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    'background-color': 'white',
    color: "black"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));



let LeftDrawer = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <CssBaseline />
      
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        
          <div className={classes.toolbar} />
          
           
          <Avatar />
          <TagLine />
          <List>
            <a href="/blogs" className="nav">
            <ListItem button key={'Blog Posts'}>
            <ListItemIcon><DescriptionTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Blog Posts" />
            </ListItem>
            </a>
            <a href="/resources" className="nav">
            <ListItem button key={'Resources'}>
            <ListItemIcon><FolderOpenTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Resources" />
            </ListItem>
            </a>
            <a href="/email" className="nav">
            <ListItem button key={'Email'}>
            <ListItemIcon><FolderOpenTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Email" />
            </ListItem>
            </a>

            
          </List>
          
          <Divider />
          <Skills />
          
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Paper className={classes.root}></Paper>
    
        
      </main>
        </div>
    )
}

export default LeftDrawer