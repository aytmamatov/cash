import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { instance } from "../../../api/api";
import Preloader from "../../UI/Preloader/Preloader";

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
        <Preloader />
      ) : (
        <div className="fullEvent">
          <h3>{data.nameEvent}</h3>
          <div className="fullEvent__date">
            Дата {data.startTime} / {data.endTime}
          </div>
        </div>
      )}
    </div>
  );
}

export default FullEvent;
