import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { name, bio, url, id, alt } = attributes;
    const onChangeName = (newName) => {
        setAttributes({ name: newName });
    };
    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio });
    };
    const onSelectImage = (img) => {
        //console.log(img) left this line in for demo. below we are setting the new attribute values in the function based upon the properties of the new img object that is logged here.
        if (!img || !img.url) { // if there is no image or image url set the values to undefined
            setAttributes({ url: img.url, id: img.id, alt: img.alt })
            return;
        }
        setAttributes({ url: img.url, id: img.id, alt: img.alt })
    }
    return (
        <div {...useBlockProps()}>
            {url && <img src={url} alt={alt} />}
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelectImage}
                onSelectURL={(val) => console.log(val)}
                onError={(err) => console.log(err)}
                accept="image/*"
                allowedTypes={['image']}
            />
            <RichText
                placeholder={__('Member Name', 'team-member')}
                tagName="h4"
                onChange={onChangeName}
                value={name}
                allowedFormats={[]}
            />
            <RichText
                placeholder={__('Member Bio', 'team-member')}
                tagName="p"
                onChange={onChangeBio}
                value={bio}
                allowedFormats={[]}
            />
        </div>
    );
}