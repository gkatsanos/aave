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

## Coding Choices and scope

### TypeScript

- Some types might not be optimal. I guess the use of lodash.groupby which generates objects complicated things, type-wise

### Tests

- I tested the basic input/output scenario - the individual methods are not exported / public and I'm not sure how much value would testing them add (note: if theoretically in the future we could use them independently, then they definitely could be tested)
- as a disadvantage of course, a failing test will be harder to debug as you wont really know which method introduces the regression

### Overall Structure

- I could have gone for a `class` instead of the individual methods to make things more 'semantic' (private methods etc)
- I would replace the `reduce` which finds the last transaction with a simple `.sort()` and pick the first/last item of the array. Moment iss probably not necessary as well, we could use native `Date` instead.
- Generally I made a conscious choice to work with objects keyed by `user_id` / and `currency` which made some things easier, others maybe not as easy/optimal.

## Assumptions

- All amounts have two decimals
- the maximum amount value is not more than the 52bits we have available to store digits (so no loss of precision)
- I am using the `* 100` , `/ 100` 'trick' to add the amounts and avoid loss of precision when adding floating points. I'm aware there might be better solutions but in the context of the 2h coding challenge I think this should suffice.

## Misc

- I spent 4h on this, mainly because I was first diving into Deno and had to configure some stuff out.
- looking forward for a code review / constructive feedback
