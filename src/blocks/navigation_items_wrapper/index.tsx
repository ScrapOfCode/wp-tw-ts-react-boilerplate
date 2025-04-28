import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface NavigationItemBlockAttributes {
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
    },
    edit: ({ className, attributes, setAttributes }) => {
        return (
            <ul className="flex h-full flex-row items-center gap-5">
                <InnerBlocks />
            </ul>
        )
    },
    save: ({ attributes, className }) => {
        return (
            <ul className="flex h-full flex-row items-center gap-5">
                <InnerBlocks.Content />
            </ul>
    )
}});