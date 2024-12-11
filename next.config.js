/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // 정적 파일 생성을 위한 설정
  images: {
    unoptimized: true  // 이미지 최적화 비활성화 (static export 시 필요)
  }
};

module.exports = nextConfig;
