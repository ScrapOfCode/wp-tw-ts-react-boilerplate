import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface BlockAttributes {
    content: string
}

registerBlockType<BlockAttributes>(metadataConfig.name, {
    title: metadataConfig.title,
    category: metadataConfig.category,
    style: metadataConfig.style,
    attributes: {
        content: {
            type: "string",
            default: "Ayo this is my content"
        },
    },
    edit: ({ attributes, setAttributes,  }) => {
        const props = useBlockProps();
        const classNames = props["className"]
        .split(' ')
        .filter((cls) => !cls.startsWith('wp'))
        .join(' ');

        return (
        <div className='scrappy-card'>
           <RichText
                className={`${classNames}`}
                tagName="h2"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Content"
            />
        </div>
        );
    },

    save: ({ attributes, className }) => {
        const props = useBlockProps.save();
        const propValues = Object.entries(props)[0][1] as string;
        const filterClassNames = propValues
        .split(' ')
        .filter((cls) => !cls.startsWith('wp'))
        .join(' ');

        return <h1 className={`
            text-!3xl md:!text-5xl lg:!text-6xl
            text-fruit-salad-100 font-medium
            text-start md:text-center max-w-[24ch]
            ${filterClassNames}`}>{attributes.content}</h1>
    },
});