import { Container } from "unstated";
import axios from "axios";

class HttpClient extends Container {
  //Initial state
  state = {
    usePrivateclient: false
  };
  client = {};

  constructor(props) {
    console.log("HttpClient Container!");
    super(props);

    //Replace state with incomming props
    this.state = {
      ...props
    };

    //Create Client
    let client = axios.create({
      baseURL: this.state.usePrivateClient
        ? process.env.REACT_APP_API_URL
        : process.env.REACT_APP_BASE_URL
    });

    //Set Interceptors
    //  Request Interceptor
    client.interceptors.request.use(
      function(config) {
        console.log("Request Interceptor Config");
        console.dir(config);
        return config;
      },
      function(error) {
        console.error("Request Interceptor Error");
        return Promise.reject(error);
      }
    );
    //  Response Interceptor
    client.interceptors.response.use(
      function(response) {
        console.log("Response Interceptor Config");
        console.dir(response);
        return response;
      },
      function(error) {
        console.error("Response Interceptor Error");
        return Promise.reject(error);
      }
    );

    this.client = client;
  }

  get(url, queryParams = {}, headers = {}) {
    var config = {
      params: queryParams,
      headers: headers
    };
    return this.client.get(url, config);
  }

  post(url, data = {}, queryParams = {}, headers = {}) {
    var config = {
      params: queryParams,
      headers: headers,
      data: data
    };
    return this.client.post(url, config);
  }

  put(url, data = {}, queryParams = {}, headers = {}) {
    var config = {
      params: queryParams,
      headers: headers,
      data: data
    };
    return this.client.put(url, config);
  }

  delete(url, queryParams = {}, headers = {}) {
    var config = {
      params: queryParams,
      headers: headers
    };
    return this.client.delete(url, config);
  }

}

export default HttpClient;
