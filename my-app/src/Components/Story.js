import React, { useEffect, useState } from 'react';
import { getStory } from '../Services/hnApi';
import { StoryWrapper } from '../Styles/StoryStyles';


export const Story =  ( { storyId } ) => {
    const [story, setStory] = useState( [] );

    useEffect( () => {
        getStory(storyId).then( data => data && data.url && setStory(data) );
    }, [] );

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <a href={story.url}>
                <p>{story.title}</p>
            </a>
            By: <p>{story.by}</p>
            Posted: <p>{story.time}</p>
        </StoryWrapper>
        ) : null;

}



