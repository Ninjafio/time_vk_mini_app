import React from 'react'
import { $fetchedLists } from '../../store/ModalStates';
import { useUnit } from 'effector-react';

const ListsList = () => {
    const lists = useUnit($fetchedLists);

    
  return (
    <div>{lists.map((list) => <div>{list.title}</div>)}</div>
  )
}

export default ListsList