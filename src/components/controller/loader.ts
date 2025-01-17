import IArticle from "../../templates/IArticles";
import ISources from "../../templates/ISources";
import ICallback from "../../templates/ICallbackSources";
class Loader {
    baseLink:string;
    options:{apiKey:string};
    constructor(baseLink:string, options:{apiKey:string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }:{endpoint:string, options?:{sources?:string|null}},
        callback:ICallback= () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res:Response) {
       
        
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options:{sources?:string}, endpoint:string) {
        const urlOptions:{[key: string]: string} = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method:string, endpoint:string, callback:ICallback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
