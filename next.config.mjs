/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  }
};

export default nextConfig;
*/


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"], // Allow images from this domain
  },
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // Redirect old routes to new routes if needed
      },
    ];
  },
};

export default nextConfig;
