import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../Components/UI/Wrapper';
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import TableHistory from '../Components/TableHistory'

function History() {

  return (
    <>
      <Wrapper className="column">
        <Title>Games history</Title>
      <TableHistory/>

      </Wrapper>
    </>

  )
}

export default History