import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css';


function BookList() {
	return (
		<section className="booklist">
			{ books.map((book)=>{
				return (
					<Book key={book.id} {...book}></Book>
				)
			}) }
		</section>
	);
}

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
createRoot(document.getElementById('root')).render(<BookList />);