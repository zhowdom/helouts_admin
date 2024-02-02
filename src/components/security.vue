<template>
  <div class="indexBox">
    <div class="indexBoxInner rela">
      

      <div class="mainWrapper clearfix">

          <div v-show="vshowFlag" class="leftMain fl" :class="{ 'animate__animated animate__slideInLeft':openStatus, 'animate__animated animate__fadeInLeft':closeStatus }">
            
            <!--来访统计-->
            <div class="visitStatistic bdbox commonTitlebox comBoderAndBg" style="margin-top:0!important;">
              <div class="main1 flex-row">
                <div class="mod1 flex-col"></div>
                <span class="txt1">来访统计</span>
                <span class="word1">Visit&nbsp;statistics</span>
                <div class="mod2 flex-col"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="margin-top:5px;margin-left:16px;"></div>
              <div v-if="indexData.gateCount && indexData.visitCount" class="visitStatistic-main clearfix">
                <div class="vs-ml fl">
                  <div class="esmallbox clearfix rela" style="margin-top:11px;">
                    <div class="esmall fl">
                      <div class="estitle">今日来访者</div>
                      <div class="esvalue txtc rela" style="font-size:22px;">{{indexData.gateCount.todayCount}}</div>
                    </div>
                    <div class="esmall fr">
                      <div class="estitle">今日来预约</div>
                      <div class="esvalue txtc rela" style="font-size:22px;">{{indexData.visitCount.todayCount}}</div>
                    </div>

                    <div class="abs secTop1">
                      <p>昨日来访：{{indexData.gateCount.lastDayCount}}</p>
                      <p>昨日预约：{{indexData.visitCount.lastDayCount}}</p>
                    </div>
                  </div>
                  <div class="emainbox clearfix" style="margin-top:15px;">
                    <div class="emain fl">
                      <div class="emtitle">本周</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.gateCount.thisWeekCount}}</div>
                      <div class="embooking txtc">预约：{{indexData.visitCount.thisWeekCount}}位</div>
                    </div>
                    <div class="emain fl">
                      <div class="emtitle">本月</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.gateCount.thisMonthCount}}</div>
                      <div class="embooking txtc">预约：{{indexData.visitCount.thisWeekCount}}位</div>
                    </div>
                    <div class="emain fl">
                      <div class="emtitle">本年</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.gateCount.thisYearCount}}</div>
                      <div class="embooking txtc">预约：{{indexData.visitCount.thisWeekCount}}位</div>
                    </div>

                  </div>
                  
                </div>
                <div class="vs-mr fr rela">
                  <div class="aboveRings abs"></div>
                  <span class="vsmrname abs">来访率</span>
                  <span class="vsmrname abs percentVALUES" style="bottom:45px!important;"><i>{{(indexData.visitCount.rate*100).toFixed(0)}}</i><sub>%</sub></span>
                  <div class="echrMainBingBox abs">
                      <div id="echrMainBing1" style="width:110px;height:110px;"></div>
                  </div>

                </div>
              </div>
            </div>

            <!--来访统计-->
            <div class="visitStatistic bdbox commonTitlebox comBoderAndBg" style="height:240px;">
              <div class="main1 flex-row">
                <div class="mod1 flex-col"></div>
                <span class="txt1">停车场</span>
                <span class="word1">Parking&nbsp;lot</span>
                <div class="mod2 flex-col"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="margin-top:5px;margin-left:16px;"></div>
              <div class="visitStatistic-main clearfix">
                <div v-if="indexData.parkCount" class="vs-ml fl">
                  <div class="esmallbox clearfix rela" style="margin-top:11px;">
                    <div class="esmall fl" style="height:80px;">
                      <div class="estitle">今日进出车辆</div>
                      <div class="esvalue txtc rela" style="font-size:22px;">{{indexData.parkCount.todayCount}}</div>
                      <div class="embooking txtc" style="color:#fff;background: #05103c;opacity: .81;font-size:12px;">昨日车辆：{{indexData.parkCount.lastDayCount}}</div>
                    </div>
                    <div class="esmall fr" style="height:80px;">
                      <div class="estitle">今日剩余车辆空位</div>
                      <div class="esvalue txtc rela" style="font-size:22px;">{{indexData.parkCount.todayRemainCount}}</div>
                      <div class="embooking txtc" style="color:#05103CFF;background: #05103c;opacity: .81;font-size:12px;">**</div>
                    </div>

                    
                  </div>
                  <div class="emainbox clearfix" style="margin-top:15px;">
                    <div class="emain fl">
                      <div class="emtitle">本周</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.parkCount.thisWeekCount}}</div>
                      <div class="embooking txtc" style="color:#05103CFF">**</div>
                    </div>
                    <div class="emain fl">
                      <div class="emtitle">本月</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.parkCount.thisMonthCount}}</div>
                      <div class="embooking txtc" style="color:#05103CFF">**</div>
                    </div>
                    <div class="emain fl">
                      <div class="emtitle">本年</div>
                      <div class="emvalue txtc" style="font-size:18px;">{{indexData.parkCount.thisYearCount}}</div>
                      <div class="embooking txtc" style="color:#05103CFF">**</div>
                    </div>

                  </div>
                  
                </div>
                <div class="vs-mr fr rela">
                  <div class="aboveRings abs"></div>
                  <span class="vsmrname abs">使用率</span>
                  <span v-if="indexData.parkCount" class="vsmrname abs percentVALUES" style="bottom:45px!important;"><i>{{(indexData.parkCount.rate*100).toFixed(0)}}</i><sub>%</sub></span>
                  <div class="echrMainBingBox abs">
                      <div id="echrMainBing1_2" style="width:110px;height:110px;"></div>
                  </div>

                </div>
              </div>
            </div>

            <!--来访统计-->
            <div class="visitStatistic bdbox commonTitlebox comBoderAndBg" style="height:239px;">
              <div class="main1 flex-row">
                <div class="mod1 flex-col"></div>
                <span class="txt1">房间门禁</span>
                <span class="word1">Room&nbsp;access&nbsp;control</span>
                <div class="mod2 flex-col"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="margin-top:5px;margin-left:16px;"></div>

              <div class="oneBoxr fl n2n" style="width:500px;margin-top:10px;">
                    <div class="nandBox-r fl sdcv" style="width:100%;height:158px;">
                    <div class="nandBox-rT clearfix" style="background:#141d34;border-bottom: 1px solid #121a32;"><div class="time eplise">时间</div><div class="no eplise">房间</div><div class="name eplise">人员</div><div class="op eplise">状态</div></div>
                    <div class="nandBox-rB">
                      <ul style="height:126px;">
                        <li v-for="(item, index) in indexData.gateLog" :key="index" class="clearfix">
                          <div class="time eplise" style="width:130px;">{{dayjs(item.time).format('YYYY-MM-DD HH:mm')}}</div><div class="no eplise">{{item.deviceName}}</div><div class="name eplise" style="width:100px;">{{item.empName}}</div><div class="op eplise" style="color:#FF6F6FFF;">{{item.empNo}}</div>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
                  </div>
              
            </div>

            <!--来访统计-->
            <div class="visitStatistic bdbox commonTitlebox comBoderAndBg" style="height:239px;">
              <div class="main1 flex-row">
                <div class="mod1 flex-col"></div>
                <span class="txt1">停车场</span>
                <span class="word1">Room&nbsp;access&nbsp;control</span>
                <div class="mod2 flex-col"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="margin-top:5px;margin-left:16px;"></div>

              <div class="oneBoxr fl n2n" style="width:500px;margin-top:10px;">
                    <div class="nandBox-r fl sdcv" style="width:100%;height:158px;">
                    <div class="nandBox-rT clearfix" style="background:#141d34;border-bottom: 1px solid #121a32;"><div class="time eplise">时间</div><div class="no eplise">车牌</div><div class="name eplise">人员</div><div class="op eplise">状态</div></div>
                    <div class="nandBox-rB">
                      <ul v-if="indexData.parkLog" style="height:126px;">
                        <li v-for="(item, index) in indexData.parkLog" :key="index" class="clearfix">
                          <div class="time eplise" style="width:130px;">{{dayjs(item.time).format('YYYY-MM-DD HH:mm')}}</div><div class="no eplise" style="width:160px;">{{item.carNumber}}</div><div class="name eplise">{{item.name}}</div><div class="op eplise" style="color:#FF6F6FFF;">{{item.statusName}}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
              
            </div>
            
            
          </div>

          <div v-show="vshowFlag" class="rightMain fr" :class="{ 'animate__animated animate__slideInRight':openStatus, 'animate__animated animate__fadeInRight':closeStatus }">
            
              <!--3个页面右侧公共组件-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg fr" style="width:520px;height:968px;border:none;background:#283353;border-top-left-radius:0;margin-top:0!important;">
                <div class="main1 flex-row" style="width:500px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">综合安防</span>
                  <span class="word1">Comprehensive&nbsp;security</span>
                  <div class="mod2 flex-col" style="margin-left:175px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:480px;"></div>

                <!--主体内容s-->
                <div class="three3CommBox rela" style="margin-top:15px;">
                  <div class="toToufu toToufuEnvi" style="margin-bottom:80px;height:261px;overflow-y: scroll;">
                    <!-- <ul class="clearfix">
                      <li class="fl">全部设备</li>
                    </ul>
                    <div class="clearfix" style="border-bottom:1px solid #09132B99;margin-bottom:10px;width:480px;margin-left:10px;"></div>
                    <ul class="clearfix">
                      <li class="fl">全部空间</li>
                    </ul> -->
                    <ul v-if="indexData.deviceTypeList" class="clearfix">
                      <li @click="getTypeId('', -1)" class="fl" :class="{'hoverClassT': curTypeIndex == -1}">全部设备</li>
                      <li @click="getTypeId(item.typeId, index)" v-for="(item, index) in indexData.deviceTypeList" :key="index" class="fl eplise" :title="item.typeName" :class="{'hoverClassT': index == curTypeIndex}">{{item.typeName}}</li>
                    </ul>
                    <div class="clearfix" style="border-bottom:1px solid #09132B99;margin-bottom:10px;width:480px;margin-left:10px;"></div>
                    <ul v-if="indexData.spaceList" class="clearfix">
                      <li @click="getSpeaceId('', -1)" class="fl" :class="{'hoverClassT': curSpeaceIndex == -1}">全部空间</li>
                      <li @click="getSpeaceId(item.spaceId, index)" v-for="(item, index) in indexData.spaceList" :key="index" class="fl eplise" :title="item.spaceName" :class="{'hoverClassT': index == curSpeaceIndex}">{{item.spaceName}}</li>
                    </ul>
                  </div>
                  <div class="toSearch clearfix abs">
                    <el-input class="fl" v-model="inputSearch" clearable placeholder="请输入设备名称"></el-input>
                    <el-button class="fl" type="primary" @click="search(0)" :loading="loading">查询</el-button>
                  </div>
                  <div class="toTable">
                    <el-table
                      :highlight-current-row="false"
                      v-loading="loading"
                      :data="tableData"
                      @row-click="showVisibleSafe"
                      style="width: 100%;height:528px;overflow-y: scroll;background-color:#1d263e!important;">
                      <el-table-column label="序号" width="59">
                        <template slot-scope="scope">
                          <p>{{scope.$index+1}}</p>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="deviceName"
                        label="设备名称"
                        show-overflow-tooltip
                        align="center"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="systemName"
                        width="80"
                        align="center"
                        show-overflow-tooltip
                        label="所属系统">
                      </el-table-column>
                      <el-table-column
                        prop="spaceName"
                        align="center"
                        show-overflow-tooltip
                        label="位置">
                      </el-table-column>
                      <el-table-column
                        prop="location"
                        align="center"
                        width="50"
                        label="定位">
                        <template>
                          <i class="el-icon-location-outline"></i>
                        </template>
                      </el-table-column>
                      <el-table-column
                        align="center"
                        label="状态">
                        <template slot-scope="{row}">
                          <p v-if="!row.status" style="color:#fff">离线</p>
                          <p v-else style="color:#6DD400FF">在线</p>
                        </template>
                      </el-table-column>
                    </el-table>
                    <el-pagination
                    small
                    @size-change="handleSizeChange"
                    @current-change="search"
                    :current-page.sync="pageIndex"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    style="margin-top:8px;"
                    :total="totalPage">
                  </el-pagination>
                  
                  </div>
                </div>
                <!--主体内容d-->
                

                <!--左侧悬浮菜单-->
              <div class="cmABSMenu cmABSMenuv2 abs bdbox clearfix needHIDE" style="height:52px;left:122px;top:10px;">
                  <div class="ecmns fr bdbox" @click="handleOpenFold('close')"><span>收起</span></div>
              </div>
              <!--楼层悬浮菜单-->
              <div class="parkAndvedioMonBoxL parkAndvedioMonBoxLv2 parkAndvedioMonBoxL_v2 fl bdbox commonTitlebox abs clearfix needHIDE" style="top:590px;left:94px;">
                <div class="parkAndvedioMonBoxLIN bdbox" :class="{ 'animate__animated animate__smallMenuFade': hoverStatus2 == 1, 'animate__animated animate__smallMenuFadeOut': hoverStatus2 == 0}" id="hoverOpacityBox2">
                  <div class="main1 flex-row" style="width:88px;">
                    <div class="mod1 flex-col"></div>
                    <span class="txt1">楼层</span>
                    <!-- <i class="layerTxt">F1</i> -->
                  </div>
                  <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:32px;margin-bottom:10px;"></div>
                  <div class="elevatorMenuBox">
                    <el-tabs @tab-click="handleEachLayer" tab-position="left" style="height: 200px;">
                      <el-tab-pane v-for="item in elevatorMaps" :key="item.id" :label="item.label"></el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
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

      <!--综合安防弹窗-->
      <el-dialog
        title=""
        :visible.sync="visibleSafe"
        :before-close="handleCloseSafe"
        custom-class="dzDialogStyle_safe rela">
        <div class="dzDialogHeader clearfix abs">
          <div class="fl"></div>
          <div class="rightBBar">
            3F东过道视频
          </div>
        </div>
        <div class="clearfix wnlistboxSafe">
          <video controls>
            <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.ogv" type="video/ogg">
            <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" type="video/mp4">
            <!-- Please <a href="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" download>download</a> the video. -->
          </video>
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
      loading: false,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      visibleSafe: false,
      currentPage1: 5,
      inputSearch: '',
      tableData: [
        {
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '1'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '1'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      },{
        no: '01',
        name: '大门视频',
        sys: '视频',
        address: '1-106',
        location: '1',
        status: '0'
      }
      ],
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
          label: 'F-2',
          id: '2',
        },
        {
          label: 'F-3',
          id: '3',
        },
        {
          label: 'F-4',
          id: '4',
        },
        {
          label: 'F-5',
          id: '5',
        },
        {
          label: 'F-6',
          id: '6',
        },
        {
          label: 'F-7',
          id: '7',
        },
        {
          label: 'F-8',
          id: '8',
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
        }
      ],
      indexData: {},
      curTypeId: null,
      curSpeaceId: null,
      curTypeIndex: null,
      curSpeaceIndex: null,
    }
  },
  async mounted () {
    window.vue = this
    await this.queryIndexData()
    this.search(1)
    this.handleOpenFold('open')
    this.setMainWrapperHeight()
  },
  watch: {},
  methods: {
    search (pgi) {
      if (pgi) this.pageIndex = pgi
      let _params = {
        pageType: 'SAF',
        spaceId: this.curSpeaceId,
        typeId: this.curTypeId,
        searchKey: this.inputSearch,
        pageIndex: this.pageIndex - 1,
        pageLength: this.pageSize,
      }
      this.loading = true
      this.$axios.post('/api/digital/getDeviceList', _params).then(({data}) => {
        if (data.code === 200) {
          this.tableData = data.data || []
          this.totalPage = data.rowCount
          this.loading = false
        } else {
          this.tableData = []
          this.totalPage = 0
          this.pageSize = 10
          this.loading = false
          this.$message.error(response.message)
        }
      }).catch(e => {
        this.loading = false
      })
    },
    getTypeId (id, index) {
      this.curTypeId = id
      this.curTypeIndex = index
      this.search(1)
    },
    getSpeaceId (id, index) {
      this.curSpeaceId = id
      this.curSpeaceIndex = index
      this.search(1)
    },
    queryIndexData () {
      return new Promise((resolve, reject) => {
        this.$axios.get('/api/digital/GetSecurityData').then(({data}) => {
          if (data.code == 200) {
            this.indexData = data.data
            resolve(this.indexData)
          } else {
            console.log('query data failed')
            reject({})
          }
        }).catch(e => {
          console.log(e)
          reject(e)
        })
      })
    },
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
    showVisibleSafe (row) {
      // this.visibleSafe = true
      blu_event("综合安防设备弹窗", row.deviceCode)
    },
    handleCloseSafe () {
      this.visibleSafe = false
      blu_event("综合安防设备弹窗关闭", 'null')
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.pageIndex = 1
      this.search()
    },
    myEchartsBing () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing1'));
      // 指定图表的配置项和数据
      let data = this.indexData.visitCount && (this.indexData.visitCount.rate*100).toFixed(0);
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
    myEchartsBing_2 () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing1_2'));
      // 指定图表的配置项和数据
      let data = this.indexData.parkCount && (this.indexData.parkCount.rate*100).toFixed(0);
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
        this.myEchartsBing()
        this.myEchartsBing_2()
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
  opacity: 1;
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
<!--机器人页面-->
<style scoped>
.robotMainTL {
  width:110px;
  height:110px;
}
.robotMainTL img{
  height: 100%;
  width: 100%;
}
.robotMainTR{
  width:284px;
  height:180px;
  background: #09132B99;
  border-radius: 4px;
}
.robotMainT{
  margin-top:14px;
}
.robotMainTR{
  padding:8px 6px;
}
.robotMainTRt-a{
  margin-bottom:8px;
}
.robotMainTRt-a-l{
  width:90px;border-bottom:1px solid #05103C99;
}
.robotMainTRt-a-l p i{
  top:2px;
}
.robotMainTRt-a-l p span{
  font-size: 12px;color:#fff;padding-left:7px;font-weight:bold;
}
.robotMainTRt-a-l .sseip{
  padding:7px 0;
  color: #32C5FFFF;
}
.robotMainTRt-a-r{
  width:170px;border-bottom:1px solid #05103C99;
}
.robotMainTRt-a-r i{
  top:2px;
}
.robotMainTRt-a-r span{
  font-size: 12px;color:#fff;padding-left:7px;font-weight:bold;
}
.robotMainTRt-a-r .bvbs{
  padding:7px 0;
}
.robotMainTRt-a-r .bvbs span{
  color:#32C5FFFF;font-weight:400;
}
.robotMainTRt-a-r{
  width:170px;
}
.robotMainTRt-a-r p i{
  top:2px;
}
.robotMainTRt-a-r p span{
  font-size: 12px;color:#fff;padding-left:7px;font-weight:bold;
}
.robotMainTRt-a-r .mnass{
  padding:5px 0;
}
.robotMainTRt-a-r .mnass span{
  color:#32C5FFFF;font-weight:400;
}
.robotMainB{
  width:490px;height:60px;background:#1f2942;margin-left:10px;margin-top:6px;
}
.robotMainB span{
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding-top:5px;
  padding-right:10px;
}
.robotMainB img{
  width:30px;
  height: 27px;
}
.robotMainB div.clearfix{
  margin-right:8px;
  margin-top:15px;
  margin-left:15px;
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
  /* height:300px; */
}
.sdcv{
  height: 300px;
  background: #1d253f;
}
.sdcv li{
  background: #1d253f;
  padding: 12px 0;
  border-bottom: 1px solid #121a32;
}
.sdcv li:last-of-type{
  border-bottom: 1px solid none;
}
.sdcv .time{
  width:100px;
}
.sdcv .status{
  width: 80px;
}
.sdcv .no{
  width: 80px;
}
.sdcv .nandBox-rT{
  padding-top:12px;
  padding-bottom:12px;
}
.sdcv ul{
  height: 252px;
  overflow-y: scroll;
}
</style>
<style scoped>
/*综合安防*/
.secTop1{
  top:25px;
  right:-95px;
  color: #fff;
  font-size: 12px;
}
.n2n .time{
  width:120px;
}
.n2n .no{
  width:170px;
}
.n2n .oneBox{
  width:100%;
  height:200px;
  background: #09132B66;
}
.n2n .oneBoxl{
  width:150px;
  background: #09132B99;
  height:200px;
}
.n2n .oneBoxr{
  width:calc(100% - 150px);
  height:200px;
}
.n2n .sdcv{
  height: 200px;
  background: #1d253f;
}
.n2n .sdcv ul{
  height: 168px;
}
.wnlistboxSafe video{
  width:483px;
  height: 298px;
}
.hoverClassT {
  border: 1px solid #32C5FF!important;
  color: #32C5FF!important;
}
</style>