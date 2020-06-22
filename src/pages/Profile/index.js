import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import Upload from "../../components/UploadCard";
import ShortPostCard from "../../components/ShortPostCard";
import PersonalCard from "../../components/PersonalCard";
import ProfilePic from "../../components/PersonalCard/profilePic";

// import Loading from "../../components/Loading";
import { selectUser } from "../../store/user/selectors";
import { fetchPostByUserId } from "../../store/profile/actions";

function Profile() {
  const dispatch = useDispatch();
  const { name, description, profile_pic, posts, id } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchPostByUserId(id));
  }, [dispatch, id]);

  // if (posts === null) {
  //   return <Loading />;
  // }

  return (
    <Container>
      <ProfilePic profile_pic={profile_pic} />
      <PersonalCard
        profile_pic={profile_pic}
        name={name}
        description={description}
        posts={posts.length}
      />
      <Upload />
      {posts &&
        posts.map((post, index) => {
          return <ShortPostCard key={index} post={post} />;
        })}
    </Container>
  );
}

export default Profile;
