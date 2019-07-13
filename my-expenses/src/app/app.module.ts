import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleCreditorPage } from './pages/creditors/single-creditor/single-creditor.page';
import { SingleDebtPage } from './pages/debts/single-debt/single-debt.page';
import { PaidCreditsPage } from './pages/creditors/paid-credits/paid-credits.page';
import { PaidDebtsPage } from './pages/debts/paid-debts/paid-debts.page';

@NgModule({
  declarations: [AppComponent, SingleCreditorPage, SingleDebtPage, PaidCreditsPage, PaidDebtsPage],
  entryComponents: [SingleCreditorPage, SingleDebtPage, PaidCreditsPage, PaidDebtsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
