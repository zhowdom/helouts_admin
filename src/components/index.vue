<template>
  <div class="indexBox">
    <div class="indexBoxInner rela">
      
      <div class="mainWrapper clearfix">
          <div v-show="vshowFlag" class="leftMain fl" :class="{ 'animate__animated animate__slideInLeft':openStatus, 'animate__animated animate__fadeInLeft':closeStatus }">
            <!--2-->
            <div class="deviceWatch deviceWatchv2 bdbox commonTitlebox comBoderAndBg" style="width:570px;">
              <div class="main1 flex-row" style="width:545px;">
                <!-- <div class="mod1 flex-col"></div>原来的标题背景 -->
                <i class="cm_verticalTitle_icon" style="margin-top:5px;"></i>
                <span class="txt1">业务态势</span>
                <span class="word1">Business &nbsp;situation</span>
                <div class="mod2 flex-col" style="margin-left:229px;"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:530px;"></div>
              <div class="mabbox">
                <div class="mabboxT clearfix" style="margin-bottom:5px;">
                  <div class="mabboxT-l fl">

                    <div class="mabboxT-l-top clearfix">
                      <div v-if="indexData.businessInfo" class="mabboxT-l-topTT clearfix" style="margin-bottom:13px;">
                        <div class="mabboxT-l-top-each clearfix fl">
                          <div class="txtss fl rela"><i class="cm_daoTriangleDengYao_bg abs" style="left:0;top:0;"></i>完成检测</div>
                          <div class="nums fl">{{indexData.businessInfo.completed}}</div>
                        </div>
                        <div class="mabboxT-l-top-each clearfix fl" style="margin-left:15px;">
                          <div class="txtss fl rela"><i class="cm_daoTriangleDengYao_bg abs" style="left:0;top:0;"></i>未完成检测</div>
                          <div class="nums fl">{{indexData.businessInfo.unCompleted}}</div>
                        </div>
                      </div>
                      <div v-if="indexData.businessInfo" class="mabboxT-l-topBT">
                        <p class="clearfix" v-for="(item, index) in indexData.businessInfo.items" :key="index">
                          <span class="fl esname">{{item.itemName}}</span>
                          <el-progress class="esnameBar" :stroke-width="6" :format="format" :percentage="percentage[index]" color="#32C5FFFF"></el-progress>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mabboxT-r vs-mr vs-mrv2 fl rela">
                    <div class="aboveRings aboveRingsv2 abs"></div>
                    <span class="vsmrname abs" style="bottom:52px;">完成率</span>
                    <span v-if="indexData.businessInfo" class="vsmrname abs percentVALUES"><i>{{indexData.businessInfo.completedRate}}</i><sub>%</sub></span>
                    <div class="echrMainBingBox echrMainBingBoxv2 abs">
                        <div id="echrMainBing1v2" style="width:140px;height:140px;"></div>
                    </div>
                  </div>
                </div>
                <div class="mabboxB clearfix" style="background:#183466FF;border-radius: 4px;">
                  <div v-if="indexData.spaceHealthy" class="mabboxB-l fl clearfix">
                    <div class="fl eacc rela">
                      <div class="topPP abs clearfix">
                        <i class="fl"></i><span class="fl">健康</span>
                      </div>
                      <p>{{indexData.spaceHealthy.health}}</p>
                      <div class="botPP abs">个房间</div>
                    </div>
                    <div class="fl eacc rela">
                      <div class="topPP abs clearfix">
                        <i class="fl"></i><span class="fl">舒适</span>
                      </div>
                      <p>{{indexData.spaceHealthy.comfortable}}</p>
                      <div class="botPP abs">个房间</div>
                    </div>
                    <div class="fl eacc rela">
                      <div class="topPP abs clearfix">
                        <i class="fl"></i><span class="fl">安全</span>
                      </div>
                      <p>{{indexData.spaceHealthy.safety}}</p>
                      <div class="botPP abs">个房间</div>
                    </div>
                  </div>
                  <div v-if="indexData.spacePerson" class="mabboxB-r fr rela" style="width:253px;height:61px;">

                      <div id="drBar1" class="drBar"></div>
                      <div id="drBar2" class="drBar"></div>
                      <div id="drBar3" class="drBar"></div>

                      <div class="bttTitle abs" style="left: 13px;color:#4BD5F7FF">
                        <p>有人</p>
                        <p>占{{indexData.spacePerson.someoneRate}}</p>
                      </div>

                      <div class="bttTitle abs" style="left: 105px;color:#4B7CF6FF">
                        <p>无人</p>
                        <p>占{{indexData.spacePerson.nobodyRate}}</p>
                      </div>

                      <div class="bttTitle abs" style="left: 201px;color:#2A5AE2FF">
                        <p>异常</p>
                        <p>占{{indexData.spacePerson.exceptionRate}}</p>
                      </div>

                      <div class="xuLineBar nnt1 abs"></div>
                      <div class="xuLineBar nnt2 abs"></div>
                      <div class="xuLineBar nnt3 abs"></div>
                      <div class="xuLineBar nnt4 abs"></div>
                      <div class="xuLineBar nnt5 abs"></div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <!--2-->
            <div class="deviceWatch indexL2 indexL2_YH1080 bdbox commonTitlebox comBoderAndBg" style="margin-top:10px;">
              <div class="main1 flex-row" style="width:550px;">
                <div class="mod1 flex-col"></div>
                <span class="txt1">安防态势</span>
                <span class="word1">Security&nbsp;situation</span>
                <div class="mod2 flex-col" style="margin-left:229px;"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="width:530px;margin-top:5px;margin-left:16px;"></div>
                <div class="nandBox clearfix">
                  <div class="nandBox-l fl">
                    <div class="nandChartbox" style="width:200px;height:210px;">
                      <div id="nandMain" style="width:200px;height:210px;"></div>
                    </div>
                  </div>
                  <div v-if="indexData.securityInfo" class="nandBox-r fl" style="margin-top:10px;">
                    <div class="nandBox-rT clearfix"><div class="no">序号</div><div class="time">时间</div><div class="name">点位名称</div><div class="status">状态</div><div class="op">操作</div></div>
                    <div class="nandBox-rB">
                      <ul>
                        <li class="clearfix" v-for="(item, index) in indexData.securityInfo.detailList" :key="index">
                          <div class="no">{{index+1}}</div><div class="time eplise">{{dayjs(item.time).format('YYYY-MM-DD HH:mm')}}</div><div class="name eplise">{{item.name}}</div><div class="status">{{item.statusName}}</div><div class="op">确认</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              
            </div>
            <!--2.5-->
            <div v-if="indexData.safeInfo" class="deviceWatch indexL2 indexL2SP_YH1080 bdbox commonTitlebox comBoderAndBg" style="margin-top:10px;background: linear-gradient(180deg, #05103c7a 20%, rgba(5,16,60,0.0500) 44%, rgba(5,16,60,0.4800) 61%, #05103C 100%);">
              <div class="main1 flex-row" style="width:550px;">
                <div class="mod1 flex-col"></div>
                <span class="txt1">安全态势</span>
                <span class="word1">Security&nbsp;situation</span>
                <div class="mod2 flex-col" style="margin-left:229px;"></div>
                <div class="mod3 flex-col"></div>
              </div>

              <div class="linerStyle" style="width:530px;margin-top:5px;margin-left:16px;"></div>
              <div class="speedpT clearfix">
                <div class="speedpEach diffe fl" style="background: #1f273d;width:174px;">
                  <div class="gxgTitle rela">
                    <span class="nnames fl">危化品库</span>
                    <!-- <i class="fl" style="height: 18px;width: 4px;background: #03FF1CFF;display: inline-block;margin-top:3px;"></i><span class="fl vvals" style="color: #fff;font-size: 12px;line-height: 20px;margin-left: 5px;margin-top:3px;">安全</span> -->
                  </div>
                  <div class="clearfix">
                    <div class="fl hhadBg" style="font-size:12px;width:80px;height:30px;margin-top:8px;margin-left:20px;"><span>{{indexData.safeInfo.hazchem.envStatus}}</span></div>
                    <i class="fl" :class="{ 'redLine':indexData.safeInfo.hazchem.status !== '正常', 'greenLine':indexData.safeInfo.hazchem.status == '正常' }" style="height: 18px;width: 4px;display: inline-block;margin-top:8px;"></i><span class="fl vvals" style="color: #fff;font-weight: 700;line-height: 20px;margin-left: 5px;margin-top:8px;font-size:12px;">{{indexData.safeInfo.hazchem.status}}</span>
                  </div>

                  <div class="gxgTitle rela">
                    <span class="nnames fl">固废管理</span>
                    <!-- <i class="fl" style="height: 18px;width: 4px;background: #03FF1CFF;display: inline-block;margin-top:3px;"></i><span class="fl vvals" style="color: #fff;font-size: 12px;line-height: 20px;margin-left: 5px;margin-top:3px;">安全</span> -->
                  </div>
                  <div class="clearfix">
                    <div class="fl hhadBg" style="font-size:12px;width:80px;height:30px;margin-top:8px;margin-left:20px;"><span>{{indexData.safeInfo.solidWaste.envStatus}}</span></div>
                    <i class="fl" :class="{ 'redLine':indexData.safeInfo.solidWaste.status !== '正常', 'greenLine':indexData.safeInfo.solidWaste.status == '正常' }" style="height: 18px;width: 4px;display: inline-block;margin-top:8px;"></i><span class="fl vvals" style="color: #fff;font-weight: 700;line-height: 20px;margin-left: 5px;margin-top:8px;font-size:12px;">{{indexData.safeInfo.solidWaste.status}}</span>
                  </div>
                </div>
                <div class="speedpEach diffe fl" style="background: #1f273d;width:180px;margin:0 5px;">
                  <div class="gxgTitle rela">
                    <span class="nnames fl" style="margin-right:56px;">当月处理废气</span>
                    <i class="fl" :class="{ 'redLine':indexData.safeInfo.wasteGas.status !== '正常', 'greenLine':indexData.safeInfo.wasteGas.status == '正常' }" style="height: 18px;width: 4px;display: inline-block;margin-top:3px;"></i><span class="fl vvals" style="color: #fff;font-size: 12px;line-height: 20px;margin-left: 5px;margin-top:3px;">{{indexData.safeInfo.wasteGas.status}}</span>
                  </div>
                  
                  <div class="hqbox clearfix" style="margin-top:10px;margin-bottom:15px;">
                    <div class="fl" style="height:52px;width:52px;margin-left:10px;"><img style="width:100%;height:100%;" src="../assets/ssd22.png"></div>
                    <p class="fl">{{indexData.safeInfo.wasteGas.dayValue}}{{indexData.safeInfo.wasteGas.unit}}</p>
                  </div>
                  <div style="height: 27px;background: rgba(9,19,43,0.4000);backdrop-filter: blur(10px);font-weight: 500;font-size:12px;color:#fff;line-height:27px;text-indent:10px;">当月处理废气{{indexData.safeInfo.wasteGas.monthValue}}{{indexData.safeInfo.wasteGas.unit}}</div>
                </div>
                <div class="speedpEach diffe fl" style="background: #1f273d;width:180px;">
                  <div class="gxgTitle rela">
                    <span class="nnames fl" style="margin-right:56px;">当日处理污水</span>
                    <i class="fl" :class="{ 'redLine':indexData.safeInfo.wasteWater.status !== '正常', 'greenLine':indexData.safeInfo.wasteWater.status == '正常' }" style="height: 18px;width: 4px;display: inline-block;margin-top:3px;"></i><span class="fl vvals" style="color: #fff;font-size: 12px;line-height: 20px;margin-left: 5px;margin-top:3px;">{{indexData.safeInfo.wasteWater.status}}</span>
                  </div>
                  
                  <div class="hqbox clearfix" style="margin-top:10px;margin-bottom:15px;">
                    <div class="fl" style="height:52px;width:52px;margin-left:10px;"><img style="width:100%;height:100%;" src="../assets/ssd11.png"></div>
                    <p class="fl">{{indexData.safeInfo.wasteWater.dayValue}}{{indexData.safeInfo.wasteWater.unit}}</p>
                  </div>
                  <div style="height: 27px;background: rgba(9,19,43,0.4000);backdrop-filter: blur(10px);font-weight: 500;font-size:12px;color:#fff;line-height:27px;text-indent:10px;">当月处理污水{{indexData.safeInfo.wasteWater.monthValue}}{{indexData.safeInfo.wasteWater.unit}}</div>
                </div>
              </div>
              <div class="speedpB clearfix">
                <div v-for="(item, index) in indexData.safeInfo.gasLeakageList" :key="index" class="cm_speedNeedle_box fl rela mgrer">
                  <div class="speedbox">
                    <div class="blockColor yi"></div>
                    <div class="blockColor er"></div>
                    <div class="blockColor san"></div>
                    <div class="blockColor si"></div>
                  </div>
                  <div class="needlebox">
                    <div class="needleIcon needleIconComm" :class="'needleIcon' + Math.trunc(item.rate * 100)"></div>
                  </div>
                  <div class="nn3name abs">
                    <p>{{item.value}}{{item.unit}}</p>
                    <span class="layout">{{item.gasName}}</span>
                  </div>
                </div>

              </div>
              
            </div>
            
          </div>

          <div v-show="vshowFlag" class="rightMain fr" :class="{ 'animate__animated animate__slideInRight':openStatus, 'animate__animated animate__fadeInRight':closeStatus }">
            <!--1-->
            <div class="safeStatus bdbox commonTitlebox comBoderAndBg rela fr clearfix" style="width:570px;height:448px;">
              <div class="main1 flex-row" style="width:545px;">
                <div class="mod1 flex-col"></div>
                <span class="txt1">设备态势</span>
                <span class="word1">Equipment&nbsp;situation</span>
                <div class="mod2 flex-col" style="margin-left:229px;"></div>
                <div class="mod3 flex-col"></div>
              </div>
              <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:530px;margin-bottom:10px;"></div>
              <div class="menuBtn3box">
                <ul v-if="indexData.deviceInfo" class="clearfix">
                  <li class="fl dsd2" style="width:120px;margin-right:17px;margin-left:13px;margin-top:0;">
                    <p>接入设备数</p>
                    <h3 class="txtc">{{indexData.deviceInfo.totalCount}}</h3>
                  </li>
                  <li class="fl dsd2" style="width:120px;margin-right:17px;margin-top:0;">
                    <p>运行设备数</p>
                    <h3 class="txtc">{{indexData.deviceInfo.runingCount}}<span style="font-size:12px;font-weight:400;padding-left:5px;">{{indexData.deviceInfo.runingRate}}</span></h3>
                  </li>
                  <li class="fl dsd2" style="width:120px;margin-right:17px;margin-top:0;">
                    <p>故障设备数</p>
                    <h3 class="txtc">{{indexData.deviceInfo.failureCount}}<span style="font-size:12px;font-weight:400;padding-left:5px;">{{indexData.deviceInfo.failureRate}}</span></h3>
                  </li>
                  <li class="fl dsd2" style="width:120px;margin-top:0;">
                    <p>异常设备数</p>
                    <h3 class="txtc">{{indexData.deviceInfo.exceptionCount}}<span style="font-size:12px;font-weight:400;padding-left:5px;">{{indexData.deviceInfo.exceptionRate}}</span></h3>
                  </li>
                </ul>

                <!--d3d-->
                <div class="nandChartbox fl" style="width:200px;height:200px;margin-top:10px;">
                  <div id="nandMain2" style="width:200px;height:200px;"></div>
                </div>
                <div v-if="indexData.deviceInfo" class="nandBox-r fl" style="margin-top:10px;">
                  <div class="nandBox-rT clearfix"><div class="no">序号</div><div class="time">时间</div><div class="name">点位名称</div><div class="status">状态</div><div class="op">操作</div></div>
                  <div class="nandBox-rB">
                    <ul>
                      <li class="clearfix" v-for="(item, index) in indexData.deviceInfo.alarmList" :key="index">
                        <div class="no">{{index+1}}</div><div class="time eplise">{{dayjs(item.time).format('YYYY-MM-DD HH:mm')}}</div><div class="name eplise">{{item.name}}</div><div class="status">{{item.statusName}}</div><div class="op">确认</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div v-if="indexData.deviceInfo" class="b2bBotombox clearfix" style="margin-top:14px;">
                  <ul>
                    <li v-for="(item, index) in indexData.deviceInfo.businessItems" :key="index" class="rela" style="background:#09132B66;width:100px;height:95px;">
                      <div class="mktitles" style="height:28px;line-height:28px;color:#fff;font-size:14px;text-indent:10px;font-weight:500;border-bottom:1px solid rgba(5,16,60,0.6000);">{{item.itemName}}</div>
                      <div class="txtc" style="height:47px;line-height:47px;font-size: 20px;color:#32C5FFFF;font-size:20px;font-weight:bold;">{{item.completed}}/{{item.total}}</div>
                      <div class="abs" style="height:24px;line-height:24px;color:#fff;font-size:12px;text-indent:10px;background: rgba(9,19,43,0.4000);left:0;bottom:0;width:100%;">{{item.minutes}}分钟</div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!--左侧悬浮菜单-->
              <div class="cmABSMenu cmABSMenuv2 abs bdbox clearfix needHIDE" style="height:52px;">
                  <div class="ecmns fr bdbox" @click="handleOpenFold('close')"><span>收起</span></div>
              </div>
            </div>

            <!--4-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg fr" style="width:570px;height:235px;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">能耗态势</span>
                  <span class="word1">Energy&nbsp;consumption&nbsp;statistics</span>
                  <div class="mod2 flex-col" style="margin-left:229px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:530px;"></div>
            
                <el-carousel class="hwcdBoxTAB shezhiBox" height="210px" direction="horizontal" :autoplay="false">
                  <el-carousel-item>
                    <div id="echrMain" style="width: 545px;height: 180px;"></div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <div id="echrMain_b" style="width: 545px;height: 180px;"></div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <div id="echrMain_c" style="width: 545px;height: 180px;"></div>
                  </el-carousel-item>
                </el-carousel>

            </div>

            <!--5-->
            <div class="energyStatistic bdbox commonTitlebox comBoderAndBg fr" style="width:570px;height:265px;">
                <div class="main1 flex-row" style="width:545px;">
                  <div class="mod1 flex-col"></div>
                  <span class="txt1">通行态势</span>
                  <span class="word1">current&nbsp;situation</span>
                  <div class="mod2 flex-col" style="margin-left:229px;"></div>
                  <div class="mod3 flex-col"></div>
                </div>
                <div class="linerStyle" style="margin-top:5px;margin-left:16px;width:530px;"></div>
                <div id="echrMain3Bar" style="width: 545px;height: 210px;"></div>
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

      <!--dialog(气相质谱联用仪)-->
      <el-dialog
        title=""
        :visible.sync="dialogVisibleAnother_gas"
        :before-close="handleCloseLayerAnother_gas"
        custom-class="dzDialogStyle rela dzDialogStyleNearby dzDialogStyleNearbyGas">
        <div class="dzDialogHeader clearfix abs">
          <div class="fl"></div>
          <div class="rightBBar">
            气相质谱联用仪
          </div>
        </div>
        <div class="clearfix" style="padding-left:23px;">

          <div class="vs-mr fl rela">
            <div class="aboveRings abs"></div>
            <span class="vsmrname abs" style="left:33%;bottom:39px;">在线时长</span>
            <!-- <div class="ring-chart" id="incomeSVG" style="--ring-percent:76">
              <svg viewBox="-50 -50 100 100">
                <circle cx="0" cy="0" r="50%"/> 
              </svg>
            </div> -->
            <div class="echrMainBingBox abs">
                <div id="echrMainBing1Gas" style="width:110px;height:110px;"></div>
            </div>
          </div>

          <!--right box-->
          <div class="dzDialogStyleNearbyGasRight fr" style="width:284px;height:180px;padding:10px;background:rgba(9, 19, 43, 0.6);border-radius:5px;padding-bottom:0;">
            <!--a-->
            <div class="clearfix">
              <div class="fl" style="width:90px;height:55px;border-bottom: 2px solid rgba(5, 16, 60, 1);">
                <div class="hhGasBG">运行状态</div>
                <div style="margin-left:10px;padding:6px 0;line-height:15px;color:rgba(50, 197, 255, 1);font-size:12px;">
                  运行
                  <!-- <el-switch
                    :width="30"
                    v-model="swValue3Gas"
                    active-color="#00ccff"
                    inactive-color="#dddfe6">
                  </el-switch> -->
                </div>
              </div>

              <div class="fr" style="width:170px;height:55px;border-bottom: 2px solid rgba(5, 16, 60, 1);">
                <div class="hhGasBG">型号</div>
                <div style="margin-left:10px;padding:6px 0;line-height:15px;color:rgba(50, 197, 255, 1);font-size:12px;">6890-5973</div>
              </div>
            </div>
            <!--b-->
            <div class="clearfix" style="margin-top:6px;margin-bottom:6px;">
              <div class="fl" style="width:90px;height:55px;border-bottom: 2px solid rgba(5, 16, 60, 1);">
                <div class="hhGasBG">品牌</div>
                <div style="margin-left:10px;font-size:12px;line-height:26px;color:rgba(50, 197, 255, 1);">AGILENT</div>
              </div>

              <div class="fr" style="width:170px;height:55px;border-bottom: 2px solid rgba(5, 16, 60, 1);">
                <div class="hhGasBG">位置</div>
                <div style="margin-left:10px;padding:6px 0;line-height:15px;color:rgba(50, 197, 255, 1);font-size:12px;">北-512气相质普室</div>
              </div>
            </div>
            <!--c-->
            <div class="clearfix">
              <div class="fl" style="width:90px;height:55px;">
                <div class="hhGasBG">编号</div>
                <div style="margin-left:10px;font-size:12px;line-height:26px;color:rgba(50, 197, 255, 1);">0001</div>
              </div>

              <div class="fr" style="width:170px;height:55px;">
                <div class="hhGasBG">设备异常告警状态</div>
                <div style="margin-left:10px;padding:6px 0;line-height:15px;color:rgba(50, 197, 255, 1);font-size:12px;">正常</div>
              </div>
            </div>
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
      percentage: [0,0,0,0,0],
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
      ],
      indexData: {},
    }
  },
  created () {},
  async mounted () {
    window.vue = this
    await this.queryIndexData()
    this.setMainWrapperHeight()
    setTimeout(this.executeProgressBar, 1000)
    this.handleOpenFold('open')
  },
  watch: {
    'dialogVisibleAnother_gas': function (val) {
      this.$nextTick(() => {
        if (val) this.myEchartsBingGas()
      })
    }
  },
  methods: {
    creatStyleLess (rate) {
      let nod = document.createElement('style')
      /**
       * rate: 
       *    0%   ---> -135deg
       *    100% ---> 135deg
       *    50% ---> 0deg (12点钟方向)
       */
      let offsetRate = rate - 0.5
      // let str = `
      //   .keyframesFunction (@name, @content){
      //     @keyframes @name{
      //       0% {transform: rotate(-135deg);}
      //       100% {transform: rotate(@content);}
      //     }
      //   }
      //   .needleIcon${Math.trunc(rate*100)}{
      //     animation: needleIcon${Math.trunc(rate*100)} 2s forwards;
      //     .keyframesFunction(needleIcon${Math.trunc(rate*100)}, ${offsetRate * 270}deg); // 关键帧传参
      //   }
      // `
      let str = `
      .needleIcon${Math.trunc(rate * 100)}{
        animation: dialSpin${Math.trunc(rate * 100)}p 3s forwards;
      }
      @keyframes dialSpin${Math.trunc(rate * 100)}p {
        0% {transform: rotate(-135deg);}
        100% {transform: rotate(${offsetRate * 270}deg);}
      }`
      nod.type='text/css'; 
      if(nod.styleSheet){         //ie下  
      　　nod.styleSheet.cssText = str;  
      } else {  
      　　nod.innerHTML = str;       //或者nod.appendChild(document.createTextNode(str))  
      }  
      document.getElementsByTagName('head')[0].appendChild(nod);
    },
    queryIndexData () {
      return new Promise((resolve, reject) => {
        this.$axios.get('/api/digital/getHomeData').then(({data}) => {
          if (data.code == 200) {
            this.indexData = data.data
            this.indexData.safeInfo && this.indexData.safeInfo.gasLeakageList.forEach(item => this.creatStyleLess(item.rate));
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
    increase (index, percent) {
      let _timer = setInterval(() => {
        this.percentage[index] += 10
        if (this.percentage[index] > percent) {
          this.percentage[index] = percent;
          clearInterval(_timer)
        }
      }, 0)
    },
    executeProgressBar () {
      this.indexData.businessInfo && this.indexData.businessInfo.items.forEach((v, index) => this.increase(index, (v.completed/v.total)*100))
      this.$forceUpdate()
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
    dynamicSetSvgPercent (id, percent) {
      let _incomeSVG = document.getElementById(id)
      _incomeSVG.style.setProperty('--ring-percent', percent, 'important')
    },
    handleOpenFold (v) {
      this.hoverStatus = null
      this.hoverStatus2 = null
      if (v == 'open') {
        this.vshowFlag = true
        this.openStatus = true
        this.closeStatus = false
        this.myEcharts();
        this.myEcharts_b();
        this.myEcharts_c();
        this.myEcharts3Bar();
        this.myEchartsBingv2();
        this.myEchartsNanding2();
        this.myEchartsNanding();
      } else {
        this.openStatus = false
        this.closeStatus = true
        setTimeout(() => {
          this.vshowFlag = false
        },1000)
      }
      this.executeProgressBar()
      let _od1 = document.getElementById('drBar1')
      let _od2 =  document.getElementById('drBar2')
      let _od3 = document.getElementById('drBar3')
      setTimeout(() => {
        _od1.style.height = this.indexData.spacePerson && this.indexData.spacePerson.someoneRate
        _od2.style.height = this.indexData.spacePerson && this.indexData.spacePerson.nobodyRate
        _od3.style.height = this.indexData.spacePerson && this.indexData.spacePerson.exceptionRate
      }, 500)
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
    myEchartsNanding2 () {
      // 通过id获取获取画布
      var dom = document.getElementById("nandMain2");
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
          legend: {
              left: 'center',
              icon: 'circle',
              itemWidth: 7,
              itemHeight: 7,
              top: 'bottom',
              textStyle: {
                color: '#fff'
              },
              data: this.indexData.deviceInfo && this.indexData.deviceInfo.levelList.map(v => v.typeName)
          },
          series: [
              {
                  name: '', // 对应{a}（系列名称）
                  type: 'pie',
                  radius: [10, 85],
                  center: ['50%', '45%'],
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
                  data: this.indexData.deviceInfo && this.indexData.deviceInfo.levelList.map((v, i) => {
                    let colorArr = ['#4B7DF8FF', '#FF6F6FFF', '#FD9544FF']
                    let {typeCode, typeName, typeCount, typeRate} = v
                    return {
                      value: typeCount, 
                      name: typeName,
                      itemStyle: { color: colorArr[i] }
                    }
                  })
                  // {typeCode: "level1", typeName: "一级", typeCount: 0, typeRate: "0"}
                  // data: [
                  //     {value: 60, name: '提示', itemStyle: { color: '#4B7DF8FF' }},
                  //     {value: 15, name: '严重', itemStyle: { color: '#FF6F6FFF' }},
                  //     {value: 30, name: '一般', itemStyle: { color: '#FD9544FF' }},
                  // ]
              }
          ]
      };
      ;
      if (option && typeof option === "object") {
          myChart.setOption(option, true);
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
          legend: {
              left: 'center',
              icon: 'circle',
              itemWidth: 7,
              itemHeight: 7,
              top: 'bottom',
              textStyle: {
                color: '#fff'
              },
              data: this.indexData.securityInfo && this.indexData.securityInfo.typeList.map(v => v.typeName)
          },
          series: [
              {
                  name: '', // 对应{a}（系列名称）
                  type: 'pie',
                  radius: [10, 80],
                  center: ['50%', '50%'],
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
                  // data: [
                  //     {value: 60, name: '视频', itemStyle: { color: '#4B7DF8FF' }},
                  //     {value: 15, name: '入侵', itemStyle: { color: '#FF6F6FFF' }},
                  //     {value: 30, name: '消防', itemStyle: { color: '#FD9544FF' }},
                  //     {value: 40, name: '门禁', itemStyle: { color: '#21BF6BFF' }},
                  //     {value: 35, name: '访客', itemStyle: { color: '#4BD5F7FF' }}
                  // ]
                  data: this.indexData.securityInfo && this.indexData.securityInfo.typeList.map((v, i) => {
                    let {typeCount, typeName} = v
                    let colorArr = ['#4B7DF8FF', '#FF6F6FFF', '#FD9544FF', '#21BF6BFF', '#4BD5F7FF']
                    return {
                      value: typeCount, name: typeName, itemStyle: { color: colorArr[i] }
                    }
                  })
              }
          ]
      };
      ;
      if (option && typeof option === "object") {
          myChart.setOption(option, true);
      }
    },
    myEchartsBingv2 () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing1v2'));
      // 指定图表的配置项和数据
      let data = this.indexData.businessInfo && this.indexData.businessInfo.completedRate;
      let option = {
        title: {
          text:'',//主标题文本
          subtext:'',//副标题文本
          left:'21%',
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
                  color: "#32C5FFFF",
                }
              },
              {
                value: 100-data,
                name: "",
                itemStyle: {
                  color: "#244966FF",
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
    myEchartsBingGas () {
      // 通过id获取获取画布
      const myChart = echarts.init(document.getElementById('echrMainBing1Gas'));
      // 指定图表的配置项和数据
      let data = 80;
      let option = {
        title: {
          text:'1200h',//主标题文本
          subtext:'',//副标题文本
          left:'center',
          top:'30%',
          textStyle:{
            fontWeight: 'bold',
            fontSize: 20,
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
          // formatter: "{d}h",
          formatter: "1200h",
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
                name: "在线时长",
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
    myEcharts () {
      var myChart = echarts.init(document.getElementById('echrMain'))
      var option = {
        title: {
          text: '',
          subtext: this.indexData.energyInfo && this.indexData.energyInfo[0].unit,
          left: 10,
          subtextStyle:{
            color:"#32c5ff"
          }
        },
        subtextStyle: {
          left: 'right'
        },
        grid: {
          left: '3%',
          top: '20%',
          right: '0.5%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {},
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: '8',
          // data: [this.indexData.energyInfo && this.indexData.energyInfo[0].name],
          data: [],
          textStyle: {
            color: '#32C5FF'
          }
        },
        xAxis: [{
          data: this.indexData.energyInfo && this.indexData.energyInfo[0].list.map(v => v.month),
          axisTick:{
            show:false, 
            lineStyle:{color:'#183466'}    
          },
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
                color:'#183466',
                width:1,
            }
          },
          splitLine: { 
            show: true,
              lineStyle: {
                  color: '#183466',
              },
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#32C5FF', 
              fontSize: '12', 
            }
          },
          splitLine: {    
            lineStyle: {
              color: '#183466',
              type: 'solid'    
            },
            show: true 
          }
        }],
        series: [
          {
            name: this.indexData.energyInfo && this.indexData.energyInfo[0].name,
            type: 'line',
            smooth: true,
            data: this.indexData.energyInfo && this.indexData.energyInfo[0].list.map(v => v.value),
            itemStyle: {
              // 设置线条上点的颜色（和图例的颜色）
              normal: {
                color: '#64c0f9',
              },
            },
            lineStyle: {// 设置线条的style等
              normal: {
                color: '#64c0f9', // 折线线条颜色
              },
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    myEcharts_b () {
      var myChart = echarts.init(document.getElementById('echrMain_b'))
      var option = {
        title: {
          text: '',
          subtext: this.indexData.energyInfo && this.indexData.energyInfo[1].unit,
          left: 10,
          subtextStyle:{
            color:"#32c5ff"
          }
        },
        subtextStyle: {
          left: 'right'
        },
        grid: {
          left: '3%',
          top: '20%',
          right: '0.5%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {},
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: '8',
          // data: [this.indexData.energyInfo && this.indexData.energyInfo[1].name],
          data: [],
          textStyle: {
            color: '#32C5FF'
          }
        },
        xAxis: [{
          data: this.indexData.energyInfo && this.indexData.energyInfo[1].list.map(v => v.month),
          axisTick:{
            show:false, 
            lineStyle:{color:'#183466'}    
          },
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
                color:'#183466',
                width:1,
            }
          },
          splitLine: { 
            show: true,
              lineStyle: {
                  color: '#183466',
              },
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#32C5FF', 
              fontSize: '12', 
            }
          },
          splitLine: {    
            lineStyle: {
              color: '#183466',
              type: 'solid'    
            },
            show: true 
          }
        }],
        series: [
          {
            name: this.indexData.energyInfo && this.indexData.energyInfo[1].name,
            type: 'line',
            smooth: true,
            data: this.indexData.energyInfo && this.indexData.energyInfo[1].list.map(v => v.value),
            itemStyle: {
              // 设置线条上点的颜色（和图例的颜色）
              normal: {
                color: '#64c0f9',
              },
            },
            lineStyle: {// 设置线条的style等
              normal: {
                color: '#64c0f9', // 折线线条颜色
              },
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    myEcharts_c () {
      var myChart = echarts.init(document.getElementById('echrMain_c'))
      var option = {
        title: {
          text: '',
          subtext: this.indexData.energyInfo && this.indexData.energyInfo[2].unit,
          left:10,
          subtextStyle:{
            color:"#32c5ff"
          }
        },
        subtextStyle: {
          left: 'right'
        },
        grid: {
          left: '3%',
          top: '20%',
          right: '0.5%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {},
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: '8',
          // data: [this.indexData.energyInfo && this.indexData.energyInfo[2].name],
          data: [],
          textStyle: {
            color: '#32C5FF'
          }
        },
        xAxis: [{
          data: this.indexData.energyInfo && this.indexData.energyInfo[2].list.map(v => v.month),
          axisTick:{
            show:false, 
            lineStyle:{color:'#183466'}    
          },
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
                color:'#183466',
                width:1,
            }
          },
          splitLine: { 
            show: true,
              lineStyle: {
                  color: '#183466',
              },
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#32C5FF', 
              fontSize: '12', 
            }
          },
          splitLine: {    
            lineStyle: {
              color: '#183466',
              type: 'solid'    
            },
            show: true 
          }
        }],
        series: [
          {
            name: this.indexData.energyInfo && this.indexData.energyInfo[2].name,
            type: 'line',
            smooth: true,
            data: this.indexData.energyInfo && this.indexData.energyInfo[2].list.map(v => v.value),
            itemStyle: {
              // 设置线条上点的颜色（和图例的颜色）
              normal: {
                color: '#64c0f9',
              },
            },
            lineStyle: {// 设置线条的style等
              normal: {
                color: '#64c0f9', // 折线线条颜色
              },
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    myEcharts3Bar () {
      var myChart = echarts.init(document.getElementById('echrMain3Bar'))
      
      var option = {
        color: ['#4BD5F7FF','#4B7CF6FF', '#2A5AE2FF'],
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
          dimensions: ['time', '访客', '门禁', '进出场车辆'],
          source: this.indexData.gateInfo.map(v => {
            let {items} = v
            let s = {}
            for (let inner of Object.values(items)) {
              s['time'] = this.dayjs(v.date).format('YYYY-MM-DD')
              s[inner.typeName] = inner.count
            }
            return s
          })
          
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
.indexBox .redLine{
  background: #FF3A3BFF;
}
.indexBox .greenLine{
  background: #03FF1CFF;
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
.indexL2{
  width:570px!important;
  height: 300px!important;
}
.indexL2_YH1080{
  height: 268px!important;
}
.indexL2SP_YH1080{
  height: 290px!important;
}
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
