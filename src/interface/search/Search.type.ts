import { Dispatch } from 'react';
import { SetStateAction } from 'react';
export interface ISearchProps{
    visible: boolean;
    currentSearch:Dispatch<SetStateAction<string>>;
    searchRecords: SearchRecord[];
    onDelete:any,
    onReset:any,
}

export interface SearchRecord{
    id : number;
    title: string;
}
