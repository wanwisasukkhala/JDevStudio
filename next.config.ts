import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* คีย์หลักอื่นๆ ของคุณ (ถ้ามี) เช่น output, images ฯลฯ */
  
  // ย้ายมาไว้ตรงนี้เลย ไม่ต้องใส่ใน experimental แล้วครับ
  allowedDevOrigins: ['192.168.110.2', 'localhost:3000'], 
};

export default nextConfig;