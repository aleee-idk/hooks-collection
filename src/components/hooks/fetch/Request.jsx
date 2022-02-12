import React, { useEffect, useState } from "react";
import Description from "../Description";
import { useGet } from "./hooks";
import "./Theme.scss";

const Request = () => {
  const [search, setSearch] = useState("");

  const data = useGet(
    "anime",
    {
      q: search,
      limit: 5,
    },
    null,
    "https://api.jikan.moe/v4/"
  );

  const code = "";

  return (
    <div id="fetch-hooks">
      <h1>Fetch Hooks</h1>
      <p>
        These hooks are a wrapper arround{" "}
        <a href="https://axios-http.com/">Axios</a> to make HTTP request, it can
        be used directly or by other hooks.
      </p>
      <Description
        id={"get-request"}
        title={"GET Request"}
        link={
          "https://github.com/aleee-idk/hooks-collection/blob/036fbd56f3bbf5e894fa564d0d19a5879eb82022/src/components/hooks/fetch/hooks.jsx#L8-L54"
        }
        description={
          "Perform a GET request, you can pass query string values as \
        an object and cancel request if are perform in rapid sucession."
        }
        code={code}
      />
      <h3>Example:</h3>
      <div className="hstack">
        <label for="anime-search">Search anime:</label>
        <input id="anime-search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul>
        {data && data.data.map((item, idx) => <li key={idx}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default Request;
