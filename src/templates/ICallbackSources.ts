import ISources from "./ISources";

interface ICallback {
  (data:{status:string, sources:ISources[]}): void;
}
export default ICallback;