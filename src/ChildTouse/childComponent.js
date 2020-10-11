import React from 'react';

const child = (props)=>{

    return(
        <div style={{display:'flex',marginBottom:'10px'}}>
            <div style={{width:'50%'}}>{props.data.text}</div>
            <div>
                <button disabled={props.data.sub} style={{width:'30px',height:'30px'}} onClick={props.sub}>-</button>
                <span style={{margin:'20px'}}>{props.data.count}</span>
                <button disabled={props.data.add} style={{width:'30px',height:'30px'}} onClick={props.add}>+</button>
            </div>
        </div>
    )
}

export default child;