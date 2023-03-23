import { Typography } from "@mui/material";

const LearnTypography = () => {
  return (
    <div>
      <Typography variant='h1'> This is heading </Typography>
      <Typography variant='h2'> This is heading </Typography>
      <Typography variant='h3'> This is heading </Typography>
      <Typography variant='h4'> This is heading </Typography>
      <Typography variant='h5'> This is heading </Typography>
      <Typography variant='h6'> This is heading </Typography>

      {/* subtitle  */}

      <Typography varient='subtitle1'> This is subtitle 1 </Typography>
      <Typography varient='subtitle2'> This is subtitle 2 </Typography>

      {/* body */}

      <Typography variant='body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut! </Typography>
      <Typography variant='body2'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, aperiam? </Typography>

      {/* component  */}

      <Typography variant='h1' component='span'> This is heading 1 in span tag </Typography>
    </div>
  );
};

export default LearnTypography;