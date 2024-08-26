import { useTexture } from "@react-three/drei"
import * as THREE from "three"

const Cylinders = () => {
    let tex = useTexture("./image.png")
  return (
    <mesh rotation={[0,1.4,0.2]}>
        <cylinderGeometry args={[1, 1, 1, 30,30, true]}  />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
  )
}

export default Cylinders