"use client"

import Image from "next/image"

const partners = [
  { name: "钉钉", logo: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="transparent"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="currentColor">钉钉</text></svg>`) },
  { name: "阿里云", logo: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="transparent"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="currentColor">阿里云</text></svg>`) },
  { name: "欧莱雅", logo: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="transparent"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="currentColor">欧莱雅</text></svg>`) },
  { name: "南方电网", logo: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="transparent"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="currentColor">南方电网</text></svg>`) },
  { name: "国家税务总局", logo: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="transparent"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="currentColor">国家税务总局</text></svg>`) },
]

// 复制数组以实现无缝循环
const duplicatedPartners = [...partners, ...partners]

export default function PartnersCarousel() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Trusted by individuals at
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex items-center gap-12 animate-scroll"
            style={{
              width: `${200}%`,
              animation: 'scroll 30s linear infinite'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${100 / duplicatedPartners.length}%` }}
              >
                <div className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(50%)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* 渐变遮罩 */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}