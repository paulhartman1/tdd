'use client';
import React from 'react';
import Nav from './components/nav/page';
import { Image, Grid } from '@nextui-org/react';
import { useMediaQuery } from '@/utils/useMediaQuery';

import { Great_Vibes } from 'next/font/google';
export default function Home() {
  return (
    <div>
      <Nav />
      <Grid.Container gap={2} justify="center" style={{marginTop:'50px'}}>
        <Grid xs={0} sm={6}>
          <Image
            className='banner-image'
            height={450}
       
            src="/dave.png"
            alt="Picture of the author"
            objectFit='scale-down'
          />
        </Grid>
        <Grid xs={12} sm={6}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          suscipit deleniti quo eveniet accusamus facilis dolore ex quae
          corrupti odio molestiae fugiat repudiandae soluta, ullam, corporis
          non. Corporis, ipsam sint.
        </Grid>
      </Grid.Container>
    </div>
  );
}
