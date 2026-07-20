import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';
import Tabs from './tabs';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const tablistLabel = attributes.tablistLabel;

	const selectImage = ( n ) => ( image ) =>
		setAttributes( {
			[ `tab${ n }Image` ]: image.id,
			[ `tab${ n }ImageUrl` ]: image?.sizes?.full?.url || image.url,
			[ `tab${ n }ImageAlt` ]: image.alt || '',
		} );

	const removeImage = ( n ) => () =>
		setAttributes( {
			[ `tab${ n }Image` ]: null,
			[ `tab${ n }ImageUrl` ]: null,
		} );

	return (
		<div { ...useBlockProps( { className: 'custom-tab-block' } ) }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Tab Group', 'custom-tab-block' ) }
					initialOpen={ true }
				>
					<TextControl
						label={ __( 'Group label', 'custom-tab-block' ) }
						help={ __(
							'Used by screen readers to describe this group of tabs.',
							'custom-tab-block'
						) }
						value={ tablistLabel }
						onChange={ ( v ) =>
							setAttributes( { tablistLabel: v } )
						}
					/>
				</PanelBody>

				{ [ 1, 2 ].map( ( n ) => {
					const image = attributes[ `tab${ n }Image` ];
					const imageUrl = attributes[ `tab${ n }ImageUrl` ];
					const imageAlt = attributes[ `tab${ n }ImageAlt` ];
					const title = attributes[ `tab${ n }Title` ];
					const description = attributes[ `tab${ n }Description` ];
					const link = attributes[ `tab${ n }Link` ];

					return (
						<PanelBody
							key={ n }
							title={ sprintf(
								/* translators: %d: the tab number. */
								__( 'Tab %d Data', 'custom-tab-block' ),
								n
							) }
							initialOpen={ n === 1 }
						>
							<div className="components-base-control custom-tab-block__image-field">
								<div className="components-base-control__field">
									<span className="components-base-control__label">
										{ __( 'Image', 'custom-tab-block' ) }
									</span>

									<MediaUploadCheck>
										<MediaUpload
											onSelect={ selectImage( n ) }
											allowedTypes={ [ 'image' ] }
											value={ image }
											render={ ( { open } ) =>
												imageUrl ? (
													<Button
														className="custom-tab-block__image-preview"
														label={ __(
															'Replace image',
															'custom-tab-block'
														) }
														onClick={ open }
													>
														<img
															src={ imageUrl }
															alt=""
														/>
													</Button>
												) : (
													<Button
														variant="secondary"
														onClick={ open }
													>
														{ __(
															'Select image',
															'custom-tab-block'
														) }
													</Button>
												)
											}
										/>
									</MediaUploadCheck>

									{ image && (
										<Button
											variant="link"
											isDestructive
											onClick={ removeImage( n ) }
										>
											{ __(
												'Remove',
												'custom-tab-block'
											) }
										</Button>
									) }
								</div>
							</div>

							{ imageUrl && (
								<TextareaControl
									label={ __(
										'Image alt text (decorative if empty)',
										'custom-tab-block'
									) }
									value={ imageAlt }
									onChange={ ( value ) =>
										setAttributes( {
											[ `tab${ n }ImageAlt` ]: value,
										} )
									}
									help={ __(
										'Describe the image for screen readers, or leave empty if decorative.',
										'custom-tab-block'
									) }
								/>
							) }

							<TextControl
								__next40pxDefaultSize
								label={ __( 'Title', 'custom-tab-block' ) }
								value={ title }
								onChange={ ( value ) =>
									setAttributes( {
										[ `tab${ n }Title` ]: value,
									} )
								}
							/>
							<TextareaControl
								label={ __(
									'Description',
									'custom-tab-block'
								) }
								value={ description }
								onChange={ ( value ) =>
									setAttributes( {
										[ `tab${ n }Description` ]: value,
									} )
								}
							/>
							<TextControl
								__next40pxDefaultSize
								type="url"
								label={ __( 'Link', 'custom-tab-block' ) }
								value={ link }
								onChange={ ( value ) =>
									setAttributes( {
										[ `tab${ n }Link` ]: value,
									} )
								}
							/>
						</PanelBody>
					);
				} ) }
			</InspectorControls>

			<Tabs attributes={ attributes } />
		</div>
	);
}
