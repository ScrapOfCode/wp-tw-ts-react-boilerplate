import * as fs from 'fs';
import * as path from 'path';

import { BlockConfig } from "./types";

const blocks: BlockConfig = {
    blocks: {
      card: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/card",
        apiVersion: 3,
        title: "Card block",
        description: "A scrappy card block.",
        category: "widgets",
        version: "0.0.1",
        icon: "fas fa-id-card",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style",
        attributes: {}
      },
      section: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/section",
        apiVersion: 3,
        title: "Section block",
        description: "A scrappy section block. Use it for proper alignment!",
        category: "widgets",
        version: "0.0.1",
        icon: "fas fa-square",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style",
        attributes: {}
      },
      title: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/title",
        apiVersion: 3,
        title: "Title",
        description: "A custom heading block with Tailwind support.",
        category: "text",
        version: "0.0.1",
        icon: "fas fa-heading",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style",
      },
      text: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/text",
        apiVersion: 3,
        title: "Text",
        description: "A custom paragraph block with Tailwind support.",
        category: "text",
        version: "0.0.1",
        icon: "fas fa-paragraph",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style"
      },
      navigation_item: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/navigationitem",
        apiVersion: 3,
        title: "Navigation Item",
        description: "A custom navigation item block with Tailwind support.",
        category: "design",
        version: "0.0.1",
        icon: "fas fa-link",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style"
      },
      navigation_container: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/navigationcontainer",
        apiVersion: 3,
        title: "Navigation Container",
        description: "A container for navigation items.",
        category: "design",
        version: "0.0.1",
        icon: "fas fa-bars",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style",
        attributes: {}
      },
      navigation_items_wrapper: {
        $schema: "https://schemas.wp.org/trunk/block.json",
        name: "scrappy/navigationitemwrapper",
        apiVersion: 3,
        title: "Navigation Item Wrapper",
        description: "A wrapper for navigation items.",
        category: "design",
        version: "0.0.1",
        icon: "fas fa-link",
        supports: {
          html: false,
          className: true
        },
        textdomain: "scrappy",
        editorScript: "file:./index.tsx",
        editorStyle: "scrappy-global-style",
        style: "scrappy-global-style",
        attributes: {}
      }
    }
};
  

export const beginBlockTranslate = () => {
    const blockValues = Object.entries(blocks.blocks);
    
    blockValues.forEach(([key, value]) => {
        const jsonString = JSON.stringify(value, null, 2);
        const blockPath = `src/blocks/${key}/`;
        const blockJsonPath = path.join(blockPath, 'block.json');

        try {
            if (!fs.existsSync(blockPath)) {
              fs.mkdirSync(blockPath, { recursive: true });
              console.log(`Created directory: ${blockPath}`);
            }
      
            if (!fs.existsSync(blockJsonPath)) {
              fs.writeFileSync(blockJsonPath, jsonString, 'utf-8');
              console.log(`Created block.json at ${blockJsonPath}`);
            } else {
              const currentData = fs.readFileSync(blockJsonPath, 'utf-8').trim();
      
              if (currentData.length === 0) {
                fs.writeFileSync(blockJsonPath, jsonString, 'utf-8');
                console.log(`Wrote to empty block.json at ${blockJsonPath}`);
              } else {
                fs.writeFileSync(blockJsonPath, jsonString, 'utf-8');
                console.log(`Updated existing block.json at ${blockJsonPath}`);
              }
            }
        } catch (error) {
            console.error(`Error processing block "${key}":`, error);
        }
    })
}