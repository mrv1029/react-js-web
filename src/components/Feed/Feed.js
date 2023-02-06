import React, { Component } from 'react'

const Feed = (props) => {
    var arr = ['a', 'b', 'c','d']
    var [a, c, ...last] = arr
    console.log(a, c, last)
    
    return (<div>Feed page {props.id}</div>)
}

export default Feed