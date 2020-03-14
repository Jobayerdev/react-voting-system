import React from "react";
import "./Poll.style.css";

const Poll = ({ option, changeHandler, totalCount }) => {
	return (
		<div className="poll-item">
			<div className="info">
				<div className="mark">
					<i onClick={() => changeHandler(option)} className="far fa-heart"></i>
					<h4 className="poll-title">{option.title}</h4>
				</div>
				<div className="progress-bg">
					<div
						className={`${option.option === "yes" ? "green" : ""} ${
							option.option === "no" ? "red" : ""
						} ${option.option === "nocomment" ? "no-comment" : ""} progress`}
						style={{
							width: `${Math.floor((option.count * 100) / totalCount)}%`
						}}></div>
				</div>
			</div>
			<div className="vote-icon">
				<p>${Math.round((option.count * 100) / totalCount)}%</p>
			</div>
		</div>
	);
};

export default Poll;
// Math.round((option.count * 100) / totalCount)
