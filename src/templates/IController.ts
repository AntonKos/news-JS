import ISources from "./ISources";
import ICallbackSource from "./ICallbackSources";
interface IController{
  getSources:(callback:ICallbackSource)=>void;
  getNews:(e: { target: Element, currentTarget: Element}, callback:()=>void)=>void;
}
export default IController;