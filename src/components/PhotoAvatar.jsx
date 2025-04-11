import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ imgsrc = "https://i.pravatar.cc/300?img=10" }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={imgsrc} />
    </Stack>
  );
}



// by SEIF