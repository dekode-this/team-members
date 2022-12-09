import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from "@wordpress/blob";
import { spinner } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
    const { name, bio, url, id, alt } = attributes;
    const onChangeName = (newName) => {
        setAttributes({ name: newName });
    };
    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio });
    };
    const onSelectImage = (image) => {
        if (!image || !image.url) {
            setAttributes({ url: undefined, id: undefined, alt: '' });
            return;
        }
        setAttributes({ url: image.url, id: image.id, alt: image.alt });
    };
    console.log(url);
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
                disableMediaButtons={url}
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