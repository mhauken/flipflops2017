export default (minutes) => {
    return `${!Math.floor(minutes/60) ? '' : Math.floor(minutes/60).toString() + 'h'} ${!(minutes%60) ? '' : (minutes%60).toString() + ' Min' }`
}
