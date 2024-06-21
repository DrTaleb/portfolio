/** @type {import('next').NextConfig} */
const nextConfig = {
 images :{
      domains : ["drtaleb.org", "www.drtaleb.org"],
      remotePatterns : [
        {
         protocol: 'http',
         hostname: 'drtaleb.org',
        },
    ]
}}

module.exports = nextConfig
