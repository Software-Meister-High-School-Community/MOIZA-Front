import React from 'react'
import { useQuery } from '../../util/hooks/useQuery'

const useResult = () => {
    const title = useQuery()
    return {
        title
    }
}

export default useResult