import { registerBlockType, createBlock } from '@wordpress/blocks'; // createBlock is a function that allows us to create a block from within another block we use it for the transform function
import "./team-member"; // the inclusion of the the nested block, importing the the index.js file from the folder.
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/team-members', { // this is the name taken from block.json
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/gallery'],
				transform: ({ images, columns }) => { // destructuring the images and columns properties from the attributes object
					const InnerBlocks = images.map(({ url, id, alt }) => { // destructuring the url and alt properties from the images array
						return createBlock('blocks-course/team-member', { // this is the name of the block we are creating
							alt,
							id,
							url,
						})
					});
					return createBlock('blocks-course/team-members', { // this is the name of the block we are creating
						columns: columns || 2, // if columns is undefined then use 2
					}, InnerBlocks)
				}
			},
			{
				type: 'block',
				blocks: ['core/image'],
				isMultiBlock: true,
				transform: (attributes) => {
					const innerBlocks = attributes.map(
						({ url, id, alt }) => {
							return createBlock('blocks-course/team-member', {
								alt,
								id,
								url,
							});
						}
					);
					return createBlock(
						'blocks-course/team-members',
						{
							columns:
								attributes.length > 3 ? 3 : attributes.length,
						},
						innerBlocks
					);
				},
			},
		]
	}
});