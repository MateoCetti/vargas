export function getImageId(imageURL: string){
    try {
        const url = new URL(imageURL);
        const imageID = url.pathname.split("/")[3]
        console.log(imageID)
        return imageID;
    } catch (error) {
        console.log(error)
    }
}