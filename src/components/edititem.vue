<template>
  <f7-card>
  <f7-card-header>  
    <f7-row no-gap>   
     <input type="text" placeholder="Write title" v-model="cacheItem.title"/>
    </f7-row>
</f7-card-header>
  <f7-card-content>
       <f7-row no-gap> 
         <f7-col>
           <f7-icon f7="calendar" color="blue" size="20px"></f7-icon> 
        Deadline
        </f7-col>
      </f7-row>
    <f7-row no-gap> 
          <input type="date" placeholder="Please choose..." v-model="cacheItem.date"/>
      </f7-row>
      <f7-row no-gap> 
          <input type="time" placeholder="Please choose..." v-model="cacheItem.time"/>
      </f7-row>
        <f7-row no-gap> 
         <f7-col>
        <f7-icon f7="document_text_fill" color="blue" size="20px"></f7-icon> File
         </f7-col>
      </f7-row>
      <f7-row no-gap> 
          <input type="file" placeholder="Please choose..." />
      </f7-row>
       <f7-row no-gap> 
                  <f7-col>
                 <f7-icon f7="chat" color="blue" size="20px"></f7-icon>
          Commend
                  </f7-col>
      </f7-row>
       <f7-row no-gap> 
          <div class="item-input-wrap">
    <textarea v-model="cacheItem.comment"></textarea>
  </div>
      </f7-row>
  </f7-card-content>
  <f7-card-footer><f7-button fill @click="onCancel">Cancel</f7-button><f7-button @click="onSave" fill>Save</f7-button></f7-card-footer>
</f7-card>
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
    return {
      cacheItem: {}
    };
  },
  methods: {
    onCancel: function() {
      const vm = this;
      const item = {
        ...vm.cacheItem
      };
      // item.isEdit = false;
      this.$emit("notEdit", item);
      this.cacheItem = {};
    },
    onSave: function() {
      const vm = this;
      const item = {
        ...vm.cacheItem
      };
      this.$emit("saveItem", item);
      this.cacheItem = {};
    }
  },
  watch: {
    item: {
      handler(val) {
        console.log("watch");
        // 如果為舊有資料則使用解構傳至 cacheTodo 避免物件參考特性
        this.cacheItem = { ...this.item };
      },
      deep: true
    }
  }
};
</script>
