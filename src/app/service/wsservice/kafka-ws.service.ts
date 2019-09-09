import {Injectable} from '@angular/core';
import {WebsocketService} from "../websocket.service";
import {CLIENT_ID, WEBSOCKET_KAFKA_SERVER} from "../../app.config";
import {Subject} from "rxjs";
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class KafkaWsService {
    public messages: Subject<any>;

    constructor(private ws: WebsocketService) {
        const WS_URL = WEBSOCKET_KAFKA_SERVER + '/' + CLIENT_ID;
        console.log('KafkaWsService.constructor() ws_url is ', WS_URL);
        this.messages = <Subject<any>>ws
            .connect(WS_URL)
            .pipe(map((response: MessageEvent): any => {
                console.log('websocket get response.data:', response.data);
                // const data = JSON.parse(response.data);
                return response.data;
            }));
    }
}
