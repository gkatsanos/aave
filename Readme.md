## How to run and test

I used Deno. `brew install deno` should be enough. All deps are fetched by Deno on runtime.

Start the script with

```sh
deno run --allow-read main.ts /some/path/input.json
```

I included a demo `input.json` in this repo.
Invalid JSON entries, missing file inputs and wrong paths are handled gracefully by the script

run the tests with

```sh
deno test tests/tests.test.js
```
