import React from "react";
import "./card.style.css";
import PrimaryTitle from "../Primary-Title/PrimaryTitle";
import Poll from "../Poll/Poll";

const Card = () => {
	return (
		<div className="card">
			<PrimaryTitle>
				If you write a book about failure and it doesn't sell ,is it called
				success ?
			</PrimaryTitle>
			<div className="options">
				<Poll />
			</div>
		</div>
	);
};

export default Card;
