  <template>
    <f7-block>
      <f7-row> 

        <f7-col width='100%'>
          <del v-show="item.checked">
          {{item.title}}
          </del>
          <div v-show="!item.checked">
          {{item.title}}
          </div>
          </f7-col>
      </f7-row>
      <f7-row > 
        <f7-col width='33%'>
           <f7-icon f7="calendar" color="blue" size="20px" v-show="item.date"></f7-icon> 
        {{item.date}}
        </f7-col>
        <f7-col width='33%'>
          <f7-icon f7="chat" color="blue" size="20px" v-show="item.comment"></f7-icon> 
          </f7-col>
        <f7-col width='33%'>
          <f7-icon f7="document_text_fill" color="blue" size="20px" v-show="item.file"></f7-icon> 
        </f7-col>
      </f7-row>
    </f7-block>
  </template>
  <script>
export default {
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {};
  }
};
</script>

  
