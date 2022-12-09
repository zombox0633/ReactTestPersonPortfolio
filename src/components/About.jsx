import React,{useContext} from 'react'
import { PContext } from '../context/PContext'

import {Container,Content,SkillsCom} from '../styles/Styles'

function About() {
const {data} = useContext(PContext)

  return (
    <Container>
      <h1>About</h1>
      <Content>
        <img 
        src={data.basics?.picture} 
        alt={data.basics?.name} />
        <ul>
          <li>Name : {data.basics?.name}</li>
          <li>{data.basics?.headline}</li>
          <li>{data.basics?.region}</li>
          <li>My website : <a href={data.basics?.website} target="_blank">{data.basics?.website}</a></li>
          <li>My Blog : <a href={data.basics?.blog} target="_blank">{data.basics?.blog}</a></li>
        </ul>
        <hr />
        <h3>My Skills</h3>
          <SkillsCom>
            {data.skills?.map((value,index)=>{
              return(
                <li key={index}>
                <strong>{value.name}</strong>
                <br />
                Level : {value.level}
                </li>
              )
            })}
          </SkillsCom>
      </Content>
    </Container>
  )
}

export default About