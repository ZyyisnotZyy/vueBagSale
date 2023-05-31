<template>
  <div>
    <!-- 导航栏 -->
    <BagHeader></BagHeader>
    <div class="control">
      <!-- 左侧控制台 -->
      <div class="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#112f50"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item>
            <span slot="title">箱包销售系统</span>
          </el-menu-item>
          <el-menu-item-group>
            <el-menu-item index="/">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/cart">
              <i class="el-icon-shopping-cart-2"></i>
              <span slot="title">购物车</span>
            </el-menu-item>
            <el-menu-item index="/goodsList">
              <i class="el-icon-truck"></i>
              <span slot="title">商品</span>
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>操作</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="" @click="refresh">
                <i class="el-icon-refresh"></i>
                <span slot="title">刷新</span>
              </el-menu-item>
              <el-menu-item index="" @click="add">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">添加</span>
              </el-menu-item>
              <el-menu-item index="" @click="search">
                <i class="el-icon-search"></i>
                <span slot="title">查询</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 右侧购物车数据展示 -->
      <div class="right">
        <!-- 把数据以表格的形式展示 -->
        <el-table :data="cartList" border style="width: 100%">
          <el-table-column prop="id" label="序号" width="80"> </el-table-column>
          <el-table-column prop="Name" label="名称" width="200">
          </el-table-column>
          <el-table-column prop="Price" label="单价/件" width="100">
          </el-table-column>
          <el-table-column prop="Address" label="配送地址" width="240">
          </el-table-column>
          <el-table-column prop="Time" label="配送时间" width="120">
          </el-table-column>
          <el-table-column prop="Type" label="尺寸" width="200">
          </el-table-column>
          <el-table-column prop="Num" label="数量" width="120">
          </el-table-column>
          <el-table-column prop="Total" label="总价/元" width="100">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="update(scope.row)" type="text" size="medium">
                修改
              </el-button>
              <el-button @click="del(scope.row)" type="text" size="medium">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 修改---展示数据 -->
    <el-dialog
      :title="`${form.id}号商品信息`"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      top="10vh"
    >
      <el-form :model="form">
        <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单价/件" :label-width="formLabelWidth">
          <el-input v-model="form.Price" autocomplete="off" type="number">
          </el-input>
        </el-form-item>
        <el-form-item label="配送地址" :label-width="formLabelWidth">
          <el-input v-model="form.Address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配送时间" :label-width="formLabelWidth">
          <el-input v-model="form.Time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="尺寸" :label-width="formLabelWidth">
          <el-input v-model="form.Type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input
            v-model="form.Num"
            autocomplete="off"
            type="number"
            :min="1"
            :max="10"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="总价" :label-width="formLabelWidth">
          <el-input
            v-model="form.Total"
            autocomplete="off"
            type="number"
            :disabled="true"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateOk"> 修 改 </el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 添加---商品数据 -->
    <el-dialog
      title="添加商品信息"
      :visible.sync="dialogFormVisible_Add"
      :close-on-click-modal="false"
      top="10vh"
    >
      <el-form :model="form">
        <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" :disabled="true">
          </el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单价/件" :label-width="formLabelWidth">
          <el-input v-model="form.Price" autocomplete="off" type="number">
          </el-input>
        </el-form-item>
        <el-form-item label="配送地址" :label-width="formLabelWidth">
          <el-select
            v-model="selectAddress"
            allow-create
            filterable
            default-first-option
            placeholder="请选择/填写配送地址"
            :clearable="true"
          >
            <el-option
              label="河南省新乡市红旗区新乡学院"
              value="河南省新乡市红旗区新乡学院"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配送时间" :label-width="formLabelWidth">
          <el-input v-model="form.Time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="尺寸" :label-width="formLabelWidth">
          <el-input v-model="form.Type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数量" :label-width="formLabelWidth">
          <el-input
            v-model="form.Num"
            autocomplete="off"
            type="number"
            :min="1"
            :max="10"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="图片链接" :label-width="formLabelWidth">
          <el-input v-model="form.imgUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="总价" :label-width="formLabelWidth">
          <el-input
            v-model="form.Total"
            autocomplete="off"
            type="number"
            :disabled="true"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addOk"> 添 加 </el-button>
        <el-button @click="dialogFormVisible_Add = false">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 查询---商品数据 -->
    <el-dialog
      title="查询商品信息"
      :visible.sync="dialogFormVisible_Search"
      :close-on-click-modal="false"
      top="15vh"
    >
      <el-form :model="form">
        <el-form-item label="商品的序号" :label-width="formLabelWidth">
          <el-input
            v-model="form.searchId"
            autocomplete="off"
            type="number"
            :min="0"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="searchOk"> 查 询 </el-button>
        <el-button @click="dialogFormVisible_Search = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import BagHeader from "../../components/Bag-Header.vue";
