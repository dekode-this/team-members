import { registerBlockType } from '@wordpress/blocks';
import "./team-member"; // the inclusion of the the nested block, importing the the index.js file from the folder.
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/team-members', { // this is the name taken from block.json
	edit: Edit,
	save,
});