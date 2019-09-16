<template>
    <div class="ueditors">
        <vue-ueditor-wrap v-model="content" :destroy="destroy" :config="config" :height="height" :width="width"></vue-ueditor-wrap>
    </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
import uploadUrl from '@/libs/uploadUrl'

export default {
  name: 'ueditor',
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      content: ''
    }
  },
  props: {
    destroy: {
      type: Boolean,
      default: true
    },
    ename: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 345
    },
    width: {
      type: [String, Number],
      default: 812
    },
    config: {
      type: Object,
      default: () => {
        return {
          // 编辑器不自动被内容撑高
          autoHeightEnabled: false,
          // 初始容器高度
          initialFrameHeight: 345,
          // 初始容器宽度
          initialFrameWidth: 812,
          // 定制功能
          toolbars: [
            [
              'fullscreen', 'source', '|',
              'undo', 'redo', '|',
              'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'pasteplain', '|',
              'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
              'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
              'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
              'link', 'unlink', 'anchor', '|',
              'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
              'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
              'insertimage', 'emotion', 'attachment', 'map', 'insertcode', 'template', '|',
              'horizontal', 'spechars', 'preview', 'searchreplace', '|',
              'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts'
            ]
          ],
          serverUrl: uploadUrl,
          UEDITOR_HOME_URL: '/UEditor/'
        }
      }
    }
  },
  created () {
    if (parseInt(this.height) > 0) {
      this.config.initialFrameHeight = this.height
    }
    if (parseInt(this.width) > 0) {
      this.config.initialFrameWidth = this.width
    }
  },
  methods: {
    setHtml (html) {
      this.content = html
    },
    clearHtml () {
      this.content = ''
    }
  },
  watch: {
    content (html) {
      this.$emit('on-change', html, this.ename)
    }
  }
}
</script>

<style scoped>

</style>
