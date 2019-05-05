import { tap } from "rxjs/operators";

const musixMatchErrorHandler$ = () => source =>
  source.pipe(
    tap(resp => {
      if (resp.response.message.header.status_code >= 300) {
        throw new Error(resp.response.message.body);
      }
    })
  );

export default musixMatchErrorHandler$;
