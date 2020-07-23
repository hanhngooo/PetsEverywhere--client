import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Row, Col, CardDeck } from "react-bootstrap";

import PersonalCard from "../../components/PersonalCard";
import ProfilePic from "../../components/PersonalCard/profilePic";
import RowGrid from "../Profile/rowGrid";
import { selectUserById } from "../../store/profile/selectors";
import { fetchUserById } from "../../store/profile/actions";

function ProfileById() {
  const profileId = parseInt(useParams().id);
  const dispatch = useDispatch();
  const { name, description, profile_pic, posts } = useSelector(selectUserById);

  useEffect(() => {
    dispatch(fetchUserById(profileId));
  }, [dispatch, profileId]);
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
            posts={posts && posts.length}
          />
        </Col>
      </Row>
      <Container>
        <CardDeck>
          {posts &&
            posts.map((post, i) => {
              if (i % 3 === 0) {
                return (
                  <RowGrid key={post.id} rowPosts={posts.slice(i, i + 3)} />
                );
              }
            })}
        </CardDeck>
      </Container>
    </Container>
  );
}

export default ProfileById;
