import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Icon } from "@wordpress/components"
import { __ } from "@wordpress/i18n"

export default function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id }) // the id of the item is passed in as a prop from the parent component
    const style = {
        transform: CSS.Transform.toString(transform), // this is a utility function that converts the transform object into a string
        transition // this is a utility function that converts the transition object into a string
    }
    return (
        <li
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={props.selectedLink === props.index ? 'is-selected' : null}
        >
            <button
                aria-label={__(
                    'Edit Social Link',
                    'team-members'
                )}
                onClick={() =>
                    props.setSelectedLink(props.index) // this function is being passed the index of the selected link // this toggles the is-selected class. See the li above.
                }
            >
                <Icon icon={props.icon} />
            </button>
        </li>
    );
}