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
	return <article className="book">
		<Title />
		<Image />
		<Author />
	</article>
}

const Image = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg" alt="best seller picture" />
}

const Author = () => <h5>Author here</h5>;
const Title = () => <h2>Some TItle</h2>

ReactDOM.render(<BookList />, document.getElementById('root'));

