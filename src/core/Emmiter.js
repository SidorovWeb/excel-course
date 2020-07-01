export class Emmiter {
    constructor() {
        this.listeners = {}
    }

    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach((listener) => {
            listener(...args)
        })
        return true
    }

    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] = this.listeners[event].filter((listener) => {
                listener != fn
            })
        }
    }
}

// const emmiter = new Emmiter()

// emmiter.subscribe('Sanya', (data) => console.log('Sub:', data))

// emmiter.emit('Sanya', 42)
