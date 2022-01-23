import { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    
}

