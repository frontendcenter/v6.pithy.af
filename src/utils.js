export const API = 'http://api.pithy.af/api'

export const simplify = str => str.toLowerCase().replace(/[^\w ]/g, '').replace(/ /g, '-')
