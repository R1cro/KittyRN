import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@kitten/ui';

type AvatarElement = React.ReactElement<AvatarProps>;

export const RoundAvatar = (): AvatarElement => {
  return (
    <Avatar
      shape='round'
      source={{ uri: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7790309/cena.jpg' }}
    />
  );
};