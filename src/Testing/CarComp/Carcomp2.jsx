import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard2() {
  const [xpanded, setxpanded] = React.useState(false);

  const handlxpandCick = () => {
    setxpanded(!xpanded);
  };

  return (
    <Card sx={{ maxWidth: 345 ,bgcolor:'#F5E8C7'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'pink' }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="COCKRACO RESTAURENT "
        subheader="BK Pudur,Coimbatore"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.tasteofhome.com/wp-content/uploads/2019/04/shutterstock_101642626.jpg?w=1200"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        
        South Indian, North Indian, Chinese, Sichuan, Shawarma, Biryani, Ice Cream, Shake
        <br>
        </br>
        Open - 11am(Everyday) Closes -11pm(Everyday)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={xpanded}
          onClick={handlxpandCick}
          aria-expanded={xpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={xpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>POPULAR DISHES:</Typography>
          <Typography paragraph>
          Chicken Biryani<br></br>
Mutton Biryani<br></br>
Fish Curry<br></br>
Chicken Curry<br></br>
Mutton Curry<br></br>
Chicken Chettinad<br></br>
Fish Fry<br></br>
Egg Curry<br></br>
Nattu Kozhi Varuval (Country Chicken Fry)<br></br>
Prawn Curry<br></br>
          </Typography>
          <Typography paragraph>
            PEOPLE SAY THIS PLACE IS KNOWN FOR:<br></br>
            Cozy Ambiance, Unlimited Refills, Lip Smacking Food, Pocket Friendly, Comfort Food, Prompt Service

          </Typography>
          <Typography paragraph>
            CALL:<br>
            </br>
             097871 40930
             <br></br>
          </Typography>
          <br></br>
          Nandhavana Thottam, Palakkad Main Rd, opp. to Sri krishna college, BK Pudur, Coimbatore, Tamil Nadu 641008
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
