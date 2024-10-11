// app/singleproperties/[slug]/page.tsx
// 'use client'
import React from 'react';
// import SlugComponent from './comp/Comp';
import Comp from './comp'
import axios from 'axios';
import { apilink } from '../Component/common';
// import { apiLink } from '../constants';



// export async function getServerSideProps(context) {
//     const { slug } = context.params;

//     // Perform any data fetching required for your flight details
//     try {
//         const response = await axios.get(`${apilink}/airports`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = response.data;
//         // You can modify this logic as needed based on the slug or other requirements

//         return {
//             props: { slug, data }, // Pass data as props to the component
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             props: { slug, data: [] }, // Return an empty array or error fallback
//         };
//     }
// }

export default async function Page({ params: { slug } }) {
    let data = [];
    
    try {
        const response = await axios.get(`${apilink}/airports`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        data = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return (
        <div>
            <Comp slug={slug} data={data} />
        </div>
    );
}
