import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface NavigationItemBlockAttributes {
    brand: string
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
        brand: {
            type: "string",
            default: ""
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        return (
            <div className="border-b border-neutral-900">
                <div className="mx-auto flex h-14 w-full max-w-6xl flex-row items-center justify-between gap-5 px-5">
                    <RichText
                        tagName="h1"
                        value={attributes.brand}
                        onChange={(brand) => setAttributes({ brand })}
                        placeholder="Brand"
                        allowedFormats={[]}
                    />
                    <InnerBlocks />
                </div>
            </div>
        )
    },
    save: ({ attributes, className }) => {
        return (
            <div className="border-b border-neutral-900">
                <div className="mx-auto flex h-14 w-full max-w-6xl flex-row items-center justify-between gap-5 px-5">
                    <h1 className="!text-3xl text-fruit-salad-200">{attributes.brand}</h1>
                    <InnerBlocks.Content />
                </div>
          </div>
    )
}});