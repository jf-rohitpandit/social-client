import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ProfileHeader from './ProfileHeader';

const PostComponent = () => {
    let location = useLocation();
    return (
        <Link
            to={{
                pathname: '/post/:id',
                state: { background: location },
            }}>
            <div>
                <Link to='/profile/:id'>
                    <ProfileHeader />
                </Link>
                <div>some random data</div>
            </div>
        </Link>
    );
};

export default PostComponent;
