
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/trending',
                permanent: true
            }
        ]
    },
    env: {
        STOCK_BASE_URL: 'http://localhost:8080'
    }
}

