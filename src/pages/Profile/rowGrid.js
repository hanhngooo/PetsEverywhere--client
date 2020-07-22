import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

import ShortPostCard from "../../components/ShortPostCard";

export default function RowGrid(props) {
  let location = useLocation();

  return (
    <div>
      <Row>
        {props.rowPosts &&
          props.rowPosts.map((post, index) => {
            return (
              <Col key={index}>
                <Link
                  to={{
                    pathname: `/post/${post.id}`,
                    state: { background: location },
                  }}
                >
                  <ShortPostCard key={index} post={post} />
                </Link>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
