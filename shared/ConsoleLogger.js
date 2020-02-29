const ConsoleLogger = function(msg, type = 'INFO') {
    if (process.env.NODE_ENV !== 'production') {
        type = type.toUpperCase()
        let color = 'black'
        if (type === 'ERROR') {
            color = 'red'
        } else if (type === 'INFO') {
            color = 'blue'
        } else if (type === 'WARNING') {
            color = 'orange'
        } else if (type === 'SUCCESS') {
            color = 'green'
        }
        console.log(
            '%c[' + type + '] %c' + msg,
            'font-weight:bold;color:' + color,
            'color: ' + color
        )
    }
}

export { ConsoleLogger }
