import {Component, OnInit} from '@angular/core';
import {PythonService} from "../../service/python.service";

@Component({
    selector: 'app-kafka-producer',
    templateUrl: './kafka-producer.component.html',
    styleUrls: ['./kafka-producer.component.css'],
})
export class KafkaProducerComponent implements OnInit {

    public data = {};
    public console = '';

    constructor(public ps: PythonService) {
    }

    ngOnInit() {
        this.data['k.p.broker'] = '123';
    }

    public send(data) {
        console.log(data);
        this.ps.call('kfk.producer', 'send', this.data).subscribe(
            res => {
                console.log(res);
                this.console = res['message'];
            }
        );
    }

    public sendWithTimes(time) {
        this.ps.call('kfk.producer', 'send', this.data).subscribe(
            res => {
                console.log(res);
                this.console = res['message'];
            }
        );
    }

}
