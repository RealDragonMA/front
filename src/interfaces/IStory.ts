import type IResponse from "./IResponse";

export default interface IStory {
    _id: string,
    title: string,
    description: string,
    page: string,
    choice: number,
    responses: IResponse[],
    components: any[]
}