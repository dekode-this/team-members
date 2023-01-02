import { useEffect, useState, useRef } from '@wordpress/element';
import {
    useBlockProps,
    RichText,
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
    InspectorControls,
    store as blockEditorStore // in the block-editor package we find teh store and here we rename it so we can use it without having to type i every time.
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { usePrevious } from '@wordpress/compose';
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import {
    Spinner,
    withNotices,
    ToolbarButton,
    PanelBody,
    TextareaControl,
    SelectControl,
    Icon,
    Tooltip
} from "@wordpress/components";
import { Button } from '@wordpress/components';

function Edit({ attributes, setAttributes, noticeOperations, noticeUI, isSelected }) {

    const { name, bio, url, id, alt, socialLinks } = attributes;
    const [blobURL, setBlobURL] = useState(); // the second arrgument is the setter for the state, The useState() function is left with an empty argument to set it as underfined to beggin.
    // the fist value of useState is the current value of the state and the second value is the function we will use to update the state

    const prevURL = usePrevious(url);

    const titleRef = useRef();

    const imageObject = useSelect((select) => { // we set a constant thats value is the useSelect function. This function accepts and argument that is a function.
        const { getMedia } = select('core'); // we select the core store and from the core store we want to use the getMedia function. We do this by destructuring.
        return id ? getMedia(id) : null // we return the value of the image object. 
        //We are passing the id of our image from the block attributes const { name, bio, url, id, alt } = attributes;
        // This is an if statement id ? getMedia(id) : null. If id is true then return the media object for our image else retunr null.
    }, [id]); // useSelect accepts and second arrgument which is an array of dependencies (any value we depend on in our useSelect, which is this case is the image id)
    // we pass the id as the second arrguement becuase if we change the image we need to update the imageObject, we tell useSelect to update the object by passing it the id as the second arrgument 
    //console.log(imageObject);

    const imageSizes = useSelect((select) => {
        return select(blockEditorStore).getSettings().imageSizes; // this is how we get the array of available image sizes in the theme.
    }, []);


    // in console first run wp.data.select("core").getMedia(213) which contains the images szes for the image
    // then run wp.data.select("core/block-editor").getSettings().imageSizes  which returns the available image size in the theme
    // Then run a loop through the images sizes and only set an option if it exists in the theme image size array

    const getImageSizeOptions = () => {
        if (!imageObject) return [] // if we don't have an image object just return an empty array
        const options = []; // otherwise define a new array options and this array we are going to populate options with label and values
        const sizes = imageObject.media_details.sizes;
        for (const key in sizes) { // https://www.w3schools.com/js/js_loop_forin.asp
            const size = sizes[key];
            const imageSize = imageSizes.find(s => s.slug === key); // using .find to check if the size title is in the theme image sizes as a slug
            if (imageSize) { // if imageSize is true, i.e. if the image size was found in the slugs
                options.push({ //push to the options array
                    label: imageSize.name,
                    value: size.source_url,
                });
                // options will now be returned as an array of objects, 1 object for each image size that was found in the theme image sizes
                // the label will  be the size name and the value will be the specific image source url for that size image.
                // I can test this using console.log(options) and then running the getImageSizeOptions() function.
            }
        }
        return options;
    };
    //getImageSizeOptions();

    //console.log(isBlobURL(url)); // this will return true while the image is being uploaded and then once it is uploaded it will return false
    //console.log(url); // while the image is being uploaded this will return a blob url and then once it is uploaded it will return the actual url
    const onChangeName = (newName) => {
        setAttributes({ name: newName });
    };

    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio });
    };

    const onChangeAlt = (newAlt) => {
        setAttributes({ alt: newAlt });
    }

    const onSelectImage = (image) => {
        if (!image || !image.url) {
            setAttributes({ url: undefined, id: undefined, alt: '' });
            return;
        }
        setAttributes({ url: image.url, id: image.id, alt: image.alt });
    };

    const onSelectURL = (newURL) => {
        setAttributes({
            url: newURL,
            id: undefined,
            alt: '',
        });
    };

    const onChangeImageSize = (newURL) => { // this function is called in the image size select menu, it sets the image url to the new image size url when a new image size is selected in the select menu
        setAttributes({ url: newURL });
    }

    const onUploadError = (message) => {
        noticeOperations.removeAllNotices(); // this clears the exisiting notices to avoid stacking when the isers attempts a new not allowed file type.
        noticeOperations.createErrorNotice(message) // create error notice is a function that is inside the Object noticeOperations.
    };

    const removeImage = () => {
        setAttributes({
            url: undefined,
            alt: '',
            id: undefined
        })
    };

    // Edge case if the user refreshes the browser while the image is still in blobURL status to prevent the spinner from endlessly spinning.
    useEffect(() => {
        if (!id && isBlobURL(url)) { // if there is not id which indicates the image is not uploaded to the media library && and there is a blobURL then run this function.
            setAttributes({
                url: undefined, // clear the image url
                alt: '' // set the alt tag to be an empty string
            })
        }
    }, []) // passing an empty array of dependencies will prevent useEffect from running on every render. We only want to check for blobURLs when the component mounts for the first time aftet the user has refreshed the browser, so on first load this function clears any blobURL content.

    useEffect(() => {
        if (isBlobURL(url)) { // this if statement checks if the url is a blob url. If ture it will run the function
            setBlobURL(url); // so now stored in our 'state' we have a reference to the blob url even after it has left the DOM.
        } else { // once the state changes and the url is no longer a blob url but is an actual url we need to revoke the blob url to prevent a memory leak.
            revokeBlobURL(blobURL); // blobURL is the one we have store in the 'state'. See previous lines -> const [blobURL, setBlobURL] = useState();
            setBlobURL(undefined); // this clears url we stored out of the current 'state'
        }
    }, [url]) // this useEffect will run every time our url attribute changes, e.g. between blob url to actual url.

    useEffect(() => {
        if (url && !prevURL) { // if url is true (as in theuser has selected a new image) and we do not have a previous URL then chabge the focus to the title text field
            titleRef.current.focus(); //useRef must have .current as a method
        }
    }, [url, prevURL])


    return (
        <>
            <InspectorControls>
                <PanelBody>
                    {id && //if id of an image is returning as true then this means it is uploaded ot he media library
                        <SelectControl
                            label={__('Image Size', 'team-merbers')}
                            options={getImageSizeOptions()}
                            value={url}
                            onChange={onChangeImageSize}
                        />
                    }
                    {url && !isBlobURL(url) && ( //if url of the image is true and it is not a blobURL then display the Alt Text box
                        <TextareaControl
                            label={__('Alt Text', 'team-merbers')}
                            value={alt}
                            onChange={onChangeAlt}
                            help={__(
                                "Alternative text describes your image to people can't see it. Add a short description with its key details.",
                                'team-members'
                            )}
                        />
                    )}
                </PanelBody>
            </InspectorControls>
            {url && ( // if there is an image (if url is true) display the block controls else don't
                <BlockControls group="inline">
                    <MediaReplaceFlow
                        name={__("Replace Image", "team-members")}
                        onSelect={onSelectImage} // this handles both upload and insert from media library
                        onSelectURL={onSelectURL}
                        onError={onUploadError}
                        accept="image/*"
                        allowedTypes={['image']}
                        mediaId={id} // these 2 lines will ensure the current image is selected when the media library is opened
                        mediaURL={url}
                    />
                    <ToolbarButton onClick={removeImage}>
                        {__("Remove Image", "team-members")}
                    </ToolbarButton>
                </BlockControls>
            )}
            <div {...useBlockProps()}>
                {url && (
                    <div className={`wp-block-blocks-course-team-member-img${isBlobURL(url) ? ' is-loading' : ''}`} // note the space, it will add it as a separate class instead of appending it.
                    >
                        <img src={url} alt={alt} />
                        {isBlobURL(url) && <Spinner />}
                    </div>
                )}
                <MediaPlaceholder
                    icon="admin-users"
                    onSelect={onSelectImage} // this handles both upload and insert from media library
                    onSelectURL={onSelectURL}
                    onError={onUploadError}
                    accept="image/*"
                    allowedTypes={['image']}
                    disableMediaButtons={url}
                    notices={noticeUI} // this is the prop to display the error message using withNotices Higher Order Component
                />
                <RichText
                    ref={titleRef}
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
                <div className='wp-block-blocks-course-team-member-social-links'>
                    <ul>
                        {socialLinks.map((item, index) => { // this map function loops over the sociaLinks array from the inex.js file of the nested block. The item is the current value being passed in. It then uses the item component to display the icon mapped from the loop.  
                            return (
                                <li key={index}>
                                    <Icon icon={item.icon} />
                                </li>
                            );
                        })}
                        {isSelected &&
                            <li className='wp-block-blocks-course-team-member-social-add-icon-li'>
                                <Tooltip
                                    text={__('Add Social Link',
                                        'team-members')}
                                >
                                    <button
                                        aria-label={__(
                                            'Add Social Link',
                                            'team-members'
                                        )}
                                    >
                                        <Icon icon="plus" />
                                    </button>
                                </Tooltip>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default withNotices(Edit);