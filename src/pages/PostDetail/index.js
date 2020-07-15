import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import { fetchAPost } from "../../store/postDetail/actions";

export default function PostDetail() {
  let history = useHistory();
  const postId = useParams().id;
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  console.log("post id", postId);
  useEffect(() => {
    dispatch(fetchAPost(postId));
  }, [dispatch, postId]);

  let back = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div onClick={back}>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header
          style={{ padding: "0.5rem" }}
          closeButton={back}
        ></Modal.Header>
        <Modal.Body> post detail</Modal.Body>
      </Modal>
    </div>
  );
}
