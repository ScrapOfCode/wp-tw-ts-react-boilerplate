import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface BlockAttributes {
    content: string
}

const stripTags = (input: string) => {
    return input.replace(/<\/?(em|strong|i|b|span|u)[^>]*>/g, '');
};
  

registerBlockType<BlockAttributes>(metadataConfig.name, {
    title: metadataConfig.title,
    category: metadataConfig.category,
    "style": metadataConfig.style,
    attributes: {
        content: {
            type: "string",
            default: "Ayo this is my content"
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const props = useBlockProps();
        const classNames = props["className"]
        .split(' ')
        .filter((cls) => !cls.startsWith('wp'))
        .join(' ');

        return (
        <div className="scrappy-global-style">
            <RichText
                tagName="h2"
                className={classNames}
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Content"
                allowedFormats={[]}
            />
        </div>
        );
    },

    save: ({ attributes }) => {
        const props = useBlockProps.save();
        const propValues = Object.entries(props)[0][1] as string;
        const filterClassNames = propValues
        .split(' ')
        .filter((cls) => !cls.startsWith('wp'))
        .join(' ');
        return (
            <p className={`
                text-neutral-400 
                !text-base md:!text-lg text-start md:text-center
                max-w-[56ch]
                ${filterClassNames}
            `}>{stripTags(attributes.content)}</p>
        );
    },
});