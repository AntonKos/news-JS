import AppLoader from './appLoader';
import ISources from '../../templates/ISources';
import ICallback from '../../templates/ICallbackSources';
class AppController extends AppLoader {
    getSources(callback:ICallback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: { target: Element, currentTarget: Element}, callback:()=>void) {

        let target = e.target;
        const newsContainer = e.currentTarget;
       
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
