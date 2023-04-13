
## install wdio 

See options below

```

$ npm init wdio@latest 

                 -:...........................-:.
                 +                              +
              `` +      `...`        `...`      + `
            ./+/ +    .:://:::`    `::///::`  ` + ++/.
           .+oo+ +    /:+ooo+-/    /-+ooo+-/ ./ + +oo+.
           -ooo+ +    /-+ooo+-/    /-+ooo+-/ .: + +ooo.
            -+o+ +    `::///:-`    `::///::`    + +o+-
             ``. /.     `````        `````     .: .``
                  .----------------------------.
           `-::::::::::::::::::::::::::::::::::::::::-`
          .+oooo/:------------------------------:/oooo+.
      `.--/oooo-                                  :oooo/--.`
    .::-``:oooo`                                  .oooo-``-::.
  ./-`    -oooo`--.: :.--                         .oooo-    `-/.
 -/`    `-/oooo////////////////////////////////////oooo/.`    `/-
`+`   `/+oooooooooooooooooooooooooooooooooooooooooooooooo+:`   .+`
-/    +o/.:oooooooooooooooooooooooooooooooooooooooooooo:-/o/    +.
-/   .o+  -oooosoooososssssooooo------------------:oooo- `oo`   +.
-/   .o+  -oooodooohyyssosshoooo`                 .oooo-  oo.   +.
-/   .o+  -oooodooysdooooooyyooo` `.--.``     .:::-oooo-  oo.   +.
-/   .o+  -oooodoyyodsoooooyyooo.//-..-:/:.`.//.`./oooo-  oo.   +.
-/   .o+  -oooohsyoooyysssysoooo+-`     `-:::.    .oooo-  oo.   +.
-/   .o+  -ooooosooooooosooooooo+//////////////////oooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-+////o+` -oooo---:///:----://::------------------:oooo- `oo////+-
+ooooooo/`-oooo``:-```.:`.:.`.+/-    .::::::::::` .oooo-`+ooooooo+
oooooooo+`-oooo`-- `/` .:+  -/-`/`   .::::::::::  .oooo-.+oooooooo
+-/+://-/ -oooo-`:`.o-`:.:-````.:    .///:``````  -oooo-`/-//:+:-+
: :..--:-:.+ooo+/://o+/-.-:////:-....-::::-....--/+ooo+.:.:--.-- /
- /./`-:-` .:///+/ooooo/+///////////////+++ooooo/+///:. .-:.`+./ :
:-:/.           :`ooooo`/`              .:.ooooo :           ./---
                :`ooooo`/`              .:.ooooo :
                :`ooooo./`              .:-ooooo :
                :`ooooo./`              .:-ooooo :
            `...:-+++++:/.              ./:+++++-:...`
           :-.````````/../              /.-:````````.:-
          -/::::::::://:/+             `+/:+::::::::::+.
          :oooooooooooo++/              +++oooooooooooo-
 
                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


Installing @wdio/cli to initialize project...
✔ Success!

