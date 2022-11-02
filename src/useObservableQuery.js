import { useQuery } from "@tanstack/react-query";
import { observable } from "@legendapp/state";

export default function useObservableQuery(queryKey, queryFn) {
  const obs = observable({});
  const result = useQuery({ queryKey: queryKey, queryFn: queryFn });
  obs.set(result);
  return obs;
}
