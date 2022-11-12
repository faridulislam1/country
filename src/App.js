import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const student=['Monir','Alim','raju','karim','Raj']
  const products=[{name:'Iphone', price:'$1000'},
                  {name:'Vivo', price:'$100'},
                  {name:'xami', price:'$999'},
                  {name:'Nokia', price:'$909'},
                  {name:'Samgsung', price:'$700'}
]
  return (
    <div className="App">
      <header className="App-header">
       <h1>I am React Developer</h1>
       <Counter></Counter>
       <Posts></Posts>
       <ul>
        {
          student.map(students =><li>{students}</li>)
        }
       {
        products.map(product =><li>{product.name}</li>)
       }
       </ul><br></br>
       {
          products.map(product =><Product product={product}></Product>)
       }
       
     
       
       <Person name="Abdullah" cgpa="4" Id="1223455"></Person>
       <Person name="Alim" cgpa="3" Id="122244"></Person>
       <Person name="Rakib" cgpa="3.5" Id="134455"></Person>
        <Person name="Abdullah" cgpa="4" Id="1223455"></Person>
       <Person name="Alim" cgpa="3" Id="122244"></Person>
       <Person name="Rakib" cgpa="3.5" Id="134455"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount]=useState(5);
  const handleIncrease=()=> setCount(count+1);
  const handleDecrease=()=> setCount(count -1);

  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleDecrease}>Decrease</button>

      <button onMouseMove={handleIncrease}>Increase</button>
    </div>
  )
}
function Posts(){
  const [post, setPosts]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res=>res.json())
     .then(data=>setPosts(data));
  },[])  
  return(
    <div>
      <h2>Dynamic Users:{post.length}</h2>
      <ul>
        {
       post.map (post=><li>{post.title}</li>)
        }
       </ul>

    </div>
  )

}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'purple ',
    height:'200px',
    width:'200px',
    float:'left',
  }
  const {name,price}=props.product;
  console.log(name,price)

  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )

}
function Person(props){
  const personStyle={
    border:'2px solid green',
    margin:'12px',
    padding:'10px',
    width:'400px'
  }
  return(
    <div style={personStyle}>
      <h2>Name:{props.name}</h2>
      <h3>cgpa:{props.cgpa}</h3>
      <h3>Id:{props.Id}</h3>


    </div>

  )
}

export default App;
