async function readInputFile() {
  try {
    const result = await Deno.readTextFile(Deno.args[0])
    return JSON.parse(result)
  } catch (e) {
    console.log('invalid input:', e.message)
    Deno.exit(1)
  }
}

function validateInput() {
  if (Deno.args.length !== 1) {
    console.log('didnt pass a json file')
    Deno.exit(1)
  }
}

export { validateInput, readInputFile }
