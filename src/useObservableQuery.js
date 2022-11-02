import { useQuery } from "react-query";
import { observable } from "@legendapp/state";

export function useObservableQuery(queryKey, queryFn) {
  const obs = observable({});
  const result = useQuery({ queryKey: queryKey, queryFn: queryFn });
  obs.set(result);
  return obs;
}
