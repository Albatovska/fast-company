export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    //  console.log("items", currentPage)
    return [...items].splice(startIndex, pageSize);
}
