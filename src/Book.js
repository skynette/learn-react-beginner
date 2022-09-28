import React from 'react'

const Book = (props) => {
	const clickHandler = () => {
		alert("Hello world");
	}
	return <article className="book" onMouseOver={()=>{
		console.log(props.title)
	}}>
		<img src={ props.img } alt="" />
		<h2>{ props.title }</h2>
		<h4>{ props.author }</h4>
		<button type="button" onClick={clickHandler}>Click me yay</button>
	</article>
}

export default Book