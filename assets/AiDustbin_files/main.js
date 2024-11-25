// src/main.ts
import { bootstrapApplication } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_platform-browser.js?v=ea3a3b21";

// src/app/app.config.ts
import { provideRouter } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_router.js?v=ea3a3b21";

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
import { provideClientHydration } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_platform-browser.js?v=ea3a3b21";
import { provideHttpClient } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_common_http.js?v=ea3a3b21";
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};

// src/app/app.component.ts
import { Component } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_core.js?v=ea3a3b21";
import { RouterOutlet } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_router.js?v=ea3a3b21";

// src/app/app-service.service.ts
import { Injectable } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_core.js?v=ea3a3b21";
import { map } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/rxjs.js?v=ea3a3b21";

// src/app/app.model.ts
import __vite__cjsImport8_moment from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/moment.js?v=ea3a3b21"; const moment = __vite__cjsImport8_moment.__esModule ? __vite__cjsImport8_moment.default : __vite__cjsImport8_moment;
var AppModel = class {
  constructor(data) {
    this.adminContact = data.AdminContact;
    this.adminName = data.AdminName;
    this.isDamage = data.IsDamage;
    this.dustbinStatus = this.getDustbinStatus(data.DustbinStatus);
    this.installationDate = moment(data.InstallationDate).format("DD.MM.YYYY");
    this.sensorStatus = data.SensorStatus === SENSOR_WORKING_STATUS.NOT_WORKING ? "Not working" : "Working";
    this.type = data.Type.toString() === "D" ? "Dry dustbin" : "Wet dustbin";
    this.lastUpdatedDate = moment(data.LastUpdatedDate).format("DD.MM.YYYY");
    this.uId = data.Uid;
  }
  getDustbinStatus(data) {
    if (data === DUSTBIN_STATUS.FULL) {
      return "Dustbin is full";
    } else if (data === DUSTBIN_STATUS.EMPTY) {
      return "Dustbin is Empty";
    } else {
      return "Dustbin is Half";
    }
  }
};
var DUSTBIN_STATUS;
(function(DUSTBIN_STATUS2) {
  DUSTBIN_STATUS2[DUSTBIN_STATUS2["FULL"] = 0] = "FULL";
  DUSTBIN_STATUS2[DUSTBIN_STATUS2["HALF"] = 1] = "HALF";
  DUSTBIN_STATUS2[DUSTBIN_STATUS2["EMPTY"] = 2] = "EMPTY";
})(DUSTBIN_STATUS || (DUSTBIN_STATUS = {}));
var SENSOR_WORKING_STATUS;
(function(SENSOR_WORKING_STATUS2) {
  SENSOR_WORKING_STATUS2[SENSOR_WORKING_STATUS2["WORKING"] = 0] = "WORKING";
  SENSOR_WORKING_STATUS2[SENSOR_WORKING_STATUS2["NOT_WORKING"] = 1] = "NOT_WORKING";
})(SENSOR_WORKING_STATUS || (SENSOR_WORKING_STATUS = {}));
var DUSTBIN_TYPE;
(function(DUSTBIN_TYPE2) {
  DUSTBIN_TYPE2[DUSTBIN_TYPE2["W"] = 0] = "W";
  DUSTBIN_TYPE2[DUSTBIN_TYPE2["D"] = 1] = "D";
})(DUSTBIN_TYPE || (DUSTBIN_TYPE = {}));

// src/app/app-service.service.ts
import { take } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/rxjs_operators.js?v=ea3a3b21";
import * as i0 from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_core.js?v=ea3a3b21";
import * as i1 from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_common_http.js?v=ea3a3b21";
var _AppServiceService = class _AppServiceService {
  constructor(http) {
    this.http = http;
    this.appModel = [];
    this.getDustbinDataFromBackend();
  }
  getDustbinDataFromBackend() {
    const data = "assets/dustbinData.json";
    this.http.get(data).pipe(take(1), map((data2) => {
      return data2.data.map((appModel) => new AppModel(appModel));
    })).subscribe((appModelArray) => {
      this.appModel = appModelArray;
      console.log("--", this.appModel);
    });
  }
  getDustbinData() {
    return this.appModel;
  }
};
_AppServiceService.\u0275fac = function AppServiceService_Factory(t) {
  return new (t || _AppServiceService)(i0.\u0275\u0275inject(i1.HttpClient));
};
_AppServiceService.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AppServiceService, factory: _AppServiceService.\u0275fac, providedIn: "root" });
var AppServiceService = _AppServiceService;

