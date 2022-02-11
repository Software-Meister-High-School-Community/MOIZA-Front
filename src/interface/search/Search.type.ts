import { Dispatch } from 'react';
import { SetStateAction } from 'react';
export interface ISearchProps{
    visible: boolean;
    currentSearch:Dispatch<SetStateAction<string>>;
    searchRecords: SearchRecord[];
    onDelete:(SearchRecordId:number)=>void,
    onReset:()=>void,
}

export interface SearchRecord{
    id : number;
    title: string;
}
