import React, { useEffect, useState } from 'react';
import { getStory } from '../Services/hnApi';


export const Story =  ( { storyId } ) => {
    const [story, setStory] = useState( [] );

    useEffect( () => {
        getStory(storyId).then( data => data && data.url && setStory(data) );
    }, [] );

    return <p> this is story { JSON.stringify(story) } </p>;
}



