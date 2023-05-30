<template>
  <div class="skeCon">
    <el-row>
      <el-col :span="6" class="ske" v-for="i in 3" :key="i">
        <el-card>
          <el-skeleton
            class="el-ske"
            style="width: 400px"
            :loading="false"
            animated
            :count="1"
          >
            <template slot="template">
              <el-skeleton-item
                variant="image"
                style="width: 340px; height: 267px"
              />
              <div style="padding: 14px">
                <el-skeleton-item
                  variant="h1"
                  style="width: 50%; margin-left: 58px"
                />
                <el-skeleton-item
                  variant="p"
                  style="width: 85%; margin-top: 10px"
                />
                <el-skeleton-item
                  variant="p"
                  style="width: 85%; margin-top: 10px"
                />
                <div
                  style="
                    margin-top: 16px;
                    height: 16px;
                    display: flex;
                    justify-items: space-between;
                  "
                >
                  <el-skeleton-item
                    variant="h1"
                    style="width: 30%; margin-left: 108px; margin-right: 20px"
                  />
                  <el-skeleton-item variant="h1" style="width: 20%" />
                </div>
              </div>
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.skeCon {
  margin-top: 100px;
}

.el-row {
  display: flex;
  justify-content: space-around;
}

.ske {
  margin: 35px;
}
</style>
