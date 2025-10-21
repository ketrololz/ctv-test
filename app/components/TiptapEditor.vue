<script setup>
const { editor } = useTiptap();
</script>
<template>
  <div>
    <div v-if="editor" class="flex gap-2 flex-wrap mb-10">
      <TiptapButton
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'text-primary-500': editor.isActive('bold') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        bold
      </TiptapButton>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'text-primary-500': editor.isActive('italic') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'text-primary-500': editor.isActive('strike') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        strike
      </button>
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'text-primary-500': editor.isActive('code') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        code
      </button>
      <button
        @click="editor.chain().focus().unsetAllMarks().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        clear marks
      </button>
      <button
        @click="editor.chain().focus().clearNodes().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        clear nodes
      </button>
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'text-primary-500': editor.isActive('paragraph') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        paragraph
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 1 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 2 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 3 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 4 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 5 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{
          'text-primary-500': editor.isActive('heading', { level: 6 }),
        }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        h6
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'text-primary-500': editor.isActive('bulletList') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        bullet list
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'text-primary-500': editor.isActive('orderedList') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        ordered list
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'text-primary-500': editor.isActive('codeBlock') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        code block
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'text-primary-500': editor.isActive('blockquote') }"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        blockquote
      </button>
      <button
        @click="editor.chain().focus().setHorizontalRule().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        horizontal rule
      </button>
      <button
        @click="editor.chain().focus().setHardBreak().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        hard break
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        undo
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        class="bg-primary-300 px-5 py-2 rounded-lg cursor-pointer"
      >
        redo
      </button>
    </div>

    <TiptapEditorContent :editor="editor" class="editor-content tiptap" />
  </div>
</template>

<style>
:deep(.tiptap [contenteditable]:focus) {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.editor-content ul {
  @apply list-disc ml-6 mb-2;
}

.editor-content ol {
  @apply list-decimal ml-6 mb-2;
}

.editor-content blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-2;
}

.editor-content h1 {
  @apply text-3xl font-bold mt-6 mb-4;
}

.editor-content h2 {
  @apply text-2xl font-semibold mt-5 mb-3;
}

.editor-content h3 {
  @apply text-xl font-semibold mt-4 mb-2;
}

.editor-content h4 {
  @apply text-lg font-medium mt-3 mb-2;
}

.editor-content h5 {
  @apply text-base font-medium mt-2 mb-1;
}

.editor-content h6 {
  @apply text-sm font-medium mt-1 mb-1;
}
</style>
