import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const books = [
	{
		id: 1,
		img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg",
		title: "Title one of books",
		author: "author name one",
	},
	{
		id: 2,
		img: "https://images-na.ssl-images-amazon.com/images/I/81HE+JDes-L._AC_UL600_SR600,400_.jpg",
		title: "Title two of booke",
		author: "author name two",
	},
]

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
	// attribute, then event Handler
	// onCLick and onMouseOver
	const clickHandler = () => {
		alert("Hello world");
	}
	return <article className="book">
		<img src={ props.image } alt="" />
		<h2>{ props.title }</h2>
		<h4>{ props.author }</h4>
		<button type="button" onClick={clickHandler}>Click me yay</button>
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));