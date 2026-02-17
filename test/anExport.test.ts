import { describe, it, expect } from 'vitest'
import * as anExport from '../src/anExport'

describe('anExport', () => {
    describe('doSomething', () => {
        it('returns a string', () => {
            expect(anExport.doSomething()).toEqual('Hello World!')
        })
    })
})
