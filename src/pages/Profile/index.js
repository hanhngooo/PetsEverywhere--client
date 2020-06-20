import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import Upload from "../../components/UploadCard";
import ShortPostCard from "../../components/ShortPostCard";
// import Loading from "../../components/Loading";
import { selectUser } from "../../store/user/selectors";
import { fetchPostByUserId } from "../../store/profile/actions";

function Profile() {
  const dispatch = useDispatch();
  const { posts, id } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchPostByUserId(id));
  }, [dispatch, id]);

  // if (posts === null) {
  //   return <Loading />;
  // }

  return (
    <Container>
      <Upload />
      {posts &&
        posts.map((post, index) => {
          return <ShortPostCard key={index} post={post} />;
        })}
    </Container>
  );
}

export default Profile;
