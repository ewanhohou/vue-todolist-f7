<template>
    <f7-page>
      <f7-toolbar tabbar labels>
      <f7-link icon="icon-1" text="My Tasks" tab-link="#tab1"></f7-link>
      <f7-link icon="icon-2" text="In Proress" tab-link="#tab2"></f7-link>
      <f7-link icon="icon-2" text="Completeted" tab-link="#tab3"></f7-link>
    </f7-toolbar>
    <f7-block>
    <f7-button color="blue" fill @click="onEdit()" v-show="!isAdd">Add Task</f7-button>
    <edit-item  v-show="this.item.isEdit" :item="this.item" @notEdit="notEdit" @saveItem="saveItem"></edit-item>
      <f7-row no-gap> 
      <f7-col width="80%"></f7-col>
      <f7-col width="20%"><a class="link sortable-toggle" data-sortable=".sortable"><f7-icon f7="bars" color="blue" size="30px"></f7-icon> </a> </f7-col>
      </f7-row>
    <div class="list sortable accordion-list">
  <ul>
    <li class="accordion-item" v-for="item in items" :key="item.id" :data="item">
        <div class="item-content" :class="[item.star?'back_awhite':'']">
           <div class="item-media ">
             <label class="checkbox"><input type="checkbox" v-model="item.checked"><i class="icon-checkbox"></i></label> 
           </div>
          <div class="item-inner">
                  <todo-item :item="item"></todo-item>
                  <div class="item-after">
                    <div style="cursor:pointer" @click="onStar(item)">
                  <f7-icon f7="star" color="blue" size="25px" v-if="!item.star"></f7-icon>
                  <f7-icon f7="star_fill" color="blue" size="25px" v-if="item.star"></f7-icon>
                     </div>
                  <div style="width:10px"></div>
                  <div @click="onEdit(item)" style="cursor:pointer">
                   <f7-icon f7="compose" color="blue" size="25px"></f7-icon>
                  </div>
                  </div>
          </div>
        </div>
        <edit-item v-show="item.isEdit" @saveItem="saveItem" :item="item" @notEdit="notEdit"></edit-item>
       <div class="sortable-handler"></div>
    </li>
  </ul>
    </div>
    </f7-block>
    </f7-page>
</template>
<script>
import TodoItem from "../components/todoitem";
import EditItem from "../components/edititem";
export default {
  data: function() {
    return {
      sortable: true,
      isAdd: false,
      item: { isEdit: false },
      items: [
        {
          id: 1,
          title: "Learn JavaScript",
          checked: true,
          star: true,
          date: null,
          time: null,
          comment: "",
          file: null,
          isEdit: false
        },
        {
          id: 2,
          title: "Learn Vue",
          checked: false,
          star: false,
          date: null,
          time: null,
          comment: "HI",
          file: null,
          isEdit: false
        }
      ]
    };
  },
  components: {
    TodoItem,
    EditItem
  },
  methods: {
    onAddTask: function() {
      this.isAdd = !this.isAdd;
      this.item.isEdit = true;
    },
    notEdit: function(item) {
      if (!item.id) {
        this.isAdd = false;
        item.isEdit = false;
        this.item.isEdit = false;
      } else {
        item.isEdit = false;
        let editItem = this.items.find(i => i.id === item.id);
        editItem.isEdit = false;
      }
    },
    saveItem: function(item) {
      this.notEdit(item);
      if (!item.id) {
        //set id
        item.id = Math.max(...this.items.map(p => p.id)) + 1;
        this.items.push(item);
      } else {
        let editItem = this.items.find(i => i.id === item.id);
        Object.assign(editItem, item);
      }
    },
    onEdit: function(item) {
      if (!item) {
        this.isAdd = !this.isAdd;
        this.item.isEdit = true;
      } else {
        item.isEdit = !item.isEdit;
      }
    },
    onStar: function(item) {
      if (item.star) {
      } else {
      }
      item.star = !item.star;
    }
  }
};
</script>
<style>
.back_awhite {
  background-color: antiquewhite;
}
</style>

