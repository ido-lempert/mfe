*. step 0 - empty NX agular project

*. step 1 - rb and credit project based on MF
-. npx nx g @nrwl/angular:app rb --mfe --mfeType=host --routing=true
-. npx nx g @nrwl/angular:app credit --mfe --mfeType=remote --port=4201 --host=rb --routing=true
-. npx nx run rb:serve-mfe
-. browse: http://localhost:4200/credit
-. explain changes: bootstrap, angular.json, webpack.config
-. guide: https://nx.dev/l/a/guides/setup-mfe-with-angular

*. step 2 - credit - loan request - lazy route
-. npx nx g m loan-request --routing --project credit
-. npx nx g c loan-request --project credit
-. add route: {path: 'loan-request', loadChildren:() => import('./loan-request/loan-request.module').then(m => m.LoanRequestModule)},
-. add route link: <a routerLink="/loan-request">loan request</a>
-. serve: npx nx serve credit
-. browse: http://localhost:4201/loan-request
-. expose and load from rb: webpack.config, type.d, config rb route
-. serve: npx nx run rb:serve-mfe
-. browse: http://localhost:4200/

*. step 3 - load EntryPoint on run time
-. remove remote configuration from rb webpack
-. change route to use loadRemoteModule() instead of import()
-. drill down about remote url and globals
-. guide: https://www.angulararchitects.io/en/aktuelles/dynamic-module-federation-with-angular/

*. step 4 - routes events - loading and error
*. step 5 - credit - loan request - pass params: link to homepage
*. step 6 - credit - loans CRUD - relative links
*. step 7 - lib - accounts - account service - MF shared
*. step 8 - ngx translation - loan request transaltion
*. step 9 - load service without route
*. step 10 - load component without route