===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "ng-wdio" was detected at 
"/Users/test/projects/opensource/ng-wdio", correct? Yes
? Where should your tests be launched? local - for e2e testing of web and mobile applications
? Where is your automation backend located? On my local machine
? Which framework do you want to use? Jasmine (https://jasmine.github.io/)
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Do you want WebdriverIO to autogenerate some test files? Yes
? Where should these files be located? /Users/test/projects/opensource/ng-wdio/projects/my-ui-1/src/e2e
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? /Users/test/projects/opensource/ng-wdio/projects/my-ui-1/src/e2e/pageobjects
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? angular-component-harnesses
? Do you want to add a service to your test setup? devtools
? What is the base url? http://localhost:4400
? Do you want me to run `npm install` Yes


Setting up TypeScript...
✔ Success!

Installing wdio packages:
- @wdio/local-runner@latest
- @wdio/jasmine-framework@latest
- @wdio/spec-reporter@latest
- @badisi/wdio-harness
- @wdio/devtools-service@latest
- ts-node
- typescript
- @types/jasmine
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated intl-messageformat-parser@1.8.1: We've written a new parser that's 6x faster and is backwards compatible. Please use @formatjs/icu-messageformat-parser
npm WARN deprecated raven@2.6.4: Please upgrade to @sentry/node. See the migration guide https://bit.ly/3ybOlo7
npm WARN deprecated uuid@3.3.2: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

added 180 packages, and audited 1429 packages in 3m

9 vulnerabilities (5 moderate, 4 high)

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
✔ Success!

Creating a WebdriverIO config file...
✔ Success!

Autogenerating test files...
✔ Success!

Adding "wdio" script to package.json.
✔ Success!

🤖 Successfully setup project at /Users/test/projects/opensource/ng-wdio 🎉

Join our Matrix community and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://matrix.to/#/#webdriver.io:gitter.im

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio

To run your tests, execute:
$ cd /Users/test/projects/opensource/ng-wdio
$ npm run wdio
```

## SyntaxError: Unexpected token 'export'

```
$ npm run wdio

2023-04-13T17:27:26.131Z ERROR @wdio/config:ConfigParser: Failed loading configuration file: file:///Users/test/projects/opensource/ng-wdio/wdio.conf.ts: Unexpected token 'export'
/Users/test/projects/opensource/ng-wdio/wdio.conf.ts:1
export const config = {
^^^^^^

SyntaxError: Unexpected token 'export'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module.m._compile (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

```

## module not found error

- moved wdio.conf.ts to projects/my-ui-1/e2e
- regorganization of some folders e.g. pageobjects etc
- add empty package.json with type: module to get rid of previous error (Unexpected token 'export')
- added tsconfig.json
  
Now we get new error :(
  

```
npm run wdio

> ng-wdio@0.0.0 wdio
> wdio run ./projects/my-ui-1/e2e/wdio.conf.ts


Execution of 1 workers started at 2023-04-13T17:48:24.102Z

2023-04-13T17:48:24.442Z INFO @wdio/cli:launcher: Run onPrepare hook
2023-04-13T17:48:24.444Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-04-13T17:48:24.445Z INFO @wdio/local-runner: Start worker 0-0 with arg: run,./projects/my-ui-1/e2e/wdio.conf.ts
[0-0] 2023-04-13T17:48:25.448Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2023-04-13T17:48:25.956Z WARN @wdio/jasmine-framework: Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.
[0-0] `browser` object has only `capabilities` and some flags like `isMobile`.
[0-0] Helper files that use other `browser` commands have to be moved to `before` hook.
[0-0] Spec file(s): file:///Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/specs/login.page.ts
[0-0]  Error:  Error: Cannot find module '/Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/pageobjects/page' imported from /Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/specs/login.page.ts
[0-0]     at finalizeResolution (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:366:11)
[0-0]     at moduleResolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:801:10)
[0-0]     at Object.defaultResolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:912:11)
[0-0]     at /Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:218:35
[0-0]     at entrypointFallback (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:168:34)
[0-0]     at /Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:217:14
[0-0]     at addShortCircuitFlag (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:409:21)
[0-0]     at resolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:197:12)
[0-0]     at nextResolve (node:internal/modules/esm/loader:163:28)
[0-0]     at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
[0-0] RUNNING in chrome - file:///projects/my-ui-1/e2e/specs/login.page.ts
[0-0] 2023-04-13T17:48:25.966Z INFO devtools:puppeteer: Initiate new session using the DevTools protocol
[0-0] 2023-04-13T17:48:25.968Z INFO devtools: Launch Google Chrome (undefined) with flags: --enable-automation --disable-popup-blocking --disable-extensions --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-sync --metrics-recording-only --disable-default-apps --mute-audio --no-first-run --no-default-browser-check --disable-hang-monitor --disable-prompt-on-repost --disable-client-side-phishing-detection --password-store=basic --use-mock-keychain --disable-component-extensions-with-background-pages --disable-breakpad --disable-dev-shm-usage --disable-ipc-flooding-protection --disable-renderer-backgrounding --force-fieldtrials=*BackgroundTracing/default/ --enable-features=NetworkService,NetworkServiceInProcess --disable-features=site-per-process,TranslateUI,BlinkGenPropertyTrees --window-position=0,0 --window-size=1200,900
[0-0] 2023-04-13T17:48:26.991Z INFO devtools: Connect Puppeteer with browser on port 51726
[0-0] 2023-04-13T17:48:27.372Z ERROR @wdio/runner: Error: Cannot find module '/Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/pageobjects/page' imported from /Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/specs/login.page.ts
[0-0]     at finalizeResolution (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:366:11)
[0-0]     at moduleResolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:801:10)
[0-0]     at Object.defaultResolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/dist-raw/node-internal-modules-esm-resolve.js:912:11)
[0-0]     at /Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:218:35
[0-0]     at entrypointFallback (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:168:34)
[0-0]     at /Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:217:14
[0-0]     at addShortCircuitFlag (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:409:21)
[0-0]     at resolve (/Users/test/projects/opensource/ng-wdio/node_modules/ts-node/src/esm.ts:197:12)
[0-0]     at nextResolve (node:internal/modules/esm/loader:163:28)
[0-0]     at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
[0-0]  Error:  Cannot find module '/Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/pageobjects/page' imported from /Users/test/projects/opensource/ng-wdio/projects/my-ui-1/e2e/specs/login.page.ts
[0-0] 2023-04-13T17:48:27.376Z INFO devtools: COMMAND deleteSession()
[0-0] 2023-04-13T17:48:27.379Z INFO devtools: RESULT null
[0-0] FAILED in chrome - file:///projects/my-ui-1/e2e/specs/login.page.ts
2023-04-13T17:48:27.503Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-04-13T17:48:27.503Z INFO @wdio/cli:launcher: Run onComplete hook

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:03 

2023-04-13T17:48:27.505Z INFO @wdio/local-runner: Shutting down spawned worker
2023-04-13T17:48:27.757Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-04-13T17:48:27.757Z INFO @wdio/local-runner: shutting down
```