export default {
  components: {
    BagHeader,
  },
  data() {
    return {
      cartList: [],
      dialogFormVisible: false,
      dialogFormVisible_Add: false,
      dialogFormVisible_Search: false,
      form: {
        id: 0,
        Name: "",
        Price: 0,
        Address: "",
        Time: "",
        Type: "",
        Num: 0,
        imgUrl: "",
        Total: 0,
        newTotal: 0,
        searchId: "",
      },
      formLabelWidth: "120px",
      selectAddress: "",
    };
  },
  mounted() {
    // 页面挂在完毕 获取购物车中的数据
    this.getAllCart();
  },
  methods: {
    // 刷新数据
    refresh() {
      this.getAllCart();
      this.$notify.success({
        title: "成功",
        message: "商品刷新成功",
        showClose: false,
        duration: 3000,
        offset: 300,
      });
    },
    // 拿到购物车数据
    getAllCart() {
      axios
        .get("http://localhost:3000/cart/all")
        .then(({ data }) => {
          this.cartList = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 拿到购物车数量
    getCartNum() {
      axios
        .get("http://localhost:3000/cart/many")
        .then(({ data }) => {
          // 当切换到其它页面后 ==> 读取到 store 中 购物车的数量 ==> 放置数量丢失
          // 现在需要从数据库中获取当前的值
          // 把商品数量发送到 store
          this.$store.commit("cart/getGoodsNum", data[0].many);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除商品
    del(row) {
      // 拿到删除的 id ==> 删除商品
      const delId = row.id;
      axios
        .get("http://localhost:3000/cart/del", {
          params: {
            id: delId,
          },
        })
        .then((res) => {
          // 删除成功
          this.$notify.success({
            title: "成功",
            message: "该商品已从购物车删除",
            showClose: false,
            duration: 3000,
            offset: 300,
          });

          // 删除成功调用一次
          this.getAllCart();
          // 每删除一次 购物车数量都要 -1
          this.$store.state.cart.cartGoodsNum--;
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
    // 添加商品
    add() {
      // 打开对话框
      this.dialogFormVisible_Add = true;
      // 拿到数据 --> 首先商品的序号要 +1
      // 直接根据 拿到数据的最后一位 id +1
      this.form.id = this.cartList.length;
    },
    // 确认添加
    addOk() {
      // 拿到添加的数据
      axios
        .get("http://localhost:3000/cart/add", {
          params: {
            id: this.form.id,
            Name: this.form.Name,
            Price: this.form.Price,
            Address: this.selectAddress,
            Time: this.form.Time,
            Type: this.form.Type,
            Num: this.form.Num,
            imgUrl: this.form.imgUrl,
            Total: this.form.newTotal,
          },
        })
        .then((res) => {
          // 添加成功
          this.$notify.success({
            title: "成功",
            message: "该商品添加成功",
            showClose: false,
            duration: 3000,
            offset: 300,
          });
          // 添加成功后 关闭对话框
          this.dialogFormVisible_Add = false;
          // 重新渲染数据
          this.getAllCart();
          // 重新渲染数据还要拿到购物车的数量
          this.getCartNum();
        })
        .catch((err) => {
          // 添加失败
          this.$notify.error({
            title: "失败",
            message: "该商品添加失败",
            showClose: false,
            duration: 3000,
            offset: 300,
          });
          console.log("添加失败", err);
        });
    },
    // 查询商品
    search() {
      // 弹出对话框
      this.dialogFormVisible_Search = true;
    },
    searchOk() {
      // 确认查询
      // 拿到查询的 SearchId
      const SearchId = this.form.searchId;
      // 发送 axios 查询请求
      axios
        .get("http://localhost:3000/cart/get", {
          params: {
            id: SearchId,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            // 查询失败
            this.$notify.error({
              title: "查询失败",
              message: "无该商品数据",
              showClose: false,
              duration: 3000,
              offset: 300,
            });
          } else {
            // 查询成功
            this.$notify.success({
              title: "成功",
              message: "商品查询成功",
              showClose: false,
              duration: 3000,
              offset: 300,
            });
            // 查询成功后 关闭对话框
            this.dialogFormVisible_Search = false;
            // 重新渲染数据
            // 把查询的数据 ==> 交给 cartList 重新 渲染
            this.cartList = res.data;
          }
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },
    // 修改商品
    update(row) {
      // 弹出对话框
      this.dialogFormVisible = true;
      console.log(row);
      // 拿到当前数据
      (this.form.id = row.id),
        (this.form.Name = row.Name),
        (this.form.Price = row.Price),
        (this.form.Address = row.Address),
        (this.form.Time = row.Time),
        (this.form.Type = row.Type),
        (this.form.Num = row.Num),
        (this.form.Total = this.newTotal);
    },
    // 确认修改
    updateOk() {
      axios
        .get("http://localhost:3000/cart/update", {
          params: {
            id: this.form.id,
            Name: this.form.Name,
            Price: this.form.Price,
            Address: this.form.Address,
            Time: this.form.Time,
            Type: this.form.Type,
            Num: this.form.Num,
            Total: this.form.newTotal,
          },
        })
        .then((res) => {
          // 修改成功
          this.$notify.success({
            title: "成功",
            message: "该商品修改成功",
            showClose: false,
            duration: 3000,
            offset: 300,
          });
          // 修改成功后 关闭对话框
          this.dialogFormVisible = false;
          // 重新渲染数据
          this.getAllCart();
        })
        .catch((err) => {
          // 修改失败
          this.$notify.error({
            title: "失败",
            message: "该商品修改失败",
            showClose: false,
            duration: 3000,
            offset: 300,
          });
          console.log("修改失败", err);
        });
    },
  },
  computed: {
    newTotal() {
      return Number(this.form.Num) * Number(this.form.Price);
    },
  },
  watch: {
    // 监听 -- 总价发生的新值变化
    newTotal(newVal) {
      this.form.Total = newVal;
      // 把当前新的总价---交给 store 中的 commit 进行修改
      this.$store.commit("cart/getTotal", this.form.Total);
      // newTotal 设置为等于 Store 中的 Total
      // 上面又是 Total = newTotal
      this.form.newTotal = this.$store.state.cart.cartOptions.Total;
    },
  },
};
</script>

<style scoped lang="less">
.control {
  display: flex;
}

.left {
  width: 200px;
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  background-color: #112f50;
}

.right {
  width: 100%;
  padding-left: 200px;
}

.el-menu {
  border: 0;
}

.is-active {
  background-color: #1e78bf !important;
  color: #fff !important;
}

.el-menu-item i {
  color: #fff;
}

.el-select {
  width: 300px;
}
</style>
