import restAPI from "../configs/axios.config";
import type IStory from "../interfaces/IStory";
import type IError from "../interfaces/IError";

class Story {
    private controller: string = `/story`;

    public async getAll(): Promise<IStory[]> {
        return (await restAPI.get(`${this.controller}`)).data;
    }

    public async get(option: { storyId: string }): Promise<IStory> {
        return (await restAPI.get(`${this.controller}/${option.storyId}`)).data;
    }
}

export default new Story();
