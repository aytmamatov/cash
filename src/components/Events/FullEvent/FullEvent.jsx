import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { instance } from "../../../api/api";
import Preloader from "../../UI/Preloader/Preloader";
import firebase from "./../../../config/fbConfig";
import "./FullEvent.sass";
function FullEvent() {
  const history = useHistory();
  const { id } = useParams();
  const [loadingData, setLoadingData] = useState({
    isLoading: false,
    isLoadingRemove: false,
  });
  const [data, setData] = useState({});

  useEffect(() => {
    instance
      .get(`events/${id}.json`)
      .then(({ data }) => setData(data))
      .then(() => setLoadingData((prev) => ({ ...prev, isLoading: true })));
  }, []);
  const removePostHandler = () => {
    setLoadingData((prev) => ({ ...prev, isLoadingRemove: true }));
    firebase
      .database()
      .ref(`events/${id}`)
      .remove()
      .then(() => history.push("/events"));
  };
  return (
    <div>
      {loadingData.isLoading ? (
        loadingData.isLoadingRemove ? (
          <Preloader title="Удаляется..." />
        ) : (
          <div className="fullEvent">
            <h3>{data.nameEvent}</h3>
            <div className="fullEvent__date">
              Дата {data.startTime} / {data.endTime}
            </div>
            <div className="fullEvent__group">
              <Button
                onClick={removePostHandler}
                variant="danger"
                className="fullEvent__remove"
              >
                Удалить
              </Button>
            </div>
          </div>
        )
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default FullEvent;
