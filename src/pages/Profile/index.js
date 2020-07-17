import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";

import Upload from "../../components/UploadCard";
import ShortPostCard from "../../components/ShortPostCard";
import PersonalCard from "../../components/PersonalCard";
import ProfilePic from "../../components/PersonalCard/profilePic";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";

function Profile() {
  let location = useLocation();
  const dispatch = useDispatch();
  const { id, name, description, profile_pic, posts } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <Container>
      <CardColumns className="mt-2">
        <ProfilePic profile_pic={profile_pic} />
        <PersonalCard
          profile_pic={profile_pic}
          name={name}
          description={description}
          posts={posts.length}
          id={id}
        />
      </CardColumns>
      <Container>
        <Upload />
        <CardColumns className="mt-3">
          {posts &&
            posts.map((post, index) => {
              return (
                <Link
                  to={{
                    pathname: `/post/${post.id}`,
                    state: { background: location },
                  }}
                  key={index}
                >
                  <ShortPostCard key={index} post={post} />
                </Link>
              );
            })}
        </CardColumns>
      </Container>
    </Container>
  );
}

export default Profile;
