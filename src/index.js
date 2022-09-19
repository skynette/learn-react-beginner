import React from "react";
import ReactDOM from "react-dom";
import './index.css';


const author = "Joshua Hassan The First"
const title = "some title goes here"
const image = "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81abeGoTMsL._AC_UL600_SR600,400_.jpg"
const image_2 = "https://images-na.ssl-images-amazon.com/images/I/81HE+JDes-L._AC_UL600_SR600,400_.jpg"

const books = {
	img: "somelink",
	title: "some titile",
	author: "author name",
};

function BookList() {
	return (
		<section className="booklist">
			<Book author={ author } title={ title } image={ image } />
			<Book author={ author } title="over written title" image={ image_2 } />
			<Book author={ author } title="over written title" image={ image_2 }>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto voluptate perferendis! Delectus illum in illo voluptatibus dolorum commodi eius voluptates voluptatum provident non dolorem veritatis, voluptatem ex deserunt amet.</p>
			</Book>
		</section>
	);
}

const Book = (props) => {
	console.log(props);
	return <article className="book">
		<img src={ props.image } alt="" />
		<h2>{ props.title }</h2>
		<h4>{ props.author }</h4>
		{ props.children }
	</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));