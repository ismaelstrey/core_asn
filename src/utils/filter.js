const orderByCity = (array, item) => array.sort((a, b) => {
    const cityA = a[item].toUpperCase(); // ignore upper and lowercase
    const cityB = b[item].toUpperCase();
    if (cityA < cityB) {
        return -1;
    }
    if (cityA > cityB) {
        return 1;
    }
    return 0;
})

export { orderByCity }