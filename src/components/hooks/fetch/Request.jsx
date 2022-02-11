import React, { useEffect, useState } from "react";
import Component from "../Component";
import { useGet } from "./hooks";

const Request = () => {
  const [search, setSearch] = useState("");

  const data = useGet(
    "anime",
    {
      q: search,
    },
    null,
    "https://api.jikan.moe/v4/"
  );

  const id = "axios";
  const title = "Fetch Hooks";
  const description = (
    <>
      This hooks are a wrapper arround{" "}
      <a href="https://axios-http.com/">Axios</a> to make HTTP request, it can
      be used directly or by other hooks.
    </>
  );
  const code = "";
  const example = "";

  return (
    <>
      <Component
        id={id}
        title={title}
        description={description}
        code={code}
        example={example}
      />
      <h3>Search anime</h3>
      <input onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {data && data.data.map((item, idx) => <li key={idx}>{item.title}</li>)}
      </ul>
    </>
  );
};

export default Request;
