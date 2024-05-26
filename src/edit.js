import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import { Image } from "@10up/block-components";
import { Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		tab1Image,
		tab1ImageUrl,
		tab1Title,
		tab1Description,
		tab1Link,
		tab2Image,
		tab2ImageUrl,
		tab2Title,
		tab2Description,
		tab2Link,
	} = attributes;

	const handleTab1ImageSelect = (image) => {
		setAttributes({ tab1Image: image.id });

		const {
			sizes: {
				full: { url },
			},
		} = image;

		setAttributes({ tab1ImageUrl: url });
	};

	const handleTab2ImageSelect = (image) => {
		setAttributes({ tab2Image: image.id });

		const {
			sizes: {
				full: { url },
			},
		} = image;

		setAttributes({ tab2ImageUrl: url });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Tab 1 Data", "custom-tab-block")}>
					<div className="components-base-control __image_field">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								{__("Image", "custom-tab-block")}
							</label>

							<Image
								id={tab1Image}
								size="medium"
								onSelect={handleTab1ImageSelect}
								labels={{
									title: "",
								}}
							/>

							{tab1Image && (
								<Button
									variant="link"
									isDestructive
									onClick={() =>
										setAttributes({ tab1Image: null, tab1ImageUrl: null })
									}
								>
									{__("Remove", "custom-tab-block")}
								</Button>
							)}
						</div>
					</div>

					<TextControl
						label={__("Title", "custom-tab-block")}
						value={tab1Title}
						onChange={(value) => setAttributes({ tab1Title: value })}
					/>
					<TextareaControl
						label={__("Description", "custom-tab-block")}
						value={tab1Description}
						onChange={(value) => setAttributes({ tab1Description: value })}
					/>
					<TextControl
						type="url"
						label={__("Link", "custom-tab-block")}
						value={tab1Link}
						onChange={(value) => setAttributes({ tab1Link: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Tab 2 Data", "custom-tab-block")}
					initialOpen={false}
				>
					<div className="components-base-control __image_field">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								{__("Image", "custom-tab-block")}
							</label>

							<Image
								id={tab2Image}
								size="medium"
								onSelect={handleTab2ImageSelect}
								labels={{
									title: "",
								}}
							/>

							{tab2Image && (
								<Button
									variant="link"
									isDestructive
									onClick={() =>
										setAttributes({ tab2Image: null, tab2ImageUrl: null })
									}
								>
									{__("Remove", "custom-tab-block")}
								</Button>
							)}
						</div>
					</div>
					<TextControl
						label={__("Title", "custom-tab-block")}
						value={tab2Title}
						onChange={(value) => setAttributes({ tab2Title: value })}
					/>
					<TextareaControl
						label={__("Description", "custom-tab-block")}
						value={tab2Description}
						onChange={(value) => setAttributes({ tab2Description: value })}
					/>
					<TextControl
						type="url"
						label={__("Link", "custom-tab-block")}
						value={tab2Link}
						onChange={(value) => setAttributes({ tab2Link: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="__custom_tab_block_tabs">
				<div
					role="tablist"
					aria-label={__("Tabs", "custom-tab-block")}
					className="__images __custom_tab_block_tablist"
				>
					<button
						role="tab"
						aria-selected="true"
						aria-controls="panel-1"
						id="tab-1"
						style={
							tab1ImageUrl ? { backgroundImage: `url(${tab1ImageUrl})` } : {}
						}
					>
						<span>{__("01", "custom-tab-block")}</span>
					</button>
					<button
						role="tab"
						aria-selected="false"
						aria-controls="panel-2"
						id="tab-2"
						style={
							tab2ImageUrl ? { backgroundImage: `url(${tab2ImageUrl})` } : {}
						}
					>
						<span>{__("02", "custom-tab-block")}</span>
					</button>
				</div>

				<div
					id="panel-1"
					role="tabpanel"
					tabIndex="0"
					aria-labelledby="tab-1"
					className="__content"
				>
					<p>
						<span className="__bold">{tab1Title}</span>
						{tab1Description}
					</p>
					<a
						className="wp-block-button__link wp-element-button"
						href={tab1Link}
					>
						{__("Read More", "custom-tab-block")}
					</a>
				</div>

				<div
					id="panel-2"
					role="tabpanel"
					tabIndex="0"
					aria-labelledby="tab-2"
					className="__content is-hidden"
				>
					<p>
						<span className="__bold">{tab2Title}</span>
						{tab2Description}
					</p>
					<a
						className="wp-block-button__link wp-element-button"
						href={tab2Link}
					>
						{__("Read More", "custom-tab-block")}
					</a>
				</div>
			</div>
		</div>
	);
}
