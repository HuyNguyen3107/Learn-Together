import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  serverAPI: SERVER_API,
  token: null,
  send: async function (url, method = "GET", body = null) {
    url = `${this.serverAPI}/${url}`;
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return {
      response,
      data,
    };
  },

  //   get
  get: function (url) {
    return this.send(url);
  },

  //   post
  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
