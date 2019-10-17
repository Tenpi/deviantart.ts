import api from "../api/api"
import {DeviantArtDeviation, DeviationContent, DeviationDownload, DeviationEmbeddedContent, DeviationMetaData, DeviationWhoFaved} from "./../types/"

export class Deviation {
    private readonly api = new api(this.accessToken)
    constructor(private readonly accessToken: string) {}

    public get = async (deviationid: string, params?: {expand?: string}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/${deviationid}`, {params})
        return result as Promise<DeviantArtDeviation>
    }

    public metaData = async (deviationids: string[], params?: {ext_submission?: boolean, ext_camera?: boolean, ext_stats?: boolean, ext_collection?: boolean, mature_content?: boolean}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/metadata`, {deviationids, params})
        return result as Promise<DeviationMetaData>
    }

    public whoFaved = async (deviationid: string, params?: {offset?: number, limit?: number}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/whofaved`, {deviationid, params})
        return result as Promise<DeviationWhoFaved>
    }

    public content = async (deviationid: string, params?: {mature_content?: boolean}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/content`, {deviationid, params})
        return result as Promise<DeviationContent>
    }

    public download = async (deviationid: string, params?: {mature_content?: boolean}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/download/${deviationid}`, {params})
        return result as Promise<DeviationDownload>
    }

    public embeddedContent = async (deviationid: string, params?: {deviationid?: string, offset?: number, limit?: number, mature_content?: boolean}) => {
        const result = await this.api.get(`api/v1/oauth2/deviation/embeddedcontent`, {deviationid, params})
        return result as Promise<DeviationEmbeddedContent>
    }

}