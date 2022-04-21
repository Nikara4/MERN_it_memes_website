export interface PostInterface {
        id: string;
        author: string;
        title: string;
        tags: string[];
        selectedFile: string;
        likes: string[];
        dislikes: string[];
        createdAt: string;
};

export type PostTypeState = {
    posts: PostInterface[],
}