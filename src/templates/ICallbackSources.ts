import ISources from "./ISources";

interface ICallbackSource {
  (data:{status:string, sources:ISources[]}): void;
}
export default ICallbackSource;