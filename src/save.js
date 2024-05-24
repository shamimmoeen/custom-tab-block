import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

import { useState } from "@wordpress/element";
import { Button } from "@wordpress/components";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	// const [toggle, setToggle] = useState(2);
	// const handleSetToggle = (id) => {
	// 	setToggle(id);
	// };
	// return (
	// 	<div {...useBlockProps()}>
	// 		<div className="__images">
	// 			<div
	// 				className={1 === toggle ? "__active" : ""}
	// 				onClick={() => handleSetToggle(1)}
	// 			>
	// 				Toggle 1
	// 			</div>
	// 			<div
	// 				className={2 === toggle ? "__active" : ""}
	// 				onClick={() => handleSetToggle(2)}
	// 			>
	// 				Toggle 2
	// 			</div>
	// 		</div>
	// 		{1 === toggle ? (
	// 			<div className="__content">
	// 				<h3>Toggle 1 Heading</h3>
	// 				<p>
	// 					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quae
	// 					ea provident quisquam dolore vel tenetur facere, minus nisi
	// 					nesciunt, nobis possimus sapiente eligendi perspiciatis esse est,
	// 					incidunt libero praesentium.
	// 				</p>
	// 				<Button variant="primary">Read More</Button>
	// 			</div>
	// 		) : (
	// 			<div className="__content">
	// 				<h3>Toggle 2 Heading</h3>
	// 				<p>
	// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius
	// 					corrupti numquam nihil incidunt! Adipisci deleniti ipsum itaque a
	// 					ipsam, sint cum ut minus voluptates, reiciendis dolor sit tempora?
	// 					Aliquam!
	// 				</p>
	// 				<Button variant="primary">Read More</Button>
	// 			</div>
	// 		)}
	// 	</div>
	// );
	// return (
	// 	<p {...useBlockProps.save()}>
	// 		{"Custom Tab Block – hello from the saved content!"}
	// 	</p>
	// );

	return (
		<div {...useBlockProps.save()}>
			<div class="__images">
				<div class="">Toggle 1</div>
				<div class="__active">Toggle 2</div>
			</div>
			<div class="__content">
				<h3>Toggle 2 Heading</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius
					corrupti numquam nihil incidunt! Adipisci deleniti ipsum itaque a
					ipsam, sint cum ut minus voluptates, reiciendis dolor sit tempora?
					Aliquam!
				</p>
				<button type="button" class="components-button is-primary">
					Read More
				</button>
			</div>
		</div>
	);
}
