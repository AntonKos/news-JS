import ISources from "./ISources";
import ICallback from "./ICallbackSources";
interface IController{
  getSources:(callback:ICallback)=>void;
  getNews:(e: { target: Element, currentTarget: Element}, callback:()=>void)=>void;
}
export default IController;