'use clients'

import Compo from "./Compo"


const page = ({params}) => {
  const {blogs}=params;
  return (
    <div>
     <Compo />
    </div>
  )
}

export default page
