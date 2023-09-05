import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';


{/*const useStyles = makeStyles((theme) => ({

  container: {
    flexBasis: '100%',
    backgroundColor:'#ffffff'
  },
}));*/}

function Stone(props) {
  return (
    <Card sx={{maxWidth: 500, width: {xs:170, md:250}, borderBottomRightRadius:0, borderBottomLeftRadius:0, backgroundColor: '#000000', fontFamily: 'Open Sans, sans-serif',
               display: {xs: 'flex',}, flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>

        <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
            <CardMedia
              sx={{ width: {xs: 120, md: 150}}}
              image={props.imgfile}
              title={props.imgtitle}
              width='100%'
              height='100%'
              component='img'
            />
        </a>
        <CardHeader sx={{ fontFamily: 'Open Sans, sans-serif', color:'#ffffff' }}
          title={props.title}
          subheader={props.subheader}
        />
        {/* <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.descMain}
          </Typography>
        </CardContent>*/}
        <CardActions disableSpacing sx={{ display:'flex', justifyContent:'center', backgroundColor: '#000000' }}>
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
