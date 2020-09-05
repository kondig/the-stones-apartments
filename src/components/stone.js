import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    width: 250,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    backgroundColor: '#000000',
    fontFamily: 'Open Sans, sans-serif',
    [theme.breakpoints.down('sm')]: {
      width: 170,
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
    },
  },
  media: {
      [theme.breakpoints.down('sm')]: {
        width: 120
      },
  },
  content: {
      fontFamily: 'Open Sans, sans-serif',
      color:'#ffffff'
  },
  cardactions: {
      display:'flex',
      justifyContent:'center',
      backgroundColor: '#000000'
  },
  container: {
    flexBasis: '100%',
    backgroundColor:'#ffffff'
  },
}));

function Stone(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

        <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
            <CardMedia
              className={classes.media}
              image={props.imgfile}
              title={props.imgtitle}
              width='100%'
              height='100%'
              component='img'
            />
        </a>


          <CardHeader className={classes.content}
            title={props.title}
            subheader={props.subheader}
          />

      {/* <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.descMain}
        </Typography>
      </CardContent>*/}
      <CardActions disableSpacing className={classes.cardactions}>
              <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
                <FontAwesomeIcon icon={faAirbnb} color="#ffffff" size="2x" />
              </a>
      </CardActions>
    </Card>
  );
}

class Apartment extends React.Component {
	render() {
    const { imgfile, imgtitle, title, descMain, link, subheader } = this.props;
		return (
			<div>
				<Stone
                  imgfile = { imgfile }
                  imgtitle = { imgtitle }
                  title = { title }
                  subheader = { subheader }
                  descMain = { descMain }
                  link = { link }
                 />
			</div>
		);
	}
}

export {Apartment};
