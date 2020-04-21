import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
  bigAvatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Avatar alt="Jennifer Pazos" src="./FullSizeR1.jpg" className={classes.bigAvatar} />
    </div>
  );
}
