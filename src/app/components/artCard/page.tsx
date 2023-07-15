import React from 'react';
import Image from 'next/image';
export default function ArtCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {/* <Image src={props.image} alt={props.title} width={500} height={500} /> */}
        </div>
    )
}