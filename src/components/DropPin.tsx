import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from "@fortawesome/free-solid-svg-icons"

const DropPin = ({ lat, lng }:any) => {
    const latitude: Object = {
        lat
      }
      const longitude: Object = {
        lng
      }
  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faBeer} size="2x" {...latitude} {...longitude} />
    </div>
  )
}

export default DropPin