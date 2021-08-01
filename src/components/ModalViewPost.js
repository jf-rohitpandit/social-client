import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ModalViewPost = () => {
    console.log('modal view');
    const history = useHistory();

    return (
        <div>
            Modal view of the post
            <button onClick={() => history.goBack()}>go back</button>
        </div>
    );
};

export default ModalViewPost;
