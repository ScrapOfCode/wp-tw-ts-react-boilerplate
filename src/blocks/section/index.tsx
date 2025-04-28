import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import React from 'react';
import metadataConfig from "./block.json";
import "../../main.css";

interface CardBlockAttributes {
}

registerBlockType<CardBlockAttributes>(metadataConfig.name, {
  title: metadataConfig.title,
  category: metadataConfig.category,
  "style": metadataConfig.style,
  attributes: {},
  edit: ({ attributes, setAttributes }) => {
    return (
      <div className="scrappy-card">
        <InnerBlocks />
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div className="
      mx-auto gap-5
      flex flex-col items-start md:items-center max-w-7xl
      scrappy-card">
        <InnerBlocks.Content />
      </div>
    );
  },
});