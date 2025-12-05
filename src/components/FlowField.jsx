import { useEffect, useRef } from 'react';

// Simplex noise implementation
class SimplexNoise {
  constructor() {
    this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
                   [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
                   [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
    this.p = [];
    for(let i=0; i<256; i++) {
      this.p[i] = Math.floor(Math.random()*256);
    }
    this.perm = [];
    for(let i=0; i<512; i++) {
      this.perm[i]=this.p[i & 255];
    }
  }
  
  dot(g, x, y, z) {
    return g[0]*x + g[1]*y + g[2]*z;
  }
  
  noise(xin, yin, zin) {
    const F3 = 1.0/3.0;
    const G3 = 1.0/6.0;
    let n0, n1, n2, n3;
    let s = (xin+yin+zin)*F3;
    let i = Math.floor(xin+s);
    let j = Math.floor(yin+s);
    let k = Math.floor(zin+s);
    let t = (i+j+k)*G3;
    let X0 = i-t;
    let Y0 = j-t;
    let Z0 = k-t;
    let x0 = xin-X0;
    let y0 = yin-Y0;
    let z0 = zin-Z0;
    let i1, j1, k1;
    let i2, j2, k2;
    if(x0>=y0) {
      if(y0>=z0) { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0>=z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0<z0) { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0<z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    let x1 = x0 - i1 + G3;
    let y1 = y0 - j1 + G3;
    let z1 = z0 - k1 + G3;
    let x2 = x0 - i2 + 2.0*G3;
    let y2 = y0 - j2 + 2.0*G3;
    let z2 = z0 - k2 + 2.0*G3;
    let x3 = x0 - 1.0 + 3.0*G3;
    let y3 = y0 - 1.0 + 3.0*G3;
    let z3 = z0 - 1.0 + 3.0*G3;
    let ii = i & 255;
    let jj = j & 255;
    let kk = k & 255;
    let gi0 = this.perm[ii+this.perm[jj+this.perm[kk]]] % 12;
    let gi1 = this.perm[ii+i1+this.perm[jj+j1+this.perm[kk+k1]]] % 12;
    let gi2 = this.perm[ii+i2+this.perm[jj+j2+this.perm[kk+k2]]] % 12;
    let gi3 = this.perm[ii+1+this.perm[jj+1+this.perm[kk+1]]] % 12;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) n0 = 0.0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0, z0);
    }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) n1 = 0.0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1, z1);
    }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) n2 = 0.0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2, z2);
    }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) n3 = 0.0;
    else {
      t3 *= t3;
      n3 = t3 * t3 * this.dot(this.grad3[gi3], x3, y3, z3);
    }
    return 32.0*(n0 + n1 + n2 + n3);
  }
}

const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));

export default function FlowField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const noise = new SimplexNoise();
    
    const opt = {
      particles: window.innerWidth > 500 ? 1000 : 500,
      noiseScale: 0.009,
      angle: Math.PI / 180 * -90,
      h1: rand(0, 360),
      h2: rand(0, 360),
      s1: rand(20, 90),
      s2: rand(20, 90),
      l1: rand(30, 80),
      l2: rand(30, 80),
      strokeWeight: 1.2,
      tail: 82,
    };

    let time = 0;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lx = x;
        this.ly = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > .5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > .5 ? 3 : 2;
      }

      update() {
        this.follow();

        this.vx += this.ax;
        this.vy += this.ay;

        const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const a = Math.atan2(this.vy, this.vx);
        const m = Math.min(this.maxSpeed, p);
        this.vx = Math.cos(a) * m;
        this.vy = Math.sin(a) * m;

        this.x += this.vx;
        this.y += this.vy;
        this.ax = 0;
        this.ay = 0;

        this.edges();
      }

      follow() {
        const angle = (noise.noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale)) * Math.PI * 0.5 + opt.angle;
        this.ax += Math.cos(angle);
        this.ay += Math.sin(angle);
      }

      updatePrev() {
        this.lx = this.x;
        this.ly = this.y;
      }

      edges() {
        if (this.x < 0) {
          this.x = canvas.width;
          this.updatePrev();
        }
        if (this.x > canvas.width) {
          this.x = 0;
          this.updatePrev();
        }
        if (this.y < 0) {
          this.y = canvas.height;
          this.updatePrev();
        }
        if (this.y > canvas.height) {
          this.y = 0;
          this.updatePrev();
        }
      }

      render() {
        ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`;
        ctx.lineWidth = opt.strokeWeight;
        ctx.beginPath();
        ctx.moveTo(this.lx, this.ly);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        this.updatePrev();
      }
    }

    const particles = [];
    for (let i = 0; i < opt.particles; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    function animate() {
      time++;
      ctx.fillStyle = `rgba(0, 0, 0, ${(100 - opt.tail) / 100})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.update();
        p.render();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="flowField"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
