import React,{useContext} from 'react'
import { PContext } from '../context/PContext'

import {Container,HomeLayout} from '../styles/Styles'

function Home() {
  const {data} = useContext(PContext)
  //console.log(data);

  return (
    <Container>
      <h1>Home</h1>
      <HomeLayout>
        <img 
        src={data.basics?.picture} //data.basics?. คือ check ก่อนว่ามีข้อมูลอยู่ในตัวแปรนี้หรือไม่ ถ้ามีไปต่อ ถ้าไม่มีมันจะไม่แสดง แต่ถ้าไม่ใส่และไม่มีมันจะ error
        alt={data.basics?.name}//ถ้าไม่มีรูปแสดงชื่อ
        />
        <ul>
          <li><strong>Name</strong> : {data.basics?.name}</li>
          <li><strong>Headline</strong> : {data.basics?.headline??"ttt"}</li>{/* headline??"ttt" คือถ้ามีข้อมูลแสดงข้อมูลใน headline ถ้าไม่แสดงเป็น"ttt"*/}
        </ul>
      </HomeLayout>
    </Container>
  )
}

export default Home