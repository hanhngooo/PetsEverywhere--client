import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col, CardDeck } from "react-bootstrap";

import Upload from "../../components/UploadCard";
import PersonalCard from "../../components/PersonalCard";
import ProfilePic from "../../components/PersonalCard/profilePic";
import RowGrid from "./rowGrid";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";

function Profile() {
  const dispatch = useDispatch();
  const { id, name, description, profile_pic, posts } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <Container>
      <Row className="profile-info">
        <Col xs={2} md={4}>
          <ProfilePic profile_pic={profile_pic} />
        </Col>
        <Col>
          <PersonalCard
            profile_pic={profile_pic}
            name={name}
            description={description}
            posts={posts.length}
            id={id}
          />
        </Col>
      </Row>
      <Container>
        <Upload />
        <CardDeck>
          {posts &&
            posts.map((post, i) => {
              if (i % 3 === 0) {
                return (
                  <RowGrid key={post.id} rowPosts={posts.slice(i, i + 3)} />
                );
              }
              return null;
            })}
        </CardDeck>
      </Container>
    </Container>
  );
}

export default Profile;
