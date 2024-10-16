
import React from 'react';

import axios from 'axios';
import { apilink } from '@/app/Component/common';
import Comp from './Comp';


export default async function Page({ params: { slug } }) {
    // let data = [];
    
    // try {
    //     const response = await axios.get(`${apilink}/cities`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });

    //     data = response.data;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

    return (
        <div>
            <Comp slug={slug}  />
        </div>
    );
}
