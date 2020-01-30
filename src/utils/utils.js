import React from 'react'

export function filhoComProps(props) {
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, { ...props })
    })
}