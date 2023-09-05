import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';


function Stone(props) {
  return (
    <Card sx={{maxWidth: 500, width: {xs:170, md:250}, borderBottomRightRadius:0, borderBottomLeftRadius:0, backgroundColor: 'transparent', fontFamily: 'Open Sans, sans-serif',
               display: {xs: 'flex',}, flexDirection: 'column', justifyContent: 'center', alignItems:'center','&:hover':{ scale:'1.1',}, }}>        
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
            <CardMedia
              sx={{ width: {xs: 120, md: 150}, }}
              image={props.imgfile}
              title={props.imgtitle}
              width='100%'
              height='100%'
              component='img'
            />
        </a>
        <CardHeader sx={{ fontFamily: 'Open Sans, sans-serif', }}
          title={props.title}
          titleTypographyProps={{ fontSize:'1.8rem', color:'#000000', }}
          subheader={props.subheader}
          subheaderTypographyProps={{ fontSize: '1.4rem', color: '#c4c4c4'}}
        />
        <CardActions disableSpacing sx={{ display:'flex', justifyContent:'center', 
                                          backgroundColor: 'transparent','&:hover':{ scale:'1.1',} }}>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
                  <FontAwesomeIcon icon={faAirbnb} color="#000000" size="2x" />
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
