*. step 0 - empty NX agular project

*. step 1 - rb and credit project based on MF
-. npx nx g @nrwl/angular:app rb --mfe --mfeType=host --routing=true
-. npx nx g @nrwl/angular:app credit --mfe --mfeType=remote --port=4201 --host=rb --routing=true
-. changes: bootstrap, angular.json, webpack.config
-. guide: https://nx.dev/l/a/guides/setup-mfe-with-angular

*. step 2 - credit - loan request - lazy route
*. step 3 - load EntryPoint on run time
*. step 4 - routes events - loading and error
*. step 5 - credit - loan request - pass params: link to homepage
*. step 6 - credit - loans CRUD - relative links
*. step 7 - lib - accounts - account service - MF shared
*. step 8 - ngx translation - loan request transaltion
*. step 9 - load service without route
*. step 10 - load component without route
