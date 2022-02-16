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
    const departmentOptions = [
        { option: "모든 분야" },
        { option: "Front-End" },
        { option: "Back-End" },
        { option: "IOS" },
        { option: "Android" },
        { option: "Design" },
        { option: "Game" },
        { option: "Security" },
        { option: "Embedded" },
        { option: "AI" },
    ];
    const sortOptions = [
        { option: "최신 순" },
        { option: "오래된 순" },
        { option: "조회수 순" },
        { option: "좋아요 순" },
    ];
    return {
        selectedRadio,
        setSelectedRadio,
        departmentOption,
        setdepartmentOption,
        sortOption,
        setSortOption,
        radios,
        departmentOptions,
        sortOptions
    }
}

export default useResult