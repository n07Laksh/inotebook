import React, {useRef} from 'react'

const About = () => {
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  const val = useRef("");
  console.log(val)
  const val2 = useRef("");
  console.log(val2)

  
  const AddValue = () => {
    val.current.innerHTML = "Hii Buddy"
    val2.current.innerHTML = "HaHa"
    console.log(val)
    console.log(val2)
  }
  
  return (
    <div className='container'>
      <h2>Hello My Name is...</h2>
      {/* <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <p>rendered: {count.current}</p> */}
      <br/>
      <button onClick={AddValue}>Add</button>

      <h2 ref={val}>hello</h2>
      <h3 ref={val2}> </h3>
    </div>
  )
}

export default About;
