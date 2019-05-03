import { Observable } from "rxjs";
import axios, { CancelToken } from "axios";

const axios$ = ({ url, method, headers, params, body }) =>
  Observable.create(async observer => {
    try {
      const _source = CancelToken.source();
      const _axios = axios.create({
        url,
        method,
        headers,
        params,
        data: body,
        timeout: 60000,
        cancelToken: _source.token,
        baseURL: process.env.MUSIC_PLAYER_BASE_URL
      });

      const _resp = await _axios[method](url);

      observer.next(_resp);
      observer.complete();
    } catch (e) {
      console.log(observer);
    }

    return () => _source.cancel();
  });

export default axios$;
