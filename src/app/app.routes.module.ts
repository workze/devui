/**
 * Created by 10206545 on 2017/1/16.
 */

import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KafkaProducerComponent} from "./pages/kafka-producer/kafka-producer.component";
import {KafkaComsumerComponent} from "./pages/kafka-comsumer/kafka-comsumer.component";

const routes: any = [
  {
    path: '',
    redirectTo: 'kafka-c',
    pathMatch: 'full'
  },
  {path: 'kafka-p', component: KafkaProducerComponent},
  {path: 'kafka-c', component: KafkaComsumerComponent},

];
export const routing: ModuleWithProviders = RouterModule.forRoot(<Routes>routes, {useHash: true});
