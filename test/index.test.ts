import { describe, it, expect, vi } from 'vitest'

describe('index', () => {
    it('calls doSomething and logs the result', async () => {
        const consoleSpy = vi.spyOn(console, 'log')
        
        // Mock the anExport module
        vi.doMock('../src/anExport', () => ({
            doSomething: () => 'test result'
        }))
        
        // Re-import to trigger the async IIFE with mocked doSomething
        await import('../src/index')
        
        expect(consoleSpy).toHaveBeenCalledWith('test result')
        consoleSpy.mockRestore()
        vi.doUnmock('../src/anExport')
    })
})