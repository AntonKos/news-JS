import News from './news/news';
import Sources from './sources/sources';
import IArticle from '../../templates/IArticles';
import ISources from '../../templates/ISources';

export class AppView {
  news:{
    draw:(data:IArticle[])=>void
  };
  sources:{
    draw:(data:ISources[])=>void
  }
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:{status:string,totalResults:number, articles:IArticle[]}) {
   
        
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:{status:string, sources:ISources[]}) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