// src/app/app.component.ts
import { CommonModule } from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_common.js?v=ea3a3b21";
import * as i02 from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_core.js?v=ea3a3b21";
import * as i2 from "/@fs/Users/vikaskalapur/aiDustbin/ai-dustbin/.angular/cache/17.3.8/vite/deps/@angular_common.js?v=ea3a3b21";
function AppComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "tr")(1, "th");
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "td");
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "td");
    i02.\u0275\u0275text(6);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(7, "td");
    i02.\u0275\u0275text(8);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(9, "td");
    i02.\u0275\u0275text(10);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(11, "td");
    i02.\u0275\u0275text(12);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(13, "td");
    i02.\u0275\u0275text(14);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(15, "td");
    i02.\u0275\u0275text(16);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dustbinData_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(i_r2 + 1);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.uId);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.dustbinStatus);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.installationDate);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.lastUpdatedDate);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.type);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.sensorStatus);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(dustbinData_r1.adminName);
  }
}
var _AppComponent = class _AppComponent {
  constructor(appService) {
    this.appService = appService;
    this.title = "ai-dustbin";
    this.dataa = "assets/dustbinData.json";
    this.appModel = appService.getDustbinData();
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(i02.\u0275\u0275directiveInject(AppServiceService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i02.\u0275\u0275ProvidersFeature([AppServiceService]), i02.\u0275\u0275StandaloneFeature], decls: 34, vars: 1, consts: [[2, "background-image", "url(asset/background.png)"], [1, "row"], [1, "col-12", "heading", "row"], [1, "col-8"], [1, "col-1"], [1, "col-10"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
    i02.\u0275\u0275text(4, "AI-Dustbin");
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275elementStart(5, "div")(6, "div", 1);
    i02.\u0275\u0275element(7, "div", 4);
    i02.\u0275\u0275elementStart(8, "div", 5)(9, "div")(10, "h4");
    i02.\u0275\u0275text(11, " Dustbin data ");
    i02.\u0275\u0275elementEnd()();
    i02.\u0275\u0275elementStart(12, "table", 6)(13, "thead")(14, "tr")(15, "th");
    i02.\u0275\u0275text(16, "#");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(17, "th");
    i02.\u0275\u0275text(18, "Dustbin Id");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(19, "th");
    i02.\u0275\u0275text(20, "Dustbin Status");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(21, "th");
    i02.\u0275\u0275text(22, "Installation Date");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(23, "th");
    i02.\u0275\u0275text(24, "Last Updated Date");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(25, "th");
    i02.\u0275\u0275text(26, "Type");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(27, "th");
    i02.\u0275\u0275text(28, "Sensor status");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(29, "th");
    i02.\u0275\u0275text(30, "Admin");
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275elementStart(31, "tbody");
    i02.\u0275\u0275template(32, AppComponent_tr_32_Template, 17, 8, "tr", 7);
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275element(33, "div", 4);
    i02.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i02.\u0275\u0275advance(32);
    i02.\u0275\u0275property("ngForOf", ctx.appModel);
  }
}, dependencies: [CommonModule, i2.NgForOf], styles: ["\n\n.heading[_ngcontent-%COMP%] {\n  padding: 4vh;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2117647059);\n  background:\n    linear-gradient(\n      90.32deg,\n      #8F00FF 0.28%,\n      rgba(143, 0, 255, 0) 99.72%),\n    #764ABC;\n  box-shadow: 0px 64px 74px 0px rgba(118, 74, 188, 0.2509803922);\n  color: white;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2FwcC1zZXJ2aWNlLnNlcnZpY2UudHMiLCJzcmMvYXBwL2FwcC5tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcblxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCBhcHBDb25maWcpXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHsgcHJvdmlkZUNsaWVudEh5ZHJhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZVNlcnZpY2UgfSBmcm9tICcuL2FwcC1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgcHJvdmlkZUh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtwcm92aWRlUm91dGVyKHJvdXRlcyksIHByb3ZpZGVDbGllbnRIeWRyYXRpb24oKSwgcHJvdmlkZUh0dHBDbGllbnQoKV1cbn07XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgLEh0dHBIYW5kbGVyfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4vYXBwLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBNb2RlbCB9IGZyb20gJy4vYXBwLm1vZGVsJztcbmltcG9ydCB7dGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUm91dGVyT3V0bGV0ICxDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6W0FwcFNlcnZpY2VTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ2FpLWR1c3RiaW4nO1xuXG4gIHB1YmxpYyBkYXRhYSA9ICdhc3NldHMvZHVzdGJpbkRhdGEuanNvbic7XG4gIHB1YmxpYyBhcHBNb2RlbDogQXBwTW9kZWxbXVxuICBcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcmVhZG9ubHkgYXBwU2VydmljZTogQXBwU2VydmljZVNlcnZpY2Upe1xuICAgIHRoaXMuYXBwTW9kZWwgPSBhcHBTZXJ2aWNlLmdldER1c3RiaW5EYXRhKCk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXQvYmFja2dyb3VuZC5wbmcpXCI+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMiBoZWFkaW5nIHJvd1wiPlxuICAgIDxoMSBjbGFzcz1cImNvbC04ICBcIj5BSS1EdXN0YmluPC9oMT5cbiAgICA8IS0tIDxpbWcgY2xhc3MgPVwiY29sLTRcIiBzcmM9XCIuLi9hc3NldHMvbG9nby53ZWJwXCIgc3R5bGU9XCJ3aWR0aDoxMDBweDtoZWlnaHQ6ODFweDtcIj4gLS0+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICBcbiAgICA8ZGl2PiA8aDQ+IER1c3RiaW4gZGF0YSA8L2g0PjwvZGl2PlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICA8dGg+RHVzdGJpbiBJZDwvdGg+XG4gICAgICAgICAgPHRoPkR1c3RiaW4gU3RhdHVzPC90aD5cbiAgICAgICAgICA8dGg+SW5zdGFsbGF0aW9uIERhdGU8L3RoPlxuICAgICAgICAgIDx0aD5MYXN0IFVwZGF0ZWQgRGF0ZTwvdGg+XG4gICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgIDx0aD5TZW5zb3Igc3RhdHVzPC90aD5cbiAgICAgICAgICA8dGg+QWRtaW48L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkdXN0YmluRGF0YSBvZiBhcHBNb2RlbDsgaW5kZXggYXMgaVwiPlxuICAgICAgICAgIDx0aD57eyBpICsgMX19PC90aD5cbiAgICAgICAgICA8dGQ+e3sgZHVzdGJpbkRhdGEudUlkIH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3sgZHVzdGJpbkRhdGEuZHVzdGJpblN0YXR1cyB9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7IGR1c3RiaW5EYXRhLmluc3RhbGxhdGlvbkRhdGUgfX08L3RkPlxuICAgICAgICAgIDx0ZD57eyBkdXN0YmluRGF0YS5sYXN0VXBkYXRlZERhdGUgfX08L3RkPlxuICAgICAgICAgIDx0ZD57eyBkdXN0YmluRGF0YS50eXBlIH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3sgZHVzdGJpbkRhdGEuc2Vuc29yU3RhdHVzIH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3sgZHVzdGJpbkRhdGEuYWRtaW5OYW1lIH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbC0xXCI+PC9kaXY+XG48L2Rpdj5cblxuXG5cbjwvZGl2PiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcHBNb2RlbCwgQmFja2VuZERhdGFBcHBNb2RlbCB9IGZyb20gJy4vYXBwLm1vZGVsJztcbmltcG9ydCB7dGFrZX0gIGZyb20gJ3J4anMvb3BlcmF0b3JzJyBcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2VTZXJ2aWNlIHtcbiAgcHVibGljIGFwcE1vZGVsOiBBcHBNb2RlbFtdID1bXVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyBcbiAgICB0aGlzLmdldER1c3RiaW5EYXRhRnJvbUJhY2tlbmQoKVxuICB9XG5cbiAgcHVibGljIGdldER1c3RiaW5EYXRhRnJvbUJhY2tlbmQoKTogdm9pZHtcbiAgICBjb25zdCBkYXRhID0gJ2Fzc2V0cy9kdXN0YmluRGF0YS5qc29uJztcblxuICAgIHRoaXMuaHR0cC5nZXQ8QmFja2VuZERhdGFBcHBNb2RlbD4oZGF0YSkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBtYXAoKGRhdGE6IEJhY2tlbmREYXRhQXBwTW9kZWwpPT57XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGEubWFwKChhcHBNb2RlbCk9Pm5ldyBBcHBNb2RlbChhcHBNb2RlbCkgKVxuICAgICAgfSkpLnN1YnNjcmliZSgoYXBwTW9kZWxBcnJheSk9PntcbiAgICAgICAgdGhpcy5hcHBNb2RlbCA9IGFwcE1vZGVsQXJyYXk7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLScsdGhpcy5hcHBNb2RlbCkgXG4gICAgXG4gICAgICB9KVxufVxuXG5wdWJsaWMgZ2V0RHVzdGJpbkRhdGEoKSA6IEFwcE1vZGVsW10ge1xuICByZXR1cm4gdGhpcy5hcHBNb2RlbFxufVxufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY2xhc3MgQXBwTW9kZWwge1xuICAgIHB1YmxpYyBhZG1pbkNvbnRhY3Q6IHN0cmluZztcbiAgICBwdWJsaWMgYWRtaW5OYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGlzRGFtYWdlOiBib29sZWFuO1xuICAgIHB1YmxpYyBkdXN0YmluU3RhdHVzOiBzdHJpbmc7XG4gICAgcHVibGljIGluc3RhbGxhdGlvbkRhdGU6IHN0cmluZztcbiAgICBwdWJsaWMgc2Vuc29yU3RhdHVzOnN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlZERhdGU6IHN0cmluZztcbiAgICBwdWJsaWMgdUlkOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IERhdGFBcHBNb2RlbEludGVyZmFjZSl7XG4gICAgICAgIHRoaXMuYWRtaW5Db250YWN0ID0gZGF0YS5BZG1pbkNvbnRhY3Q7XG4gICAgICAgIHRoaXMuYWRtaW5OYW1lID0gZGF0YS5BZG1pbk5hbWVcbiAgICAgICAgdGhpcy5pc0RhbWFnZSA9IGRhdGEuSXNEYW1hZ2U7XG4gICAgICAgIHRoaXMuZHVzdGJpblN0YXR1cyA9IHRoaXMuZ2V0RHVzdGJpblN0YXR1cyhkYXRhLkR1c3RiaW5TdGF0dXMpXG4gICAgICAgIHRoaXMuaW5zdGFsbGF0aW9uRGF0ZSA9IG1vbWVudChkYXRhLkluc3RhbGxhdGlvbkRhdGUpLmZvcm1hdCgnREQuTU0uWVlZWScpXG4gICAgICAgIHRoaXMuc2Vuc29yU3RhdHVzID0gZGF0YS5TZW5zb3JTdGF0dXMgPT09IFNFTlNPUl9XT1JLSU5HX1NUQVRVUy5OT1RfV09SS0lORyA/ICdOb3Qgd29ya2luZyc6ICdXb3JraW5nJ1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLlR5cGUudG9TdHJpbmcoKSA9PT0gJ0QnID8gJ0RyeSBkdXN0YmluJyA6ICdXZXQgZHVzdGJpbidcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlZERhdGUgPSBtb21lbnQoZGF0YS5MYXN0VXBkYXRlZERhdGUpLmZvcm1hdCgnREQuTU0uWVlZWScpXG4gICAgICAgIHRoaXMudUlkID0gZGF0YS5VaWRcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldER1c3RiaW5TdGF0dXMoZGF0YSA6IERVU1RCSU5fU1RBVFVTKTogc3RyaW5nIHtcbiAgICAgICAgaWYoZGF0YSA9PT0gIERVU1RCSU5fU1RBVFVTLkZVTEwpe1xuICAgICAgICAgICAgcmV0dXJuICdEdXN0YmluIGlzIGZ1bGwnXG4gICAgICAgIH1lbHNlIGlmIChkYXRhID09PSAgRFVTVEJJTl9TVEFUVVMuRU1QVFkpe1xuICAgICAgICAgICAgcmV0dXJuICdEdXN0YmluIGlzIEVtcHR5J1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0R1c3RiaW4gaXMgSGFsZidcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBcHBNb2RlbEludGVyZmFjZSB7XG4gICAgIEFkbWluQ29udGFjdDogc3RyaW5nO1xuICAgICBBZG1pbk5hbWU6IHN0cmluZztcbiAgICAgSXNEYW1hZ2U6IGJvb2xlYW47XG4gICAgIER1c3RiaW5TdGF0dXM6IERVU1RCSU5fU1RBVFVTO1xuICAgICBJbnN0YWxsYXRpb25EYXRlOiBtb21lbnQuTW9tZW50O1xuICAgICBTZW5zb3JTdGF0dXM6U0VOU09SX1dPUktJTkdfU1RBVFVTO1xuICAgICBUeXBlOiBEVVNUQklOX1RZUEU7XG4gICAgIExhc3RVcGRhdGVkRGF0ZTogbW9tZW50Lk1vbWVudDtcbiAgICAgVWlkOiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2VuZERhdGFBcHBNb2RlbCB7XG4gICAgZGF0YTogRGF0YUFwcE1vZGVsSW50ZXJmYWNlW11cbn1cblxuZXhwb3J0IGVudW0gRFVTVEJJTl9TVEFUVVMge1xuICAgIEZVTEwgLFxuICAgIEhBTEYsXG4gICAgRU1QVFlcbn1cblxuZXhwb3J0IGVudW0gU0VOU09SX1dPUktJTkdfU1RBVFVTIHtcbiAgICAnV09SS0lORycsXG4gICAgJ05PVF9XT1JLSU5HJyxcbn1cblxuZXhwb3J0IGVudW0gRFVTVEJJTl9UWVBFIHtcbiAgICAnVycgLFxuICAgICdEJ1xufVxuXG4iXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLDRCQUE0Qjs7O0FDQ3JDLFNBQVMscUJBQXFCOzs7QUNDdkIsSUFBTSxTQUFpQixDQUFBOzs7QURFOUIsU0FBUyw4QkFBOEI7QUFFdkMsU0FBcUIseUJBQXlCO0FBRXZDLElBQU0sWUFBK0I7RUFDMUMsV0FBVyxDQUFDLGNBQWMsTUFBTSxHQUFHLHVCQUFzQixHQUFJLGtCQUFpQixDQUFFOzs7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QUFBSSxJQUFBLHFCQUFBLElBQUEsZ0JBQUE7QUFBYyxJQUFBLDJCQUFBO0FBQ2xCLElBQUEsNkJBQUEsSUFBQSxJQUFBO0FBQUksSUFBQSxxQkFBQSxJQUFBLG1CQUFBO0FBQWlCLElBQUEsMkJBQUE7QUFDckIsSUFBQSw2QkFBQSxJQUFBLElBQUE7QUFBSSxJQUFBLHFCQUFBLElBQUEsbUJBQUE7QUFBaUIsSUFBQSwyQkFBQTtBQUNyQixJQUFBLDZCQUFBLElBQUEsSUFBQTtBQUFJLElBQUEscUJBQUEsSUFBQSxNQUFBO0FBQUksSUFBQSwyQkFBQTtBQUNSLElBQUEsNkJBQUEsSUFBQSxJQUFBO0FBQUksSUFBQSxxQkFBQSxJQUFBLGVBQUE7QUFBYSxJQUFBLDJCQUFBO0FBQ2pCLElBQUEsNkJBQUEsSUFBQSxJQUFBO0FBQUksSUFBQSxxQkFBQSxJQUFBLE9BQUE7QUFBSyxJQUFBLDJCQUFBLEVBQUssRUFDWDtBQUVQLElBQUEsNkJBQUEsSUFBQSxPQUFBO0FBQ0UsSUFBQSx5QkFBQSxJQUFBLDZCQUFBLElBQUEsR0FBQSxNQUFBLENBQUE7QUFVRixJQUFBLDJCQUFBLEVBQVEsRUFDRjtBQUVaLElBQUEsd0JBQUEsSUFBQSxPQUFBLENBQUE7QUFDQSxJQUFBLDJCQUFBLEVBQU0sRUFJQTs7O0FBbEI4QixJQUFBLHdCQUFBLEVBQUE7QUFBQSxJQUFBLHlCQUFBLFdBQUEsSUFBQSxRQUFBOztrQkRoQlYsY0FBWSxVQUFBLEdBQUEsUUFBQSxDQUFBLGtYQUFBLEVBQUEsQ0FBQTtBQUtoQyxJQUFPLGVBQVA7O2lGQUFPLGNBQVksRUFBQSxXQUFBLGVBQUEsQ0FBQTtBQUFBLEdBQUE7OztBSGJ6QixxQkFBcUIsY0FBYyxTQUFTLEVBQ3pDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiRFVTVEJJTl9TVEFUVVMiLCJTRU5TT1JfV09SS0lOR19TVEFUVVMiLCJEVVNUQklOX1RZUEUiLCJkYXRhIl19