import React from 'react'

export default function JoinBtn({age} : {age:number}) {
  return (
    <>{age>14 ? (<label>가입이 가능</label>) : (<label>14세 이상은 가입 불가능</label>)}
      <button disabled={age<14} style={age>=14 ? {backgroundColor:'orange'} : {backgroundColor:'blue'}}>가입</button>
    </>
  )
}
