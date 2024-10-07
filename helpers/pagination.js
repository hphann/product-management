module.exports = (objectPagination, query, countProducts) => {
    if (query.page) {
        objectPagination.page = parseInt(query.page)
    }

    objectPagination.skip = (objectPagination.page - 1) * objectPagination.limitItems

    const countPages = Math.ceil(countProducts / objectPagination.limitItems)
    objectPagination.countPages = countPages

    return objectPagination
}