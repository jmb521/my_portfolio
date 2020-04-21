import React from 'react'
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: 300,
    
    flexDirection: 'column'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const BlogCard = (props) => {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>
    return(
        <div>
            <Card className={classes.card} raised={true}>
                <CardContent>
                    <Typography className={classes.title}>
                        <h2>{props.post.title}</h2>
                    </Typography>
                    <Typography>
                        <h5>{props.post.created_at}</h5>
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    )
}

export default BlogCard