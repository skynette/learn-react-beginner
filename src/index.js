import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const books = [
	{
		img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg",
		title: "Title one of books",
		author: "author name one",
	},
	{
		img: "https://images-na.ssl-images-amazon.com/images/I/81HE+JDes-L._AC_UL600_SR600,400_.jpg",
		title: "Title two of booke",
		author: "author name two",
	},
]

function BookList() {
	return (
		<section className="booklist">
			{ books.map((book)=>{
				const { image, title, author } = book;
				return (
					<Book book={book}/>
				)
			}) }
		</section>
	);
}

const Book = (props) => {
	console.log(props);
	return <article className="book">
		<img src={ props.book.image } alt="" />
		<h2>{ props.book.title }</h2>
		<h4>{ props.book.author }</h4>
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));