/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.googleapis.com",
			},
		],
	},
};

module.exports = nextConfig;
