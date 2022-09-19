import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const author = "Joshua Hassan The First"
const title = "some title goes here"
const image = "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg"

function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const Book = () => {
	return <article className="book">
		<img src={image} alt="" />
		<h4>{author}</h4>
		<h2>{title}</h2>
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));