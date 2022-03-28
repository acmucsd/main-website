import React from "react";
import Button from "../Button";
import s from "./QuestionModal.module.scss"

interface QuestionModalProps {
	show: boolean;
	title: string;
	options: string[];
	onSelect: (selectedOption: string) => void
	onCancel: () => void
}

export const QuestionModal: React.FC<QuestionModalProps> = ({ show, title, options, onCancel, onSelect }) => {
	const showHideClassName = show ? `${s.modal} ${s["display-block"]}` : `${s.modal} ${s["display-none"]}`;

	return (
		<div className={showHideClassName}>
			<section className={s["modal-main"]}>
				<h3>{title}</h3>
				<div className={s.options}>
					{options.map((option) => (
						<button onClick={() => onSelect(option)} key={option}>{option}</button>
					))}
				</div>
				<br />
				<button onClick={onCancel}>Cancel</button>
			</section>
		</div >
	);
};