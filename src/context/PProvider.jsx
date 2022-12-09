import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import { PContext } from './PContext'

function PProvider({children}) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://gitconnected.com/v1/portfolio/zombox0633')// axios จะทำการเปลี่ยนไฟล์เป็น json เลยจึงไม่จำเป็นต้องใส่ .then(res =>{ return res.json()}
    .then((res) => setData(res.data))
  }, [])
  //console.log(data);

  return (
    <PContext.Provider
      value={{data}}
    >
      {children}
    </PContext.Provider>
  )
}

export default PProvider