import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { instance } from "../../../api/api";

function FullEvent() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    instance
      .get(`events/${id}.json`)
      .then(({ data }) => setData(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div className="fullEvent">{data.nameEvent}</div>
      )}
    </div>
  );
}

export default FullEvent;
