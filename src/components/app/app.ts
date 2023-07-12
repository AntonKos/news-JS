import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        interface IArticle{
          author:string;
          content:string;
          description:string;
          publishedAt:string;
          source:{id:string, name:string};
          title:string;
          url:string;
          urlToImage:string; 
        }

        interface ISources{
            category:string;
            country:string;
            description:string;
            id:string;
            language:string;
            name:string;
            url:string; 
          }

        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data:{status:string,totalResults:number, articles:IArticle[]}) => this.view.drawNews(data)));
        this.controller.getSources((data:{status:string, sources:ISources}) => this.view.drawSources(data));
    }
}

export default App;
