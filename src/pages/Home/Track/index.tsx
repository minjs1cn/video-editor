import { useHomeContext } from '../context'
import './index.css'

function Track() {
  const { state } = useHomeContext()
  console.log(state)
  return <div className="track">tool</div>
}

export default Track
