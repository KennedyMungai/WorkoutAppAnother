export const secToMin = (sec: number): string => {
    return (sec / 60).toFixed(1)
}

export const formatSec = (sec: number): string => {
    const _min = Math.floor(sec / 60)
    const _sec = sec % 60

    let result = `${_min} minutes and ${_sec} seconds`

    if (_min < 1) {
        result = `${_sec} seconds`
    }

    if (_sec < 1) {
        result = `${_min} minutes`
    }

    return result
}