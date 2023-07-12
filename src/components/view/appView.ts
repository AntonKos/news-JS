import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:{status:string,totalResults:number, articles:{
        author:string;
        content:string;
        description:string;
        publishedAt:string;
        source:{id:string, name:string};
        title:string;
        url:string;
        urlToImage:string; 
      }}) {
   
        
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:{status:string, sources:{
        author:string;
        content:string;
        description:string;
        publishedAt:string;
        source:{id:string, name:string};
        title:string;
        url:string;
        urlToImage:string; 
      }}) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
