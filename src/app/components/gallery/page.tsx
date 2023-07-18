'use client';
import { Grid } from '@nextui-org/react';
import ArtCard from '../artCard/page';
import { useEffect, useState } from 'react';
export default function Gallery(props: any) {
  const [images, setImages] = useState(props.images);

  useEffect(() => {
    
    setImages(props.images);
    }, [props, images]);



  return (
    <Grid.Container gap={2}>
      {images.map(
        (image: any) =>
           (
            <Grid xs={12} sm={3} key={image.id}>
              <ArtCard title={image.name} image={image.url} />
            </Grid>
          )
      )}
    </Grid.Container>
  );
}
