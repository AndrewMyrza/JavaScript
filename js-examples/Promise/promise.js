function noop() {}

class AndrewPromise {
    constructor(executor) {
        this.queue = []
        this.errorHandler = noop
        this.finallyHandler = noop

        try {
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }
    }

    onResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data)

            this.finallyHandler()
        })
    }

    onReject(error) {
        this.errorHandler(error)

        this.finallyHandler()
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }

    catch(fn) {
        this.errorHandler = fn
        return this
    }

    finally(fn) {
        this.finallyHandler = fn
        return this
    }
}


const promise = new AndrewPromise((resolve, reject) => {
    setTimeout(() => {
        // resolve('NgRx')
        reject('Sone Error')
    }, 1500)
})

promise
    .then(course => course.toUpperCase())
    .then(title => console.log('Andrew Promise:', title))
    .catch(err => console.log('Error', err))
    .finally(() => console.log('Finally'))

module.exports = AndrewPromise