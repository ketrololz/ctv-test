import { useEditor } from '@tiptap/vue-3';
import TiptapStarterKit from '@tiptap/starter-kit';

let editorInstance: ReturnType<typeof useEditor> | null = null;

export function useTiptap() {
  if (!editorInstance) {
    editorInstance = useEditor({
      content: '<p>Введите текст...</p>',
      extensions: [TiptapStarterKit],
    });

    onBeforeUnmount(() => {
      editorInstance?.value?.destroy();
      editorInstance = null;
    });
  }

  function clear() {
    const editor = editorInstance?.value;
    if (!editor) return;
    editor.chain().setContent('Введите текст...').run();
  }
  return { editor: editorInstance, clear };
}
