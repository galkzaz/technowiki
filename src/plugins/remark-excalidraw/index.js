export default function remarkExcalidraw() {
    return (tree) => {
        visit(tree, (node, index, parent) => {
            if (
                node.type !== 'code' ||
                node.lang !== 'excalidraw' ||
                !parent ||
                index === undefined
            ) {
                return;
            }

            parent.children[index] = {
                type: 'mdxJsxFlowElement',
                name: 'ExcalidrawDiagram',
                attributes: [
                    {
                        type: 'mdxJsxAttribute',
                        name: 'code',
                        value: node.value,
                    },
                ],
                children: [],
            };
        });
    };
}

import { visit } from 'unist-util-visit';