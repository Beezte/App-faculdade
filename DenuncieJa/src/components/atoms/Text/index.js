import React from 'react';
import {TextStyle} from './style'

export const CustomText = ({ children, color }) => {
    return (
        <TextStyle color={color}>
            {children}
        </TextStyle>
    )
}