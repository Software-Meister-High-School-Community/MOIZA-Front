import React, { useState, useEffect } from 'react'

const useResult = () => {
    const [selectedRadio, setSelectedRadio] = useState<string>("1");
    const [departmentOption, setdepartmentOption] = useState("모든분야");
    const [sortOption, setSortOption] = useState("최신 순");
    useEffect(() => {
        // api 통신P
    }, [selectedRadio, departmentOption, sortOption])
    const radios = [
        { id: "1", summary: "전체" },
        { id: "2", summary: "질문" },
        { id: "3", summary: "일반" },
    ];
    return {
        selectedRadio,
        setSelectedRadio,
        departmentOption,
        setdepartmentOption,
        sortOption,
        setSortOption,
        radios,
    }
}

export default useResult