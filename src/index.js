import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	const title = "some title goes here"
	return <article className="book">
		<img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg" alt="best seller picture" />
		<h4>Joshua Hassan</h4>
		<h2>{title}</h2>
		<h4>Some content yeah</h4>
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));