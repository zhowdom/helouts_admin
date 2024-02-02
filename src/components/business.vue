<template>
  <div class="indexBox">
    <div class="indexBoxInner rela">
      

      <div class="mainWrapper clearfix">

          <div v-show="vshowFlag" class="leftMain fl" :class="{ 'animate__animated animate__slideInLeft':openStatus, 'animate__animated animate__fadeInLeft':closeStatus }">
            
            <!--每一个-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg" style="width:520px;height:150px;border:none;background:#283353;margin-top:0!important;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">维保总数</span>
                  <span class="word1">Total&nbsp;maintenance</span>
                  <div class="mod2 flex-col" style="margin-left:181px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:483px;"></div>
                <div class="clearfix">
                  <img class="fl" style="width:80px;height:80px;margin-top:14px;margin-left:10px;margin-right:30px;" src="../assets/df1.png">
                  <div class="fl">
                    <div class="emainbox clearfix" style="margin-top:15px;">
                        <div class="emain fl" style="width:141px;margin-right:35px;">
                          <div class="emtitle" style="font-weight:bold">本月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                        <div class="emain fl" style="width:141px;">
                          <div class="emtitle" style="font-weight:bold">上月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <!--每一个-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg" style="width:520px;height:150px;border:none;background:#283353;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">报修总数</span>
                  <span class="word1">Total&nbsp;number&nbsp;of&nbsp;repair&nbsp;requests</span>
                  <div class="mod2 flex-col" style="margin-left:181px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:483px;"></div>
                <div class="clearfix">
                  <img class="fl" style="width:80px;height:80px;margin-top:14px;margin-left:10px;margin-right:30px;" src="../assets/df2.png">
                  <div class="fl">
                    <div class="emainbox clearfix" style="margin-top:15px;">
                        <div class="emain fl" style="width:141px;margin-right:35px;">
                          <div class="emtitle" style="font-weight:bold">本月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                        <div class="emain fl" style="width:141px;">
                          <div class="emtitle" style="font-weight:bold">上月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <!--每一个-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg" style="width:520px;height:150px;border:none;background:#283353;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">巡查总数</span>
                  <span class="word1">Total&nbsp;number&nbsp;of&nbsp;patrols</span>
                  <div class="mod2 flex-col" style="margin-left:181px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:483px;"></div>
                <div class="clearfix">
                  <img class="fl" style="width:80px;height:80px;margin-top:14px;margin-left:10px;margin-right:30px;" src="../assets/df3.png">
                  <div class="fl">
                    <div class="emainbox clearfix" style="margin-top:15px;">
                        <div class="emain fl" style="width:141px;margin-right:35px;">
                          <div class="emtitle" style="font-weight:bold">本月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                        <div class="emain fl" style="width:141px;">
                          <div class="emtitle" style="font-weight:bold">上月维保总数</div>
                          <div class="emvalue txtc" style="font-size: 24px;">2390</div>
                          <div class="embooking txtc" style="color:#05103CFF;height:21px;">1</div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <!--5-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg" style="width:520px;height:220px;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">运维统计</span>
                  <span class="word1">current&nbsp;situation</span>
                  <div class="mod2 flex-col" style="margin-left:182px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:481px;"></div>
                <div id="echrMain3Bar" style="width: 490px;height: 165px;"></div>
            </div>

            <!--5-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg" style="width:520px;height:225px;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">报修统计</span>
                  <span class="word1">current&nbsp;situation</span>
                  <div class="mod2 flex-col" style="margin-left:182px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:481px;"></div>
                <div class="nandBox-l fl">
                    <div class="nandChartbox" style="width:500px;height:175px;">
                      <div id="nandMain" style="width:500px;height:175px;"></div>
                    </div>
                  </div>
            </div>
            

            
            
          </div>

          <div v-show="vshowFlag" class="rightMain fr" :class="{ 'animate__animated animate__slideInRight':openStatus, 'animate__animated animate__fadeInRight':closeStatus }">
            
              <!--每一个机器人-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg fr" style="width:600px;height:auto;border:none;background:#283353;border-top-left-radius:0;padding-bottom:10px;margin-top:0!important;">
                <div class="main1 flex-row" style="width:579px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">运维详情</span>
                  <span class="word1">O&nbsp;M details</span>
                  <div class="mod2 flex-col" style="margin-left:259px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:563px;"></div>
                <!--1个盒子-->
                <div class="oneBox clearfix" style="margin-top:10px;height:283px;">
                  <div class="oneBoxl fl" style="height:283px;">
                    <h3 class="txtc" style="font-weight: 500;font-size:14px;color:#fff;padding-top:12px;">本月维保详情</h3>
                    <div class="vs-mr rela" style="margin-top:60px;margin-left:10px;">
                        <div class="aboveRings abs"></div>
                        <!-- <span class="vsmrname abs">使用率</span> -->
                        <span class="vsmrname abs percentVALUES" style="bottom:40px!important;"><i>39</i><sub>%</sub></span>
                        <div class="echrMainBingBox abs">
                          <div id="echrMainBing2" style="width:110px;height:110px;"></div>
                      </div>
                    </div>

                  </div>
                  <div class="oneBoxr fl" style="height:283px;">
                    <div class="nandBox-r fl sdcv_YH1080" style="width:100%;height:283px;">
                    <div class="nandBox-rT clearfix" style="background:#141d34;border-bottom: 1px solid #121a32;"><div class="no eplise">设备名称</div><div class="name eplise">设备编号</div><div class="time eplise">上次保养时间</div><div class="status eplise">保养周期</div><div class="op eplise">状态</div></div>
                    <div class="nandBox-rB">
                      <ul style="height:210px;">
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">2年</div><div class="op eplise" style="color:#FF6F6FFF;">未处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">2年</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">2年</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">2年</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">2年</div><div class="op eplise">已处理</div>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
                <!--1个盒子-->
                <div class="oneBox clearfix" style="margin-top:11px;height:283px;">
                  <div class="oneBoxl fl" style="height:283px;">
                    <h3 class="txtc" style="font-weight: 500;font-size:14px;color:#fff;padding-top:12px;">本月报修详情</h3>
                    <div class="vs-mr rela" style="margin-top:60px;margin-left:10px;">
                        <div class="aboveRings abs"></div>
                        <!-- <span class="vsmrname abs">使用率</span> -->
                        <span class="vsmrname abs percentVALUES" style="bottom:40px!important;"><i>39</i><sub>%</sub></span>
                        <div class="echrMainBingBox abs">
                          <div id="echrMainBing2_2" style="width:110px;height:110px;"></div>
                      </div>
                    </div>

                  </div>
                  <div class="oneBoxr fl" style="height:283px;">
                    <div class="nandBox-r fl sdcv_YH1080" style="width:100%;height:283px;">
                    <div class="nandBox-rT clearfix" style="background:#141d34;border-bottom: 1px solid #121a32;"><div class="no eplise">设备名称</div><div class="name eplise">设备编号</div><div class="time eplise">故障时间</div><div class="status eplise">负责人</div><div class="op eplise">状态</div></div>
                    <div class="nandBox-rB">
                      <ul style="height:210px;">
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise" style="color:#FF6F6FFF;">未处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">空调</div><div class="name eplise">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
                <!--1个盒子-->
                <div class="oneBox clearfix" style="margin-top:11px;height:283px;">
                  <div class="oneBoxl fl" style="height:283px;">
                    <h3 class="txtc" style="font-weight: 500;font-size:14px;color:#fff;padding-top:12px;">本月巡查详情</h3>
                    <div class="vs-mr rela" style="margin-top:60px;margin-left:10px;">
                        <div class="aboveRings abs"></div>
                        <!-- <span class="vsmrname abs">使用率</span> -->
                        <span class="vsmrname abs percentVALUES" style="bottom:40px!important;"><i>39</i><sub>%</sub></span>
                        <div class="echrMainBingBox abs">
                          <div id="echrMainBing2_3" style="width:110px;height:110px;"></div>
                      </div>
                    </div>

                  </div>
                  <div class="oneBoxr fl" style="height:283px;">
                    <div class="nandBox-r fl sdcv_YH1080" style="width:100%;height:283px;">
                    <div class="nandBox-rT clearfix" style="background:#141d34;border-bottom: 1px solid #121a32;"><div class="no eplise">巡查地点</div><div class="name eplise" style="opacity: 0;">设备编号</div><div class="time eplise">巡查时间</div><div class="status eplise">负责人</div><div class="op eplise">状态</div></div>
                    <div class="nandBox-rB">
                      <ul style="height:210px;">
                        <li class="clearfix">
                          <div class="no">科研楼1F</div><div class="name eplise" style="opacity: 0;">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise" style="color:#FF6F6FFF;">未处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">科研楼1F</div><div class="name eplise" style="opacity: 0;">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">科研楼1F</div><div class="name eplise" style="opacity: 0;">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">科研楼1F</div><div class="name eplise" style="opacity: 0;">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        <li class="clearfix">
                          <div class="no">科研楼1F</div><div class="name eplise" style="opacity: 0;">2301204A</div><div class="time eplise">2021/12/23</div><div class="status eplise">张三</div><div class="op eplise">已处理</div>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>

                <!--左侧悬浮菜单-->
              <div class="cmABSMenu cmABSMenuv2 abs bdbox clearfix needHIDE" style="height:52px;left:-38px;top:10px;">
                  <div class="ecmns fr bdbox" @click="handleOpenFold('close')"><span>收起</span></div>
              </div>
            </div>

            
            
            
            
          </div>
      </div>

      <!--fixed bar Menu-->
      <div class="fixedbarMenu fixed bdbox" v-show="!vshowFlag">
        <div class="cmABSMenu cmABSMenu_inclueHideElement bdbox clearfix needHIDE">
            <div class="ecmns fr bdbox" @click="handleOpenFold('open')"><span>展开</span></div>
            <div class="ecmns fr bdbox needHide" @click="showDigitalGo">数字巡检</div>
            <div class="ecmns fr bdbox needHide" @click="handleBackHome">返回主体</div>
        </div>

        <ul class="pureIconMenu bdbox rela needHide">
          <li><img src="../assets/ic1.png"></li>
          <li><img src="../assets/ic2.png"></li>
          <li><img src="../assets/ic3.png"></li>
          <li><img src="../assets/ic4.png"></li>
          <li><img src="../assets/ic5.png"></li>
        </ul>

        <div class="pureElevatorMenu bdbox needHide">
          <p class="pureElevatorMtxt">楼层</p>
          <div class="pureElevatorMenuIn">
            <el-tabs @tab-click="handleEachLayer" tab-position="left" style="height: 200px;">
              <el-tab-pane v-for="item in elevatorMaps" :key="item.id" :label="item.label"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>

      <!--dialog(固定8个楼层)-->
      <!-- <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="handleCloseLayer"
        custom-class="dzDialogStyle rela">
        <div class="dzDialogHeader clearfix abs">
          <div class="fl"></div>
          <div class="rightBBar">
            数字巡检
          </div>
        </div>
        <div class="clearfix" style="padding-left:23px;">
          <div class="inBoxitems" :class="{'cur': cclickIndex == index}" v-for="(item, index) in elevatorMaps" :key="index" @click="handleChooseLayer(index, item.id)">
            {{item.label}}
          </div>
        </div>
      </el-dialog> -->

      <!--dialog(附近2个｜1个楼层)-->
      <el-dialog
        title=""
        :visible.sync="dialogVisibleNearby"
        :before-close="handleCloseLayerNearby"
        custom-class="dzDialogStyle rela dzDialogStyleNearby">
        <div class="dzDialogHeader clearfix abs">
          <div class="fl"></div>
          <div class="rightBBar">
            数字巡检<span class="spreadByHomecheck"><el-checkbox @change="handleSpreadByHome" v-model="spreadByHome">分房间漫游</el-checkbox></span>
          </div>
        </div>
        <div class="clearfix" style="padding-left:23px;">
          <div class="inBoxitems" :class="{'cur': cclickIndex == index}" v-for="(item, index) in nearbyLayer" :key="index" @click="handleChooseLayerNearby(index, item.id)">
            {{item.label}}
          </div>
        </div>
      </el-dialog>

      <!--dialog(其他楼层)-->
      <el-dialog
        title=""
        :visible.sync="dialogVisibleAnother_temp"
        :before-close="handleCloseLayerAnother"
        custom-class="dzDialogStyle rela dzDialogStyleNearby">
        <div class="dzDialogHeader clearfix abs">
          <div class="fl"></div>
          <div class="rightBBar">
            数字巡检
          </div>
        </div>
        <div class="clearfix" style="padding-left:23px;">
          <div class="inBoxitems" :class="{'cur': cclickIndex == index}" v-for="(item, index) in anotherLayer" :key="index" @click="handleChooseLayerAnother(index, item.id)">
            {{item.label}}
          </div>
        </div>
      </el-dialog>

      

    <div v-show="vshowFlag" class="spdr3 switchBoxing" @click="handleOpenFold('close')">
      收起
    </div>
    <div v-show="!vshowFlag" class="spdr4 switchBoxing" @click="handleOpenFold('open')">
      展开
    </div>
      


    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import imgDefault from '../assets/fmenu.png'
