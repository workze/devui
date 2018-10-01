import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';import { ButtonComponent } from './component/button/button.component';
import { OutputComponent } from './component/output/output.component';
import { SelectComponent } from './component/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing} from "./app.routes.module";
import { KafkaProducerComponent } from './pages/kafka-producer/kafka-producer.component';
import { KafkaComsumerComponent } from './pages/kafka-comsumer/kafka-comsumer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    OutputComponent,
    SelectComponent,
    KafkaProducerComponent,
    KafkaComsumerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
