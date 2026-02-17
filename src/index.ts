import { doSomething } from "./anExport"

;(async (): Promise<void> => {
    console.log(doSomething())
})()
