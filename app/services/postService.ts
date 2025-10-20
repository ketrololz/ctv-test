import { ALIAS } from '~/constants/alias';
import type { Post } from '~/types/post.types';

export class PostService {
  constructor(private alias: string) {}

  async createPost(post: Omit<Post, 'datetime'>) {
    const date = new Date();

    const body: Post = {
      title: post.title,
      datetime: date.toISOString(),
      short_description: post.short_description,
      description_html: post.description_html,
      description_json: post.description_json,
    };

    const url = `/api/test/materials/${this.alias}/save`;

    try {
      const data = await $fetch(url, {
        method: 'POST',
        body,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async getPosts() {
    const url = `/api/test/materials/${this.alias}`;

    try {
      const data = await $fetch(url);
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  async getPostById(id: number) {
    const url = `/api/test/materials/${this.alias}/${id}`;

    try {
      const data = await $fetch(url);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export const postService = new PostService(ALIAS);
