<template>
    <div class="uploader"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover.prevent
        @drop="onDrop"
        :class="{dragging: isDragging}"
    >
        <div v-show="!images.length">
            <p>Drag your images here</p>
        </div>
        
        <div class="images-preview" v-show="images.length">
            <div class="img-wrapper" v-for="(image, index) in images" :key="index">
                <img :src="image" :alt="`Image Uploader ${index}`">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isDragging: false,
        dragCount: 0,
        files: [],
        images: []
    }),

    methods: {
        onDragEnter(event){
            event.preventDefault();

            this.dragCount++
            this.isDragging = true;
        },
        onDragLeave(event){
            event.preventDefault();
            this.dragCount--;
            if(this.dragCount <= 0)
                this.isDragging = false
        },
        onDrop(event){
            event.preventDefault();
            event.stopPropagation();

            this.isDragging = false;

            const files = event.dataTransfer.files;
            
            Array.from(files).forEach(file => this.addImage(file))
        },
        addImage(file){
            if(!file.type.match('image.*')){
                console.log(`${file.name} is not an image`);
                return;
            }
            this.files.push(file);
            if(this.files.length > 1) {
                console.log("you must be input one picture in this mockup");
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => this.images.push(event.target.result);
            reader.readAsDataURL(file)
        },
        onInputChange(event) {
            console.log(event)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .uploader
        &.dragging
            background: #ffffff
            color: #2196f3
            border: 3px dashed #2196f3
</style>