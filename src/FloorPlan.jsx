import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <>
    <div><Kitchen /></div>
    <LivingRoom />
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Bedroom bedNum={3}/>
    <Bath size="Half" />
    < Bath size="Full" />
    </>
  )
}

export default FloorPlan