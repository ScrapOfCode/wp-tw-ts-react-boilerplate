import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface NavigationItemBlockAttributes {
    content: string
};

registerBlockType<NavigationItemBlockAttributes>(metadataConfig.name, {
    title: metadataConfig.title,
    description: metadataConfig.description,
    category: metadataConfig.category,
    style: "scrappy-global-style",
    editorScript: "file:./index.tsx",
    editorStyle: "scrappy-global-style",
    supports: {
        className: true
    },
    attributes: {
        content: {
            type: "string",
            default: ""
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        return (
            <li className='text-fruit-salad-200'>
                <RichText
                        tagName="h2"
                        value={attributes.content}
                        onChange={(content) => setAttributes({ content })}
                        placeholder="Brand"
                        allowedFormats={[]}
                />
            </li>
        )
    },
    save: ({ attributes, className }) => {
        return (
            <li className="text-fruit-salad-200">{attributes.content}</li>
        )
}});