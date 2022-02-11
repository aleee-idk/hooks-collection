import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

/**
 * Perform a GET request to the specified endpoint.
 *
 * @component
 * @param   {string}  endpoint   endpoint of the request.
 * @param   {Object}  query      A query string, it will be formatted before sending.
 * @param   {any}     update     Change this value to perform the request again.
 * @param   {string}  baseURL    Override the default baseURL, this parameter is optional only if a default baseULR has been defined.
 * @return  {any}     data       The requested data.
 */
const useGet = (endpoint, query, update, baseURL) => {
  const [data, setData] = useState();

  const request = query
    ? `${endpoint}?${new URLSearchParams(query)}`
    : endpoint;

  useEffect(() => {
    const cancelToken = new AbortController();

    if (!axiosInstance.defaults.baseURL && !baseURL) {
      console.error("A base url is needed");
      return;
    }

    if (!endpoint) {
      console.error("An endpoint is needed");
      return;
    }

    const config = {
      ...(baseURL && { baseURL }),
      signal: cancelToken.signal,
    };

    axiosInstance
      .get(request, config)
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err.message !== "canceled") console.log(err.message);
      });

    return () => cancelToken.abort();
  }, [endpoint, request, update, baseURL]);

  return data;
};

export { useGet };