import imgRight from '../assets/fmenu-right.png'
import imgBottom from '../assets/fmenu-btm.png'
import imgLeft from '../assets/fmenu-left.png'
import imgtop from '../assets/fmenu-top.png'
export default {
  name: 'index',
  data () {
    return {
      valueRobot1: true,
      percentage1: 0,
      percentage2: 0,
      percentage3: 0,
      percentage4: 0,
      percentage5: 0, // v2 end
      swValue3Gas: true,
      dialogVisibleAnother_gas: false, // new add
      spreadByHome: true,
      dialogVisibleAnother: false,
      cclickIndex: null,
      dialogVisibleNearby: false,
      dialogVisibleAnother_temp: false,
      hoverStatus: null,
      hoverStatus2: null,
      dialogVisible: false,
      vshowFlag: false, // 左右2侧折叠菜单默认打开
      curIMGSrc: imgDefault,
      srcMap: {
        default: imgDefault,
        right: imgRight,
        bottom: imgBottom,
        left: imgLeft,
        top: imgtop,
      },
      swValue: false,
      swValue2: false,
      swValue3: true,
      swValue4: false,
      swValue5: false,
      openStatus: false,
      closeStatus: false,
      anotherLayer: [
        {
          label: '继续漫游',
          id: '继续漫游'
        },
        {
          label: '其他楼层',
          id: '其他楼层'
        }
      ],
      nearbyLayer: [
        {
          label: '继续漫游',
          id: '继续漫游'
        },
        {
          label: 'F15_仪器实验室',
          id: 'F15_仪器实验室'
        },
        {
          label: 'F15_天平室',
          id: 'F15_天平室',
        }
      ],
      elevatorMaps:[
        {
          label: 'F-1',
          id: '1'
        },
        {
          label: 'F-9',
          id: '9',
        },
        {
          label: 'F-10',
          id: '10',
        },
        {
          label: 'F-11',
          id: '11',
        },
        {
          label: 'F-12',
          id: '12',
        },
        {
          label: 'F-13',
          id: '13',
        },
        {
          label: 'F-14',
          id: '14',
        },
        {
          label: 'F-15',
          id: '15',
        }
      ]
    }
  },
  mounted () {
    window.vue = this
    this.handleOpenFold('open')
    this.setMainWrapperHeight()
  },
  watch: {},
  methods: {
    setMainWrapperHeight () {
      this.$nextTick(() => {
        // 设置页面的宽度为浏览器可视区域的高度
        let _browserHeight =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let _omainWrapper = document.querySelector('.mainWrapper')
        /**
         * 由于1080高度的分辨率的浏览器，导航栏+地址栏+工具栏等的高度会占据111px的高度，所剩余只有969px
         * 但是最终嵌入到终端设备是没有导航栏+地址栏+工具栏等的高度的。
         * 所以判断一下，当可视区域高度：小于的1080-111 = 969时候，再减去头部导航60，等于909px，.mainWrapper主体内容最小高度需要加上111px的高度=1020高度
         */
        try{
          if (_browserHeight <= 969) {
            _omainWrapper.style.minHeight = 1020 + 'px'
          } else {
            _omainWrapper.style.minHeight = (_browserHeight - 60) + 'px' // 主体内容高度 = 浏览器可视区域高 - 顶部导航菜单
          }
        }catch(e){
          console.log(e)
        }
      })
    },
    myEchartsBing2 () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing2'));
      // 指定图表的配置项和数据
      let data = 69;
      let option = {
        title: {
          text:'',//主标题文本
          subtext:'',//副标题文本
          left:'16%',
          top:'30%',
          textStyle:{
            fontWeight: 'bold',
            fontSize: 30,
            color:'#64c2fa',
            align:'center',
            left:10,
            textAlign:'center'
          },
          subtextStyle:{
            fontSize: 12,
            color:'#64c2fa',
            textAlign:'center'
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
          show: true,
        },
        legend: {
          top: 20,
          right:20,
          data: []
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['75%', '100%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: data,
                name: "来访率",
                selected:false,
                itemStyle: {
                  color: "#717bea",
                }
              },
              {
                value: 100-data,
                name: "",
                itemStyle: {
                  color: "#1a2e4f",
                },
                label:{
                  normal:{
                    show:false
                  }
                }
              },
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。画布为 myCharts  true为显示
      if (option && typeof option === "object") {
        myChart .setOption(option, true);
      }
    },
    myEchartsBing2_2 () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing2_2'));
      // 指定图表的配置项和数据
      let data = 72;
      let option = {
        title: {
          text:'',//主标题文本
          subtext:'',//副标题文本
          left:'16%',
          top:'30%',
          textStyle:{
            fontWeight: 'bold',
            fontSize: 30,
            color:'#64c2fa',
            align:'center',
            left:10,
            textAlign:'center'
          },
          subtextStyle:{
            fontSize: 12,
            color:'#64c2fa',
            textAlign:'center'
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
          show: true,
        },
        legend: {
          top: 20,
          right:20,
          data: []
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['75%', '100%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: data,
                name: "来访率",
                selected:false,
                itemStyle: {
                  color: "#717bea",
                }
              },
              {
                value: 100-data,
                name: "",
                itemStyle: {
                  color: "#1a2e4f",
                },
                label:{
                  normal:{
                    show:false
                  }
                }
              },
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。画布为 myCharts  true为显示
      if (option && typeof option === "object") {
        myChart .setOption(option, true);
      }
    },
    myEchartsBing2_3 () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing2_3'));
      // 指定图表的配置项和数据
      let data = 39;
      let option = {
        title: {
          text:'',//主标题文本
          subtext:'',//副标题文本
          left:'16%',
          top:'30%',
          textStyle:{
            fontWeight: 'bold',
            fontSize: 30,
            color:'#64c2fa',
            align:'center',
            left:10,
            textAlign:'center'
          },
          subtextStyle:{
            fontSize: 12,
            color:'#64c2fa',
            textAlign:'center'
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
          show: true,
        },
        legend: {
          top: 20,
          right:20,
          data: []
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['75%', '100%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: data,
                name: "来访率",
                selected:false,
                itemStyle: {
                  color: "#717bea",
                }
              },
              {
                value: 100-data,
                name: "",
                itemStyle: {
                  color: "#1a2e4f",
                },
                label:{
                  normal:{
                    show:false
                  }
                }
              },
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。画布为 myCharts  true为显示
      if (option && typeof option === "object") {
        myChart .setOption(option, true);
      }
    },
    myEchartsNanding () {
      // 通过id获取获取画布
      var dom = document.getElementById("nandMain");
      var myChart = echarts.init(dom);
      let option = null;
      option = {
          tooltip: {
              textStyle: {
                fontSize: 10
              },
              trigger: 'item',
              fontSize:'11px',
              formatter: '{c} ({d}%)'
              // formatter: '{a} <br/>{b} : {c} ({d}%)' // {a}（系列名称），{b}(数据项名称)，{c}(数值)，{d}(百分比)
          },
          legend: [{
              left: 'center',
              icon: 'circle',
              itemGap: 30, // 每个标题之间的间距
              itemWidth: 7,
              itemHeight: 7,
              top: '60',
              left: '60',
              textStyle: {
                color: '#fff'
              },
              data: ['空调', '照明', '送排风']
          },
          {
              left: 'center',
              icon: 'circle',
              itemWidth: 7,
              itemGap: 30, // 每个标题之间的间距
              itemHeight: 7,
              top: '115',
              left: '60',
              textStyle: {
                color: '#fff'
              },
              data: ['视频', '给排水', '电梯']
          }
          ],
          series: [
              {
                  name: '', // 对应{a}（系列名称）
                  type: 'pie',
                  radius: [10, 90],
                  center: ['75%', '59%'],
                  roseType: 'radius',
                  label: {
                      normal: {
                          position: 'inner',
                          show : false
                      }
                    },
                  emphasis: {
                      label: {
                          show: false, // 这里是饼图连着线的指示文字，
                          color: 'red' // 可设置颜色
                      }
                  },
                  data: [
                      {value: 60, name: '空调', itemStyle: { color: '#4B7DF8FF' }},
                      {value: 15, name: '照明', itemStyle: { color: '#FD5B65FF' }},
                      {value: 30, name: '送排风', itemStyle: { color: '#FD9544FF' }},
                      {value: 40, name: '视频', itemStyle: { color: '#FFE8A9FF' }},
                      {value: 35, name: '给排水', itemStyle: { color: '#21BF6BFF' }},
                      {value: 16, name: '电梯', itemStyle: { color: '#4BD5F7FF' }}
                  ]
              }
          ]
      };
      ;
      if (option && typeof option === "object") {
          myChart.setOption(option, true);
      }
    },
    format(percentage) {
      return `${percentage}/100`;
    },
    handleCloseLayerAnother_gas () {
      this.dialogVisibleAnother_gas = false
      blu_event("关闭设备弹窗", 'null')
    },
    handleSwitch (v, type) {
      switch (type) {
        case 'base':
          blu_event('设备显隐', JSON.stringify({"shebei": "基础", "state": v}))
          break;
        case 'top':
          blu_event('设备显隐', JSON.stringify({"shebei": "天花板", "state": v}))
          break;
        case 'desk':
          blu_event('设备显隐', JSON.stringify({"shebei": "家具", "state": v}))
          break;
        case 'gas':
          blu_event('设备显隐', JSON.stringify({"shebei": "暖通", "state": v}))
          break;
        case 'route':
          blu_event('设备显隐', JSON.stringify({"shebei": "气路", "state": v}))
          break;
      }
    },
    RoomChoose(room) {
      
      this.cclickIndex = null
      this.dialogVisibleNearby = true
      this.handleSpreadByHome(true)
      if (room.length == 1) {
        this.nearbyLayer=[
          {
            label: '继续漫游',
            id: '继续漫游'
          },
          {
            label: room[0],
            id: room[0]
          }
        ]
      } else {
        this.nearbyLayer=[
          {
            label: '继续漫游',
            id: '继续漫游'
          },
          {
            label: room[0],
            id: room[0]
          },
          {
            label: room[1],
            id: room[1]
          }
        ]
      }
      
    },
    handleSpreadByHome(v) {
      v ? blu_event('是否分房间漫游', 'true') : blu_event('是否分房间漫游', 'false')
    },
    FloorRoamEnd() {
      this.cclickIndex = null
      this.dialogVisibleAnother_temp = true
      this.handleSpreadByHome(true)
    },
    handleEachLayer (tab, event) {
      blu_event('楼层抽屉', tab.label.split('-')[1])
    },
    showDigitalGo () {
      this.cclickIndex = null
      this.dialogVisible = true
    },
    handleCloseLayer () {
      this.cclickIndex = null
      this.dialogVisible = false
      blu_event('退出漫游', 'null')
    },
    handleCloseLayerNearby () {
      this.cclickIndex = null
      this.dialogVisibleNearby = false
      blu_event('退出漫游', 'null')
    },
    handleCloseLayerAnother () {
      this.cclickIndex = null
      this.dialogVisibleAnother_temp = false
      blu_event('退出漫游', 'null')
    },
    // handleChooseLayer (index, id) {
    //   this.cclickIndex = index
    //   setTimeout(() => {
    //     this.dialogVisible = false
    //   }, 300)
    //   blu_event('楼层漫游', id)
    // },
    handleChooseLayerNearby (index, id) {
      this.cclickIndex = index
      if (id == '继续漫游') {
        setTimeout(() => {
          this.dialogVisibleNearby = false
        }, 300)
        blu_event('继续漫游', 'null')
      } else {
        setTimeout(() => {
          this.dialogVisibleNearby = false
        }, 300)
        blu_event('房间漫游', id)
      }
    },
    handleChooseLayerAnother (index, id) {
      this.cclickIndex = index
      if (id == '继续漫游') {
        setTimeout(() => {
          this.dialogVisibleAnother_temp = false
        }, 300)
        blu_event('重新漫游', 'null')
      } else {
        this.dialogVisibleAnother_temp = false
        this.cclickIndex = null
        this.dialogVisible = true
      }
    },
    handleBackHome () {
      blu_event('返回主体', 'null')
    },
    handleBTMenu (s) {
      blu_event('点击菜单栏', s)
    },
    overShow1 () {
      this.hoverStatus = 1
    },
    outHide1 () {
      this.hoverStatus = 0
    },
    overShow2 () {
      this.hoverStatus2 = 1
    },
    outHide2 () {
      this.hoverStatus2 = 0
    },
    handleOpenFold (v) {
      this.hoverStatus = null
      this.hoverStatus2 = null
      if (v == 'open') {
        this.vshowFlag = true
        this.openStatus = true
        this.closeStatus = false
        this.myEcharts3Bar()
        this.myEchartsNanding()
        this.myEchartsBing2()
        this.myEchartsBing2_2()
        this.myEchartsBing2_3()
      } else {
        this.openStatus = false
        this.closeStatus = true
        setTimeout(() => {
          this.vshowFlag = false
        },1000)
      }
    },
    switchFoldOnlyTwoSide (v) {
      this.hoverStatus = null
      this.hoverStatus2 = null
      if (v == 'open') {
        this.vshowFlag = true
        this.openStatus = true
        this.closeStatus = false
      } else {
        this.openStatus = false
        this.closeStatus = true
        setTimeout(() => {
          this.vshowFlag = false
        },1000)
      }
    },
    myEcharts3Bar () {
      var myChart = echarts.init(document.getElementById('echrMain3Bar'))
      
      var option = {
        color: ['#4BD5F7FF','#4B7DF8FF', '#2A5AE1FF'],
        legend: {
          left: 'right',
          y: '8',
          icon: 'circle',
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#32C5FF',
            fontSize: '12', 
          }
        },
        grid: {
          left: '3%',
          top: '20%',
          right: '0.5%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '报修', '巡查', '维保'],
          source: [
            { product: '5月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
            { product: '6月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
            { product: '7月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
            { product: '8月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
            { product: '9月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
            { product: '10月', '报修': 43.3, '巡查': 185.8, '维保': 93.7},
          ]
        },
        xAxis: { 
          type: 'category',
          axisLabel: {
            interval: 0, 
            textStyle: {
              color: '#32C5FF', 
              fontSize: '12', 
            }
          },
          axisLine:{
              lineStyle:{
                  show:true,
                  color:'#183466FF',
                  width:1,
              }
            },
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: '#32C5FF', 
              fontSize: '12', 
            }
          },
          splitLine: {    
            lineStyle: {
              color: '#183466FF',
              type: 'solid'    
            },
            show: true 
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar', barWidth: 6 }, { type: 'bar', barWidth: 6 }, { type: 'bar', barWidth: 6 }]
      };
      myChart.setOption(option);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indexBox .topheaderBox{
  width: calc(100% - 20px);
  height: 66px;
  /* background-image: url('../assets/topBg-left.png') no-repeat left top; */
  /* background-image: url('../assets/topBg-left.png'),
                    url('../assets/topBg-right.png'),
                    url('../assets/repeatLine.png');
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: left top, right top, left top; */
}
/*main body style*/
.businessInfo{
  padding: 10px;
  height: 260px;
  width:520px;
  /* background: url(../assets/businessInfo-bg.png) 100% no-repeat; */
}
.commonTitlebox .main1{
  width: 500px;
  height: 28px;
}
.commonTitlebox .main1 .mod1{
    width: 6px;
    height: 28px;
    background: url(../assets/mod1-bg.png) 100% no-repeat;
}
.commonTitlebox .main1 .txt1 {
    width: 64px;
    height: 22px;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 22px;
    text-align: left;
    margin: 4px 0 0 10px;
}
.commonTitlebox .main1 .word1 {
    width: 149px;
    height: 17px;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 197, 255, 1);
    font-size: 12px;
    text-transform: uppercase;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 17px;
    text-align: left;
    margin: 9px 0 0 10px;
}
.commonTitlebox .main1 .mod2 {
    width: 42px;
    height: 2px;
    background: url(../assets/mod2-bg.png) 100% no-repeat;
    margin: 10px 0 0 184px;
}
.commonTitlebox .main1 .mod3 {
        width: 27px;
    height: 8px;
    background: url(../assets/mod3-bg.png) 0px 0px no-repeat;
    margin: 7px 0 0 8px;
}
.linerStyle{
  width: 484px;height: 1px;background:#32C5FF;
}
.bg-ywxxIMG{
  height: 184px;
  width:184px;
}
.businessInfo-main{
  padding-top:15px;
}
.businessInfo-main .subC{
  width:190px;
  height: 40px;
}
.businessInfo-main .cd1{
  top:30px;
  left:18px;
  border-top:1px solid #111B3F;
}
.businessInfo-main .cd2{
  top:139px;
  left:18px;
  border-bottom:1px solid #111B3F;
}
.businessInfo-main .cd3{
  top:30px;
  right:18px;
  border-top:1px solid #111B3F;
}
.businessInfo-main .cd4{
  top:139px;
  right:18px;
  border-bottom:1px solid #111B3F;
}
.businessInfo-main .subC .thtxt{
  width:111px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
}
.businessInfo-main .cd1 .thtxt{
  background: url('../assets/lefttop-triangle.png') rgba(9, 19, 43, 0.6) no-repeat left top;
}
.businessInfo-main .cd2 .thtxt{
  background: url('../assets/leftbot-triangle.png') rgba(9, 19, 43, 0.6) no-repeat left bottom;
}
.businessInfo-main .cd3 .thtxt{
  background: url('../assets/righttop-triangle.png') rgba(9, 19, 43, 0.6) no-repeat right top;
}
.businessInfo-main .cd4 .thtxt{
  background: url('../assets/rightbot-triangle.png') rgba(9, 19, 43, 0.6) no-repeat right bottom;
}
.businessInfo-main .cd1 .thtxt,.businessInfo-main .cd2 .thtxt{
  top:0;
  left:0;
  padding-left: 6px;
}
.businessInfo-main .cd3 .thtxt,.businessInfo-main .cd4 .thtxt{
  top:0;
  right:0;
  padding-right: 6px;
}
.businessInfo-main .subC i{
  height: 10px;
  width:10px;
  border-radius: 100%;
  background: rgba(9, 19, 43, 0.6);
  display: inline-block;
}
.businessInfo-main .cd1 i{
  top:-5px;
  right: 0;
}
.businessInfo-main .cd2 i{
  bottom:-5px;
  right: 0;
}
.businessInfo-main .cd3 i{
  top:-5px;
  left: 0;
}
.businessInfo-main .cd4 i{
  bottom:-5px;
  left: 0;
}
.businessInfo-main .subC h3{
  font-size: 16px;
font-family: DFGothic-EB-WIN-RKSJ-H, DFGothic-EB-WIN-RKSJ;
font-weight: bold;
color: #32C5FF;
line-height: 40px;
}
.businessInfo-main .cd1 h3,.businessInfo-main .cd2 h3{
  top:0;
  left:121px;
}
.businessInfo-main .cd3 h3,.businessInfo-main .cd4 h3{
  top:0;
  right:121px;
}
.deviceWatch{
  padding: 10px;
  width:520px;
  height: 170px;
}
.deviceWatchv2{
  height: 390px;
}
.visitStatistic{
  padding: 10px;
  width:520px;
  height: 220px;
  margin-top: 10px;
}
.deviceWatchMain ul li{
  width:211px;
  height: 40px;
  margin-top:12px;
  padding: 10px;
  border-top: 1px solid rgba(5, 16, 60, 0.6);
  background: url('../assets/lefttop-triangle.png') rgba(9, 19, 43, 0.4) no-repeat left top;
}
.deviceWatchMain ul li:after{
  contain: ' ';
  display: inline-block;
  width:10px;
  height: 10px;
  background: rgba(5, 16, 60, 0.58);
  border-radius: 100%;
  position: absolute;
  top:-4px;
  right:-4px;
}
.deviceWatchMain ul li span{
  font-size: 12px;
font-family: SourceHanSansCN-Bold, SourceHanSansCN;
font-weight: bold;
color: #FFFFFF;
}
.deviceWatchMain ul li h3{
  font-size: 16px;
font-family: DFGothic-EB-WIN-RKSJ-H, DFGothic-EB-WIN-RKSJ;
font-weight: bold;
color: #32C5FF;
}
.visitStatistic-main .vs-ml{
  width:361px;
}
.visitStatistic-main .vs-ml .emain{
  width:115px;
  height: 80px;
}
.visitStatistic-main .vs-ml .esmall{
  width:115px;
  height: 60px;
}
.esmallbox {
  width:100%;
  width:238px;
}
.esmall .estitle {
  height: 20px;
  text-indent: 13px;
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  background: url('../assets/lefttop-triangle.png') no-repeat left top;
}
.esmall .esvalue {
  height: 40px;
  color: #32C5FF;
  background: rgba(9, 19, 43, 0.6);
  line-height: 40px;
  font-weight: bold;
  border-top: 1px solid rgba(5, 16, 60, 0.6);
}
.esmall .esvalue::after{
  content: " ";
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  background: rgba(5, 16, 60, 0.58);
  position: absolute;
  top:-4px;
  right:-4px;
  border: 1px solid rgba(5, 16, 60, 0.6);
  box-sizing: border-box;
}
.emainbox .emain{
  width:115px;
  margin-right: 8px;
}
.emainbox .emain:last-child{
  margin-right: 0;
}
.emainbox{
  width:361px;
}
.emainbox .emain .embooking{
  color: #fff;
  font-size: 12px;
  background: #05103C;
  opacity: 0.81;
}
.emainbox .emain .emvalue{
  height: 40px;
  color: #32C5FF;
  line-height: 40px;
  font-weight: bold;
  background: rgba(9, 19, 43, 0.4);
}
.emainbox .emain .emtitle{
    height: 20px;
    text-indent: 13px;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
    border-bottom: 1px solid rgba(5, 16, 60, 0.6);
    background: url('../assets/lefttop-triangle.png') rgba(9, 19, 43, 0.4) no-repeat left top;
}
.vs-mr{
  width:132px;
  height: 132px;
  margin-top:25px;
}
.vs-mr  .vsmrname{
  bottom: 32px;
  left: 37%;
  font-size: 12px;
  color: #32C5FF;
}
  .vs-mr .aboveRings{
    width:129px;
    height: 129px;
    border:1px solid #7592FE;
    top:0;
    left: 0;
    border-radius: 100%;
  }
.vs-mr .aboveRings::after{
  position: absolute;
  content: " ";
  display: inline-block;
  width: 10px;
  height: 10px;
  bottom: 11px;
  right:15px;
  background: #31C7FE;
  border-radius: 100%;
}
.vs-mr .aboveRings::before{
  position: absolute;
  content: " ";
  display: inline-block;
  height: 6px;
  width:6px;
  top:11px;
  left: 20px;
  background: #6567F7;
  border-radius: 100%;
}
.vs-mrv2{
  width:162px;
  height: 162px;
  margin-top:25px;
}
.vs-mrv2  .vsmrname{
  bottom: 42px;
  left: 40%;
  font-size: 12px;
  color: #32C5FF;
}
  .vs-mr .aboveRingsv2{
    width:159px;
    height: 159px;
    border:1px solid #7592FE;
    top:0;
    left: 0;
    border-radius: 100%;
  }
.vs-mr .aboveRingsv2::after{
  position: absolute;
  content: " ";
  display: inline-block;
  width: 10px;
  height: 10px;
  bottom: 20px;
  right:15px;
  background: #31C7FE;
  border-radius: 100%;
}
.vs-mr .aboveRingsv2::before{
  position: absolute;
  content: " ";
  display: inline-block;
  height: 6px;
  width:6px;
  top:19px;
  left: 20px;
  background: #6567F7;
  border-radius: 100%;
}
.energyStatistic{
  padding: 10px;
  width:520px;
  height:270px;
  margin-top: 10px;
}
.rightMain {
  width:604px;
  margin-right:10px;
}
.safeStatus{
  width:440px;
  padding: 10px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;
  border: none;
}
.menuBtn3box{
  width:100%;
}
.menuBtn3box li.dsd2{
  width:131px;
  background: rgba(9, 19, 43, 0.4);
  margin-right: 12px;
  margin-top:10px;
}
.menuBtn3box li.dsd2:last-child{
  margin-right: 0;
}
.menuBtn3box li.dsd2 p{
  color: #fff;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  text-indent: 10px;
  border-left:3px solid #FF3A3B
}
.menuBtn3box li.dsd2:nth-child(2) p{
  border-left:3px solid #03FF1C
}
.menuBtn3box li.dsd2:nth-child(3) p{
  border-left:3px solid #FEEF08
}
.menuBtn3box li.dsd2 h3{
  border-top:1px solid #05103C;
  height: 38px;
  line-height: 38px;
  color: #32C5FF;
}
.cmABSMenu{
  width:42px;
  height: 301px;
  left:-42px;
  top:0;
  font-size: 12px;
  color: #fff;
  border-right:8px solid rgba(9, 19, 43, 0.6);
}
.fixedbarMenu .cmABSMenu{
  left:0;
  height: 260px;
  top:0;
}
.cmABSMenu .ecmns{
  width:34px;
  padding: 13px 11px;
  background: rgba(9, 19, 43, 0.7);
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
  line-height: 13px;
  margin-bottom: 10px;
}
.environmentWatch{
  width:440px;
  height: 170px;
  padding: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  margin-top:10px;
  background: rgba(9, 19, 43, 0.6);
}
.cmABSMenu2{
  width:118px;
  height: 180px;
  left:-118px;
  top:0;
  font-size: 12px;
  color: #fff;
  border-right: 8px solid rgba(9, 19, 43, 0.8);
}
.cmABSMenu2 li{
  margin-bottom: 14px;
}
.cmABSMenu2 ul{
  height: 170px;
  padding: 8px 6px 8px 9px;
  background: rgba(9, 19, 43, 0.6);
  border-radius: 4px 0px 0px 4px;
}
.cmABSMenu2 li:last-child{
  margin-bottom: 0;
}
.cmABSMenu2 li div.fl{
  width:calc(100% - 30px);
  text-indent: 23px;
  height: 20px;
  font-size: 12px;
  color: #fff;
}
.cmABSMenu2 li div.fr{
  width:30px;
}
.cmABSMenu2 .ecbBase .fl{
  background: url('../assets/ic1.png') no-repeat left top;
  background-size: contain;
}
.cmABSMenu2 .ecbTop .fl{
  background: url('../assets/ic2.png') no-repeat left top;
  background-size: contain;
}
.cmABSMenu2 .ecbHome .fl{
  background: url('../assets/ic3.png') no-repeat left top;
  background-size: contain;
}
.cmABSMenu2 .ecbWarn .fl{
  background: url('../assets/ic4.png') no-repeat left top;
  background-size: contain;
}
.cmABSMenu2 .ecbGas .fl{
  background: url('../assets/ic5.png') no-repeat left top;
  background-size: contain;
}
.parkAndvedioMonitorBox{
  margin-top:10px;
  width:558px;
}
.parkAndvedioMonBoxL{
  width:118px;
  /* height: 470px; */
  border-right: 8px solid rgba(9, 19, 43, 0.8);
  border-radius: 4px 0px 0px 4px;
}
.parkAndvedioMonBoxLIN{
  padding: 10px;
  padding-bottom: 23px;
  background: rgba(9, 19, 43, 0.6);
  border-radius: 4px 0px 0px 4px;
}
.layerTxt {
  font-weight: 500;
  color: #00CCFF;
  font-style: normal;
  font-size: 24px;
}
.elevatorMenuBox{
  /* height: 416px; */
}
.elevatorMenuBox .sli{
  height: 28px;
  width:90px;
  background: rgba(9, 19, 43, 0.4);
  border-radius: 5px;
  line-height: 28px;
  text-align: center;
  color: #fff;
}
.pdrBoxPark .comBoderAndBg, .pdrBoxVedio .comBoderAndBg{
    background: rgba(5, 16, 60, 0.48);
    border-radius: 0px 4px 4px 0px;
}
.pdrBoxPark .visitStatistic, .pdrBoxVedio .visitStatistic{
  width: 440px;
  border: none;
}
.pdrBoxPark .visitStatistic-main .vs-ml .emain{
  width:87px;
}
.pdrBoxPark .emainbox .emain{
  margin-right: 4px;
}
.pdrBoxPark .emainbox .emain .emtitle{
  text-indent: 10px;
}
.pdrBoxPark .emainbox .emain .emvalue{
  height: 60px;
  line-height: 60px;
}
.pdrBoxPark .emainbox{
  width: 271px;
}
.pdrBoxPark .visitStatistic-main .vs-ml{
  width: 271px;
}
.pdrBoxPark .emainbox .emain:last-child{
  margin-right:0;
}
.pdrBoxPark .visitStatistic{
  height: 195px;
}
.pdrBoxVedio .visitStatistic{
  height: 264px;
}
.vedioPalyBox{
  width:414px;
}
.vedioPalyBox li:nth-child(2),.vedioPalyBox li:nth-child(5){
  margin: 19px 15px 0 15px;
}
.vedioPalyBox li{
  margin-top:19px;
}

.fixedbarMenu{
  width:42px;
  min-height: 950px;
  top:60px;
  right:0;
}
.pureIconMenu li{
  width:24px;
  height: 24px;
  margin-left: 5px;
  margin-bottom: 9px;
}
.pureIconMenu li img{
  width:100%;
  height: 100%;
  cursor: pointer;
}
.pureElevatorMenu{
  width:42px;
  background: rgba(9, 19, 43, 0.7);
  border-radius: 4px 0px 0px 4px;
  border-right: 8px solid rgba(9, 19, 43, 0.6);
}
.pureElevatorMtxt{
  width:20px;
  color: #fff;
  margin:0 auto;
  padding: 7px 0;
  font-size: 12px;
  text-align: center;
}
.pureIconMenu{
  width:42px;
  padding-top:5px;
  padding-bottom: 5px;
  background: rgba(9, 19, 43, 0.7);
  margin-bottom: 10px;
  border-right: 8px solid rgba(9, 19, 43, 0.6);
  border-radius: 4px 0px 0px 4px;
}
.pureIconMenu::after{
  content: ' ';
  position: absolute;
  width:8px;
  height: 10px;
  background: rgba(9, 19, 43, 0.7);
  bottom: -10px;
  right:-8px;
}
.pureElevatorMenuIn{
  border-top:1px solid #00CCFF;
  padding-top: 10px;
  padding-bottom: 10px;
}
#hoverOpacityBox1,#hoverOpacityBox2{
  opacity: 0;
}
.echrMainBingBox{
  width: 110px;
  height: 110px;
  top:50%;
  left:50%;
  margin-top:-55px;
  margin-left:-55px;
}
.echrMainBingBoxv2{
  width: 140px;
  height: 140px;
  top:50%;
  left:50%;
  margin-top:-70px;
  margin-left:-70px;
}
</style>
<style>
.elevatorMenuBox .el-tabs--left{
  height: 392px!important;
}
.elevatorMenuBox .el-tabs--left .el-tabs__header.is-left{
  margin-right: 0;
}
.elevatorMenuBox .el-tabs__header{
  margin:0;
  width: 100%;
}
.elevatorMenuBox .el-tabs__content{
  display: none;
}
.elevatorMenuBox .el-tabs__nav-prev,.elevatorMenuBox .el-tabs__nav-next{
  display: none;
}
.elevatorMenuBox .el-tabs__item.is-active{
  width: 90px;
  height: 28px;
  background: rgba(9, 19, 43, 0.4);
  border-radius: 5px;
  backdrop-filter: blur(10px);
  color: #fff;
  text-align: center;
  line-height: 28px;
}
.elevatorMenuBox .el-tabs--left .el-tabs__item.is-left{
  text-align: center;
}
/*If show fluid-barLine style*/
/* .elevatorMenuBox .el-tabs--left .el-tabs__active-bar.is-left, .elevatorMenuBox .el-tabs--left .el-tabs__nav-wrap.is-left::after{
  right: 0;
}
.elevatorMenuBox .el-tabs__nav-wrap::after{
  width:0!important;
}
.elevatorMenuBox .el-tabs__active-bar{
  width: 100%!important;
  background: rgba(9, 19, 43, 0.4);
  border-radius: 5px;
  backdrop-filter: blur(10px);
  z-index:-1;
} */
.elevatorMenuBox .el-tabs--left .el-tabs__active-bar.is-left, .elevatorMenuBox .el-tabs--left .el-tabs__nav-wrap.is-left::after{
  width:0;
}
.elevatorMenuBox .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable{
  padding: 0;
}
.elevatorMenuBox .el-tabs__item{
  color: #fff;
  height: 28px;
  line-height: 28px;
}

.elevatorMenuBox.pureElevatorMenuIn .el-tabs__item.is-active{
    width: 30px;
    height: 28px;
    background: rgba(9, 19, 43, 0.4);
    border-radius: 5px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    color: #fff;
    text-align: center;
    line-height: 28px;
}
.pureElevatorMenuIn .el-tabs__item{
  padding: 0!important;
  width:30px!important;
  margin-left:2px!important;
  color: #fff;
}
.pureElevatorMenuIn .el-tabs__nav-wrap{
  width:42px;
}
/* .pureElevatorMenuIn .el-tabs--left{
  height: 500px!important;
} */
.pureElevatorMenuIn .el-tabs--left .el-tabs__item.is-left{
  text-align: center;
  font-size: 12px;
}
.pureElevatorMenuIn .el-tabs__item.is-active{
  background: rgba(9, 19, 43, 0.4);
  color: #fff;
  border-radius: 5px;
}
.pureElevatorMenuIn .el-tabs__nav-next,.pureElevatorMenuIn .el-tabs__nav-prev{
  text-indent: -10px;
}
/*dialog style*/
.dzDialogStyle{
  width:520px!important;
  height: 270px!important;
  /* background: url('../assets/dialogTopBg.png') #23304e no-repeat left top!important; */
  background: rgba(9, 19, 43, 0.61)!important;
  border-radius: 4px;
  border: 1px solid rgba(117, 146, 254, 0.39);
}
.dzDialogStyleNearby .el-dialog__body{
  margin-top:52px;
}
.spreadByHomecheck{
  padding-left: 121px;
}
.spreadByHomecheck .el-checkbox__label{
  color: #fff;
}
.dzDialogHeader {
  height: 40px;
  width:calc(100% - 20px);
  margin:0 auto;
  top:0;
  line-height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-family: PingFangSC-Semibold, PingFang SC;
  z-index: 1;
}
.dzDialogHeader .fl{
  width:16px;
  height: 40px;
  background: url(../assets/mod1-bg.png) 100% no-repeat;
  background-position: left 10px;
  background-size: 6px 23px;
}
.dzDialogHeader .rightBBar{
  width: calc(100% - 40px);
  float: left;
  height: 40px;
  border-bottom: 1px solid #32C5FF;
}
.dzDialogStyle .el-dialog__headerbtn{
  top:12px;
  z-index: 2;
}
.inBoxitems{
  width: 140px;
  height: 49px;
  border-radius: 4px;
  background: #3F4A6A;
  backdrop-filter: blur(10px);
  line-height: 49px;
  text-align: center;
  color: #32C5FF;
  float: left;
  margin-right:10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.inBoxitems.cur{
  background: url('../assets/dialogContentTopBg.png') #3F4A6A no-repeat top left;
}
.dzDialogStyleNearbyGas .el-dialog__body{
  margin-top:0;
}
.hhGasBG {
  height: 26px;
  text-indent: 10px;
  color: #fff;
  font-size: 12px;
  line-height: 26px;
  width:100%;
  background: url('../assets/lefttop-triangle.png') no-repeat left top;
}
</style>
<style>
/*new index start*/
.mabboxT-l-top {
  margin-top:13px;
}
.mabboxT-l-top-each{
  width:167px;
  border-top: 1px solid rgba(5,16,60,0.6000);
}
.mabboxT-l-top-each .txtss{
  height:33px;width:70px;
  line-height: 33px;
  font-size: 12px;
  color:#fff;
  background-color: #09132B66;
  text-align: center;
}
.mabboxT-l-top-each .nums{
  color:#32C5FFFF;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  width:calc(100% - 70px);
  height:33px;
  line-height: 33px;
}
.mabboxT-l{
  width:355px;
  margin-left:16px;
}
.el-progress-bar__outer{
  background-color: #05103CFF!important;
}
.el-progress__text{
  color: #32C5FFFF!important;
  font-size: 12px!important;
  margin-left: 15px!important;
}
.esname{
  font-size: 12px;
  color: #32C5FFFF;
  width:62px;
  display: inline-block;
}
.esnameBar{
  width:310px;
}
.esnameBar .el-progress-bar{
  width:250px;
}
.mabboxT-l-topBT p{
  margin-bottom: 10px;
}
.mabboxB {
  height: 100px;
  padding: 18px 13px;
}
.mabboxB-l .eacc{
  width: 80px;
height: 100px;
background: rgba(9,19,43,0.4000);
}
.mabboxB-l .eacc:nth-child(2){
  margin:0 7px;
}
.mabboxB-l .eacc p{
  text-align: center;
  line-height: 100px;
  font-size: 24px;
  font-weight: bold;
  color: #32C5FF;
}
.mabboxB-l .eacc .topPP span{
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  padding-left: 5px;
}
.mabboxB-l .eacc .topPP i{
  height: 18px;
  width: 2px;
  background: #03FF1CFF;
  display: inline-block;
}
.mabboxB-l .eacc .botPP{
  bottom:0;
  left: 0;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  width: 100%;
  background: #05103C;
  padding: 3px 0;
}
.mabboxB-l .eacc:nth-child(2) .topPP i{
  background: #FEEF08FF;
}
.mabboxB-l .eacc:nth-child(3) .topPP i{
  background: #32C5FFFF;
}
.mabboxB-r{
  position: relative;
}
.mabboxB-r .drBar{
  width:19px;
  height: 0px;
  background: linear-gradient(180deg, #49CEEF 0%, #32C5FF 100%);
  position: absolute;
  bottom: 0;
  left: 22px;
  transition:height 2.8s;
  z-index: 10;
}
.mabboxB-r .drBar:nth-child(2){
  left:113px;
  background: linear-gradient(180deg, #426DD8 0%, #426DD8 100%);
}
.mabboxB-r .drBar:nth-child(3){
  left:210px;
  background: linear-gradient(225deg, #2856D6 0%, #2753CE 100%);
}
.xuLineBar{
  height: 1px;
  width: 100%;
  background: #2d4d86;
  left: 0;
  z-index: 9;
}
.xuLineBar.nnt1{
  bottom: 100%;
}
.xuLineBar.nnt2{
  bottom: 75%;
}
.xuLineBar.nnt3{
  bottom: 50%;
}
.xuLineBar.nnt4{
  bottom: 25%;
}
.xuLineBar.nnt5{
  bottom: 0!important;
}
.bttTitle{
  bottom: -41px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
}
/* .indexL2{
  width:570px!important;
  height: 300px!important;
} */
.nandBox-rT{
  color: #00CCFFFF;
  font-size: 13px;
  font-weight: bold;
  background: #09132B99;
  padding: 10px 0;
  box-sizing: border-box;
  text-align: center;
}
.nandBox-rB{
  color: #00CCFFFF;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  background: #09132B66;
}
.nandBox-rB ul li{
  border-bottom:1px solid rgba(9,19,43,0.4000);
  padding: 7px 0;
}
.nandBox-r{
  width:calc(100% - 200px);
}
.nandBox-r .no{width:40px;float: left;}
.nandBox-r .time{width:110px;float: left;}
.nandBox-r .name{width:110px;float: left;}
.nandBox-r .status{width:40px;float: left;}
.nandBox-r .op{width:40px;float: left;}
.gxgTitle{
  height:27px;border-bottom: 1px solid rgba(5,16,60,0.6000);color:#fff;line-height:27px;font-size: 12px;font-weight:500;
}
.gxgTitle .nnames{
  text-indent:10px;
  font-weight: 700;
}
.hhadBg{
  background: url('../assets/temper_03.png') no-repeat top left;
  background-size: 15px 20px;
}
.hhadBg span{
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
}
.hqbox p{
font-size: 20px;
font-weight: bold;
color: #32C5FF;
line-height: 52px;
text-indent: 20px;
}
.speedpEach {
  margin-top:10px!important;
}
.nn3name{
  top:30px;
  left:89px;
  font-size: 12px;
  color:#32C5FFFF;
  width: 59px;
}
.mgrer{margin-right:56px;margin-top:10px;}
.mktitles::after{
  content: ' ';
  height: 10px;
  width: 10px;
  background: #03FF1CFF;
  display: inline-block;
  border-radius: 100%;
  margin-left: 15px;
}
.b2bBotombox li:nth-child(2) .mktitles::after{
  background: #fff;
}
.b2bBotombox li:nth-child(3) .mktitles::after{
  background: #03FF1CFF;
}
.b2bBotombox li:nth-child(4) .mktitles::after{
  background: #03FF1CFF;
}
.b2bBotombox li:nth-child(5) .mktitles::after{
  background: #FF3A3BFF;
}
.b2bBotombox li{
  float: left;
  margin-left: 10px;
}
</style>
<style scoped>
/*业务管理页面*/
.oneBox{
  width:100%;
  height:300px;
  background: #09132B66;
}
.oneBoxl{
  width:150px;
  background: #09132B99;
  height:300px;
}
.oneBoxr{
  width:calc(100% - 150px);
  height:300px;
}
.sdcv_YH1080{
  height: 300px;
  background: #1d253f;
}
.sdcv_YH1080 li{
  background: #1d253f;
  padding: 12px 0;
  border-bottom: 1px solid #121a32;
}
.sdcv_YH1080 li:last-of-type{
  border-bottom: 1px solid none;
}
.sdcv_YH1080 .time{
  width:100px;
}
.sdcv_YH1080 .status{
  width: 80px;
}
.sdcv_YH1080 .no{
  width: 80px;
}
.sdcv_YH1080 .nandBox-rT{
  padding-top:12px;
  padding-bottom:12px;
}
.sdcv_YH1080 ul{
  height: 252px;
  overflow-y: scroll;
}
</style>