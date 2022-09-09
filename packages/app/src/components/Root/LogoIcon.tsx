/* eslint-disable jsx-a11y/alt-text */
/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwLogoIcon from './logo/tw.logo.icon.png';


const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 30,
    background: 'white',
  },
});

const LogoIcon = () => {
  const classes = useStyles();
  // eslint-disable-next-line jsx-a11y/alt-text
  return (<img className={classes.logo} src={TwLogoIcon} />);

};

export default LogoIcon;
