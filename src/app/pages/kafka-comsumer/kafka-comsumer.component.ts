import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {PythonService} from "../../service/python.service";
import {KafkaWsService} from "../../service/wsservice/kafka-ws.service";

@Component({
    selector: 'app-kafka-comsumer',
    templateUrl: './kafka-comsumer.component.html',
    styleUrls: ['./kafka-comsumer.component.css']
})
export class KafkaComsumerComponent implements OnInit {

    public data = {};
    public console = '';
    public k_c_clientid = Math.floor(Math.random() * 1000000000000).toString();
    public k_c_connected = false;
    public k_c_timer;
    public k_c_subscribe;

    constructor(private ps: PythonService, private kws: KafkaWsService) {
        // 每5s轮询一次
        this.k_c_timer = timer(1000, 5000);
        this.k_c_subscribe = this.k_c_timer.subscribe(val => {
            if (this.k_c_connected) {
                this.ps.call('kfk.consumer', 'query', this.data).subscribe(res => {
                    console.log(res);
                    this.console = this.console + res['data'];
                });
            }
        });
        kws.messages.subscribe(mes => {
            this.console += mes + '\n';
        });
    }

    ngOnInit() {
    }

    public connect() {
        console.log('k_c_clientid is ', this.k_c_clientid);
        this.data['k.c.k_c_clientid'] =  this.k_c_clientid;
        this.ps.call('kfk.consumer', 'connect', this.data).subscribe(
            res => {
                console.log(res);
                this.console = res['message'];
                if (res['code'] === 0) {
                    this.k_c_connected = true;
                }
            }
        );
    }

    public close() {
        this.ps.call('kfk.consumer', 'close', this.data).subscribe(
            res => {
                console.log(res);
                this.console = res['message'];
                if (res['code'] === 0) {
                    this.k_c_connected = false;
                }
            }
        );
    }

    public clear() {
        this.console = '';
    }
}
