import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Post = () => {
    let {id} = useParams();
    let {postStore: {post}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
    }, [id]);
    return (
        <div>
            {JSON.parse(JSON.stringify(post))}
            <NavLink to={'/posts/' + id + '/comments'}>detail comments</NavLink>
        </div>
    );
};

export default Post;