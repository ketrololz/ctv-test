import type { JSONContent } from '@tiptap/core'

export interface Post {
  id: number;
  title: string;
  datetime: string;
  short_description: string;
  description_html?: string;
  description_json?: JSONContent | null;
}
