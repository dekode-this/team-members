import { useBlockProps, InnerBlocks, InspectorControls, } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	};


	const ALLOWED_BLOCKS = ['blocks-course/team-member'];
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Colums", "team-members")}
						min={1}
						max={6}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={[ALLOWED_BLOCKS]}
				template={[
					['blocks-course/team-member',],
					['blocks-course/team-member',],
					['blocks-course/team-member',],
				]} // an arrary of arrays, the second item in this array are attributes
			/>
		</div>
	);
}
