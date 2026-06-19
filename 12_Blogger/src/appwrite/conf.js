import config from "../config/config";
import { Client, Storage, ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client();
    storage;
    databases;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredimage, status, userId}){
        try {
            const post = await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title, content, featuredimage, status, userId})
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, {title, content, featuredimage, status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title, content, featuredimage, status})
        } catch (error) {
            throw (err)
        }
    }

    async deletePost(slug,){
        try {
            return await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return true
        } catch (error) {
            throw (err)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
        } catch (error) {
            throw (err)
        }
    }

    async getPosts(Queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, Queries)
        } catch (error) {
            throw (err)
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(config.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            throw (err)
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(config.appwriteBucketId, fileId)
        } catch (error) {
            throw (error)
        }
    }

    async filePreview(fileId){
        try {
            return await this.storage.getFilePreview(config.appwriteBucketId, fileId)
        } catch (error) {
            throw (err)
        }
    }
}


const service = new Service()
export default service