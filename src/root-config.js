import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mf-demo/navbar",
  () => System.import("@mf-demo/navbar"),
  isActive.navbar
);

registerApplication(
  "@mf-demo/home",
  () => System.import("@mf-demo/home"),
  isActive.home
);

registerApplication({
  name: "@mf-demo/employees",
  app: () => System.import("@mf-demo/employees"),
  activeWhen: isActive.employees
});

registerApplication({
  name: "@mf-demo/employee-details",
  app: () => System.import("@mf-demo/employee-details"),
  activeWhen: isActive.employeeDetails
});

// registerApplication({
//   name: "@example/cookie-consent",
//   app: () => System.import("@example/cookie-consent"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@mf-demo/react-web-component",
  app: () => System.import("@mf-demo/react-web-component"),
  activeWhen: ["/"]
});

start();
