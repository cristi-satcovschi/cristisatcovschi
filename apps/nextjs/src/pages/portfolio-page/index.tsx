import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

/**
 * ControlBarButton types:
 * - Button
 *      - this is the default type
 * - Toggle:
 *      - status: 'active', 'inactive'
 */

const ControlBarButton = ({ type = "button" }) => {
  return (
    <div className="bg-slate-600 flex h-16 w-16 items-center justify-center rounded-md">
      {type}
    </div>
  );
};

const ControlBar = () => {
  return (
    <div className="bg-white/30 border-slate-200 fixed left-0 right-0 mx-16 mt-8 flex justify-between overflow-hidden rounded-lg border p-4 backdrop-blur-md">
      <div className="flex flex-row space-x-2">
        <ControlBarButton />
        <ControlBarButton />
        <ControlBarButton />
      </div>
      <div className="flex flex-row space-x-2">
        <ControlBarButton type="toggle" />
        <ControlBarButton type="toggle" />
      </div>
    </div>
  );
};

const TextContent = () => {
  return (
    <div className="pb-32">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis,
      libero soluta ipsa rem, illum aspernatur saepe distinctio id tempore
      blanditiis perferendis sint dignissimos. A obcaecati esse inventore eos
      odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
      nobis, libero soluta ipsa rem, illum aspernatur saepe distinctio id
      tempore blanditiis perferendis sint dignissimos. A obcaecati esse
      inventore eos odio. Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur saepe
      distinctio id tempore blanditiis perferendis sint dignissimos. A obcaecati
      esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio. Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ullam nobis, libero soluta ipsa rem, illum aspernatur
      saepe distinctio id tempore blanditiis perferendis sint dignissimos. A
      obcaecati esse inventore eos odio.
    </div>
  );
};

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

/**
 * TODO:
 * maybe use the resize observer to set the size of the canvas?
 * - https://stackoverflow.com/a/70608516
 *
 * the width is hardcoded for now
 */

const ThreeModelTest = () => {
  return (
    <div>
      <Canvas style={{ width: 574, height: 400 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

const ModelContent = () => {
  return (
    <div className="relative h-full w-full">
      <div className="fixed w-full">
        <ThreeModelTest />

        <div className="">contextual content</div>

        <div className="">ui controls</div>
      </div>
    </div>
  );
};

const StudioMuzical = () => {
  return (
    <div>
      <ControlBar />

      <div className="flex h-full flex-row px-16 pt-40">
        <div className="w-1/2">
          <TextContent />
        </div>
        <div className="w-1/2">
          <ModelContent />
        </div>
      </div>
    </div>
  );
};

export default StudioMuzical;
