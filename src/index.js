import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const author = "Joshua Hassan The First"
const title = "some title goes here"
const image = "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg"
const image_2 = "https://images-na.ssl-images-amazon.com/images/I/81HE+JDes-L._AC_UL600_SR600,400_.jpg"

function BookList() {
	return (
		<section className="booklist">
			<Book author={ author } title={ title } image={ image } />
			<Book author={ author } title="over written title" image={ image_2 } />
		</section>
	);
}

const Book = (data) => {
	console.log(data);
	return <article className="book">
		<img src={ data.image } alt="" />
		<h4>{ data.author }</h4>
		<h2>{ data.title }</h2>
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));