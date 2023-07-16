const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const result = res.json();
        return result;
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        const result = await res.json()
        return result
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const result = await res.json()
        return result
    },
}

export { FakeStoreApi }