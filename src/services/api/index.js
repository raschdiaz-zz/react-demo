//import React from "react";
//import { Provider, Subscribe, Container } from "unstated";
import axios from "axios";

export class HttpClient/* extends Container*/ {
  //client;

  constructor /*props*/(usePrivateclient = false) {
    //console.log("usePrivateclient", usePrivateclient);
    //super(/*props*/);
    /*this.state = {
      client: usePrivateclient
        ? axios.create({
            baseURL: process.env.REACT_APP_API_URL
          })
        : axios.create({
            baseURL: process.env.REACT_APP_BASE_URL
          })
    };

    this.state.client.interceptors.request.use(
      function(config) {
        console.dir(config);
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );

    this.state.client.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
*/
    //console.dir(this.state);
    //Create Client
    this.client = usePrivateclient
      ? axios.create({
          baseURL: process.env.REACT_APP_API_URL
        })
      : axios.create({
          baseURL: process.env.REACT_APP_BASE_URL
        });

    //Set Interceptors
    //  Request Interceptor
    this.client.interceptors.request.use(
      function(config) {
        console.dir(config);
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    //  Response Interceptor
    this.client.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }

  get(url, queryParams = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      this.client.get(url, { params: queryParams, headers: headers }).then(
        function(response) {
          return resolve(response);
        },
        function(error) {
          return reject(error);
        }
      );
    });
  }

  post(url, data, queryParams = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      this.client
        .post(url, data, { params: queryParams, headers: headers })
        .then(
          function(response) {
            return resolve(response);
          },
          function(error) {
            return reject(error);
          }
        );
    });
  }

  put(url, data, queryParams = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      this.client
        .put(url, data, { params: queryParams, headers: headers })
        .then(
          function(response) {
            return resolve(response);
          },
          function(error) {
            return reject(error);
          }
        );
    });
  }

  delete(url, queryParams = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      this.client.delete(url, { params: queryParams, headers: headers }).then(
        function(response) {
          return resolve(response);
        },
        function(error) {
          return reject(error);
        }
      );
    });
  }
}
/*
const httpClient = new HttpClient();

export const HttpClientProvider = props => {
  return (
    <Provider inject={props.inject || [httpClient]}>{props.children}</Provider>
  );
};

export const HttpClientSubscribe = props => {
  console.dir(props);
  return <Subscribe to={props.to || [httpClient]}>{props.children}</Subscribe>;
};
*/
export default HttpClient;
