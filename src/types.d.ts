declare module 'follow-redirects';
declare module "*.json" {
    const value: any;
    export default value;
}
declare module "service-runner";
declare module "utf8-binary-cutter";
declare module "expand-home-dir";
declare module "swig-templates";
declare module "mkdirp";
declare module "country-language";
declare module "backoff";
declare module "imagemin-advpng";
declare module "imagemin-jpegoptim";

type DominoElement = any;

type Callback = (err?: any, data?: any, extra?: any) => void;
type KVS<T> = { [key: string]: T };

interface MWMetaData {
    langIso2: string;
    langIso3: string;
    title: string;
    subTitle: string;
    creator: string;
    mainPage: string;
    textDir: 'ltr' | 'rtl';

    base: any;
    wikiPath: any;
    apiPath: any;
    domain: any;
    webUrl: string;
    apiUrl: string;
    webUrlPath: string;
    modulePath: string;
}

interface ContinueOpts {
    rdcontinue?: string;
    continue?: string;
    // ...
}

interface QueryContinueOpts {
    categories: {
        clcontinue: string;
    }
    coordinates: {
        cocontinue: string;
    }
    allpages: {
        gapcontinue: string;
    },
    redirects: {
        rdcontinue: string;
    },
    pageimages: {
        picontinue: string;
    },
}

interface PageInfo {
    ns?: number;
    title: string;
}

type ArticleDetail = PageInfo & {
    subCategories?: PageInfo[],
    categories?: PageInfo[],
    pages?: PageInfo[],
    thumbnail?: {
        source: string,
        height: number,
        width: number,
    },
    coordinates?: string, // coordinates.0.lat;coordinates.0.lon
    timestamp?: string, // revisions.0.timestamp
    revisionId?: number, //revisions.0.revid
    internalThumbnailUrl?: string, // internalThumbnailUrl
    nextArticleId?: string,
    prevArticleId?: string,
    missing?: string,
};

type QueryCategoriesRet = PageInfo[];

type QueryRevisionsRet = Array<{
    revid: number,
    parentid: number,
    minor: string,
    user: string,
    timestamp: string,
    comment: string,
}>;

type QueryCoordinatesRet = Array<{
    lat: number,
    lon: number,
    primary: string,
    globe: string,
}>;

type QueryRedirectsRet = PageInfo[];

interface QueryRet {
    subCategories?: PageInfo[], // :(
    categories?: QueryCategoriesRet;
    revisions?: QueryRevisionsRet;
    coordinates?: QueryCoordinatesRet;
    redirects?: QueryRedirectsRet;

    thumbnail?: {
        source: string
        width: number
        height: number,
    };

    missing?: string;
}

interface MwApiQueryResponse {
    normalized?: Array<{ from: string, to: string }>;
    pages: {
        [pageId: string]: PageInfo & QueryRet,
    };
}

interface MwApiResponse {
    batchcomplete: string;
    query: MwApiQueryResponse;
    continue?: {
        [key: string]: string;
    };
    'query-continue'?: QueryContinueOpts;
    warnings?: {
        [key: string]: {
            [key: string]: string;
        },
    };
    error?: any;
}

interface QueryMwRet {
    [articleId: string]: PageInfo & QueryRet;
}
