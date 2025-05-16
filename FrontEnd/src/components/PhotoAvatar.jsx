import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
//avatar link from internet
export default function ImageAvatars({ src="https://mui.com/static/images/avatar/1.jpg" }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={src} />
    </Stack>
  );
}



// by SEIF