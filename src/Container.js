import React from 'react';
import Card from './Card';

const Container = props => {
  const cards = props.people.map((person,idx) => {
    return <Card {...person} key={Date.now()+idx}/>
  })

  return(<div>{cards}</div>)
}

export default Container
