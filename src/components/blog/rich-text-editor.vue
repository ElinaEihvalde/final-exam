<template>
<v-container fluid mt-5 pl-0>
    <v-layout justify-start>
        <v-flex sm8 xs12>
            <v-form @submit.prevent="onCreatePost" v-model="valid">
                <v-layout>

                    <v-flex>
                        <v-layout>
                            <v-flex xs4>
                                <img :src="coverImg">
                            </v-flex>
                        </v-layout>
                        <v-text-field v-model="coverImg" placeholder="Upload image" name="coverImg" id="coverImg" color="#ffa000" required>
                        </v-text-field>
                        <v-text-field v-model="title" counter="80" placeholder="Blog title" name="title" id="title" color="#ffa000" required>
                        </v-text-field>
                        <v-textarea v-model="description" counter="200" placeholder="Short description" name="description" id="description" color="#ffa000" rows="2" auto-grow required>
                        </v-textarea>
                    </v-flex>

                </v-layout>

                <v-layout class="editor" justify-center>

                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive, getMarkAttrs, menu }">
                        <v-layout row>
                            <v-flex class="menubar">

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                                    <v-icon>format_bold</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                                    <v-icon>format_italic</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                                    <v-icon>format_underline</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
                                    <v-icon>short_text</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">
                                    <v-icon>title</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 })}" @click="commands.heading({ level: 2 })">
                                    <v-icon>text_fields</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                                    <v-icon>format_list_bulleted</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                                    <v-icon>format_list_numbered</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                                    <v-icon>format_quote</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" @click="showImagePrompt(commands.image)">
                                    <v-icon>photo</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" @click="commands.undo">
                                    <v-icon>undo</v-icon>
                                </v-btn>

                                <v-btn small icon class="menubar__button" @click="commands.redo">
                                    <v-icon>redo</v-icon>
                                </v-btn>

                            </v-flex>
                        </v-layout>

                    </editor-menu-bar>

                </v-layout>

                <v-layout>
                    <v-flex  v-model="content" name="content" id="content">
                        
                        <editor-content required class="editor__content" :editor="editor" />
                      
                    </v-flex>
                 
                </v-layout>

                <v-layout pt-3>

                    <v-flex>
                        <v-btn type="submit" color="#ffa000" :disabled="!isValid">
                            Create new post
                        </v-btn>
                    </v-flex>
                </v-layout>

            </v-form>
        </v-flex>

    </v-layout>
</v-container>
</template>

<script>
import {
    Editor,
    EditorContent,
    EditorMenuBar
} from 'tiptap'
import {
    Blockquote,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    Bold,
    Italic,
    Link,
    Image,
    Underline,
    History,
} from 'tiptap-extensions'
export default {
    components: {
        EditorContent,
        EditorMenuBar,

    },
    data() {
        
        return {
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new Heading({
                        levels: [1, 2, 3]
                    }),
                    new ListItem(),
                    new OrderedList(),
                    new Link(),
                    new Image(),
                    new Bold(),
                    new Italic(),
                    new Underline(),
                    new History(),
                ],
                content: '',
                onUpdate: ({
                    getHTML
                }) => {
                    this.html = getHTML()
                
                },

            }),
             valid: false,
            coverImg: '',
            title: '',
            description: '',
            html: '',
            date: new Date()
        }
    },

    computed: {
        isValid() {
            return this.title !== "" && this.description !== "" && this.content !== "" && this.coverImg !== "" && this.description.length <= 200 && this.title.length <= 80;
        }
    },

    methods: {

        onCreatePost() {
            console.log({
                title: this.title,
                description: this.description,
                coverImg: this.coverImg,
                date: this.date,
                content: this.content
            })
            const postData = {
                title: this.title,
                description: this.description,
                coverImg: this.coverImg,
                content: this.html,
                date: this.date
            }
            this.$store.dispatch("createPost", postData)
            this.$router.push("/blog")

        },
        showImagePrompt(command) {
            const src = prompt('Enter the url of your image here')
            if (src !== null) {
                command({
                    src
                })
            }
        }
    }

}
</script>

<style>
.v-btn--icon:hover {
    color: orange;
}

.ProseMirror {
    border: 1px solid black;
    height: 50vh;
    overflow: hidden;
    overflow-y: scroll;
}
</style>
