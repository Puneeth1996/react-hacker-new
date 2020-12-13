import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../Services/hnApi';

import { Story } from '../Components/Story';

export const StoriesContainer =  () => {
    const [storyIds, setStoryIds] = useState( [] );

    useEffect( () => {
        getStoryIds().then( data => setStoryIds(data) );
    }, [] );


    return <>
        <h1>Hacker new stories</h1>
        {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
    </>;
}

