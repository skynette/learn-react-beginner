import React from "react";
import ReactDOM from "react-dom";

function BookList() {
	return (
		<section>
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return <article>
		<Title />
		<Image />
		<Author />
	</article>
}

const Image = () => {
	return <img src="someimagesource" alt="Image" />
}

const Author = () => <h5>Author here</h5>;
const Title = () => <h2>Some TItle</h2>

ReactDOM.render(<BookList />, document.getElementById('root'));

