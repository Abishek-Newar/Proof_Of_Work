import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cylinders from "./Cylinder"
const App = () => {
  return (
    <Canvas camera={{ fov: 35}}>
      <OrbitControls />
      <ambientLight />
      <Cylinders />
    </Canvas>
  )
}

export default App