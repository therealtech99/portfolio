"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroWebGL() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const root = wrap;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const mobile = wrap.clientWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0b0a, 0.034);

    const camera = new THREE.PerspectiveCamera(
      32,
      wrap.clientWidth / wrap.clientHeight,
      0.1,
      50,
    );
    camera.position.set(0.15, 0.22, 7.6);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.add(new THREE.HemisphereLight(0xfff1d6, 0x142026, 1.25));
    scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    pmrem.dispose();

    scene.add(new THREE.AmbientLight(0x9aa6ab, 0.26));
    const key = new THREE.DirectionalLight(0xfff6e8, 1.75);
    key.position.set(4.2, 5.4, 4.6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x7fbfba, 1.1);
    rim.position.set(-5.2, 1.6, -3.4);
    scene.add(rim);
    const gold = new THREE.PointLight(0xc4a36a, 12, 16);
    gold.position.set(1.6, 0.8, 2.4);
    scene.add(gold);
    const mouseLight = new THREE.PointLight(0xffffff, 5.5, 10);
    scene.add(mouseLight);

    const group = new THREE.Group();
    group.position.x = mobile ? 0 : 1.2;
    scene.add(group);

    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xe8eeec,
      metalness: 0.16,
      roughness: 0.07,
      transmission: mobile ? 0 : 0.82,
      thickness: 0.7,
      ior: 1.42,
      transparent: true,
      opacity: mobile ? 0.34 : 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });

    const darkGlass = new THREE.MeshPhysicalMaterial({
      color: 0x1a2224,
      metalness: 0.35,
      roughness: 0.12,
      transmission: mobile ? 0 : 0.35,
      thickness: 0.4,
      transparent: true,
      opacity: mobile ? 0.4 : 0.92,
      clearcoat: 1,
    });

    const slabGeo = new THREE.BoxGeometry(2.9, 0.065, 1.9);
    const tallGeo = new THREE.BoxGeometry(0.085, 1.7, 1.15);
    const slabs = [-0.62, 0, 0.62].map((y, i) => {
      const mesh = new THREE.Mesh(slabGeo, glass);
      mesh.position.set(i === 1 ? 0.18 : i === 2 ? -0.12 : 0.04, y, 0);
      mesh.rotation.set(-0.42, 0.38 + i * 0.07, i * 0.035);
      group.add(mesh);
      return mesh;
    });

    const pillar = new THREE.Mesh(tallGeo, darkGlass);
    pillar.position.set(-1.15, 0.02, 0.35);
    pillar.rotation.set(-0.18, 0.5, 0.04);
    group.add(pillar);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc4a36a,
      metalness: 0.92,
      roughness: 0.16,
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd7dee0,
      metalness: 0.88,
      roughness: 0.2,
    });

    const ringGeo = new THREE.TorusGeometry(1.62, 0.012, 14, 120);
    const ring2Geo = new THREE.TorusGeometry(2.12, 0.008, 12, 120);
    const ring3Geo = new THREE.TorusGeometry(1.05, 0.007, 12, 80);
    const ring = new THREE.Mesh(ringGeo, goldMat);
    ring.rotation.x = Math.PI / 2.35;
    group.add(ring);
    const ring2 = new THREE.Mesh(ring2Geo, goldMat);
    ring2.rotation.x = Math.PI / 2.05;
    group.add(ring2);
    const ring3 = new THREE.Mesh(ring3Geo, chromeMat);
    ring3.rotation.y = 0.7;
    ring3.rotation.x = 1.1;
    group.add(ring3);

    const octaGeo = new THREE.OctahedronGeometry(0.42, 0);
    const crystal = new THREE.Mesh(octaGeo, goldMat);
    crystal.position.set(0.08, 0.06, 0.48);
    group.add(crystal);

    const icoGeo = new THREE.IcosahedronGeometry(0.22, 0);
    const satellite = new THREE.Mesh(icoGeo, chromeMat);
    satellite.position.set(1.35, 0.72, -0.15);
    group.add(satellite);

    const floorGeo = new THREE.CircleGeometry(2.4, 64);
    const floor = new THREE.Mesh(
      floorGeo,
      new THREE.MeshStandardMaterial({
        color: 0x0b0b0a,
        metalness: 0.7,
        roughness: 0.35,
        transparent: true,
        opacity: 0.55,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.15;
    group.add(floor);

    const count = mobile ? 140 : 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 9;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dust = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0xc4a36a,
        size: 0.015,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
      }),
    );
    scene.add(dust);

    const pointer = { x: 0, y: 0 };
    function onPointer(event: PointerEvent) {
      const rect = root.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    }
    window.addEventListener("pointermove", onPointer, { passive: true });

    const clock = new THREE.Clock();
    let raf = 0;

    function tick() {
      const t = clock.getElapsedTime();
      raf = requestAnimationFrame(tick);
      group.rotation.y = t * 0.1 + pointer.x * 0.3;
      group.rotation.x = 0.14 + pointer.y * 0.1;
      group.position.y = Math.sin(t * 0.65) * 0.07;
      ring.rotation.z = t * 0.18;
      ring2.rotation.z = -t * 0.1;
      ring3.rotation.z = t * 0.32;
      crystal.rotation.y = t * 0.55;
      crystal.rotation.x = t * 0.22;
      satellite.position.x = 1.35 + Math.cos(t * 0.7) * 0.12;
      satellite.position.y = 0.72 + Math.sin(t * 0.9) * 0.1;
      satellite.rotation.y = t * 0.8;
      dust.rotation.y = t * 0.025;
      slabs.forEach((slab, i) => {
        slab.position.y = [-0.62, 0, 0.62][i] + Math.sin(t * 0.9 + i) * 0.028;
      });
      mouseLight.position.set(pointer.x * 3.2, pointer.y * 2.1, 3);
      camera.position.x += (0.15 + pointer.x * 0.35 - camera.position.x) * 0.045;
      camera.position.y += (0.22 + pointer.y * 0.2 - camera.position.y) * 0.045;
      camera.lookAt(group.position.x * 0.3, 0, 0);
      renderer.render(scene, camera);
    }
    tick();

    const observer = new ResizeObserver(() => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    observer.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      observer.disconnect();
      [
        slabGeo,
        tallGeo,
        ringGeo,
        ring2Geo,
        ring3Geo,
        octaGeo,
        icoGeo,
        floorGeo,
        pGeo,
      ].forEach((geo) => geo.dispose());
      [glass, darkGlass, goldMat, chromeMat, floor.material, dust.material].forEach(
        (material) => {
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        },
      );
      renderer.dispose();
      if (renderer.domElement.parentNode === wrap) {
        wrap.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(196,163,106,0.16),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(127,191,186,0.08),transparent_28%)]"
      aria-hidden="true"
    />
  );
}
