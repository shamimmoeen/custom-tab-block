/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { useState } from "@wordpress/element";
import { Button } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [toggle, setToggle] = useState(2);

	const handleSetToggle = (id) => {
		setToggle(id);
	};

	return (
		<div {...useBlockProps()}>
			<div className="__images">
				<div
					className={1 === toggle ? "__active" : ""}
					onClick={() => handleSetToggle(1)}
				>
					Toggle 1
				</div>
				<div
					className={2 === toggle ? "__active" : ""}
					onClick={() => handleSetToggle(2)}
				>
					Toggle 2
				</div>
			</div>
			{1 === toggle ? (
				<div className="__content">
					<h3>Toggle 1 Heading</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quae
						ea provident quisquam dolore vel tenetur facere, minus nisi
						nesciunt, nobis possimus sapiente eligendi perspiciatis esse est,
						incidunt libero praesentium.
					</p>
					<Button variant="primary">Read More</Button>
				</div>
			) : (
				<div className="__content">
					<h3>Toggle 2 Heading</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius
						corrupti numquam nihil incidunt! Adipisci deleniti ipsum itaque a
						ipsam, sint cum ut minus voluptates, reiciendis dolor sit tempora?
						Aliquam!
					</p>
					<Button variant="primary">Read More</Button>
				</div>
			)}
		</div>
	);
}
