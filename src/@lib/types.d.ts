import { AttributeSource, Block, BlockSupports } from '@wordpress/blocks';
import z from 'zod';

type BlockExampleInnerBlock =
    & Partial<Block>
    & Pick<Block, "name" | "attributes">
    & {
        innerBlocks?: readonly BlockExampleInnerBlock[];
};

const blockDataResponseSchema = z.object({
    $schema: z.string(),
    apiVersion: z.number(),
    name: z.string(),
    version: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    icon: z.string().optional(),
    example: z.custom<Array<BlockExampleInnerBlock>>,
    supports: z.custom<BlockSupports>(),
    textdomain: z.string(),
    editorStyle: z.string(),
    editorScript: z.string(),
    style: z.string()
});

const blockConfigSchema = z.object({
    blocks: z.record(z.string(), blockDataResponseSchema)
});

export type BlockDataResponse = z.infer<typeof blockDataResponseSchema>;
export type BlockConfig = z.infer<typeof blockConfigSchema>;