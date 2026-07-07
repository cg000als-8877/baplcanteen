const fs = require('fs');

const css = `
/* Background Effects */
.bg-noise {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: -2;
    opacity: 0.03;
    background: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
}

.blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(250px);
    z-index: -1;
    pointer-events: none;
    mix-blend-mode: normal;
}

.blob-1 {
    width: 600px; height: 600px;
    background: #2563EB;
    opacity: 0.10;
    top: -10%; left: -10%;
    animation: float1 35s infinite ease-in-out alternate;
}

.blob-2 {
    width: 550px; height: 550px;
    background: #22C55E;
    opacity: 0.08;
    bottom: -10%; right: -5%;
    animation: float2 40s infinite ease-in-out alternate;
}

.blob-3 {
    width: 500px; height: 500px;
    background: #0EA5E9;
    opacity: 0.12;
    top: 40%; left: 60%;
    animation: float3 30s infinite ease-in-out alternate;
}

.blob-4 {
    width: 800px; height: 800px;
    background: #FACC15;
    opacity: 0.06;
    top: 20%; right: 40%;
    animation: float4 45s infinite ease-in-out alternate;
}

@keyframes float1 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(100px, 150px) scale(1.1); }
}
@keyframes float2 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(-120px, -100px) scale(1.05); }
}
@keyframes float3 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(-80px, 120px) scale(1.15); }
}
@keyframes float4 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(150px, -80px) scale(0.95); }
}
`;

fs.appendFileSync('styles.css', css);
console.log('Appended successfully');
