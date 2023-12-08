export interface IStory {
    _id: string,
    page: string,
    title: string,
    description: string,
    responses: {
        icon: string | undefined,
        title: string
    }[]
    choice: number,
    components: any[],
}