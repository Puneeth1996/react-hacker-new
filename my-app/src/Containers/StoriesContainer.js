import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../Services/hnApi';

import { Story } from '../Components/Story';

import { useInfiniteScroll } from './useInfiniteScroll';

export const StoriesContainer =  () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        console.log('count', count)
        getStoryIds().then(data => setStoryIds(data));
    }, [count]);

    return <>
        <h1>Hacker new stories</h1>
        {storyIds.slice(0, count).map(storyId => (
            <Story key={storyId} storyId={storyId} />
        ))}
    </>;
}

