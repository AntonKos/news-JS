import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import IArticle from '../../templates/IArticles';
import ISources from '../../templates/ISources';
import IController from '../../templates/IController';
import IView from '../../templates/IView';

class App {
    controller:IController;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data:{status:string,totalResults:number, articles:IArticle[]}) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
