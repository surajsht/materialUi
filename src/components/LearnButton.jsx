import { Button, Stack, Typography, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const LearnButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text'> Text Button </Button>
        <Button variant='contained'> Contained Button </Button>
        <Button variant='outlined'> Outlined Button </Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Typography variant='h4'> Link in text variant : </Typography>

        <Button variant='text' href="https://www.google.com"> Text button with link </Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'> Primary </Button>
        <Button variant='contained' color='secondary'> Secondary </Button>
        <Button variant='contained' color='error'> Error </Button>
        <Button variant='contained' color='warning'> Warning </Button>
        <Button variant='contained' color='info'> Info </Button>
        <Button variant='contained' color='success'> Success </Button>
      </Stack>

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'> Small </Button>
        <Button variant='contained' size='medium'> Medium </Button>
        <Button variant='contained' size='large'> Large </Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}> Send </Button>
        <Button variant='contained' endIcon={<SendIcon />}> Send </Button>

        <IconButton color='success'>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default LearnButton;