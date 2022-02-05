export const dateTransform = (date:string)=>{
    return date
    .replaceAll('-','/')
    .replace('T',"  ")
    .slice(2)
    .slice(0,-3)
}