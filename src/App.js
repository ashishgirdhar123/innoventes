import React, { Component } from 'react';
import Child from './ChildTouse/childComponent';
import './App.css';

class App extends Component{
 state={
   rooms:{text:"Rooms",count :1, add:false, sub:true },
   adult:{text:"Adults" ,count :1, add:false, sub:true },
   children:{text:"Childrens", count :0, add:false, sub:true }
 } 

addRoom = () =>{
  var myrooms = this.state.rooms;
  myrooms.count++;
  var adult = this.state.adult;
  var child = this.state.children;
    var sum = adult.count +child.count;
   
    if(myrooms.count === 5){
      myrooms.add =true;
    }
    else if(myrooms.count > 1){
      myrooms.sub = false;
    }
    if(sum < myrooms.count){
     adult.count= adult.count+1;
    }
    if(adult.count > 1){
      adult.sub= false;
    }
    if(sum < 20){
      adult.add=false;
      child.add =false;
    }

    this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});

}

deleteRoom = () =>{
  var myrooms = this.state.rooms;
  myrooms.count--;
  var child = this.state.children;
  var adult =this.state.adult
  child.add=false;
  adult.add=false;
    var sum = adult.count + child.count;
      while(myrooms.count *4 < sum ){
        if(child.count !== 0 ){
          child.count =child.count -1;
        }
        else{
          adult.count =adult.count -1;
        }
        sum = adult.count + child.count;
      }
      if(myrooms.count ===1 ){
        myrooms.sub= true;
      }else{
        myrooms.sub= false;
      }
      if(child.count === 0){
        child.sub =true;
      }
      if(adult.count === 0 ){
        adult.count = true;
      }

    this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});
}

addAdult = () =>{
  var myrooms = this.state.rooms;
  var child = this.state.children;
  var adult =this.state.adult;
  adult.count++;
  adult.sub=false;
  var sum = adult.count + child.count;
  if(sum === 20){
    myrooms.count =5;
    adult.add=true;
    child.add =true;
  }
  else if(sum > myrooms.count*4){
    myrooms.count = myrooms.count +1;
  }
  if(myrooms.count == 5){
    myrooms.add=true
  }
  else{
    myrooms.add = false;
  }
  if(myrooms.count>1){
    myrooms.sub =false
  }
  this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});
}

deleteAdult = () =>{
  var myrooms = this.state.rooms;
  var child = this.state.children;
  var adult =this.state.adult;
  adult.count --;
  var sum = adult.count + child.count;
  if(sum < myrooms.count){
    myrooms.count--;
  }
  if(myrooms.count === 1){
    myrooms.sub= true;
  }
  if(myrooms.count < 5){
    myrooms.add= false;
  }
  if(adult.count === 1){
    adult.sub = true;
  }
  if(sum < 20){
    adult.add=false;
    child.add =false;
  }
  this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});
}


addChild = () =>{
  var myrooms = this.state.rooms;
  var child = this.state.children;
  var adult =this.state.adult
  child.count++;
  child.sub= false;
  var sum = adult.count + child.count;
  if(sum === 20){
    myrooms.count =5;
    adult.add= true;
    child.add = true;
  }
  else if(sum > myrooms.count*4){
    myrooms.count = myrooms.count +1;
  }
  if(myrooms.count == 5){
    myrooms.add=true
  }
  else{
    myrooms.add = false;
  }
  if(myrooms.count>1){
    myrooms.sub =false
  }
  this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});
}

deleteChild = () =>{
  var myrooms = this.state.rooms;
  var child = this.state.children;
  var adult =this.state.adult;
  child.count--;
  var sum = adult.count + child.count;
  if(sum < myrooms.count){
    myrooms.count--;
  }
  if(myrooms.count === 1){
    myrooms.sub= true;
  }
  if(myrooms.count < 5){
    myrooms.add= false;
  }
  if(child.count === 0){
    child.sub = true;
  }
  if(sum<20){
   child.add = false;
   adult.add = false;
  }
  this.setState({rooms:{...myrooms},adult:{...adult},children:{...child}});
}

 render(){
   return(
     <div className="mar100">
     <div style={{marginBottom:'40px'}}>Choose no Of People</div>
     <Child data={this.state.rooms} add={this.addRoom} sub={this.deleteRoom} />
     <Child data={this.state.adult} add={this.addAdult} sub={this.deleteAdult} />
     <Child data={this.state.children} add={this.addChild} sub={this.deleteChild} />
     </div>
   )
 }
}

export default App;
