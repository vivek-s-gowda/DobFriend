import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'result',
    component: SearchResultComponent,
  },
  { path: 'search', component: SearchComponent },

  {
    path: 'user',
    component: UserProfileComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchResultComponent,
    SearchComponent,
    UserProfileComponent,
    ChatComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
