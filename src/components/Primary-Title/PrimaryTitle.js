import React from "react";
import "./primary-title.style.css";

const PrimaryTitle = ({ children }) => {
	return (
		<div className="primary-title">
			<h4>{children}</h4>
		</div>
	);
};

export default PrimaryTitle;
