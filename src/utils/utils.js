import React from 'react';

export function forEachChild(children, handler, parent) {
    React.Children.forEach(children, (child) => {
        handler(child, parent);

        if (child.props && child.props.children) {
            forEachChild(child.props.children, handler, child);
        }
    });
}

export function deepForEachChild(node, handler) {
    handler(node);
    if (node.props.children) {
        forEachChild(node.props.children, handler, node);
    }
}
