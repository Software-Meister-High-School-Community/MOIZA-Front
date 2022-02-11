import { title } from 'process';
import React,{useState,createRef} from 'react'
import { SearchRecord } from '../../interface/search/Search.type';
const useSearch = () => {
  const searchEl = createRef<HTMLInputElement>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [visible, setVisble] = useState<boolean>(false);
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [searchRecords, setSearchRecords] = useState<SearchRecord[]>([]);
    
        const handleDelteSearchRecord = (searchRecordId:number) =>{
          const seacrhRecords = searchRecords.filter(item =>{
              if (item.id !== searchRecordId) 
              return item
          })
          setSearchRecords(seacrhRecords)
        }

        const handleAddSearchRecord = (title:string) =>{
          const newSearchRecords = [{id:Date.now(),title:title},...searchRecords];
          setSearchRecords(newSearchRecords);
        }

        const handleResetSearchRecords = ()=>{
          setSearchRecords([])
        }
    
      return{
        handleAddSearchRecord,
        handleDelteSearchRecord,
        handleResetSearchRecords,
        setSearchRecords,
        searchRecords,
        setDisabled,
        disabled,
        setCurrentSearch,
        currentSearch,
        setVisble,
        visible,
        searchEl,
      }
}

export default useSearch