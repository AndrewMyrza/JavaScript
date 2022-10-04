const AndrewPromise = require('./promise')

const t = setTimeout

describe('Andrew Promise: ', () => {

    let promise
    let executorSpy

    const successResult = 42
    const errorResult = 'I am Error'

    beforeEach(() => {
        executorSpy = jest.fn(r => t(() => r(successResult), 150))
        promise = new AndrewPromise(executorSpy)
    })

    test('should exists and to be typeof function', () => {
        expect(AndrewPromise).toBeDefined()
        expect(typeof AndrewPromise).toBe('function')
    })

    test('instance should have methods: then, catch, finally', () => {
        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).not.toBeUndefined()
    })

    test('should call executor function', () => {
        expect(executorSpy).toHaveBeenCalled()
    })

    test('should get data in then block and chain them', async () => {
        const result = await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(successResult * 2)
    })

    test('should catch error', () => {
        const errorExecutor = (_, r) => t(() => r(errorResult), 150)
        const errorPromise = new AndrewPromise(errorExecutor)

        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })

    test('should call finally method', async () => {
        const finallySpy = jest.fn(() => {})
        await promise.finally(finallySpy)

        expect(finallySpy).toHaveBeenCalled()
    })
})

