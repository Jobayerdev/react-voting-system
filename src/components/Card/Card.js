import React, { useState } from "react";
import "./card.style.css";
import PrimaryTitle from "../Primary-Title/PrimaryTitle";
import Poll from "../Poll/Poll";

const Card = () => {
	const [option, setOption] = useState({
		questions:
			"If you write a book about failure and it doesn't sell ,is it called success ?",
		answer: [
			{ title: "Definitely a Success", option: "yes", count: 80 },
			{ title: "No", option: "no", count: 40 },
			{
				title: "Only if it's in the To section of the library",
				option: "nocomment",
				count: 50
			}
		],
		totalCount: 190
	});

	const updateState = (getData) => {
		const get = option.answer.find((x) => x.option === getData.option);
		get.count++;
		const newAdd = [...option.answer, get];
		const removeDuplicate = newAdd.filter(function(item, index) {
			return newAdd.indexOf(item) === index;
		});

		const total = option.answer.reduce(
			(acc, current) => acc + current.count,
			0
		);

		setOption({
			...option,
			removeDuplicate,
			totalCount: total
		});
	};
	return (
		<div className="card">
			<PrimaryTitle>{option.questions}</PrimaryTitle>
			<div className="options">
				{option.answer
					.sort((a, b) => b.count - a.count)
					.map((x, i) => (
						<Poll
							key={i}
							option={x}
							totalCount={option.totalCount}
							changeHandler={updateState}
						/>
					))}
			</div>
		</div>
	);
};

export default Card;
