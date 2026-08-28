/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname: 'placehold.co',
        }]
    },
    async redirects() {
        return [
            {
                source: '/main/find_us',
                destination: '/main/about_us',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
