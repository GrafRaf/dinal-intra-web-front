declare namespace ymaps {
  export function ready(): Promise;
  export function route(points:Array<string|number[]|RoutePoint>, params?:RouteParameters): Promise;

  class Promise {
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: any): Promise;
  }

  export class Map {
    constructor(element: string | any, state: MapState);

    public geoObjects: any;
    getCenter();

  }

  export class MapState {
    center: number[];
    controls: string[];
    zoom: number;
  }

  export class Placemark {
    constructor(coordinates: any, baloon:any,  options: any);

    public balloonContentBody: any;
  }

    export class RouteParameters {
        avoidTrafficJams:boolean;
        boundedBy:number[][];
        mapStateAutoApply:boolean;
        multiRoute:boolean;
        routingMode:"auto"|"masstransit";
        searchCoordOrder:string;
        strictBounds:boolean;
        viaIndexes:number[];
    }

    export interface RoutePoint {
        type:"wayPoint"|"viaPoint";
        point:number[]|string;
    }  
}
