import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PostCard from "../../components/PostCard";
import { fetchAllPosts } from "../../store/home/actions";
import { selectAllPosts } from "../../store/home/selectors";
import { selectUser } from "../../store/user/selectors";
export default function Home() {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (user.token === null) {
      history.push("/login");
    }
    dispatch(fetchAllPosts());
  }, [user.token, history, dispatch]);

  return (
    <div className="App-body">
      {allPosts &&
        allPosts.map((post, index) => {
          return <PostCard key={index} post={post} user={user} />;
        })}
    </div>
  );
}
