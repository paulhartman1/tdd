'use client';
import React, { use, useEffect, useState } from 'react';
import Nav from '../components/nav/page';
import Layout from '../components/layout/page';
import ImageGallery from '../components/gallery/page';
import { usePathname } from 'next/navigation';
import imgData from '../../../public/images.json';

 interface image {
  id: number;
  name: string;
  url: string;
  catId: number;
  isPrimary: boolean;
}

export default function Gallery() {
  const [bannerImage, setBannerImage] = useState('');
  const [bodyData, setBodyData] = useState();

  const [images, setImages] = useState<image[]>([]);
  const router = usePathname();
  const [catId, setCatId] = useState(-1);

  useEffect(() => {
    setCatId(parseInt(router.substring(1)));
  }, [router]);

  useEffect(() => {
    console.log('catId', catId);
    let images = [];
    for (let i = 0; i < imgData.length; i++) {
      if (
        imgData[i].catId === catId
      ) {
        if (imgData[i].isPrimary) {
          setBannerImage(imgData[i].url);
        } else {
          images.push(imgData[i]);
          setImages(images);
        }
       
      }
    }
  }, [bannerImage, catId]);

  return (
    <>
      <Nav />
      <Layout
        bannerImage={bannerImage}
        bodyData={<ImageGallery catId={catId} images={images} />}
      />
    </>
  );
}
