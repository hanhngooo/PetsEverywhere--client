import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../../components/PostCard";
import { fetchAllPosts } from "../../store/home/actions";
import { selectAllPosts } from "../../store/home/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div>
      {allPosts &&
        allPosts.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
    </div>
  );
}
