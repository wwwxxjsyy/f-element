--报表
<html>
  <div class="original">
    <div class="card_div">
      <!-- 搜索条件 -->
      <!-- 按钮部分 -->

      <div class="original_top">
        <div class="original_top_son">
          <span> <!-- 进出口标志 -->{{ $t("page.ieType") }}：</span>
          <SelectComAll
            @change="IEFlagFun"
            :dtype ="59"
            :update="handId"
            :title="IEFlagId"
          ></SelectComAll>
        </div>
        <div class="original_top_son">
          <span> <!-- 日期类型 -->{{ $t("page.DateType") }}：</span>
          <el-select
            clearable
            v-model="searchQuery.DateType"
            :placeholder="$t('button.select')"
            style="width: 100%;"
          >
            <el-option
              v-for="item in citiesDateType"
              :key="item.key"
              :label="item.name"
              :value="item.key"
            >
              <span style="float: left">{{ item.key }}</span>
              <span style="float: right">{{ item.name }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="original_top_son">
          <span> <!-- 日期范围 -->{{ $t("page.daterange") }}：</span>
          <el-date-picker
            v-model="time"
            type="daterange"
            :startPlaceholder="$t('button.select')"
            :endPlaceholder="$t('button.select')"
            size="small"
          ></el-date-picker>
          <!--:picker-options="pickerOptions" @change='selectData' -->
        </div>
        <div class="original_top_son">
          <span> <!-- 工作编号 -->{{ $t("page.workno") }}：</span>
          <el-input
            v-model="searchQuery.JobNo"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.workno')"
          />
        </div>
      </div>
      <div class="original_top">
        <div class="original_top_son">
          <span> <!-- 海关编号 -->{{ $t("custom.customsCoding") }}：</span>
          <el-input
            v-model="searchQuery.EntryId"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.customsCoding')"
          />
        </div>
        <div class="original_top_son">
          <span>
            <!-- 报关单统一编号 -->{{
              $t("page.customsDeclarationNumber")
            }}：</span
          >
          <el-input
            v-model="searchQuery.SeqNo"
            clearable
            class="filter-item"
            size="small"
            :placeholder="
              $t('button.placeholder') + $t('page.customsDeclarationNumber')
            "
          />
        </div>

        <div class="original_top_son">
          <span>
            <!-- 境外收发货人名称 -->{{
              $t("page.nameOfOverseasConsignee")
            }}：</span
          >
          <el-input
            v-model="searchQuery.OverseasConsignorEname"
            clearable
            class="filter-item"
            size="small"
            :placeholder="
              $t('button.placeholder') + $t('page.nameOfOverseasConsignee')
            "
          />
        </div>
        <div class="original_top_son">
          <span> <!-- 境内收发货人名称 -->{{ $t("page.domesticName") }}：</span>
          <el-input
            v-model="searchQuery.TradeName"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.domesticName')"
          />
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="collapseFlag">
          <div class="original_top">
            <div class="original_top_son">
              <span> <!-- 商品料号 -->{{ $t("page.materials") }}：</span>
              <el-input
                v-model="searchQuery.PartNumber"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.materials')"
              />
            </div>
            <div class="original_top_son">
              <span> <!-- 商品名称 -->{{ $t("page.gname") }}：</span>
              <el-input
                v-model="searchQuery.GName"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.gname')"
              />
            </div>
            <div class="original_top_son">
              <span> <!-- 商品编码 -->{{ $t("page.gcode") }}：</span>
              <el-input
                v-model="searchQuery.CodeTS"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.gcode')"
              />
            </div>
            <div class="original_top_son">
              <span> <!-- 申报地海关 -->{{ $t("custom.CitiesLandId") }}：</span>
              <SelectComAll
                @change="handleLand"
                :flagurl ="'customer'"
                :localsearch = "true"
                :update="handId"
                :title="CitiesLandId"
              ></SelectComAll>
            </div>
          </div>
          <div class="original_top">
            <div class="original_top_son">
              <span> <!-- 运输方式 -->{{ $t("page.transportation") }}：</span>
              <SelectComAll
                @change="handleTrade"
                :flagurl ="'transportation'"
                :localsearch = "true"
                :update="handId"
                :title="tradeId"
              ></SelectComAll>
            </div>
            <div class="original_top_son">
              <span> <!-- 监管方式 -->{{ $t("page.TradeMode") }}：</span>
              <SelectComAll
                @change="regulatoryFun"
                :flagurl ="'Regulatory'"
                :localsearch = "true"
                :update="handId"
                :title="regulatoryId"
              ></SelectComAll>
            </div>
            <div class="original_top_son">
              <span>
                <!-- 核注清单编号 -->{{
                  $t("page.annotationBondInvtNo")
                }}：</span
              >
              <el-input
                v-model="searchQuery.BondInvtNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="
                  $t('button.placeholder') + $t('page.annotationBondInvtNo')
                "
              />
            </div>
            <div class="original_top_son">
              <span>
                <!-- 核注清单统一编号 -->{{
                  $t("page.nuclearChecklist")
                }}：</span
              >
              <el-input
                v-model="searchQuery.InvSeqNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="
                  $t('button.placeholder') + $t('page.nuclearChecklist')
                "
              />
            </div>
          </div>
          <div class="original_top">
            <div class="original_top_son">
              <span> <!-- 提运单号 -->{{ $t("page.mention") }}：</span>
              <el-input
                v-model="searchQuery.BillNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.mention')"
              />
            </div>
            <div class="original_top_son">
              <span> <!-- 发票号 -->{{ $t("page.invoiceNo") }}：</span>
              <el-input
                v-model="searchQuery.InvoiceNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.invoiceNo')"
              />
            </div>
            <div class="original_top_son">
              <span>
                <!-- 备案号 -->{{
                  $t("custom.internetContentProvider")
                }}：</span
              >
              <el-input
                v-model="searchQuery.ManualNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="
                  $t('button.placeholder') +
                    $t('custom.internetContentProvider')
                "
              />
            </div>
            <div class="original_top_son">
              <span> <!-- 申报单位名称 -->{{ $t("page.dclEtpsNm") }}：</span>
              <el-input
                v-model="searchQuery.AgentName"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.dclEtpsNm')"
              />
            </div>
          </div>
          <div class="original_top">
            <div class="original_top_son">
              <span> <!-- 原产国 -->{{ $t("page.originCountry") }}：</span>
              <SelectComAll
                 :columns="'four'"
                 :flagurl="'country'"
				 :localsearch = "true"
                 :update="handId"
                 @change="OriginCountryFun"
                :title="OriginCountryId"
              ></SelectComAll>
            </div>
            <div class="original_top_son">
              <span> <!-- 目的国 -->{{ $t("page.destinationCountry") }}：</span>
              <SelectComAll
                :columns="'four'"
                 :flagurl="'country'"
				 :localsearch = "true"
                 :update="handId"
                 @change="DestinationCountryFun"
                :title="DestinationCountryId"
              ></SelectComAll>
            </div>
            <div class="original_top_son">
              <span> <!-- 订单/合同号 -->{{ $t("page.orderNo") }}：</span>
              <el-input
                v-model="searchQuery.OrderNo"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.orderNo')"
              />
            </div>
            <div class="original_top_son">
              <span>{{ $t("page.snCode") }}：</span>
              <!-- SN号 -->
              <el-input
                v-model="searchQuery.SerialNumber"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.snCode')"
              />
            </div>
          </div>
        </div>
      </el-collapse-transition>
      <div class="collapse">
        <span @click="collapseFlag = !collapseFlag">
          <span v-show="!collapseFlag"
            ><i class="el-icon-arrow-down"></i>{{ $t("page.more") }}
          </span>
          <span v-show="collapseFlag"
            ><i class="el-icon-arrow-up"></i> {{ $t("page.hide") }}</span
          >
        </span>
      </div>

      <div class="original_btn">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleNewSearch"
          v-permission="['Otech.Ccs.ReportManagement.PartNumber.GetList']"
          >{{ $t("button.search")
          }}<!-- 查询 -->
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-download"
          :loading ="load"
          @click="handleTolead"
          v-permission="['Otech.Ccs.ReportManagement.PartNumber.Export']"
          >{{ $t("button.download")
          }}<!-- 导出 -->
        </el-button>
      </div>
      <!-- 表格 -->
      <div class="out_table">
        <el-table
          :data="tableData"
          style="width: 100%"
          element-loading-text="正在查询中。。。"
          v-loading="listLoading"
          tooltip-effect="light"
          :border="true"
          height="454px"
        >
          <!-- label="原始单证表头" -->
          <el-table-column :label="$t('page.originalDocumentHeader')">
            <el-table-column
              prop="spJOBNO"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.workno'))"
              :label="$t('page.workno')"
            ></el-table-column>
            <!-- label="工作编号" -->
            <el-table-column
              prop="spINTERNALID"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.innderId'))"
              :label="$t('page.innderId')"
            ></el-table-column>
            <!-- label="内部编号" -->
            <el-table-column
              prop="spTransMode"
              show-overflow-tooltip
              :label="$t('page.clinchWay')"
              :min-width="$flexColumnWidth($t('page.clinchWay'))"
            ></el-table-column>
            <!-- label="成交方式" -->
            <el-table-column
              prop="spFeeMark"
              show-overflow-tooltip
              :label="$t('page.FeeMark')"
              :min-width="$flexColumnWidth($t('page.FeeMark'))"
            ></el-table-column>
            <!-- label="运费标记" -->
            <el-table-column
              prop="spFeeRate"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.FeeRate') + '/' + $t('page.rate'))"
              align="right"
              :label="$t('page.FeeRate') + '/' + $t('page.rate')"
            ></el-table-column>
            <!-- label="运费／率" -->
            <el-table-column
              prop="spFeeCurr"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.FeeCurr'))"
              :label="$t('page.FeeCurr')"
            ></el-table-column>
            <!-- label="运费币制" -->
            <el-table-column
              prop="spInsurMark"
              show-overflow-tooltip
              :label="$t('page.InsurMark')"
              :min-width="$flexColumnWidth($t('page.InsurMark'))"
            ></el-table-column>
            <!-- label="保险费标记" -->
            <el-table-column
              prop="spInsurRate"
              show-overflow-tooltip
              align="right"
              :label="$t('page.InsurRate') + '/' + $t('page.rate')"
              :min-width="$flexColumnWidth($t('page.InsurRate') + '/' + $t('page.rate'))"
            ></el-table-column>
            <!-- label="保险费／率" -->
            <el-table-column
              prop="spInsurCurr"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.InsurCurr'))"
              :label="$t('page.InsurCurr')"
            ></el-table-column>
            <!-- label="保险费币制" -->
            <el-table-column
              prop="spOtherMark"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.OtherMark'))"
              :label="$t('page.OtherMark')"
            ></el-table-column>
            <!-- label="杂费标志" -->
            <el-table-column
              prop="spOtherRate"
              show-overflow-tooltip
              align="right"
              :label="$t('page.OtherRate') + '/' + $t('page.rate')"
              :min-width="$flexColumnWidth($t('page.OtherRate') + '/' + $t('page.rate'))"
            ></el-table-column>
            <!-- label="杂费／率" -->
            <el-table-column
              prop="spOtherCurr"
              show-overflow-tooltip
              :label="$t('page.OtherCurr')"
              :min-width="$flexColumnWidth($t('page.OtherCurr'))"
            ></el-table-column>
            <!-- label="杂费币制" -->
            <el-table-column
              prop="spPackNo"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('custom.numBerofCases'))"
              :label="$t('custom.numBerofCases')"
            ></el-table-column>
            <!-- label="件数" -->
            <el-table-column
              prop="spGrossWet"
              show-overflow-tooltip
              align="right"
              :label="$t('page.grossWet')"
              :min-width="$flexColumnWidth($t('page.grossWet'))"
            ></el-table-column>
            <!-- label="毛重" -->
            <el-table-column
              prop="spNetWt"
              show-overflow-tooltip
              align="right"
              :label="$t('page.netWt')"
              :min-width="$flexColumnWidth($t('page.netWt'))"
            ></el-table-column>
            <!-- label="净重" -->
          </el-table-column>
          <!-- label="原始单证表体" -->
          <el-table-column :label="$t('page.originalDocumentBody')">
            <el-table-column
              prop="SerialNumber"
              show-overflow-tooltip
              :label="$t('page.snCode')"
              :min-width="$flexColumnWidth($t('page.snCode'))"
              align="right"
            ></el-table-column>
            <el-table-column
              prop="spdSDSEQNO"
              show-overflow-tooltip
              :label="$t('page.number')"
              :min-width="$flexColumnWidth($t('page.number'))"
              align="right"
            ></el-table-column>
            <!-- label="序号" -->
            <el-table-column
              prop="spdPARTNUMBER"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.materials'))"
              :label="$t('page.materials')"
            ></el-table-column>
            <!-- label="商品料号" -->
            <el-table-column
              prop="spdGName"
              show-overflow-tooltip
              :label="$t('page.chName')"
              :min-width="$flexColumnWidth($t('page.chName'))"
            ></el-table-column>
            <!-- label="中文名称" -->
            <el-table-column
              prop="spdOriginCountry"
              show-overflow-tooltip
              :label="$t('page.originCountry')"
              :min-width="$flexColumnWidth($t('page.destCode'))"
            ></el-table-column>
            <!-- label="原产国" -->
            <el-table-column
              prop="spdGModel"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.gmodel'))"
              :label="$t('page.gmodel')"
            ></el-table-column>
            <!-- label="规格型号" -->
            <el-table-column
              prop="spdDeclGoodsEname"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.DeclGoodsEname'))"
              :label="$t('page.DeclGoodsEname')"
            ></el-table-column>
            <!-- label="商品英文名称" -->
            <el-table-column
              prop="spdGQty"
              show-overflow-tooltip
              align="right"
              :label="$t('page.DclQty')"
              :min-width="$flexColumnWidth($t('page.DclQty'))"
            ></el-table-column>
            <!-- label="数量" -->
            <el-table-column
              prop="spdDeclPrice"
              show-overflow-tooltip
              align="right"
              :label="$t('page.price')"
              :min-width="$flexColumnWidth($t('page.price'))"
            ></el-table-column>
            <!-- label="单价" -->
            <el-table-column
              prop="spdDeclTotal"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.declTotal'))"
              align="right"
              :label="$t('page.declTotal')"
            ></el-table-column>
            <!-- label="总价" -->
            <el-table-column
              prop="spdTradeCurr"
              show-overflow-tooltip
              :label="$t('page.tradeCurr')"
              :min-width="$flexColumnWidth($t('page.tradeCurr'))"
            ></el-table-column>
            <!-- label="币制" -->
            <el-table-column
              prop="spdFirstQty"
              align="right"
              show-overflow-tooltip
              :label="$t('page.firstQty')"
              :min-width="$flexColumnWidth($t('page.firstQty'))"
            ></el-table-column>
            <!-- label="法定第一数量" -->
            <el-table-column
              prop="spdSecondQty"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.secondQty'))"
              align="right"
              :label="$t('page.secondQty')"
            ></el-table-column>
            <!-- label="法定第二数量" -->
            <el-table-column
              prop="spdINVOICENO"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.invoiceNo'))"
              :label="$t('page.invoiceNo')"
            ></el-table-column>
            <!-- label="发票号" -->
            <el-table-column
              prop="spdINVOICESEQNO"
              show-overflow-tooltip
              :label="$t('page.invoiceSeqno')"
              :min-width="$flexColumnWidth($t('page.invoiceSeqno'))"
            ></el-table-column>
            <!-- label="发票序号" -->
            <el-table-column
              prop="spdORDERNO"
              show-overflow-tooltip
              :label="$t('page.orderNo')"
              :min-width="$flexColumnWidth($t('page.orderNo'))"
            ></el-table-column>
            <!-- label="订单/合同号" -->
            <el-table-column
              prop="spdORDERSEQNO"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.orderSeqNo'))"
              :label="$t('page.orderSeqNo')"
            ></el-table-column>
            <!-- label="订单/合同序号" -->
            <el-table-column
              prop="spdNetWt"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.netWt'))"
              align="right"
              :label="$t('page.netWt')"
            ></el-table-column>
            <!-- label="净重" -->
            <el-table-column
              prop="spdGrossWet"
              align="right"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.grossWet'))"
              :label="$t('page.grossWet')"
            ></el-table-column>
            <!-- label="毛重" -->
            <el-table-column
              prop="spdVOLUME"
              align="right"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.volume'))"
              :label="$t('page.volume')"
            ></el-table-column>
            <!-- label="体积" -->
          </el-table-column>
          <!-- label="报关单表头" -->
          <el-table-column :label="$t('page.customsDeclarationHeader')">
            <el-table-column
              prop="chCCPJOBNO"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.CCPJobNo'))"
              :label="$t('page.CCPJobNo')"
            ></el-table-column>
            <!-- label="报关单内部编号" -->
            <el-table-column
              prop="chSeqNo"
              show-overflow-tooltip
              :label="$t('page.customsDeclarationNumber')"
              :min-width="$flexColumnWidth($t('page.customsDeclarationNumber'))"
            ></el-table-column>
            <!-- label="报关单统一编号" -->
            <el-table-column
              prop="chEntryId"
              show-overflow-tooltip
              :label="$t('page.customsNumberOfDeclaration')"
              :min-width="$flexColumnWidth($t('page.customsNumberOfDeclaration'))"
            ></el-table-column>
            <!-- label="报关单海关编号" -->
            <el-table-column
              prop="ihBondInvtNo"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.correspondingToTheNumber'))"
              :label="$t('page.correspondingToTheNumber')"
            ></el-table-column>
            <!-- label="对应核注清单编号" -->
            <el-table-column
              prop="ihINVJOBNO"
              show-overflow-tooltip
              :label="$t('page.invjobNo')"
              :min-width="$flexColumnWidth($t('page.invjobNo'))"
            ></el-table-column>
            <!-- label="核注清单内部编号" -->
            <el-table-column
              prop="ihSeqNo"
              show-overflow-tooltip
              :label="$t('page.nuclearChecklist')"
              :min-width="$flexColumnWidth($t('page.nuclearChecklist'))"
            ></el-table-column>
            <!-- label="核注清单统一编号" -->
            <el-table-column
              prop="chCustomMaster"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('custom.CitiesLandId'))"
              :label="$t('custom.CitiesLandId')"
            ></el-table-column>
            <!-- label="申报地海关" -->
            <el-table-column
              prop="chIEPort"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.ieflag2'))"
              :label="$t('page.ieflag2')"
            ></el-table-column>
            <!-- label="出境关别" -->
            <el-table-column
              prop="chManualNo"
              show-overflow-tooltip
              :label="$t('custom.internetContentProvider')"
              :min-width="$flexColumnWidth($t('custom.internetContentProvider'))"
            ></el-table-column>
            <!-- label="备案号" -->
            <el-table-column
              prop="chContrNo"
              show-overflow-tooltip
              :label="$t('custom.contractAgreement')"
              :min-width="$flexColumnWidth($t('custom.contractAgreement'))"
            ></el-table-column>
            <!-- label="合同协议号" -->
            <el-table-column
              prop="chIEDateNEWName"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.date1'))"
              :label="$t('page.date1')"
            ></el-table-column>
            <!-- label="出口日期" -->
            <el-table-column
              prop="chDDateNEWName"
              show-overflow-tooltip
              :label="$t('page.dclBeninDate')"
              :min-width="$flexColumnWidth($t('page.dclBeninDate'))"
            ></el-table-column>
            <!-- label="申报日期" -->
            <el-table-column
              prop="chTradeName"
              show-overflow-tooltip
              :label="$t('page.domesticName')"
              :min-width="$flexColumnWidth($t('page.domesticName'))"
            ></el-table-column>
            <!-- label="境内收发货人名称" -->
            <el-table-column
              prop="chOverseasConsigneeCode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.consignorCode'))"
              :label="$t('page.consignorCode')"
            ></el-table-column>
            <!-- label="境外收货人代码" -->
            <el-table-column
              prop="chOverseasConsigneeEname"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.OverseasConsigneeEname'))"
              :label="$t('page.OverseasConsigneeEname')"
            ></el-table-column>
            <!-- label="境外收货人名称(外文)" -->
            <el-table-column
              prop="chOwnerName"
              show-overflow-tooltip
              :label="$t('page.OwnerName')"
              :min-width="$flexColumnWidth($t('page.OwnerName'))"
            ></el-table-column>
            <!-- label="生产销售单位名称" -->
            <el-table-column
              prop="chAgentName"
              show-overflow-tooltip
              :label="$t('page.dclEtpsNm')"
              :min-width="$flexColumnWidth($t('page.dclEtpsNm'))"
            ></el-table-column>
            <!-- label="申报单位名称" -->
            <el-table-column
              prop="chTrafMode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.transportation'))"
              :label="$t('page.transportation')"
            ></el-table-column>
            <!-- label="运输方式" -->
            <el-table-column
              prop="chTrafName"
              show-overflow-tooltip
              :label="$t('page.transport')"
              :min-width="$flexColumnWidth($t('page.transport'))"
            ></el-table-column>
            <!-- label="运输工具名称" -->
            <el-table-column
              prop="chVoyNo"
              show-overflow-tooltip
              :label="$t('page.voyageNumber')"
              :min-width="$flexColumnWidth($t('page.voyageNumber'))"
            ></el-table-column>
            <!-- label="航次号" -->
            <el-table-column
              prop="chBillNo"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.mention'))"
              :label="$t('page.mention')"
            ></el-table-column>
            <!-- label="提运单号" -->
            <el-table-column
              prop="chTradeMode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.TradeMode'))"
              :label="$t('page.TradeMode')"
            ></el-table-column>
            <!-- label="监管方式" -->
            <el-table-column
              prop="chCutMode"
              show-overflow-tooltip
              :label="$t('custom.natUreofExemptionId')"
              :min-width="$flexColumnWidth($t('custom.natUreofExemptionId'))"
            ></el-table-column>
            <!-- label="征免性质" -->
            <el-table-column
              prop="chLicenseNo"
              show-overflow-tooltip
              :label="$t('custom.licenseKey')"
              :min-width="$flexColumnWidth($t('custom.licenseKey'))"
            ></el-table-column>
            <!-- label="许可证号" -->
            <el-table-column
              prop="chTradeCountry"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.destination'))"
              :label="$t('page.destination')"
            ></el-table-column>
            <!-- label="运抵国(地区)" -->
            <el-table-column
              prop="chDistinatePort"
              show-overflow-tooltip
              :label="$t('page.shipmentPort')"
              :min-width="$flexColumnWidth($t('page.shipmentPort'))"
            ></el-table-column>
            <!-- label="指运港" -->
            <el-table-column
              prop="chTransMode"
              show-overflow-tooltip
              :label="$t('page.clinchWay')"
              :min-width="$flexColumnWidth($t('page.clinchWay'))"
            ></el-table-column>
            <!-- label="成交方式" -->
            <el-table-column
              prop="chFeeMark"
              show-overflow-tooltip
              :label="$t('page.FeeMark')"
              :min-width="$flexColumnWidth($t('page.FeeMark'))"
            ></el-table-column>
            <!-- label="运费标记" -->
            <el-table-column
              prop="chFeeRate"
              align="right"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.FeeRate') + '/' + $t('page.rate'))"
              :label="$t('page.FeeRate') + '/' + $t('page.rate')"
            ></el-table-column>
            <!-- label="运费／率" -->
            <el-table-column
              prop="chFeeCurr"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.FeeCurr'))"
              :label="$t('page.FeeCurr')"
            ></el-table-column>
            <!-- label="运费币制" -->
            <el-table-column
              prop="chInsurMark"
              show-overflow-tooltip
              :label="$t('page.InsurMark')"
              :min-width="$flexColumnWidth($t('page.InsurMark'))"
            ></el-table-column>
            <!-- label="保险费标记" -->
            <el-table-column
              prop="chInsurRate"
              show-overflow-tooltip
              align="right"
              :label="$t('page.InsurRate') + '/' + $t('page.rate')"
              :min-width="$flexColumnWidth($t('page.InsurRate') + '/' + $t('page.rate'))"
            ></el-table-column>
            <!-- label="保险费／率" -->
            <el-table-column
              prop="chInsurCurr"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.InsurCurr'))"
              :label="$t('page.InsurCurr')"
            ></el-table-column>
            <!-- label="保险费币制" -->
            <el-table-column
              prop="chOtherMark"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.OtherMark'))"
              :label="$t('page.OtherMark')"
            ></el-table-column>
            <!-- label="杂费标志" -->
            <el-table-column
              prop="chOtherRate"
              show-overflow-tooltip
              align="right"
              :label="$t('page.OtherRate') + '/' + $t('page.rate')"
              :min-width="$flexColumnWidth($t('page.OtherRate') + '/' + $t('page.rate'))"
            ></el-table-column>
            <!-- label="杂费／率" -->
            <el-table-column
              prop="chOtherCurr"
              show-overflow-tooltip
              :label="$t('page.OtherCurr')"
              :min-width="$flexColumnWidth($t('page.OtherCurr'))"
            ></el-table-column>
            <!-- label="杂费币制" -->
            <el-table-column
              prop="chPackNo"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('custom.numBerofCases'))"
              :label="$t('custom.numBerofCases')"
            ></el-table-column>
            <!-- label="件数" -->
            <el-table-column
              prop="chWrapType"
              show-overflow-tooltip
              :label="$t('page.packingtype')"
              :min-width="$flexColumnWidth($t('page.packingtype'))"
            ></el-table-column>
            <!-- label="包装种类" -->
            <el-table-column
              prop="chNoOtherPack"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('button.otherPackaging'))"
              :label="$t('button.otherPackaging')"
            ></el-table-column>
            <!-- label="其他包装" -->
            <el-table-column
              prop="chGrossWet"
              show-overflow-tooltip
              align="right"
              :label="$t('page.grossWet')"
              :min-width="$flexColumnWidth($t('page.grossWet'))"
            ></el-table-column>
            <!-- label="毛重(KG)" -->
            <el-table-column
              prop="chNetWt"
              show-overflow-tooltip
              align="right"
              :label="$t('page.netWt')"
              :min-width="$flexColumnWidth($t('page.netWt'))"
            ></el-table-column>
            <!-- label="净重(KG)" -->
            <el-table-column
              prop="chTradeAreaCode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.tradeCountry'))"
              :label="$t('page.tradeCountry')"
            ></el-table-column>
            <!-- label="贸易国别(地区)" -->
            <el-table-column
              prop="chPromisItemsRelation"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.relationId'))"
              :label="$t('page.relationId')"
            ></el-table-column>
            <!-- label="特殊关系确认" -->
            <el-table-column
              prop="chPromisItemsPriceImpact"
              show-overflow-tooltip
              :label="$t('page.impactId')"
              :min-width="$flexColumnWidth($t('page.impactId'))"
            ></el-table-column>
            <!-- label="价格影响确认" -->
            <el-table-column
              prop="chPromisItemsRoyalty"
              show-overflow-tooltip
              :label="$t('custom.modeltableTitle6')"
              :min-width="$flexColumnWidth($t('custom.modeltableTitle6'))"
            ></el-table-column>
            <!-- label="与货物有关的特许权使用费支付确认" -->
            <el-table-column
              prop="chWarehouseName"
              show-overflow-tooltip
              :label="$t('page.chWarehouseName')"
              :min-width="$flexColumnWidth($t('page.chWarehouseName'))"
              v-if="flagTable"
            ></el-table-column>
            <el-table-column
              prop="chStorageTimeName"
              show-overflow-tooltip
              :label="$t('page.chStorageTimeName')"
              :min-width="$flexColumnWidth($t('page.chStorageTimeName'))"
              v-if="flagTable"
            ></el-table-column>
          </el-table-column>

          <!-- label="报关单表体" -->
          <el-table-column :label="$t('page.customsDeclarationBody')">
            <el-table-column
              prop="cdGNo"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('page.table1'))"
              :label="$t('page.table1')"
            ></el-table-column>
            <!-- label="项号" -->
            <el-table-column
              prop="cdContrItem"
              align="right"
              show-overflow-tooltip
              :label="$t('page.emlSeqno')"
              :min-width="$flexColumnWidth($t('page.emlSeqno'))"
            ></el-table-column>
            <!-- label="备案序号" -->
            <el-table-column
              prop="cdCodeTS"
              show-overflow-tooltip
              :label="$t('page.gcode')"
              :min-width="$flexColumnWidth($t('page.gcode'))"
            ></el-table-column>
            <!-- label="商品编号" -->
            <el-table-column
              prop="cdCiqCode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.quarantine'))"
              :label="$t('page.quarantine')"
            ></el-table-column>
            <!-- label="检验检疫编码" -->
            <el-table-column
              prop="cdGName"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.gname'))"
              :label="$t('page.gname')"
            ></el-table-column>
            <!-- label="商品名称" -->
            <el-table-column
              prop="cdGModel"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.gmodel'))"
              :label="$t('page.gmodel')"
            ></el-table-column>
            <!-- label="规格型号" -->
            <el-table-column
              prop="cdGQty"
              show-overflow-tooltip
              align="right"
              :label="$t('page.gqty')"
              :min-width="$flexColumnWidth($t('page.gqty'))"
            ></el-table-column>
            <!-- label="成交数量" -->
            <el-table-column
              prop="cdGUnit"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.gunit'))"
              :label="$t('page.gunit')"
            ></el-table-column>
            <!-- label="成交计量单位" -->
            <el-table-column
              prop="cdDeclPrice"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('page.price'))"
              :label="$t('page.price')"
            ></el-table-column>
            <!-- label="单价" -->
            <el-table-column
              prop="cdDeclTotal"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('page.declTotal'))"
              :label="$t('page.declTotal')"
            ></el-table-column>
            <!-- label="总价" -->
            <el-table-column
              prop="cdTradeCurr"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.tradeCurr'))"
              :label="$t('page.tradeCurr')"
            ></el-table-column>
            <!-- label="币制" -->
            <el-table-column
              prop="cdFirstQty"
              show-overflow-tooltip
              align="right"
              :label="$t('page.firstQty')"
              :min-width="$flexColumnWidth($t('page.firstQty'))"
            ></el-table-column>
            <!-- label="法定第一数量" -->
            <el-table-column
              prop="cdFirstUnit"
              show-overflow-tooltip
              :label="$t('page.firstUnit')"
              :min-width="$flexColumnWidth($t('page.firstUnit'))"
            ></el-table-column>
            <!-- label="法定第一计量单位" -->
            <el-table-column
              prop="cdSecondQty"
              show-overflow-tooltip
              align="right"
              :min-width="$flexColumnWidth($t('page.secondQty'))"
              :label="$t('page.secondQty')"
            ></el-table-column>
            <!-- label="法定第二数量" -->
            <el-table-column
              prop="cdSecondUnit"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.secondUnit'))"
              :label="$t('page.secondUnit')"
            ></el-table-column>
            <!-- label="法定第二计量单位" -->
            <el-table-column
              prop="cdExgVersion"
              show-overflow-tooltip
              :label="$t('page.ExgVersionProcessing')"
              :min-width="$flexColumnWidth($t('page.ExgVersionProcessing'))"
            ></el-table-column>
            <!-- label="加工贸易成品单耗版本号" -->
            <el-table-column
              prop="cdOriginCountry"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.destCode'))"
              :label="$t('page.originCountry')"
            ></el-table-column>
            <!-- label="原产国(地区)" -->
            <el-table-column
              prop="cdDestinationCountry"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.destinationCountry'))"
              :label="$t('page.destinationCountry')"
            ></el-table-column>
            <!-- label="最终目的国(地区)" -->
            <el-table-column
              prop="cdDistrictCode"
              show-overflow-tooltip
              :min-width="$flexColumnWidth($t('page.districtCode'))"
              :label="$t('page.districtCode')"
            ></el-table-column>
            <!-- label="境内货源地" -->
            <el-table-column
              prop="cdDestCode"
              show-overflow-tooltip
              :label="$t('page.destCode')"
              :min-width="$flexColumnWidth($t('page.destCode'))"
            ></el-table-column>
            <!-- label="产地代码" -->
            <el-table-column
              prop="cdDutyMode"
              show-overflow-tooltip
              :label="$t('page.DutyMode')"
              :min-width="$flexColumnWidth($t('page.DutyMode'))"
            ></el-table-column>
            <!-- label="征免方式" -->
          </el-table-column>
        </el-table>
      </div>

      <pagination
        :total="total"
        :page.sync="PageIndex"
        :limit.sync="PageSize"
        @pagination="getLists"
				@paginationSize ="handleNewSearch"
      />
    </div>
  </div>
</html>

<script>
import Pagination from "@/components/Pagination";
import {
  GetBaseDataList,
  GetCountryList,
  GetCURRList
} from "@/api/basedata/index";
import {
  GetPartNumberCCPReportPagedList,
  ExportPartNumberCCPReport,
  GetClientConfig
} from "@/api/report/index";
import { getToken } from "@/utils/auth";
import { debounce } from "@/utils/validate";

export default {
  name: "reportEntranceMeterial",
  components: {
    Pagination,
  },
  data() {
    return {
      minDate: "",
      maxDate: "",
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.minDate = minDate;
          this.maxDate = maxDate;
        },
        disabledDate: time => {
          let curDate = new Date().getTime();
          let two = 365 * 24 * 3600 * 1000;
          let twoyear = curDate - two;
          if (this.minDate) {
            return (
              time.getTime() > Date.now() ||
              time > new Date(this.minDate.getTime() + two) ||
              time < new Date(this.minDate.getTime() - two)
            );
          }
          return time.getTime() > Date.now() || time.getTime() < twoyear;
        }
      },
      searchQuery: {
        DateType: "1",
        CcpJobNo: "",
        EntryId: "",
        JobNo: "",
        TradeName: "",
        GName: "",
        CodeTS: "",
        BondInvtNo: "",
        BillNo: "",
        InvoiceNo: "",
        ManualNo: "",
        AgentName: "",
        OverseasConsignorEname: "",
        StartIEDate: "",
        EndIEDate: "",
        PartNumber: "",
        SeqNo: "",
        InvSeqNo: "",
        OrderNo: "",
        SerialNumber: ""
      },
      collapseFlag: false,
      listLoading: false,
      PageIndex: 1, // 第几页
      PageSize: 10, // 每页多少条
      total: 0, //总条数
      tableData: [], // 列表数据
      time: "", //日期范围  StartDate  EndDate
      IEFlagId: "", //进出口标志 IEFlag
      citiesIEFlag: [],
      dateTypeId: "", //日期类型 DateType
      citiesDateType: [
        {
          key: "1",
          name: "制单日期"
        },
        {
          key: "2",
          name: "申报日期"
        },
        {
          key: "3",
          name: "进出口日期"
        }
      ],
      CitiesLandId: "", //申报地海关 CustomMaster
      CitiesLand: [],
      tradeId: "", //运输方式 TrafMode
      citiesTrade: [],
      regulatoryId: "", //监管方式TradeMode
      citiesregulatory: [],
      OriginCountryId: "", // 原产国(地区)OriginCountry
      citiesOriginCountry: [],
      DestinationCountryId: "", //目的国 DestinationCountry
      citiesDestinationCountry: [],
      flagTable: true,
      load:false
    };
  },
  created() {
    this.handId =Date.parse(new Date());
    //this.dateTypeSearch();//日期类型
    this.getGetClientConfig();
  },
  watch: {},
  methods: {
    getGetClientConfig() {
      GetClientConfig()
        .then(res => {
          if (res.IsSuccess == true) {
            this.flagTable = res.Data.PartNumberCCPReportIsShowWarehouseName;
          }
        })
        .catch(() => {});
    },
    //设置默认日期
    defaultDate() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
      this.time = [start, end]; //将值设置给插件绑定的数据
    },
    selectData(e) {
      if (e === null) {
        this.minDate = "";
        this.maxDate = "";
        this.pickerOptions = {
          disabledDate: time => {
            let curDate = new Date().getTime();
            let two = 365 * 24 * 3600 * 1000;
            let twoyear = curDate - two;
            if (this.minDate) {
              return (
                time.getTime() > Date.now() ||
                time > new Date(this.minDate.getTime() + two) ||
                time < new Date(this.minDate.getTime() - two)
              );
            }
            return time.getTime() > Date.now() || time.getTime() < twoyear;
          }
        };
      }
    },
    //进出口标志
    IEFlagFun(data) {
      this.IEFlagId = data;
    },
    //日期类型
    dateTypeFun(data) {
      this.dateTypeId = data;
    },
    //日期类型接口搜索选择
    dateTypeSearch(val) {
      if (!val) {
        val = null;
      }

      this.citiesDateType = [];

      const datas = [
        {
          DropdownType: 59,
          Search: val,
          RequestId: this.$GuId
        }
      ];

      const data = {
        DropdownType: 59,
        Search: val,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      GetBaseDataList(data)
        .then(res => {
          if (res.isSuccess == true) {
            this.citiesDateType = res.data;
          }
        })
        .catch(error => {});
    },
    //申报地海关
    handleLand(data) {
      this.CitiesLandId = data;
    },
    //运输方式
    handleTrade(data) {
      this.tradeId = data;
    },
    //监管方式
    regulatoryFun(data) {
      this.regulatoryId = data;
    },
    // 原产国(地区)选择
    OriginCountryFun(data) {
      this.OriginCountryId = data;
    },
    // 最终目的国(地区)选择
    DestinationCountryFun(data) {
      this.DestinationCountryId = data;
    },
    //获取表格数据
    getLists() {
      this.listLoading = true;

      if (this.time) {
        //进口日期
        const StartIEDate = this.time[0];
        const EndIEDate = this.time[1];
        const year = StartIEDate.getFullYear();
        const month =
          StartIEDate.getMonth() + 1 > 9
            ? StartIEDate.getMonth() + 1
            : "0" + (StartIEDate.getMonth() + 1);
        const day =
          StartIEDate.getDate() > 9
            ? StartIEDate.getDate()
            : "0" + StartIEDate.getDate();
        const year1 = EndIEDate.getFullYear();
        const month1 =
          EndIEDate.getMonth() + 1 > 9
            ? EndIEDate.getMonth() + 1
            : "0" + (EndIEDate.getMonth() + 1);
        const day1 =
          EndIEDate.getDate() > 9
            ? EndIEDate.getDate()
            : "0" + EndIEDate.getDate();
        this.searchQuery.StartIEDate = year + "-" + month + "-" + day;
        this.searchQuery.EndIEDate = year1 + "-" + month1 + "-" + day1;
      } else {
        this.searchQuery.StartIEDate = "";
        this.searchQuery.EndIEDate = "";
      }

      const data = {
        clientId: 0,
        ieFlag: this.IEFlagId,
        dateType: this.searchQuery.DateType,
        startDate: this.searchQuery.StartIEDate,
        endDate: this.searchQuery.EndIEDate,
        //CcpJobNo: this.searchQuery.CcpJobNo,
        PartNumber: this.searchQuery.PartNumber,
        jobNo: this.searchQuery.JobNo,
        entryId: this.searchQuery.EntryId,
        tradeName: this.searchQuery.TradeName,
        gName: this.searchQuery.GName,
        codeTS: this.searchQuery.CodeTS,
        customMaster: this.CitiesLandId,
        trafMode: this.tradeId,
        tradeMode: this.regulatoryId,
        bondInvtNo: this.searchQuery.BondInvtNo,
        billNo: this.searchQuery.BillNo,
        invoiceNo: this.searchQuery.InvoiceNo,
        manualNo: this.searchQuery.ManualNo,
        OverseasConsignorEname: this.searchQuery.OverseasConsignorEname,
        agentName: this.searchQuery.AgentName,
        originCountry: this.OriginCountryId,
        destinationCountry: this.DestinationCountryId,
        SeqNo: this.searchQuery.SeqNo,
        InvSeqNo: this.searchQuery.InvSeqNo,
        OrderNo: this.searchQuery.OrderNo,
        SerialNumber: this.searchQuery.SerialNumber,
        PageIndex: this.PageIndex, // 第几页
        PageSize: this.PageSize // 每页多少条
      };
      GetPartNumberCCPReportPagedList(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.listLoading = false;
            this.total = res.Data.AllCount;
            this.PageIndex = res.Data.PageIndex;
            this.PageSize = res.Data.PageSize;
            this.tableData = res.Data.List;
          }
        })
        .catch(error => {});
    },

    //查询
    handleNewSearch() {
      this.PageIndex = 1;
      this.getLists();
    },
    handleTolead() {
      this.$confirm("确定导出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "放弃",
        type: "warning"
      })
        .then(() => {
          if (this.time) {
            //进口日期
            const StartIEDate = this.time[0];
            const EndIEDate = this.time[1];
            const year = StartIEDate.getFullYear();
            const month =
              StartIEDate.getMonth() + 1 > 9
                ? StartIEDate.getMonth() + 1
                : "0" + (StartIEDate.getMonth() + 1);
            const day =
              StartIEDate.getDate() > 9
                ? StartIEDate.getDate()
                : "0" + StartIEDate.getDate();
            const year1 = EndIEDate.getFullYear();
            const month1 =
              EndIEDate.getMonth() + 1 > 9
                ? EndIEDate.getMonth() + 1
                : "0" + (EndIEDate.getMonth() + 1);
            const day1 =
              EndIEDate.getDate() > 9
                ? EndIEDate.getDate()
                : "0" + EndIEDate.getDate();
            this.searchQuery.StartIEDate = year + "-" + month + "-" + day;
            this.searchQuery.EndIEDate = year1 + "-" + month1 + "-" + day1;
          } else {
            this.searchQuery.StartIEDate = "";
            this.searchQuery.EndIEDate = "";
          }

          this.load = true;
          const data = {
            clientId: 0,
            ieFlag: this.IEFlagId,
            dateType: this.searchQuery.DateType,
            startDate: this.searchQuery.StartIEDate,
            endDate: this.searchQuery.EndIEDate,
            PartNumber: this.searchQuery.PartNumber,
            jobNo: this.searchQuery.JobNo,
            entryId: this.searchQuery.EntryId,
            tradeName: this.searchQuery.TradeName,
            gName: this.searchQuery.GName,
            codeTS: this.searchQuery.CodeTS,
            customMaster: this.CitiesLandId,
            trafMode: this.tradeId,
            tradeMode: this.regulatoryId,
            bondInvtNo: this.searchQuery.BondInvtNo,
            billNo: this.searchQuery.BillNo,
            invoiceNo: this.searchQuery.InvoiceNo,
            manualNo: this.searchQuery.ManualNo,
            OverseasConsignorEname: this.searchQuery.OverseasConsignorEname,
            agentName: this.searchQuery.AgentName,
            originCountry: this.OriginCountryId,
            destinationCountry: this.DestinationCountryId,
            SeqNo: this.searchQuery.SeqNo,
            InvSeqNo: this.searchQuery.InvSeqNo,
            OrderNo: this.searchQuery.OrderNo,
            SerialNumber: this.searchQuery.SerialNumber,
            PageIndex: this.PageIndex, // 第几页
            PageSize: this.PageSize // 每页多少条
          };

          ExportPartNumberCCPReport(data).then(res => {
            this.load = false;
            if (!res) {
              return;
            }
            const blob = new Blob([res]);
            const fileName = "进出口料号级导出.xlsx";
            if (window.navigator.msSaveBlob) {
              window.navigator.msSaveBlob(blob, fileName);
            } else {
              const downloadElement = document.createElement("a");
              const href = window.URL.createObjectURL(blob); // 创建下载的链接
              downloadElement.href = href;
              downloadElement.download = fileName; // 下载后文件名
              document.body.appendChild(downloadElement);
              downloadElement.click(); // 点击下载
              document.body.removeChild(downloadElement); // 下载完成移除元素
              window.URL.revokeObjectURL(href); // 释放掉blob对象
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消导出"
          });
        });
    }
  },
  mounted() {
    this.defaultDate();
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/searchForm.scss";

.original_top_son {
  flex: 1;

  /deep/.el-input--suffix .el-input__inner {
    border: 1px solid #dcdfe6;
    height: 32px;
    line-height: 32px;
  }
}

/deep/.el-table td,
.el-table th {
  padding: 5px 0;
}

/deep/ .el-table th {
  text-align: center !important;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}

.flexelem {
  display: inline !important;
  position: absolute;
  left: -12px;
  top: 32px;
}

/deep/.el-dialog {
}

.merchandisemessageadd_btn {
  .el-form-item {
    margin-bottom: 15px;
    margin-left: 12px;
  }
}

.merchandisemessageadd_content {
  display: flex;
  padding: 0 14px 0 0;

  .content {
    flex: 1;
    display: flex;
  }

  /deep/.el-form-item__label {
    font-size: 12px;
    padding: 0;
    min-width: 150px;
  }

  .el-form-item {
    margin-bottom: 5px;
    margin-left: 12px;
    display: flex;
    width: 100%;
  }
}

/deep/.el-form-item__content {
  flex: 1;

  .exitdetaile {
    /deep/.el-input--suffix .el-input__inner {
      border: 1px solid #dcdfe6;
      height: 32px;
      line-height: 32px;
      width: 100%;
    }
  }
}

.background_regist {
  /deep/.el-input__inner {
    background-color: #fff1f0;
  }
}

.original_btn {
  margin-top: 10px;
}

.message_input {
  margin-left: 10px;
  width: 120px;

  /deep/.el-input {
    font-size: 12px;
  }

  /deep/.el-input__inner {
    height: 28px;
    line-height: 28px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  /deep/.el-input__icon {
    height: 28px;
    line-height: 28px;
  }

  /deep/.el-input__suffix {
    right: 0;
  }
}
/deep/.has-gutter th {
  background: none !important;
}
</style>

>
--报关单比对
<html>
  <div class="datasubscription">
    <div class="card_div card_div_body">
      <div class="progress_top">
        <div class="progress_top_son">
          <span>{{ $t("custom.customsCoding") }}：</span>
          <!-- <span>海关编号：</span> -->
          <el-input
            v-model="EntryId"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.customsCoding')"
          ></el-input>
        </div>
        <div class="progress_top_son">
          <span>{{ $t("page.billno") }}：</span>
          <!-- <span>提单号：</span> -->
          <el-input
            v-model="BillNo"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.billno')"
          ></el-input>
        </div>
        <div class="progress_top_son">
          <span>{{ $t("page.dclBeninDate") }}：</span>
          <!-- <span>申报日期：</span> -->
          <el-date-picker
            v-model="startDate"
            type="date"
            size="small"
            :placeholder="$t('page.StartDate')"
            style="width:100%;"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
        <div class="progress_top_son" style="position: relative;">
          <span style="position: absolute;left: -12px;top: 32px;">-</span>
          <span></span>
          <el-date-picker
            v-model="endDate"
            style="width:100%;"
            type="date"
            value-format="yyyy-MM-dd"
            size="small"
            :placeholder="$t('page.endDate')"
          ></el-date-picker>
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="show3">
          <br />
          <div class="progress_top transition-box">
            <div class="progress_top_son content_bettwen">
              <span>{{ $t("custom.unifyCoding") }}：</span>
              <!-- <span>统一编号：</span> -->
              <el-input
                v-model="SeqNo"
                clearable
                size="small"
                :placeholder="
                  $t('button.placeholder') + $t('custom.unifyCoding')
                "
              ></el-input>
            </div>
            <div class="progress_top_son">
              <span>{{ $t("page.HBNoAndHand") }}：</span>
              <!-- <span>手（账）册编号：</span> -->
              <el-input
                v-model="HBNo"
                clearable
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.HBNoAndHand')"
              ></el-input>
            </div>
            <div class="progress_top_son">
              <span>{{ $t("page.dclStatus") }}：</span>
              <!-- <span>申报状态：</span> -->
              <SelectComAll
                @change="handleDeclareSWStatus"
                :dtype ="56"
                :update="handId"
                :title="DeclareSWStatus"
              ></SelectComAll>
            </div>
            <div class="progress_top_son">
              <span>{{ $t("page.dclEtpsNm") }}：</span>
              <!-- <span>申报单位名称：</span> -->
              <el-input
                v-model="AgentName"
                clearable
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.dclEtpsNm')"
              ></el-input>
            </div>
          </div>
          <br />
          <div class="progress_top transition-box">
            <div class="progress_top_son">
              <span>{{ $t("page.date") }}：</span>
              <!-- <span>进口日期：</span> -->
              <el-date-picker
                v-model="startDate1"
                type="date"
                size="small"
                :placeholder="$t('page.StartDate')"
                style="width:100%;"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </div>
            <div class="progress_top_son" style="position: relative;">
              <span style="position: absolute;left: -12px;top: 32px;">-</span>
              <span></span>
              <el-date-picker
                v-model="endDate1"
                style="width:100%;"
                type="date"
                value-format="yyyy-MM-dd"
                size="small"
                :placeholder="$t('page.endDate')"
              ></el-date-picker>
            </div>
            <div class="progress_top_son">
              <span>{{ $t("page.ieType") }}：</span>
              <SelectComAll
                @change="handleIEsign"
                :dtype ="59"
                :update="handId"
                :title="IEsignId"
              ></SelectComAll>
            </div>
            <div class="progress_top_son content_bettwen">
              <span>{{ $t("page.CCPJobNo") }}：</span>
              <!-- <span>报关单内部编号：</span> -->
              <el-input
                v-model="CCPJobNo"
                clearable
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.CCPJobNo')"
              ></el-input>
            </div>
          </div>
        </div>
      </el-collapse-transition>

      <div class="omcomponent_search_btn">
        <i class="el-icon-arrow-down" id="on_svg" @click="handleShowSearch"></i>
        <span @click="handleShowSearch" v-show="show3">{{
          $t("page.hide")
        }}</span>
        <span @click="handleShowSearch" v-show="!show3">{{
          $t("page.more")
        }}</span>
      </div>

      <div class="top_btn">
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">{{
          $t("button.search")
        }}</el-button>
        <!-- <el-button
        type="primary"
        @click="handleGainManifest"
        v-permission="['Otech.Ccs.HisDataSubManagement.Bills.Obtain']"
        >获取报关单</el-button
      > -->
      </div>

      <div class="list_data">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          height="405px"
          v-loading="loadingList"
        >
          <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
          <el-table-column
            :label="$t('page.CCPJobNo')"
            show-overflow-tooltip
            min-width="200px"
          >
            <html slot-scope="scope">
              <span @click="handleInventory(scope.row)" class="color_span">{{
                scope.row.CCPJobNo
              }}</span>
            </html>
          </el-table-column>
          <!-- label="报关单内部编号" -->
          <el-table-column
            show-overflow-tooltip
            prop="EntryId"
            :min-width="$flexColumnWidth($t('custom.customsCoding'))"
            :label="$t('custom.customsCoding')"
          ></el-table-column>
          <!-- label="海关编号" -->
          <el-table-column
            class-name="height_table yellow_table"
            align="center"
            :min-width="$flexColumnWidth($t('page.Diff'))"
            :label="$t('page.Diff')"
            show-overflow-tooltip
          >
            <!-- label="是否差异" -->
            <html slot-scope="scope">
              <div
                v-if="scope.row.Diff"
                :class="{ yellowclass: scope.row.Diff }"
              >
                {{ $t("custom.yes") }}
              </div>
              <div v-else>
                {{ $t("custom.no") }}
              </div>
            </html>
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="HBNo"
            :label="$t('page.HBNoAndHand')"
            :min-width="$flexColumnWidth($t('page.HBNoAndHand'))"
          ></el-table-column>
          <!-- label="手（账）册编号" -->
          <el-table-column
            show-overflow-tooltip
            prop="BillNo"
            :label="$t('page.billno')"
            :min-width="$flexColumnWidth($t('page.billno'))"
          ></el-table-column>
          <!-- label="提单号" -->
          <el-table-column
            show-overflow-tooltip
            prop="IEFlag"
            :min-width="$flexColumnWidth($t('page.ieType'))"
            :label="$t('page.ieType')"
          ></el-table-column>
          <!-- label="进出口标志" -->
          <el-table-column
            show-overflow-tooltip
            prop="IEDate"
            :min-width="$flexColumnWidth($t('page.IEDate'))"
            :label="$t('page.IEDate')"
          ></el-table-column>
          <!-- label="进出口日期" -->
          <el-table-column
            show-overflow-tooltip
            prop="DDate"
            :min-width="$flexColumnWidth($t('page.dclBeninDate'))"
            :label="$t('page.dclBeninDate')"
          ></el-table-column>
          <!-- label="申报日期" -->
          <el-table-column
            show-overflow-tooltip
            prop="AgentName"
            :min-width="$flexColumnWidth($t('page.dclEtpsNm'))"
            :label="$t('page.dclEtpsNm')"
          ></el-table-column>
          <!-- label="申报单位名称" -->
          <el-table-column
            show-overflow-tooltip
            prop="TradeMode"
            :min-width="$flexColumnWidth($t('page.TradeMode'))"
            :label="$t('page.TradeMode')"
          ></el-table-column>
          <!-- label="监管方式" -->
          <el-table-column
            show-overflow-tooltip
            prop="CheckWSStatusName"
            :min-width="$flexColumnWidth($t('page.dclStatus'))"
            :label="$t('page.dclStatus')"
          ></el-table-column>
          <!-- label="申报状态" -->
        </el-table>
      </div>

      <pagination
        :total="total"
        :page.sync="pageIndex"
        :limit.sync="pageSize"
        @pagination="getLists"
				@paginationSize ="handleSearch"
      />
    </div>
  </div>
</html>

<script>
import { throttle } from "@/utils/validate";
import Pagination from "@/components/Pagination";
import {
  GetCDFDetailPageList,
  GetPartClient,
  SearchRemoteData,
  BatchDownRemoteData,
  SingleDownRemoteData,
  DownLoadCDFOrDoc
} from "@/api/datasubscription/indexfile";
import { GetBaseDataList } from "@/api/basedata/index";
import checkPermission from "@/utils/permission"; // 权限判断函数
import { GetRecordListPagedList } from "@/api/customsdeclaration/progress";
import { GetCDFHeaderComparePagedList } from "@/api/customsdeclarationcontrast/progress";

export default {
  name: "customsdeclarationcontrastsearch",
  data() {
    return {
      EntryId: "",
      BillNo: "",
      HBNo: "",
      IEsign: [
        {
          key: "I",
          name: "进口"
        },
        {
          key: "E",
          name: "出口"
        }
      ],
      IEsignId: "",
      time1: "",
      time2: "",
      time3: "",
      show3: false,
      tableData: [],
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      GainManifest: false,
      totals: 0,
      pageIndexs: 1,
      pageSizes: 10,
      tableDatas: [],
      IEsignIds: "",
      MembershipName: "",
      Logo: "",
      ResiduePoints: "",
      SignlePoint: "",
      EdocSignlePoint: "",
      deduct: 0,
      pitchOn: 0,
      getEntryId: "",
      optForlength: "",
      selectDate: "",
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.selectDate = minDate.getTime();
          if (maxDate) {
            this.selectDate = "";
          }
        },
        disabledDate: time => {
          if (this.selectDate !== "") {
            const one = 6 * 24 * 3600 * 1000;
            const minTime = this.selectDate - one;
            const maxTime = this.selectDate + one;

            return time.getTime() < minTime || time.getTime() > maxTime;
          }
        }
      },
      SeqNo: "",
      loading1: false,
      loading2: false,
      loading3: false,
      tableCopyTableList: [],
      index: 1,
      size: 10,
      IsDownLoadCDF: true,
      IsDownLoadDoc: false,
      IsDownLoadCDFs: true,
      IsDownLoadDocs: false,
      checkList: [],
      CDFDownLoadStatus: "",
      CDFDownLoadStatuss: [],
      EdocDownLoadStatus: "",
      EdocDownLoadStatuss: [],
      loadingList: false,
      startDate: "",
      endDate: "",
      AgentName: "",
      startDate1: "",
      endDate1: "",
      ccpidData: [],
      CCPJobNo: "",
      DeclareSWStatus: "",
      DeclareSWStatuss: [],
      handId:''
    };
  },
  methods: {
    // checkPermission,
    handleDownloadPDF(row) {
      this.loadingList = true;
      const datas = [
        {
          ClientId: 0,
          UserId: 0,
          EntryId: row.EntryId,
          DownLoadCDFOrDoc: 2,
          RequestId: this.$GuId
        }
      ];

      const data = {
        ClientId: 0,
        UserId: 0,
        EntryId: row.EntryId,
        DownLoadCDFOrDoc: 2,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      DownLoadCDFOrDoc(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.$message({
              type: "success",
              message: res.Message
            });
            this.loadingList = false;

            this.handleSearch();
          } else {
            this.loadingList = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(error => {});
    },
    handleDownloadData(row) {
      this.loadingList = true;

      const datas = [
        {
          ClientId: 0,
          UserId: 0,
          EntryId: row.EntryId,
          DownLoadCDFOrDoc: 1,
          RequestId: this.$GuId
        }
      ];
      const data = {
        ClientId: 0,
        UserId: 0,
        EntryId: row.EntryId,
        DownLoadCDFOrDoc: 1,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      DownLoadCDFOrDoc(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.$message({
              type: "success",
              message: res.Message
            });
            this.loadingList = false;
            this.handleSearch();
          } else {
            this.loadingList = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(error => {});
    },
    //随附单据
    handleEdocDownLoadStatus(data) {
      this.EdocDownLoadStatus = data;
    },
    handlesearchEdocDownLoadStatus(data) {
      throttle(this.getEdocDownLoadStatus(data), 6000);
    },
    getEdocDownLoadStatus(val) {
      if (!val) {
        val = null;
      }
      const datas = [
        {
          DropdownType: 64,
          Search: val,
          RequestId: this.$GuId
        }
      ];

      const data = {
        DropdownType: 64,
        Search: val,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      GetBaseDataList(data)
        .then(res => {
          if (res.isSuccess == true) {
            this.EdocDownLoadStatuss = res.data;
          }
        })
        .catch(error => {});
    },
    // 页数改变事件
    handleSizeChange(size) {
      this.size = size;
      this.tableDatas = this.paging(size, this.index);
    },
    // 页码改变事件
    handleCurrentChange(current) {
      this.index = current;
      this.tableDatas = this.paging(this.size, current);
    },
    // 本地分页的方法
    paging(size, current) {
      const tableList = JSON.parse(JSON.stringify(this.tableCopyTableList));
      const tablePush = [];
      tableList.forEach((item, index) => {
        if (size * (current - 1) <= index && index <= size * current - 1) {
          tablePush.push(item);
        }
      });
      return tablePush;
    },
    //复选框
    checkboxSelect(row, rowIndex) {
      // if (row.IsCanDown) {
      //   return true; // 不禁用
      // } else {
      //   return false; // 禁用
      // }
    },
    //海关编码下载
    handleEntrIdDownload() {
      this.loading1 = true;
      let IsDownLoadCDFA = "";
      let IsDownLoadDocA = "";

      if (this.IsDownLoadCDF) {
        IsDownLoadCDFA = "True";
      } else {
        IsDownLoadCDFA = "False";
      }

      if (this.IsDownLoadDoc) {
        IsDownLoadDocA = "True";
      } else {
        IsDownLoadDocA = "False";
      }

      const datas = [
        {
          ClientId: 0,
          EntryId: this.getEntryId,
          UserId: 0,
          IsDownLoadCDF: IsDownLoadCDFA,
          IsDownLoadDoc: IsDownLoadDocA,
          RequestId: this.$GuId
        }
      ];

      const data = {
        ClientId: 0,
        EntryId: this.getEntryId,
        UserId: 0,
        IsDownLoadCDF: IsDownLoadCDFA,
        IsDownLoadDoc: IsDownLoadDocA,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      SingleDownRemoteData(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.loading1 = false;
            this.getGainManifest();

            this.$message({
              message: res.Message,
              type: "success"
            });

            if (this.time3) {
              this.handleGainManifestSearch();
            }
          } else {
            this.loading1 = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(() => {});
    },
    //报关单进出口标志数据
    getIEsigns() {},
    //报关单进出口搜索
    handlesearchIEsigns() {
      throttle(this.getIEsigns(data), 6000);
    },
    //报关单进出口标志
    handleIEsigns(data) {
      this.IEsignIds = data;
    },
    handleDeclareSWStatus(data) {
      this.DeclareSWStatus = data;
    },
    //报关单下载
    handleDownload() {
      if (this.optForlength.length > 0) {
        this.$confirm(
          `您将下载${this.pitchOn}条报关单，共计扣除积分${this.deduct}，请确认`,
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "放弃",
            type: "warning"
          }
        )
          .then(() => {
            this.loading3 = true;

            let IsDownLoadCDFA = "";
            let IsDownLoadDocA = "";

            if (this.IsDownLoadCDFs) {
              IsDownLoadCDFA = "True";
            } else {
              IsDownLoadCDFA = "False";
            }

            if (this.IsDownLoadDocs) {
              IsDownLoadDocA = "True";
            } else {
              IsDownLoadDocA = "False";
            }

            let arr = [];

            for (let i = 0; i < this.optForlength.length; i++) {
              let obj = {};
              obj.EntryId = this.optForlength[i].EntryId;
              obj.cusDecStatusName = this.optForlength[i].Status;
              arr.push(obj);
            }

            const datas = [
              {
                ClientId: 0,
                UserId: 0
              }
            ];

            const data = {
              ClientId: 0,
              UserId: 0,
              data: arr,
              IsDownLoadCDF: IsDownLoadCDFA,
              IsDownLoadDoc: IsDownLoadDocA,
              RequestId: this.$GuId,
              Sign: this.$Setshae(datas)
            };

            BatchDownRemoteData(data)
              .then(res => {
                if (res.IsSuccess == true) {
                  this.loading3 = false;
                  this.getGainManifest();
                  this.handleGainManifestSearch();

                  this.$message({
                    message: res.Message,
                    type: "success"
                  });
                } else {
                  this.loading3 = false;

                  if (res.Data.AlertMessage) {
                    const h = this.$createElement;

                    let arr = [];

                    res.Data.AlertMessage.map(item => {
                      arr.push(
                        h("li", { style: "line-height:14px;" }, [
                          h(
                            "label",
                            { style: "font-size:12px;" },
                            item.PropertyName + "："
                          ),
                          h(
                            "label",
                            { style: "color:red;font-size:12px;" },
                            item.Messsage
                          )
                        ])
                      );
                    });

                    this.$msgbox({
                      title: res.Message,
                      message: h("div", null, arr),
                      showConfirmButton: false
                    }).catch(() => {});
                  } else {
                    this.$alert(res.Message, "提示", {
                      confirmButtonText: "确定",
                      type: "error"
                    });
                  }
                }
              })
              .catch(() => {});
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    //报关单查询
    handleGainManifestSearch() {
      this.getGainmaniFestLists();
    },
    //列表选中
    handleSelectionChange(row) {
      // console.log(row);
      this.optForlength = row;

      this.calculateIntegral();
    },
    //获取报关单列表
    getGainmaniFestLists() {
      let time13;
      let time33;

      this.loading2 = true;

      if (this.time3) {
        time13 = this.time3[0];
        time33 = this.time3[1];
      } else {
        time13 = "";
        time33 = "";
      }

      const datas = [
        {
          ClientId: 0,
          cusIEFlag: this.IEsignIds,
          beginTime: time13,
          endTime: time33,
          RequestId: this.$GuId
        }
      ];

      const data = {
        ClientId: 0,
        cusIEFlag: this.IEsignIds,
        beginTime: time13,
        endTime: time33,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      SearchRemoteData(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.loading2 = false;
            this.tableDatas = res.Data.tableData;
            this.tableCopyTableList = res.Data.tableData;

            this.handleSizeChange(this.size);
          } else {
            this.loading2 = false;
            this.$alert(
              res.Data.AlertMessage[0].PropertyName +
                res.Data.AlertMessage[0].Messsage,
              "提示",
              {
                confirmButtonText: "确定",
                type: "error"
              }
            );
          }
        })
        .catch(() => {});
    },
    //海关编号点击
    handleInventory(row) {
      if (
        !checkPermission("Otech.Ccs.CDFCompare.CompareMenu.Header.GetSingle")
      ) {
        this.$message.error("无权限，请联系管理员");
        return;
      }

      if (row.IEFlag == "E") {
        this.$router.push({
          path: "/customsdeclarationcontrastexport",
          query: {
            ccpid: row.EntryId
          }
        });
      } else if (row.IEFlag == "I") {
        this.$router.push({
          path: "/customsdeclarationcontrastimport",
          query: {
            ccpid: row.EntryId
          }
        });
      }
    },
    //获取列表信息
    getLists() {
      this.loadingList = true;

      const data = {
        ClientId: 0,
        EntryId: this.EntryId,
        BillNo: this.BillNo,
        AgentName: this.AgentName,
        HBNo: this.HBNo,
        SeqNo: this.SeqNo,
        IEFlag: this.IEsignId,
        IEDateStart: this.startDate1,
        IEDateEnd: this.endDate1,
        DDateStart: this.startDate,
        DDateEnd: this.endDate,
        CDFDownLoadStatus: this.CDFDownLoadStatus,
        CCPJobNo: this.CCPJobNo,
        EdocDownLoadStatus: this.EdocDownLoadStatus,
        declareSWStatus: this.DeclareSWStatus,
        PageIndex: this.pageIndex,
        PageSize: this.pageSize
      };

      GetCDFHeaderComparePagedList(data)
        .then(res => {
          this.loadingList = false;

          if (res.IsSuccess == true) {
            let str = res.Data;
            // console.log(str);

            this.tableData = str.List;
            this.total = str.AllCount;
						this.PageIndex = str.PageIndex;
						this.PageSize = str.PageSize;
          }
        })
        .catch(() => {
          this.loadingList = false;
        });
    },
    //获取报关单数据
    getGainManifest() {
      const datas = [
        {
          RequestId: this.$GuId
        }
      ];

      const data = {
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      GetPartClient(data)
        .then(res => {
          this.MembershipName = res.Data.MembershipName;
          this.Logo = res.Data.Logo;
          this.ResiduePoints = res.Data.ResiduePoints;
          this.SignlePoint = res.Data.SignlePoint;
          this.EdocSignlePoint = res.Data.EdocSignlePoint;
        })
        .catch(() => {});
    },
    //获取报关单按钮
    handleGainManifest() {
      this.GainManifest = true;
      this.getGainManifest();
    },
    //查询
    handleSearch() {
      this.pageIndex = 1;
      this.getLists();
    },
    //显示更多
    handleShowSearch() {
      this.show3 = !this.show3;
      let DomId = document.getElementById("on_svg");
      if (this.show3) {
        DomId.classList.add("active");
      } else {
        DomId.classList.remove("active");
      }
    },
    //进出口标志
    handleIEsign(data) {
      this.IEsignId = data;
    },
    //进出口标志搜索
    handlesearchIEsign(data) {
      throttle(this.getIEsign(data), 6000);
    },
    //进出口标志获取
    getIEsign() {},
    //计算积分
    calculateIntegral() {
      let str = 0;
      let integral = 0;
      if (this.getEntryId.length == 18) {
        str = 1;
      }

      this.pitchOn = this.optForlength.length + str;

      if (this.IsDownLoadCDFs == true && this.IsDownLoadDocs == false) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (this.optForlength[i].CDFDownLoadStatus == "未下载") {
            integral += Number(this.SignlePoint);
          }
        }
      } else if (this.IsDownLoadDocs == true && this.IsDownLoadCDFs == false) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (this.optForlength[i].EdocDownLoadStatus == "未下载") {
            integral += Number(this.EdocSignlePoint);
          }
        }
      } else if (this.IsDownLoadCDFs == true && this.IsDownLoadDocs == true) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (
            this.optForlength[i].CDFDownLoadStatus == "未下载" &&
            this.optForlength[i].EdocDownLoadStatus == "已下载"
          ) {
            integral += Number(this.SignlePoint);
          } else if (
            this.optForlength[i].CDFDownLoadStatus == "未下载" &&
            this.optForlength[i].EdocDownLoadStatus == "未下载"
          ) {
            integral += Number(this.SignlePoint) + Number(this.EdocSignlePoint);
          } else if (
            this.optForlength[i].CDFDownLoadStatus == "已下载" &&
            this.optForlength[i].EdocDownLoadStatus == "未下载"
          ) {
            integral += Number(this.EdocSignlePoint);
          }
        }
      }

      this.deduct = integral;

      if (this.deduct > this.ResiduePoints) {
        let className = document.getElementsByClassName("red_class");
        className[0].style.color = "red";
        className[1].style.color = "red";
      } else {
        let className = document.getElementsByClassName("red_class");
        className[0].style.color = "";
        className[1].style.color = "";
      }
    }
  },
  components: {
    Pagination
  },
  created() {
    if (checkPermission("Otech.Ccs.HisDataSubManagement.Bills.GetList")) {
      this.getLists();
    }
    this.handId =Date.parse(new Date());
    this.getEdocDownLoadStatus();
  },
  watch: {
    getEntryId() {
      this.calculateIntegral();
    }
  }
};
</script>

<style lang="scss" scoped>
.datasubscription {
  background: #ffffff;
  font-size: 14px;

  .datasubscription_search_btn {
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    span {
      cursor: pointer;
    }
  }

  .list_data {
    .color_span {
      color: #00aef0;
      cursor: pointer;
    }
  }

  .active {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg); /* Opera */
  }

  /deep/.el-table td,
  .el-table th {
    padding: 0;
  }
}

.gainmanifest_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgb(210, 212, 216);
  padding: 10px 0;

  .gainmanifest_top_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px dashed rgb(210, 212, 216);
    position: relative;

    p {
      margin: 5px 0;

      .left_span {
        text-align: right;
      }
      span {
        width: 140px;
        display: inline-block;
      }

      &:first-child {
        display: flex;
      }
    }

    .position_span {
      position: absolute;
      top: -9px;
      left: 20px;
      background: #ffffff;
      padding: 0 10px;
    }
  }

  .gainmanifest_top_right {
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

/deep/.el-dialog__title {
  font-size: 16px;
}

.gainmanifest_search {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px dashed rgb(210, 212, 216);
  position: relative;

  .position_span {
    position: absolute;
    top: -9px;
    left: 20px;
    background: #ffffff;
    padding: 0 10px;
  }

  .progress_top_son {
    margin-right: 20px;
    width: 300px;

    span {
      display: block;
      margin-bottom: 10px;
    }

    .exitdetaile {
      /deep/.el-input--suffix .el-input__inner {
        border: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
        width: 100%;
      }

      /deep/.el-input__icon {
        line-height: 32px;
      }

      /deep/.el-input--suffix .el-input__inner:focus {
        border: 1px solid #00aef0;
        outline: 0;
      }
    }

    .content_bettwen {
      margin-right: 0;
    }
  }

  .btn {
    display: flex;
    align-items: flex-end;
  }
}

.gainmanifest_btn {
  margin: 10px 0;
}

.cont_div {
  display: flex;
  padding: 20px 0 0;
  position: relative;

  .position_span {
    position: absolute;
    top: -9px;
    left: 20px;
    background: #ffffff;
    padding: 0 10px;
  }

  .progress_top_son {
    margin-right: 20px;
    width: 300px;

    span {
      display: block;
      margin-bottom: 10px;
    }

    .exitdetaile {
      /deep/.el-input--suffix .el-input__inner {
        border: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
        width: 100%;
      }

      /deep/.el-input__icon {
        line-height: 32px;
      }

      /deep/.el-input--suffix .el-input__inner:focus {
        border: 1px solid #00aef0;
        outline: 0;
      }
    }

    .content_bettwen {
      margin-right: 0;
    }
  }
}

.gainmanifest_list {
  /deep/.el-table td,
  .el-table th {
    padding: 0;
  }

  /deep/.pagination-container {
    padding: 20px 16px;
  }
}
/deep/.el-dialog__body {
  padding: 0px 20px 20px;
}
/deep/.el-dialog__header {
  padding: 10px 20px 10px;
}
/deep/ .el-table th {
  text-align: center !important;
}

/deep/.cell {
  height: 35px;
  line-height: 35px;
}
</style>

<style>
.hover-row > td {
  background-color: rgba(232, 249, 255, 1) !important;
}
</style>

<style lang="scss" scoped>
@import "@/styles/search.scss";
</style>

--报关单复核

--报关行接单
<html>
  <div class="oradministration">
    <div class="card_div card_div_body">
      <!-- 搜索条件 -->
      <div class="progress_top">
        <div class="progress_top_son">
          <span>{{ $t("page.CCPJobNo") }}：</span>
          <!-- <span>报关单内部编号：</span> -->
          <el-input
            v-model="jsonData.CCPJobNo"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.CCPJobNo')"
          />
        </div>
        <div class="progress_top_son">
          <span>{{ $t("button.status") }}：</span>
          <!-- <span>状态：</span> -->
          <SelectComAll
            @change="handleApprovalStatus"
            :dtype="83"
            :flagtype="16"
            :title="jsonData.ApprovalStatus"
            :update="update"
          ></SelectComAll>
        </div>
        <div class="progress_top_son">
          <span>{{ $t("page.FileName") }}：</span>
          <!-- <span>单据名称：</span> -->
          <el-input
            v-model="jsonData.FileName"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.FileName')"
          />
        </div>
        <div class="progress_top_son">
          <span>{{ $t("page.FileType") }}：</span>
          <!-- <span>单据类型：</span> -->
          <SelectComAll
            @change="handleFileType"
            :dtype="83"
            :flagtype="5"
            :title="jsonData.FileType"
            :update="update"
          ></SelectComAll>
        </div>
      </div>

      <div class="btn_div">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="handleAddBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.CCPAdd'
          ]"
          >{{ $t("button.newAdd") }}</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="handleUploadBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.CCPAdd'
          ]"
          >{{ $t("button.uploadbtn") }}</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleSearchBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.CCPGetList'
          ]"
          >{{ $t("button.search") }}</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-delete"
          :loading="loadDel"
          @click="handleDeleteBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.CCPDelete'
          ]"
          >{{ $t("button.delete") }}</el-button
        >
        <el-button
          type="primary"
          @click="handleGenerateBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.ReceiveDocGD'
          ]"
          >{{ $t("button.generatebtn") }}</el-button
        >
        <!-- 生成归档文件 -->
        <el-button
          type="primary"
          @click="handleEntrustBtn"
          v-permission="[
            'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.Entrust'
          ]"
          >{{ $t("button.entrust") }}</el-button
        >
        <!-- 委托 -->
      </div>

      <div class="table_list">
        <el-table
          :data="tableData"
          height="405"
          ref="multipleTable"
          :border="true"
          :unique-opened="true"
          fit
          :highlight-current-row="true"
          @row-click="handleRowclick"
          element-loading-text="正在查询中。。。"
          v-loading="listLoading"
          tooltip-effect="light"
          @expand-change="toogleExpand"
          :expand-row-keys="expands"
          row-key="CCPId"
        >
          <el-table-column type="expand" width="55">
            <html slot-scope="props">
              <el-table
                :data="props.row.CCPOrderReceiveDocument"
                height="200"
                fit
                @selection-change="handleSelectionChange"
                tooltip-effect="light"
              >
                <el-table-column
                  type="selection"
                  width="55"
                  align="center"
                  :selectable="selectable"
                ></el-table-column>
                <el-table-column
                  :min-width="$flexColumnWidth($t('page.FileName'))"
                  prop="FILENAME"
                  show-overflow-tooltip
                  :label="$t('page.FileName')"
                ></el-table-column>
                <!-- label="单据名称" -->
                <el-table-column
                  :min-width="$flexColumnWidth($t('page.FileType'))"
                  prop="FileTypeName"
                  show-overflow-tooltip
                  :label="$t('page.FileType')"
                ></el-table-column>
                <!-- label="单据类型" -->
                <el-table-column
                  :min-width="$flexColumnWidth($t('page.CREATEDATEName'))"
                  prop="CREATEDATEName"
                  show-overflow-tooltip
                  :label="$t('page.CREATEDATEName')"
                ></el-table-column>
                <!-- label="上传日期" -->
                <el-table-column
                  :min-width="$flexColumnWidth($t('page.GuiDang'))"
                  prop="GuiDang"
                  show-overflow-tooltip
                  :label="$t('page.GuiDang')"
                ></el-table-column>
                <!-- label="是否归档" -->
                <el-table-column
                  :min-width="$flexColumnWidth($t('button.operation'))"
                  show-overflow-tooltip
                  :label="$t('button.operation')"
                >
                  <html slot-scope="scope">
                    <div class="cont_div">
                      <el-button
                        type="primary"
                        icon="el-icon-view"
                        class="small_btn"
                        @click="handlePreview(scope.row)"
                        >{{ $t("button.preview") }}</el-button
                      >
                      <el-button
                        type="primary"
                        icon="el-icon-download"
                        @click="handleDownload(scope.row)"
                        class="small_btn"
                        v-permission="[
                          'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.Download'
                        ]"
                        >{{ $t("button.downloadFile") }}</el-button
                      >
                      <el-button
                        type="primary"
                        icon="el-icon-delete"
                        class="small_btn"
                        :loading="loadDel2"
                        @click="handleDelete(scope.row)"
                        v-permission="[
                          'Otech.Ccs.CCPOrderReceive.OrderReceiveManager.DocDelete'
                        ]"
                        >{{ $t("button.delete") }}</el-button
                      >
                    </div>
                  </html>
                </el-table-column>
                <!-- label="操作" -->
              </el-table>
            </html>
          </el-table-column>
          <el-table-column
            :min-width="$flexColumnWidth($t('page.CCPJobNo'))"
            show-overflow-tooltip
            :label="$t('page.CCPJobNo')"
          >
            <html slot-scope="scope">
              <span @click="handleInventory(scope.row)" class="color_span">{{
                scope.row.CCPJobNo
              }}</span>
            </html>
          </el-table-column>
          <!-- label="报关单内部编号" -->
          <el-table-column
            :min-width="$flexColumnWidth($t('page.CREATEDATENName'))"
            prop="CREATEDATENName"
            show-overflow-tooltip
            :label="$t('page.CREATEDATENName')"
          ></el-table-column>
          <!-- label="创建时间" -->
          <el-table-column
            :min-width="$flexColumnWidth($t('button.status'))"
            prop="ApprovalStatusName"
            :label="$t('button.status')"
            show-overflow-tooltip
          ></el-table-column>
          <!-- label="状态" -->
        </el-table>

        <pagination
          :total="jsonData.total"
          :page.sync="jsonData.PageIndex"
          :limit.sync="jsonData.PageSize"
          @pagination="getLists"
          @paginationSize="handleSearchBtn"
        />
      </div>
    </div>
  </div>
</html>

<script>
const Pagination = () => import("@/components/Pagination");
import {
  GetCCPOrderReceivePagedList,
  CCPHeaderDelete,
  CCPOrderReceiveDocGD,
  DeleteCCPOrderReceiveDoc,
  CCPOrderReceiveDocDownload,
  CCPOrderReceiveEntrust
} from "@/api/cboradministration";

export default {
  name: "oradministration",
  data() {
    return {
      jsonData: {
        CCPJobNo: "",
        ApprovalStatus: "",
        FileName: "",
        FileType: "",
        total: 0,
        PageIndex: 1,
        PageSize: 10,
        CCPType: 0,
        IEFlag: "E"
      },
      ApprovalStatuss: [],
      FileTypes: [],
      checkList: [],
      checkId: "",
      tableData: [],
      listLoading: false,
      expands: [],
      loadDel: false,
      loadDel2: false
    };
  },
  components: {
    Pagination
  },
  methods: {
    toogleExpand(row, expanded) {
      this.expands.push(row.CCPId);

      for (let i = 0; i < this.expands.length; i++) {
        if (this.expands[i] !== row.CCPId) {
          this.expands.splice(i, 1);
        } else if (this.expands[i] == this.expands[i + 1]) {
          this.expands = [];
        }
      }
    },
    //委托
    handleEntrustBtn() {
      const data = {
        CCPId: this.checkId.CCPId
      };

      CCPOrderReceiveEntrust(data)
        .then(res => {
          this.getLists();

          if (res.IsSuccess == true) {
            this.$message({
              type: "success",
              message: "委托成功!"
            });
          } else {
            if (res.Data && res.Data.AlertMessage.length > 0) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h(
                    "li",
                    {
                      style: "line-height:14px;"
                    },
                    [
                      h(
                        "label",
                        {
                          style: "font-size:12px;"
                        },
                        item.PropertyName + "："
                      ),
                      h(
                        "label",
                        {
                          style: "color:red;font-size:12px;"
                        },
                        item.Messsage
                      )
                    ]
                  )
                );
              });

              this.$msgbox({
                title: "提示",
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(() => {});
    },
    //生成归档文件
    handleGenerateBtn() {
      if (this.checkList.length > 0) {
        let arr = this.checkList.map(res => res.DocId);

        const data = {
          CCPId: this.checkList[0].CCPId,
          DocIds: arr
        };

        CCPOrderReceiveDocGD(data)
          .then(res => {
            this.getLists();

            if (res.IsSuccess == true) {
              this.$message({
                type: "success",
                message: "生成成功!"
              });
            } else {
              if (res.Data && res.Data.AlertMessage.length > 0) {
                const h = this.$createElement;

                let arr = [];

                res.Data.AlertMessage.map(item => {
                  arr.push(
                    h(
                      "li",
                      {
                        style: "line-height:14px;"
                      },
                      [
                        h(
                          "label",
                          {
                            style: "font-size:12px;"
                          },
                          item.PropertyName + "："
                        ),
                        h(
                          "label",
                          {
                            style: "color:red;font-size:12px;"
                          },
                          item.Messsage
                        )
                      ]
                    )
                  );
                });

                this.$msgbox({
                  title: "提示",
                  message: h("div", null, arr),
                  showConfirmButton: false
                }).catch(() => {});
              } else {
                console.log("123");

                this.$alert(res.Message, "提示", {
                  confirmButtonText: "确定",
                  type: "error"
                });
              }
            }
          })
          .catch(() => {});
      } else {
        this.$alert("请选中一条数据进行操作", "提示", {
          confirmButtonText: "确定",
          type: "error"
        });
      }
    },
    //选中某一行
    handleRowclick(row) {
      this.checkId = row;
    },
    //删除
    handleDelete(row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "放弃",
        type: "warning"
      })
        .then(() => {
          const data = {
            CCPId: row.CCPId,
            DocId: row.DocId
          };

          this.loadDel2 = true;
          DeleteCCPOrderReceiveDoc(data)
            .then(res => {
              this.loadDel2 = false;
              if (res.IsSuccess == true) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.handleSearchBtn();
              } else {
                this.$alert(res.Message, "提示", {
                  confirmButtonText: "确定",
                  type: "error"
                });
              }
            })
            .catch(() => {
              this.loadDel2 = false;
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //下载
    handleDownload(row) {
      const data = {
        ccpId: row.CCPId,
        docId: row.DocId
      };

      CCPOrderReceiveDocDownload(data)
        .then(res => {
          if (!res) {
            return;
          }

          const blob = new Blob([res]);
          const fileName = row.FILENAME;
          if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
          } else {
            const downloadElement = document.createElement("a");
            const href = window.URL.createObjectURL(blob); // 创建下载的链接
            downloadElement.href = href;
            downloadElement.download = fileName; // 下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); // 点击下载
            document.body.removeChild(downloadElement); // 下载完成移除元素
            window.URL.revokeObjectURL(href); // 释放掉blob对象
          }
        })
        .catch(() => {});
    },
    //预览
    handlePreview(row) {
      let url = row.FilePath;
      let res = url.substring(url.lastIndexOf(".") + 1);

      if (res == "pdf") {
        window.open(url);
      } else if (
        res == "xlsx" ||
        res == "docx" ||
        res == "xls" ||
        res == "doc"
      ) {
        this.$alert("此文件不支持预览，请下载查看", "提示", {
          confirmButtonText: "确定",
          type: "error"
        });
      } else {
        this.$router.push({
          path: "/imgurl",
          query: {
            url: url
          }
        });
      }
    },
    //超链接
    handleInventory(row) {
      if (row.IEFlag == "I") {
        this.$router.push({
          path: "/newaddcustom",
          query: {
            CCPId: row.CCPId
          }
        });
      } else if (row.IEFlag == "E") {
        this.$router.push({
          path: "/newaddcustoms",
          query: {
            CCPId: row.CCPId
          }
        });
      }
    },
    //勾选列表
    handleSelectionChange(row) {
      this.checkList = row;
    },
    //列表获取
    getLists() {
      this.listLoading = true;
      this.checkId = "";

      const data = this.jsonData;

      GetCCPOrderReceivePagedList(data)
        .then(res => {
          this.listLoading = false;
          if (res.IsSuccess == true) {
            this.tableData = res.Data.List;
            this.jsonData.total = res.Data.AllCount;
          }
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
    //删除
    handleDeleteBtn() {
      if (this.checkId) {
        this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "放弃",
          type: "warning"
        })
          .then(() => {
            const data = {
              LoginUserId: 0,
              ClientId: 0,
              CCPId: this.checkId.CCPId
            };

            this.loadDel = true;
            CCPHeaderDelete(data)
              .then(res => {
                this.loadDel = false;
                if (res.IsSuccess == true) {
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  });

                  this.handleSearchBtn();
                } else {
                  this.$alert(res.Message, "提示", {
                    confirmButtonText: "确定",
                    type: "error"
                  });
                }
              })
              .catch(() => {
                this.loadDel = false;
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      } else {
        this.$alert("请选中一条数据进行操作", "提示", {
          confirmButtonText: "确定",
          type: "error"
        });
      }
    },
    //查询
    handleSearchBtn() {
      this.jsonData.PageIndex = 1;

      this.getLists();
    },
    //上传
    handleUploadBtn() {
      if (this.checkId) {
        this.$router.push({
          path: "/cbornepage",
          query: {
            id: this.checkId.CCPId
          }
        });
      } else {
        this.$alert("请选中一条数据进行操作", "提示", {
          confirmButtonText: "确定",
          type: "error"
        });
      }
    },
    //新增
    handleAddBtn() {
      this.$router.push({
        path: "/cbornepage",
        query: {
          id: ""
        }
      });
    },
    //状态警用
    selectable(row, index) {
      if (row.GuiDang === "已归档") {
        return false;
      } else {
        return true;
      }
    },
    //单据类型
    handleFileType(data) {
      this.jsonData.FileType = data;
    },
    //状态
    handleApprovalStatus(data) {
      this.jsonData.ApprovalStatus = data;
    }
  },
  created() {
    this.getLists();
    this.update = Date.parse(new Date());
  }
};
</script>

<style lang="scss" scoped>
.oradministration {
  font-size: 14px;

  .cont_div {
    display: flex;
    justify-content: center;
  }

  /deep/.small_btn {
    margin: 0 3px;
    padding: 3px;
    font-size: 12px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/search.scss";
</style>

--查验台账
  <html>
  <div class="original">
    <div class="card_div">
      <div class="original_top">
        <div class="original_top_son">
          <span><!-- 海关编号 -->{{ $t("custom.customsCoding") }}：</span>
          <el-input
            v-model="searchQuery.EntryId"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.customsCoding')"
          />
        </div>
        <div class="original_top_son">
          <span><!-- 报关单内部编号 -->{{ $t("page.CCPJobNo") }}：</span>
          <el-input
            v-model="searchQuery.CCPJOBNO"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.CCPJobNo')"
          />
        </div>
        <div class="original_top_son">
          <span><!-- 提单号 -->{{ $t("page.billno") }}：</span>
          <el-input
            v-model="searchQuery.BillNo"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.billno')"
          />
        </div>
        <div class="original_top_son">
          <span><!-- 进出口类型 -->{{ $t("page.ieTypes") }}：</span>
          <!-- IEFlag -->
          <SelectComAll
            @change="IEFlagFun"
            :update="updateId2"
            :title="IEFlagId"
            :dtype="59"
          ></SelectComAll>
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="collapseFlag">
          <div class="original_top">
            <div class="original_top_son">
              <span><!-- 进出口日期 -->{{ $t("page.IEDate") }}：</span>
              <el-date-picker
                v-model="time"
                type="date"
                :placeholder="$t('button.select')"
                size="small"
                value-format="yyyy-MM-dd"
                class="timeData"
              ></el-date-picker>
            </div>
            <div class="original_top_son" style="position: relative;">
              <span class="flexelem">-</span>
              <span style="visibility: hidden;">进出口日期</span>
              <el-date-picker
                v-model="time2"
                type="date"
                :placeholder="$t('button.select')"
                size="small"
                value-format="yyyy-MM-dd"
                class="timeData"
              ></el-date-picker>
            </div>
            <div class="original_top_son"></div>
            <div class="original_top_son"></div>
          </div>
        </div>
      </el-collapse-transition>
      <div class="collapse">
        <span @click="collapseFlag = !collapseFlag">
          <span v-show="!collapseFlag"
            ><i class="el-icon-arrow-down"></i> {{ $t("page.more") }}</span
          >
          <span v-show="collapseFlag"
            ><i class="el-icon-arrow-up"></i> {{ $t("page.hide") }}</span
          >
        </span>
      </div>
      <div class="original_btn">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleNewSearch"
          v-permission="[
            'Otech.Ccs.CheckingAccount.CCPCheckingAccount.CCPGetList'
          ]"
          >{{ $t("button.search") }}</el-button
        >
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        element-loading-text="正在查询中。。。"
        v-loading="listLoading"
        tooltip-effect="light"
        :border="true"
        height="405px"
        @row-click="rowClicks"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          min-width="200px"
          fixed
          :label="$t('custom.customsCoding')"
        >
          <html slot-scope="scope">
            <span class="color_span" @click="handleInventory(scope.row)">{{
              scope.row.EntryId
            }}</span>
          </html>
        </el-table-column>
        <!-- 海关编号 -->
        <el-table-column
          prop="CCPJOBNO"
          show-overflow-tooltip

          :min-width="$flexColumnWidth($t('page.CCPJobNo'))"
          :label="$t('page.CCPJobNo')"
        ></el-table-column>
        <!-- 报关单内部编号 -->
        <el-table-column
          prop="BillNo"
          show-overflow-tooltip

          :min-width="$flexColumnWidth($t('page.billno'))"
          :label="$t('page.billno')"
        ></el-table-column>
        <!-- 提单号 -->
        <el-table-column
          prop="IEFlag"
          show-overflow-tooltip

          :min-width="$flexColumnWidth($t('page.ieTypes'))"
          :label="$t('page.ieTypes')"
        ></el-table-column>
        <!-- 进出口类型 -->
        <el-table-column
          prop="CustomMaster"
          show-overflow-tooltip

          :min-width="$flexColumnWidth($t('page.CitiesLandId'))"
          :label="$t('custom.CitiesLandId')"
        ></el-table-column>
        <!-- 申报地海关 -->
        <el-table-column
          prop="IEPort"
          show-overflow-tooltip

          :min-width="$flexColumnWidth($t('page.ieflag3'))"
          :label="$t('page.ieflag3')"
        ></el-table-column>
        <!-- 进出境关别 -->
        <el-table-column
          prop="PackNo"
					align="right"
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.numBerofCases'))"
          :label="$t('custom.numBerofCases')"
        ></el-table-column>
        <!-- 件数 -->
        <el-table-column
          prop="GrossWet"
          show-overflow-tooltip
          align="right"
          :min-width="$flexColumnWidth($t('page.adjustGrossWt'))"
          :label="$t('page.adjustGrossWt')"
        ></el-table-column>
        <!-- 毛重 -->
        <el-table-column
          prop="TrafMode"
          show-overflow-tooltip
          :min-width="
            $flexColumnWidth($t('page.transportation'))
          "
          :label="$t('page.transportation')"
        ></el-table-column>
        <!-- 运输方式 -->
        <el-table-column
          prop="IEDateName"
          show-overflow-tooltip
          align="right"
          :min-width="$flexColumnWidth($t('page.IEDate'))"
          :label="$t('page.IEDate')"
        ></el-table-column>
        <!-- 进出口日期 -->
        <el-table-column
          prop="NoticeTimeName"
          show-overflow-tooltip
          align="right"
          :min-width="$flexColumnWidth($t('page.noticeTime'))"
          :label="$t('page.noticeTime')"
        ></el-table-column>
        <!-- 海关通知时间 -->
        <el-table-column
          prop="CustomsRemark"
          show-overflow-tooltip
          :min-width="
            $flexColumnWidth($t('page.CustomsReceipt'))
          "
          :label="$t('page.CustomsReceipt')"
        ></el-table-column>
        <!-- 海关回执信息 -->
        <el-table-column
          prop="InspectionTimeName"
          show-overflow-tooltip
          align="right"
          :min-width="$flexColumnWidth($t('page.CheckTime'))"
          :label="$t('page.CheckTime')"
        ></el-table-column>
        <!-- 查验时间 -->
        <el-table-column
          prop="Remark"
          show-overflow-tooltip
          :min-width="
            $flexColumnWidth($t('page.CheckDescription'))
          "
          :label="$t('page.CheckDescription')"
        ></el-table-column>
        <!-- 查验详情 -->
      </el-table>
      <pagination
        :total="total"
        :page.sync="PageIndex"
        :limit.sync="PageSize"
        @pagination="getLists"
				@paginationSize ="handleNewSearch"
      />
      <div>
        <el-button
          type="primary"
          icon="el-icon-receiving"
          @click="saveFun"
          v-permission="['Otech.Ccs.CheckingAccount.CCPCheckingAccount.CCPAdd']"
          :loading="buttonloading"
          >{{ $t("button.save") }}</el-button
        >
      </div>
      <div class="newaddedlistlefttop_table">
        <table class="form">
          <tbody>
            <tr>
              <th class="formTitle" colspan="2">
                <!-- 海关编号 -->{{ $t("custom.customsCoding") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.EntryId" />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 报关单内部编号 -->{{ $t("page.CCPJobNo") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.CCPJOBNO" />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 提单号 -->{{ $t("page.billno") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.BillNo" />
              </td>
            </tr>
            <tr>
              <th class="formTitle" colspan="2">
                <!-- 进出口类型 -->{{ $t("page.ieTypes") }}
              </th>
              <!-- IEFlag -->
              <td class="formValue" colspan="2">
                <SelectComAll
                  @change="IEFlagFun2"
                  :title="IEFlagId2"
                  :dtype="59"
                  :disableds="true"
                  :update="updateIds"
                ></SelectComAll>
              </td>
              <th class="formTitle" colspan="2">
                <!-- 申报地海关 -->{{ $t("custom.CitiesLandId") }}
              </th>
              <!-- CustomMaster -->
              <td class="formValue" colspan="2">
                <SelectComAll
                  @change="customFun"
                  :title="customId"
                  :flagurl ="'customer'"
                  :localsearch = "true"
                  :disableds="true"
                  :update="updateIds"
                ></SelectComAll>
              </td>
              <th class="formTitle" colspan="2">
                <!-- 进出境关别 -->{{ $t("page.ieflag3") }}
              </th>
              <!-- IEPort -->
              <td class="formValue" colspan="2">
                <SelectComAll
                  @change="customClearanceFun"
                  :title="customClearanceId"
                  :flagurl ="'customer'"
                  :localsearch = "true"
                  :disableds="true"
                  :update="updateIds"
                ></SelectComAll>
              </td>
            </tr>
            <tr>
              <th class="formTitle" colspan="2">
                <!-- 件数 -->{{ $t("custom.numBerofCases") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.PackNo" />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 毛重 -->{{ $t("page.adjustGrossWt") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.GrossWet" />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 运输方式 -->{{ $t("page.transportation") }}
              </th>
              <!-- TrafMode -->
              <td class="formValue" colspan="2">
                <SelectComAll
                  @change="transportationFun"
                  :title="transportationId"
                  :flagurl ="'transportation'"
                  :localsearch = "true"
                  :disableds="true"
                  :update="updateIds"
                ></SelectComAll>
              </td>
            </tr>
            <tr>
              <th class="formTitle" colspan="2">
                <!-- 进出口日期 -->{{ $t("page.IEDate") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input type="text" disabled v-model="tableTitle.IEDate" />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 通知时间 -->{{ $t("page.noticeTime") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input
                  type="text"
                  disabled
                  v-model="tableTitle.NoticeTime"
                />
              </td>
              <th class="formTitle" colspan="2">
                <!-- 海关回执信息 -->{{ $t("page.CustomsReceipt") }}
              </th>
              <td class="formValue" colspan="2">
                <el-input
                  type="text"
                  disabled
                  v-model="tableTitle.CustomsRemark"
                />
              </td>
            </tr>
            <tr>
              <th class="formTitle" colspan="2">
                <!-- 查验时间 -->{{ $t("page.CheckTime") }}
              </th>
              <td class="formValue" colspan="4">
                <el-date-picker
                  v-model="tableTitle.InspectionTime"
                  type="date"
                  :placeholder="$t('button.select')"
                  size="small"
                  value-format="yyyy-MM-dd"
                  class="enterFlag"
                  ref="InspectionTime"
                  clearable
                  @keyup.enter.native="handleKeyup('InspectionTime', $event)"
                ></el-date-picker>
              </td>
              <th class="formTitle" colspan="2">
                <!-- 查验描述 -->{{ $t("page.CheckDescription") }}
              </th>
              <td class="formValue" colspan="4">
                <el-input
                  type="text"
                  v-model="tableTitle.Remark"
                  maxLength="255"
                  class="enterFlag"
                  ref="mark"
                  clearable
                  @keyup.enter.native="handleKeyup('mark', $event)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</html>

<script>
import Pagination from "@/components/Pagination";
import {
  CostHeaderPageList,
  CostHeaderDelete
} from "@/api/serviceCharge/index";
import checkPermission from "@/utils/permission"; // 权限判断函数
import {
  GetCCPCheckingAccountPagedList,
  GetCCPCheckingAccount,
  CCPCheckingAccountSave
} from "@/api/parameter";
export default {
  name: "checkParameterList",
  components: { Pagination },
  data() {
    return {
      searchQuery: {
        EntryId: "", //海关编号
        CCPJOBNO: "", //报关单内部编号
        BillNo: "" //提单号
      },
      listLoading: false,
      PageIndex: 1, // 第几页
      PageSize: 10, // 每页多少条
      total: 0, //总条数
      tableData: [], // 列表数据
      time: "", //IEDateStart
      time2: "", //IEDateEnd
      citiesIEFlag: [], //进出口类型 IEFlag
      IEFlagId: "",
      citiesIEFlag2: [], //进出口类型 IEFlag
      IEFlagId2: "",
      citiesCustom: [], //申报地海关 CustomMaster
      customId: "",
      citiesCustomClearance: [], //进出境关别 IEPort
      customClearanceId: "",
      citiesTransportation: [], //运输方式  TrafMode
      transportationId: "",
      updateId: "",
      buttonloading: false,
      collapseFlag: false,
      editflag: false,
      tableTitle: {
        EntryId: "",
        CCPJOBNO: "",
        BillNo: "",
        PackNo: "",
        GrossWet: "",
        IEDate: "",
        NoticeTime: "",
        CustomsRemark: "",
        InspectionTime: "",
        Remark: ""
      },
      updateIds:'',
      updateId2:''
    };
  },
  watch: {},
  created() {
    if (
      checkPermission("Otech.Ccs.CheckingAccount.CCPCheckingAccount.CCPGetList")
    ) {
      this.getLists();
    }
  },
  mounted() {
    this.updateIds =Date.parse(new Date());
    this.updateId2 =Date.parse(new Date());
  },
  methods: {
    //进出口类型
    IEFlagFun(val) {
      this.IEFlagId = val;
    },
    IEFlagFun2(val) {
      this.IEFlagId2 = val;
    },
    //申报地海关
    customFun(val) {
      this.customId = val;
    },
    //进出境关别
    customClearanceFun(val) {
      this.customClearanceId = val;
    },
    //运输方式
    transportationFun(val) {
      this.transportationId = val;
    },
    //获取表格数据
    getLists() {
      this.listLoading = true;
      const data = {
        ClinetId: 0,
        EntryId: this.searchQuery.EntryId, //海关编号
        CCPJOBNO: this.searchQuery.CCPJOBNO, //报关单内部编号
        BillNo: this.searchQuery.BillNo, //提单号
        IEDateStart: this.time,
        IEDateEnd: this.time2,
        IEFlag: this.IEFlagId,
        PageIndex: this.PageIndex, // 第几页
        PageSize: this.PageSize // 每页多少条
      };
      GetCCPCheckingAccountPagedList(data)
        .then(res => {
          if (res.IsSuccess) {
            this.listLoading = false;
            this.total = res.Data.AllCount;
						this.PageIndex = res.Data.PageIndex;
						this.PageSize = res.Data.PageSize;
            this.tableData = res.Data.List;
          }
        })
        .catch(error => {});
    },
    clearData() {
      this.IEFlagId2 = "";
      this.customId = "";
      this.customClearanceId = "";
      this.transportationId = "";
      this.updateId = "";
      this.editflag = false;
      this.tableTitle = {
        EntryId: "",
        CCPJOBNO: "",
        BillNo: "",
        PackNo: "",
        GrossWet: "",
        IEDate: "",
        NoticeTime: "",
        CustomsRemark: "",
        InspectionTime: "",
        Remark: ""
      };
    },
    //查询
    handleNewSearch() {
      this.PageIndex = 1;
      this.getLists();
    },
    //点击行
    rowClicks(row, event, column) {
      this.handleInventory(row, this.index + 1);
    },
    //点击链接
    handleInventory(row) {
      if (
        !checkPermission(
          "Otech.Ccs.CheckingAccount.CCPCheckingAccount.GetSingle"
        )
      ) {
        this.$message.error("无权限，请联系管理员");
        return;
      }
      this.editflag = true;
      const data = {
        ClientId: 0,
        CCPId: row.CCPId
      };
      GetCCPCheckingAccount(data)
        .then(res => {
          if (res.IsSuccess) {
            this.updateId = row.CCPId;
            this.IEFlagId2 = res.Data.IEFlag;
            this.customId = res.Data.CustomMaster;
            this.customClearanceId = res.Data.IEPort;
            this.transportationId = res.Data.TrafMode;
            this.tableTitle = {
              EntryId: res.Data.EntryId,
              CCPJOBNO: res.Data.CCPJOBNO,
              BillNo: res.Data.BillNo,
              PackNo: res.Data.PackNo,
              GrossWet: res.Data.GrossWet,
              IEDate: res.Data.IEDateName,
              NoticeTime: res.Data.NoticeTimeName,
              CustomsRemark: res.Data.CustomsRemark,
              InspectionTime: res.Data.InspectionTimeName,
              Remark: res.Data.Remark
            };
            this.updateIds =Date.parse(new Date());

          }
        })
        .catch(error => {});
    },
    //保存
    saveFun() {
      if (!this.editflag) {
        this.$alert("请先选择一条数据", "错误！", {
          confirmButtonText: "确定",
          type: "error"
        });
      }
      const data = {
        ClientId: 0,
        CCPId: this.updateId,
        InspectionTime: this.tableTitle.InspectionTime,
        Remark: this.tableTitle.Remark
      };
      this.buttonloading = true;
      CCPCheckingAccountSave(data)
        .then(res => {
          this.buttonloading = false;
          if (res.IsSuccess) {
            this.$message({
              type: "success",
              message: "保存成功"
            });
            this.clearData();
            this.getLists();
          } else {
            if (res.Data && res.Data.AlertMessage.length > 0) {
              const h = this.$createElement;
              let arr = [];
              arr.push(
                h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                  h("label", { style: "font-size:12px;" }, "保存失败。")
                ])
              );

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });
              this.$msgbox({
                title: "保存提示",
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "错误！", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(error => {});
    },
    //递归
    recursions(index, n) {
      const nexts = this.$refs[Object.keys(this.$refs)[index + n]];
      const flag2 = nexts.$el.className.indexOf("enterFlag") !== -1;
      if (nexts.disableds || nexts.disabled) {
        let m = n + 1;
        this.recursions(index, m);
      } else {
        if (flag2) {
          if (nexts.$children.length > 0) {
            //console.log(nexts.$children[0])
            nexts.$children[0].focus();
          } else {
            nexts.focus();
          }
        }
      }
    },
    //回车
    handleKeyup(name, e) {
      const index = Object.keys(this.$refs).indexOf(name);
      const currents = this.$refs[Object.keys(this.$refs)[index]];
      const flag = currents.$el.className.indexOf("enterFlag") !== -1;
      if (flag) {
        if (currents.$children.length > 0) {
          currents.$children[0].blur();
        } else {
          currents.blur();
        }

        if (name === "mark") {
          this.saveFun();
        } else {
          this.recursions(index, 1);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/public.scss";
@import "../../styles/searchForm.scss";
/deep/.el-table {
  font-size: 14px !important;
}
/deep/.el-table td,
.el-table th {
  padding: 5px 0;
}
/deep/ .el-table th {
  text-align: center !important;
}
.flexelem {
  display: inline !important;
  position: absolute;
  left: -12px;
  top: 32px;
}
.el-button {
  padding: 6px !important;
  margin-bottom: 10px;
  font-size: 14px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

--合作伙伴管理
<html>
  <div class="original">
    <div class="card_div">
      <div class="original_top">
        <div class="original_top_son">
          <span><!-- 服务商内部编号 -->{{ $t("page.BPInternalID") }}：</span>
          <el-input
            v-model="searchQuery.BP_Internal_ID"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.BPInternalID')"
          />
        </div>
        <div class="original_top_son">
          <span><!-- 服务商类型 -->{{ $t("page.BPTYPE") }}：</span>
          <!-- BP_TYPE -->
          <SelectComAll
            @change="IEPortFun"
            :dtype="83"
            :flagtype="41"
            :title="IEPortId"
            :update="update"
          ></SelectComAll>
        </div>
        <div class="original_top_son">
          <span><!-- 服务商名称 -->{{ $t("page.BPCNNames") }}：</span>
          <el-input
            v-model="searchQuery.BP_CN_Name"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.BPCNNames')"
          />
        </div>
        <div class="original_top_son">
          <span><!-- 服务商简称 -->{{ $t("page.Abbreviation") }}：</span>
          <el-input
            v-model="searchQuery.Abbr"
            clearable
            class="filter-item"
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.Abbreviation')"
          />
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="collapseFlag">
          <div class="original_top">
            <div class="original_top_son">
              <span><!-- 18位信用代码 -->{{ $t("page.BPCodeSCCOne") }}：</span>
              <el-input
                v-model="searchQuery.BP_Code_SCC"
                clearable
                class="filter-item"
                size="small"
                :placeholder="
                  $t('button.placeholder') + $t('page.BPCodeSCCOne')
                "
              />
            </div>
            <div class="original_top_son">
              <span><!-- 英文名称 -->{{ $t("page.BPENNames") }}：</span>
              <el-input
                v-model="searchQuery.BP_EN_Name"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.BPENNames')"
              />
            </div>
            <div class="original_top_son">
              <span><!-- AEO代码 -->{{ $t("page.BPAEOCodes") }}：</span>
              <el-input
                v-model="searchQuery.BP_AEO_Code"
                clearable
                class="filter-item"
                size="small"
                :placeholder="$t('button.placeholder') + $t('page.BPAEOCodes')"
              />
            </div>
            <div class="original_top_son"></div>
          </div>
        </div>
      </el-collapse-transition>
      <div class="collapse">
        <span @click="collapseFlag = !collapseFlag">
          <span v-show="!collapseFlag"
            ><i class="el-icon-arrow-down"></i> {{ $t("page.more") }}</span
          >
          <span v-show="collapseFlag"
            ><i class="el-icon-arrow-up"></i> {{ $t("page.hide") }}</span
          >
        </span>
      </div>
      <div class="original_btn">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="handleNewAdd"
          v-permission="['Otech.Ccs.BusinessPartner.BusinessPartnerManage.Add']"
          ><!-- 新增 -->{{ $t("button.newAdd") }}
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handleNewSearch"
          v-permission="[
            'Otech.Ccs.BusinessPartner.BusinessPartnerManage.GetPageList',
          ]"
          ><!-- 查询 -->{{ $t("button.search") }}
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-delete"
          @click="handleDelete"
          :loading ="loadDel"
          v-permission="[
            'Otech.Ccs.BusinessPartner.BusinessPartnerManage.Delete',
          ]"
          ><!-- 删除 -->{{ $t("button.delete") }}
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-upload2"
          @click="handleTolead"
          v-permission="[
            'Otech.Ccs.BusinessPartner.BusinessPartnerManage.ImportPartner',
          ]"
          ><!-- 导入 -->{{ $t("button.upload") }}
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-download"
          @click="handleDerive"
          :loading ="loadDownload"
          v-permission="[
            'Otech.Ccs.BusinessPartner.BusinessPartnerManage.ExportPartner',
          ]"
          ><!-- 导出 -->{{ $t("button.download") }}
        </el-button>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        element-loading-text="正在查询中。。。"
        v-loading="listLoading"
        @selection-change="handleSelectionChange"
        tooltip-effect="light"
        :border="true"
        height="405px"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.BPTYPE'))"
          :label="$t('page.BPTYPE')"
        >
          <html slot-scope="scope">
            <span class="color_span" @click="handleInventory(scope.row)">{{
              scope.row.BpTypeName
            }}</span>
          </html>
        </el-table-column>
        <!-- 服务商类型 -->
        <el-table-column
          prop="BPCNName"
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.BPCNNames'))"
          :label="$t('page.BPCNNames')"
        ></el-table-column>
        <!-- 服务商名称 -->
        <el-table-column
          prop="Abbr"
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.Abbreviation'))"
          :label="$t('page.Abbreviation')"
        ></el-table-column>
        <!-- 服务商简称 -->
        <el-table-column
          prop="BPENName"
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.BPENNames'))"
          :label="$t('page.BPENNames')"
        ></el-table-column>
        <!-- 英文名称 -->
        <el-table-column
          prop="BPInternalID"
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.BPInternalID'))"
          :label="$t('page.BPInternalID')"
        ></el-table-column>
        <!-- 内部编号 -->
        <el-table-column
          prop="BPAEOCode"
          show-overflow-tooltip
          :label="$t('page.BPAEOCodes')"
          :min-width="$flexColumnWidth($t('page.BPAEOCodes') + 'AEO')"
        ></el-table-column>
        <!-- AEO编码 -->
        <el-table-column
          prop="BPCodeSCC"
          show-overflow-tooltip
          :label="$t('page.BPCodeSCCOne')"
          :min-width="$flexColumnWidth($t('page.BPCodeSCCOne'))"
        ></el-table-column>
        <!-- 18位信用编码 -->
      </el-table>
      <pagination
        :total="total"
        :page.sync="PageIndex"
        :limit.sync="PageSize"
        @pagination="getLists"
        @paginationSize="handleNewSearch2"
      />
    </div>
    <!-- 服务商导入 -->
    <el-dialog
      :title="$t('button.businessImport')"
      :visible.sync="dialogVisible"
      width="40%"
      @close="loadingUpdata = false"
    >
      <el-upload
        class="upload-demo"
        v-loading="loadingUpdata"
        :headers="headersobj"
        :on-success="handleAvatarSuccess"
        drag
        :action="`${procs}/api/BusinessPartner/ImportWithExcel`"
        :show-file-list="false"
        :before-upload="beforeBuseinessLicense"
        accept=".xlsx"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          {{ $t("button.DragFile") }}
          <em>
            {{ $t("button.clickUpload") }}
          </em>
        </div>
      </el-upload>
      <!-- <a href='../excel/1.html'>下载模板</a> -->
      <el-button
        type="primary"
        icon="el-icon-download"
        @click="handleddownload"
        :loading="loadTem"
        >{{ $t("button.downloadTemplate") }}</el-button
      >
      <el-dialog
        width="70%"
        :title="$t('button.businessImportError')"
        :visible.sync="innerVisible"
        append-to-body
        ><!-- 服务商导入错误 -->
        <el-button
          type="primary"
          icon="el-icon-download"
          style="margin-bottom: 10px"
          @click="handleinnerVisible"
        >
          {{ $t("button.download") }}
        </el-button>
        <el-table
          :data="exportData"
          height="350px"
          border
          tooltip-effect="light"
        >
          <el-table-column
            prop="BpTypeName"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPTYPE'))"
            :label="$t('page.BPTYPE')"
          ></el-table-column>
          <!-- 服务商类型 -->
          <el-table-column
            prop="BPCNName"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPCNNames'))"
            :label="$t('page.BPCNNames')"
          ></el-table-column>
          <!-- 服务商名称 -->
          <el-table-column
            prop="Abbr"
            show-overflow-tooltip
            :min-width="$flexColumnWidth('服务商简称')"
            label="服务商简称"
          ></el-table-column>
          <!-- 服务商简称 -->

          <el-table-column
            prop="BPENName"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPENNames'))"
            :label="$t('page.BPENNames')"
          ></el-table-column>
          <!-- 英文名称 -->
          <el-table-column
            prop="BPInternalID"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPInternalID'))"
            :label="$t('page.BPInternalID')"
          ></el-table-column>
          <!-- 内部编号 -->
          <el-table-column
            prop="BPAEOCode"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPAEOCodes'))"
            :label="$t('page.BPAEOCodes')"
          ></el-table-column>
          <!-- AEO编码 -->
          <el-table-column
            prop="BPCodeSCC"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPCodeSCCOne'))"
            :label="$t('page.BPCodeSCCOne')"
          ></el-table-column>
          <!-- 18位信用编码 -->
          <el-table-column
            prop="BPCustomsCode"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPCustomsCodeTen'))"
            :label="$t('page.BPCustomsCodeTen')"
          ></el-table-column>
          <!-- 海关10位编码 -->
          <el-table-column
            prop="Address"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPaddress'))"
            :label="$t('page.BPaddress')"
          ></el-table-column>
          <!-- 地址 -->
          <el-table-column
            prop="ZipCode"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPZipCode'))"
            :label="$t('page.BPZipCode')"
          ></el-table-column>
          <!-- 邮编 -->
          <el-table-column
            prop="Country"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPcountry'))"
            :label="$t('page.BPcountry')"
          ></el-table-column>
          <!-- 国家 -->
          <el-table-column
            prop="Region"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPRegion'))"
            :label="$t('page.BPRegion')"
          ></el-table-column>
          <!-- 地区 -->
          <el-table-column
            prop="City"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPcity'))"
            :label="$t('page.BPcity')"
          ></el-table-column>
          <!-- 城市 -->
          <el-table-column
            prop="Tel"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.bottom5'))"
            :label="$t('page.bottom5')"
          ></el-table-column>
          <!-- 电话 -->
          <el-table-column
            prop="Fax"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPfax'))"
            :label="$t('page.BPfax')"
          ></el-table-column>
          <!-- 传真 -->
          <el-table-column
            prop="Email"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.BPemail'))"
            :label="$t('page.BPemail')"
          ></el-table-column>
          <!-- 电子邮件 -->
          <el-table-column
            prop="Contacts"
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.ContactPeople'))"
            :label="$t('page.ContactPeople')"
          ></el-table-column>
          <!-- 联系人 -->
          <el-table-column
            :min-width="$flexColumnWidth($t('commodity.errorMrssage'))"
            prop="ErrMsg"
            :label="$t('commodity.errorMrssage')"
            show-overflow-tooltip
          ></el-table-column>
          <!--错误信息-->
        </el-table>
      </el-dialog>
    </el-dialog>
  </div>
</html>

<script>
import { GetBaseDataList } from "@/api/basedata/index";
import { getToken } from "@/utils/auth";
import checkPermission from "@/utils/permission"; // 权限判断函数
import Pagination from "@/components/Pagination";
import {
  GetBusinessPartnerPagedList,
  DeleteBusinessPartner,
  DownloadBusinessPartnerImportTemplate,
  DownloadBusinessPartnerImportError,
  ExportBusinessPartnerDatas,
} from "@/api/serviceCharge/index";

export default {
  name: "serviceProviderIndex",
  components: {
    Pagination,
  },
  data() {
    return {
      searchQuery: {
        BP_Internal_ID: "",
        BP_CN_Name: "",
        BP_Code_SCC: "",
        BP_EN_Name: "",
        BP_AEO_Code: "",
        Abbr: "",
      },
      listLoading: false,
      PageIndex: 1, // 第几页
      PageSize: 10, // 每页多少条
      total: 0, //总条数
      tableData: [], // 列表数据
      multipleSelection: [], //表格选中数据
      time: "",
      time2: "",
      IEPortId: "", //服务商类型/企业类型ID
      citiesIEPort: [], //服务商类型/企业类型
      billingTypeId: "", //账单类型
      citiesbillings: [],
      collapseFlag: false,
      innerVisible: false,
      exportData: [],
      procs: this.$ajaxUrl,
      loadingUpdata: false,
      dialogVisible: false,
      headersobj: {
        Authorization: getToken(),
      },
      exportName: "",
      update: "",
      loadTem:false,
      loadDownload:false,
      loadDel:false,
      expireDate: this.$route.query.expireDate ? this.$route.query.expireDate : 0, //0表示未完成,1表示已完成
    };
  },
  watch: {},
  created() {
    if (
      checkPermission(
        "Otech.Ccs.BusinessPartner.BusinessPartnerManage.GetPageList"
      )
    ) {
      this.getLists();
    }
    this.billingsSearch(); //账单类型
    this.update = Date.parse(new Date());
  },
  methods: {
    //企业类型选择
    IEPortFun(data) {
      this.IEPortId = data;
    },
    //账单类型选择
    billingsFun(data) {
      this.billingTypeId = data;
    },
    //账单类型接口搜索选择
    billingsSearch(val) {
      if (!val) {
        val = null;
      }

      this.citiesbillings = [];

      const data = {
        DropdownType: 50,
        Search: val,
      };

      GetBaseDataList(data)
        .then((res) => {
          if (res.isSuccess == true) {
            this.citiesbillings = res.data;
          }
        })
        .catch((error) => {});
    },
    //获取表格数据
    getLists() {
      this.listLoading = true;
      const data = {
        ClinetId: 0,
        BPInternalID: this.searchQuery.BP_Internal_ID,
        BPTYPE: this.IEPortId ? this.IEPortId : 0,
        BPCNName: this.searchQuery.BP_CN_Name,
        BPCodeSCC: this.searchQuery.BP_Code_SCC,
        BPENName: this.searchQuery.BP_EN_Name,
        BPAEOCode: this.searchQuery.BP_AEO_Code,
        Abbr: this.searchQuery.Abbr,
        expireDate:this.expireDate,
        PageIndex: this.PageIndex,
        PageSize: this.PageSize,
      };
      GetBusinessPartnerPagedList(data)
        .then((res) => {
          if (res.IsSuccess) {
            this.listLoading = false;
            this.total = res.Data.AllCount;
            this.PageIndex = res.Data.PageIndex;
            this.PageSize = res.Data.PageSize;
            this.tableData = res.Data.List;
          }
        })
        .catch((error) => {});
    },

    //新增
    handleNewAdd() {
      this.$router.push({
        path: "/serviceProviderAdd",
      });
    },
    //查询
    handleNewSearch() {
      this.expireDate = '0';
      this.PageIndex = 1;
      this.getLists();
    },
    handleNewSearch2() {
      this.PageIndex = 1;
      this.getLists();
    },
    //删除按钮
    handleDelete() {
      if (this.multipleSelection.length == 1) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "放弃",
          type: "warning",
        })
          .then(() => {
            const data = {
              ClinetId: 0,
              UserID: 0,
              bpid: this.multipleSelection[0].BPID,
            };

            this.loadDel = true;
            DeleteBusinessPartner(data)
              .then((res) => {
                this.loadDel = false;
                if (res.IsSuccess == true) {
                  this.$message({
                    type: "success",
                    message: "删除成功!",
                  });

                  this.getLists();
                } else {
                  this.$alert(res.Message, "提示", {
                    confirmButtonText: "确定",
                    type: "error",
                  });
                }
              })
              .catch((error) => {
                this.loadDel = false;
              });
          })
          .catch(() => {
            //console.log('1')
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      } else {
        this.$alert("删除操作必须选中一条数据", "提示", {
          confirmButtonText: "确定",
          type: "error",
        });
      }
    },
    //点击原始单证内部编号
    handleInventory(row) {
      if (
        !checkPermission(
          "Otech.Ccs.BusinessPartner.BusinessPartnerManage.GetSingle"
        )
      ) {
        this.$message.error("无权限，请联系管理员");
        return;
      }
      this.$router.push({
        path: "/serviceProviderAdd",
        query: {
          Bpid: row.BPID,
        },
      });
    },
    //复选框选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDerive() {
      this.$confirm("确定导出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "放弃",
        type: "warning",
      })
        .then(() => {
          const data = {
            clientId: 0,
            BPInternalID: this.searchQuery.BP_Internal_ID,
            BPTYPE: this.IEPortId ? this.IEPortId : 0,
            BPCNName: this.searchQuery.BP_CN_Name,
            BPCodeSCC: this.searchQuery.BP_Code_SCC,
            BPENName: this.searchQuery.BP_EN_Name,
            BPAEOCode: this.searchQuery.BP_AEO_Code,
            PageIndex: this.PageIndex, // 第几页
            PageSize: this.PageSize, // 每页多少条
          };
          this.loadDownload = true;
          ExportBusinessPartnerDatas(data).then((res) => {
            this.loadDownload = false;
            if (!res) {
              return;
            }
            const blob = new Blob([res]);
            const fileName = "服务商导出.xlsx";
            if (window.navigator.msSaveBlob) {
              window.navigator.msSaveBlob(blob, fileName);
            } else {
              const downloadElement = document.createElement("a");
              const href = window.URL.createObjectURL(blob); // 创建下载的链接
              downloadElement.href = href;
              downloadElement.download = fileName; // 下载后文件名
              document.body.appendChild(downloadElement);
              downloadElement.click(); // 点击下载
              document.body.removeChild(downloadElement); // 下载完成移除元素
              window.URL.revokeObjectURL(href); // 释放掉blob对象
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消导出",
          });
        });
    },
    //下载模板按钮
    handleddownload() {
      this.loadTem = true;
      DownloadBusinessPartnerImportTemplate().then((res) => {
        this.loadTem = false;
        if (!res) {
          return;
        }
        const blob = new Blob([res]);
        let fileName = "服务商导入模版.xlsx";
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          const downloadElement = document.createElement("a");
          const href = window.URL.createObjectURL(blob); // 创建下载的链接
          downloadElement.href = href;
          downloadElement.download = fileName; // 下载后文件名
          document.body.appendChild(downloadElement);
          downloadElement.click(); // 点击下载
          document.body.removeChild(downloadElement); // 下载完成移除元素
          window.URL.revokeObjectURL(href); // 释放掉blob对象
        }
      }).catch(() =>{
        this.loadTem = false;
      });
    },
    //商品报错导出按钮
    handleinnerVisible() {
      this.$confirm("确定导出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "放弃",
        type: "warning",
      }).then(() => {
        if (this.exportName == "") {
          this.$alert("无错误数据不能导出", "错误！", {
            confirmButtonText: "确定",
            type: "error",
          });
        } else {
          const params = {
            name: this.exportName,
          };

          DownloadBusinessPartnerImportError(params).then((res) => {
            if (!res) {
              return;
            }
            const blob = new Blob([res]);
            let fileName = "服务商导入错误文件.xlsx";

            if (window.navigator.msSaveBlob) {
              window.navigator.msSaveBlob(blob, fileName);
            } else {
              const downloadElement = document.createElement("a");
              const href = window.URL.createObjectURL(blob); // 创建下载的链接
              downloadElement.href = href;
              downloadElement.download = fileName; // 下载后文件名
              document.body.appendChild(downloadElement);
              downloadElement.click(); // 点击下载
              document.body.removeChild(downloadElement); // 下载完成移除元素
              window.URL.revokeObjectURL(href); // 释放掉blob对象
            }
          });
        }
      });
    },
    //导入按钮
    handleTolead() {
      this.dialogVisible = true;
    },
    //导入文件成功的回调
    handleAvatarSuccess(res, file) {
      this.loadingUpdata = false;
      if (res.IsSuccess) {
        this.dialogVisible = false;
        this.$message({
          type: "success",
          message: res.Message,
        });
        this.getMerchandiseData(); //列表获取
      } else {
        if (res.Data != null) {
          this.innerVisible = true;
          this.exportData = res.Data;
          this.exportName = res.Message;
        } else {
          this.$alert(res.Message, "错误！", {
            confirmButtonText: "确定",
            type: "error",
          });
          this.exportData = [];
        }
      }
    },
    beforeBuseinessLicense(file) {
      this.loadingUpdata = true;
      const testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "xlsx";

      if (!extension) {
        this.loadingUpdata = false;
        this.$message.error("上传文件只能为 .xlsx格式!");
      }
      return extension;
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
@import "../../styles/searchForm.scss";

.original_top_son {
  /deep/.el-input--suffix .el-input__inner {
    border: 1px solid #dcdfe6;
    height: 32px;
    line-height: 32px;
  }
}

.original_top_data {
  width: 25% !important;

  .block {
    display: flex;
  }

  //   width: 350px !important;
  // // 	.flexelem{
  // // 		float: left;
  // // 	}
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    //width: 120px !important;
    /deep/.el-input__inner {
      padding-right: 10px !important;
    }
  }
}

/deep/.el-table td,
.el-table th {
  padding: 5px 0;
}

/deep/ .el-table th {
  text-align: center !important;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}

.flexelem {
  display: inline !important;
  position: absolute;
  left: -12px;
  top: 32px;
}

.upload-demo {
  text-align: center;
  margin-bottom: 10px;
}
</style>

--加工贸易

<html>
  <div class="manualheader">
    <div class="btn_div">
      <el-button
        type="primary"
        icon="el-icon-receiving"
        :loading ="loadReceiv"
        @click="handleSave"
        v-permission="[
          'Otech.Ccs.RecordManagement.AccountBook.FunSaveHbHeader'
        ]"
        >{{ $t("button.save") }}</el-button
      >

      <!-- <el-button
          type="primary"
          icon="el-icon-upload2"
          v-permission="[
            'Otech.Ccs.RecordManagement.AccountBook.FunImportHbHeader'
          ]"
          >{{ $t("button.upload") }}</el-button
      >-->
    </div>

    <div class="newaddedlistlefttop_table">
      <form>
        <table class="form">
          <tbody>
            <tr>
              <th class="formTitle">{{ $t("page.SeqNo") }}</th>
              <!-- <th class="formTitle">预录入统一编号</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.SeqNo"
                  class="refclass"
                  ref="SeqNo"
                  @keydown.native="handleKeyup('SeqNo', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.SeqNo')"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.ManualNoAll") }}</th>
              <!-- <th class="formTitle">加工贸易账册编号</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.HbNo"
                  class="refclass"
                  ref="HbNo"
                  @keydown.native="handleKeyup('HbNo', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.prbookNo')"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.innderId") }}</th>
              <!-- <th class="formTitle">企业内部编号</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.EtpsPreentNo"
                  class="refclass"
                  :class="{ background_input: !jsonData.EtpsPreentNo }"
                  ref="EtpsPreentNo"
                  @keydown.native="handleKeyup('EtpsPreentNo', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.innderId')"
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.bizopEtpsno") }}</th>
              <!-- <th class="formTitle">经营单位编码</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.BizopEtpsno"
                  class="refclass"
                  ref="BizopEtpsno"
                  @keydown.native="handleKeyup('BizopEtpsno', $event)"
                  :placeholder="
                    $t('button.placeholder') + $t('page.bizopEtpsno')
                  "
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.bizopEtpsScs") }}</th>
              <!-- <th class="formTitle">经营单位社会信用代码</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="BizopEtpsSccd"
                  :title="jsonData.BizopEtpsSccd"
                  :flagurl="'partner'"
                  :label="'BpCodeScc'"
                  :code="'BpCodeScc'"
                  :bptype="[1, 2, 8, 9, 5]"
                  :searchname="'BpCodeScc'"
                  :primarykey="'BpCodeScc'"
                  :update="updateone"
                  @changeobj="handleBizopEtpsSccd"
                  @keydown.native="handleKeyup('BizopEtpsSccd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.bizopNm") }}</th>
              <!-- <th class="formTitle">经营单位名称</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="BizopEtpsNm"
                  :title="jsonData.BizopEtpsNm"
                  :flagurl="'partner'"
                  :label="'BpCnName'"
                  :code="'BpCodeScc'"
                  :bptype="[1, 2, 8, 9, 5]"
                  :primarykey="'BpCnName'"
                  :update="updateone"
                  :class="{ background_input: !jsonData.BizopEtpsNm }"
                  @changeobj="handleBizopEtpsSccd"
                  @keydown.native="handleKeyup('BizopEtpsNm', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.rcvgd") }}</th>
              <!-- <th class="formTitle">加工单位编码</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.RcvgdEtpsno"
                  class="refclass"
                  ref="RcvgdEtpsno"
                  @keydown.native="handleKeyup('RcvgdEtpsno', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.rcvgd')"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.rcvgdEtpsScs") }}</th>
              <!-- <th class="formTitle">加工单位社会信用代码</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="RvsngdEtpsSccd"
                  :title="jsonData.RvsngdEtpsSccd"
                  :flagurl="'partner'"
                  :label="'BpCodeScc'"
                  :code="'BpCodeScc'"
                  :bptype="[1, 2, 8, 9, 5]"
                  :searchname="'BpCodeScc'"
                  :primarykey="'BpCodeScc'"
                  :update="updatetwo"
                  @changeobj="handleRvsngdEtpsSccd"
                  @keydown.native="handleKeyup('RvsngdEtpsSccd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.rcvgdNm") }}</th>
              <!-- <th class="formTitle">加工单位名称</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="RcvgdEtpsNm"
                  :title="jsonData.RcvgdEtpsNm"
                  :flagurl="'partner'"
                  :label="'BpCnName'"
                  :code="'BpCodeScc'"
                  :bptype="[1, 2, 8, 9, 5]"
                  :primarykey="'BpCnName'"
                  :update="updatetwo"
                  :class="{ background_input: !jsonData.RcvgdEtpsNm }"
                  @changeobj="handleRvsngdEtpsSccd"
                  @keydown.native="handleKeyup('RcvgdEtpsNm', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.dclEtpSno") }}</th>
              <!-- <th class="formTitle">申报单位编码</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.DclEtpsno"
                  class="refclass"
                  ref="DclEtpsno"
                  @keydown.native="handleKeyup('DclEtpsno', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.dclEtpSno')"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.socialCode") }}</th>
              <!-- <th class="formTitle">申报单位社会信用代码</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="DclEtpsSccd"
                  :title="jsonData.DclEtpsSccd"
                  :flagurl="'partner'"
                  :label="'BpCodeScc'"
                  :code="'BpCodeScc'"
                  :bptype="[3, 4, 9, 5]"
                  :searchname="'BpCodeScc'"
                  :primarykey="'BpCodeScc'"
                  :update="updatethree"
                  @changeobj="handleDclEtpsSccd"
                  @keydown.native="handleKeyup('DclEtpsSccd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.dclEtpsNm") }}</th>
              <!-- <th class="formTitle">申报单位名称</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="DclEtpsNm"
                  :title="jsonData.DclEtpsNm"
                  :flagurl="'partner'"
                  :label="'BpCnName'"
                  :code="'BpCodeScc'"
                  :bptype="[3, 4, 9, 5]"
                  :primarykey="'BpCnName'"
                  :update="updatethree"
                  :class="{ background_input: !jsonData.DclEtpsNm }"
                  @changeobj="handleDclEtpsSccd"
                  @keydown.native="handleKeyup('DclEtpsNm', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("logistics.DclEtpsTypecd") }}</th>
              <!-- <th class="formTitle">申报单位类型</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="DclEtpsTypecd"
                  :title="jsonData.DclEtpsTypecd"
                  :dtype="81"
                  :flagtype="23"
                  :update="updateflag"
                  @change="handleDclEtpsType"
                  @keydown.native="handleKeyup('DclEtpsTypecd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.CCPTypeDeclareId") }}</th>
              <!-- <th class="formTitle">申报类型</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="DclTypecd"
                  :title="jsonData.DclTypecd"
                  :dtype="81"
                  :flagtype="22"
                  :update="updateflag"
                  @change="handleDclTypecd"
                  @keydown.native="handleKeyup('DclTypecd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.HbType") }}</th>
              <!-- <th class="formTitle">账册类型</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="HbType"
                  :class="{ background_input: !jsonData.HbType }"
                  :title="jsonData.HbType"
                  :dtype="81"
                  :flagtype="20"
                  :update="updateflag"
                  @change="handleHbType"
                  @keydown.native="handleKeyup('HbType', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.ApcretNo") }}</th>
              <!-- <th class="formTitle">批准证编号</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ApcretNo"
                  class="refclass"
                  ref="ApcretNo"
                  @keydown.native="handleKeyup('ApcretNo', $event)"
                  :placeholder="$t('button.placeholder') + $t('page.ApcretNo')"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.NetwkEtpsArcrpNo") }}</th>
              <!-- <th class="formTitle">企业档案库编号</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.NetwkEtpsArcrpNo"
                  class="refclass"
                  ref="NetwkEtpsArcrpNo"
                  @keydown.native="handleKeyup('NetwkEtpsArcrpNo', $event)"
                  :placeholder="
                    $t('button.placeholder') + $t('page.NetwkEtpsArcrpNo')
                  "
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.ActlImpTotalAmt") }}</th>
              <!-- <th class="formTitle">实际进口总金额</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ActlImpTotalAmt"
                  class="refclass"
                  ref="ActlImpTotalAmt"
                  @keydown.native="handleKeyup('ActlImpTotalAmt', $event)"
                  @input="
                    jsonData.ActlImpTotalAmt = jsonData.ActlImpTotalAmt.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  :placeholder="
                    $t('button.placeholder') + $t('page.ActlImpTotalAmt')
                  "
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.ActlExpTotalAmt") }}</th>
              <!-- <th class="formTitle">实际出口总金额</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ActlExpTotalAmt"
                  class="refclass"
                  ref="ActlExpTotalAmt"
                  @keydown.native="handleKeyup('ActlExpTotalAmt', $event)"
                  @input="
                    jsonData.ActlExpTotalAmt = jsonData.ActlExpTotalAmt.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  :placeholder="
                    $t('button.placeholder') + $t('page.ActlExpTotalAmt')
                  "
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.HbRmcm") }}</th>
              <!-- <th class="formTitle">料件项数</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.HbRmcm"
                  class="refclass"
                  disabled
                  ref="HbRmcm"
                  @keydown.native="handleKeyup('HbRmcm', $event)"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.HbFgcm") }}</th>
              <!-- <th class="formTitle">成品项数</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.HbFgcm"
                  class="refclass"
                  disabled
                  ref="HbFgcm"
                  @keydown.native="handleKeyup('HbFgcm', $event)"
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.MaxTovrAmt") }}</th>
              <!-- <th class="formTitle">最大周转金额（万美金）</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.MaxTovrAmt"
                  class="refclass"
                  ref="MaxTovrAmt"
                  @keydown.native="handleKeyup('MaxTovrAmt', $event)"
                  @input="
                    jsonData.MaxTovrAmt = jsonData.MaxTovrAmt.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  :placeholder="
                    $t('button.placeholder') + $t('page.MaxTovrAmt')
                  "
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.masterCuscd") }}</th>
              <!-- <th class="formTitle">主管海关</th> -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="MasterCuscd"
                  :title="jsonData.MasterCuscd"
                  :flagurl="'customer'"
                  :localsearch="true"
                  :update="updateflag"
                  :class="{ background_input: !jsonData.MasterCuscd }"
                  @change="handleMasterCuscd"
                  @keydown.native="handleKeyup('MasterCuscd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.dclBeninDate") }}</th>
              <!-- <th class="formTitle">申报日期</th> -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.DclTime"
                  type="date"
                  @keydown.native="handleKeyup('DclTime', $event)"
                  class="refclass"
                  ref="DclTime"
                  :placeholder="
                    $t('button.placeholder') + $t('page.dclBeninDate')
                  "
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.inputNo") }}</th>
              <!-- <th class="formTitle">录入单位编码</th> -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.InputEtpsTypecd"
                  class="refclass"
                  :placeholder="$t('button.placeholder') + $t('page.inputNo')"
                  ref="InputEtpsTypecd"
                  @keydown.native="handleKeyup('InputEtpsTypecd', $event)"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.inputSccd") }}</th>
              <!--录入单位社会信用代码 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="InputEtpsSccd"
                  :title="jsonData.InputEtpsSccd"
                  :flagurl="'partner'"
                  :label="'BpCodeScc'"
                  :code="'BpCodeScc'"
                  :bptype="[4, 9]"
                  :searchname="'BpCodeScc'"
                  :primarykey="'BpCodeScc'"
                  :update="updatefour"
                  @changeobj="handleInputEtosTypecd"
                  @keydown.native="handleKeyup('InputEtpsSccd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.inputbusinessno") }}</th>
              <!--录入单位名称 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="InputEtpsNm"
                  :class="{ background_input: !jsonData.InputEtpsNm }"
                  :title="jsonData.InputEtpsNm"
                  :flagurl="'partner'"
                  :primarykey="'BpCnName'"
                  :label="'BpCnName'"
                  :code="'BpCodeScc'"
                  :bptype="[4, 9]"
                  :update="updatefour"
                  @changeobj="handleInputEtosTypecd"
                  @keydown.native="handleKeyup('InputEtpsNm', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.DateOfFilingApproval") }}</th>
              <!--备案批准日期 -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.PutrecApprTime"
                  type="date"
                  @keydown.native="handleKeyup('PutrecApprTime', $event)"
                  class="refclass"
                  ref="PutrecApprTime"
                  placeholder="请选择日期"
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
              <th class="formTitle">{{ $t("page.ChangeApprovalDate") }}</th>
              <!--变更批准日期 -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.ChgApprTime"
                  type="date"
                  @keydown.native="handleKeyup('ChgApprTime', $event)"
                  class="refclass"
                  ref="ChgApprTime"
                  :placeholder="$t('button.select')"
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
              <th class="formTitle">{{ $t("page.DateOfLastVerification") }}</th>
              <!--最近核销日期 -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.RcntVclrTime"
                  type="date"
                  @keydown.native="handleKeyup('RcntVclrTime', $event)"
                  class="refclass"
                  ref="RcntVclrTime"
                  disabled
                  :placeholder="$t('button.select')"
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.inputtime") }}</th>
              <!--录入日期 -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.InputTime"
                  type="date"
                  @keydown.native="handleKeyup('InputTime', $event)"
                  class="refclass"
                  ref="InputTime"
                  :placeholder="$t('button.select')"
                  :class="{ background_input: !jsonData.InputTime }"
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
              <th class="formTitle">
                {{ $t("page.SingleConsumptionDeclarationLink") }}
              </th>
              <!--单耗申报环节 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="UcnsDclSegcd"
                  :title="jsonData.UcnsDclSegcd"
                  :dtype="81"
                  :flagtype="24"
                  :update="updateflag"
                  :class="{ background_input: !jsonData.UcnsDclSegcd }"
                  @change="handleUcnDclSegcd"
                  @keydown.native="handleKeyup('UcnsDclSegcd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">
                {{ $t("page.SingleConsumptionVersionNumberControlFlag") }}
              </th>
              <!--单耗版本号控制标志 -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.UcnsVernoCntrFlag"
                  disabled
                  class="refclass"
                  ref="UcnsVernoCntrFlag"
                  @keydown.native="handleKeyup('UcnsVernoCntrFlag', $event)"
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("page.MaximumAmountOfImport") }}</th>
              <!--最大进口金额（美元） -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ImpMaxAccount"
                  class="refclass"
                  :class="{ background_input: !jsonData.ImpMaxAccount }"
                  ref="ImpMaxAccount"
                  :placeholder="
                    $t('button.placeholder') + $t('page.MaximumAmountOfImport')
                  "
                  @input="
                    jsonData.ImpMaxAccount = jsonData.ImpMaxAccount.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  @keydown.native="handleKeyup('ImpMaxAccount', $event)"
                ></el-input>
              </td>
              <th class="formTitle">
                {{ $t("page.CancelAfterVerificationCycle") }}
              </th>
              <!--核销周期 -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.VclrPridVal"
                  class="refclass"
                  :class="{ background_input: !jsonData.VclrPridVal }"
                  ref="VclrPridVal"
                  :placeholder="
                    $t('button.placeholder') +
                      $t('page.CancelAfterVerificationCycle')
                  "
                  @input="
                    jsonData.VclrPridVal = jsonData.VclrPridVal.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  @keydown.native="handleKeyup('VclrPridVal', $event)"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.hxtype") }}</th>
              <!--核销类型 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="VclrTypecd"
                  :title="jsonData.VclrTypecd"
                  :dtype="81"
                  :flagtype="110"
                  :update="updateflag"
                  @change="handleVclrTypecd"
                  @keydown.native="handleKeyup('VclrTypecd', $event)"
                ></SelectComAll>
              </td>
            </tr>

            <tr>
              <th class="formTitle">
                {{ $t("page.numberOfChangesInTheBooks") }}
              </th>
              <!--账册变更次数 -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ChgTmsCnt"
                  class="refclass"
                  ref="ChgTmsCnt"
                  :placeholder="
                    $t('button.placeholder') +
                      $t('page.numberOfChangesInTheBooks')
                  "
                  @input="
                    jsonData.ChgTmsCnt = jsonData.ChgTmsCnt.replace(
                      /[^\d^\.]+/g,
                      ''
                    )
                      .replace('.', '$#$')
                      .replace(/\./g, '')
                      .replace('$#$', '.')
                  "
                  @keydown.native="handleKeyup('ChgTmsCnt', $event)"
                ></el-input>
              </td>
              <th class="formTitle">{{ $t("page.expirationOfBooks") }}</th>
              <!--账册结束有效期 -->
              <td class="formValue" colspan="1">
                <el-date-picker
                  v-model="jsonData.FinishValidDate"
                  type="date"
                  @keydown.native="handleKeyup('FinishValidDate', $event)"
                  :class="{ background_input: !jsonData.FinishValidDate }"
                  class="refclass"
                  ref="FinishValidDate"
                  :placeholder="$t('button.select')"
                  style="width:100%;"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </td>
              <th class="formTitle">{{ $t("page.BookExecutionMark") }}</th>
              <!--账册执行标志 -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.ExeMarkcd"
                  class="refclass"
                  disabled
                  ref="ExeMarkcd"
                  @keydown.native="handleKeyup('ExeMarkcd', $event)"
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("logistics.UsageTypeCd") }}</th>
              <!--账册用途 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="UsageTypeCd"
                  :title="jsonData.UsageTypeCd"
                  :dtype="81"
                  :flagtype="25"
                  :update="updateflag"
                  @change="handleUsageTypeCd"
                  @keydown.native="handleKeyup('UsageTypeCd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">
                {{ $t("page.WayOfCancelAfterVerification") }}
              </th>
              <!--核销方式 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="EtpsPosesSadjaQuaFlag"
                  :title="jsonData.EtpsPosesSadjaQuaFlag"
                  :dtype="81"
                  :flagtype="37"
                  :update="updateflag"
                  @change="handleEtpsPosesSadjaQuaFlag"
                  @keydown.native="handleKeyup('EtpsPosesSadjaQuaFlag', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.noteS") }}</th>
              <!--备注 -->
              <td class="formValue" colspan="1">
                <el-input
                  v-model="jsonData.Rmk"
                  class="refclass"
                  :placeholder="$t('button.placeholder') + $t('page.noteS')"
                  ref="Rmk"
                  @keydown.native="handleKeyup('Rmk', $event)"
                ></el-input>
              </td>
            </tr>

            <tr>
              <th class="formTitle">{{ $t("logistics.PauseChgMarkcd") }}</th>
              <!--暂停变更标记 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="PauseImpexpMarkcd"
                  :title="jsonData.PauseImpexpMarkcd"
                  :dtype="81"
                  :flagtype="28"
                  :update="updateflag"
                  @change="handlePauseImpexpMarkcd"
                  @keydown.native="handleKeyup('PauseImpexpMarkcd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.DeclarationTag") }}</th>
              <!--申报标记 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="DclMarkcd"
                  :title="jsonData.DclMarkcd"
                  :dtype="81"
                  :flagtype="109"
                  :update="updateflag"
                  @change="handleDclMarkcd"
                  @keydown.native="handleKeyup('DclMarkcd', $event)"
                ></SelectComAll>
              </td>
              <th class="formTitle">{{ $t("page.CaseTagCode") }}</th>
              <!--涉案标记代码 -->
              <td class="formValue" colspan="1">
                <SelectComAll
                  class="refclass"
                  ref="RcaseMarkcd"
                  :title="jsonData.RcaseMarkcd"
                  :dtype="81"
                  :flagtype="108"
                  :update="updateflag"
                  @change="handleRcaseMarkcd"
                  @keydown.native="handleKeyup('RcaseMarkcd', $event)"
                ></SelectComAll>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</html>

<script>
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
import BusinessSelectCom from "@/components/businessSelectCom";
import { GetClientData } from "@/api/nuclearNote/entrance";
import { Create, GetHeader } from "@/api/keeponrecord/accountbook";

export default {
  name: "",
  data() {
    return {
      jsonData: {
        SeqNo: "",
        Rmk: "",
        HbNo: "",
        EtpsPreentNo: "",
        MasterCuscd: "",
        HbType: "",
        DclTypecd: "1",
        DclEtpsTypecd: "",
        BizopEtpsno: "",
        BizopEtpsSccd: "",
        BizopEtpsNm: "",
        RcvgdEtpsno: "",
        RvsngdEtpsSccd: "",
        RcvgdEtpsNm: "",
        DclEtpsSccd: "",
        DclEtpsno: "",
        DclEtpsNm: "",
        RcvgdEtpsDtcd: "",
        SupvModecd: "",
        ImpCtrtNo: "",
        ExpCtrtNo: "",
        FinishValidDate: "",
        DclTime: "",
        ReduNatrcd: "",
        PoduceTypecd: "",
        PauseImpexpMarkcd: "",
        PauseChgMarkcd: "",
        InputEtpsTypecd: "",
        InputEtpsSccd: "",
        InputEtpsNm: "",
        InputTime: "",
        ImpexpPortcd: "",
        UcnsDclSegcd: "1",
        StndbkBankcd: "",
        Linkman: "",
        LinkmanTel: "",
        ImpCurrcd: "",
        ExpCurrcd: "",
        ChgTmsCnt: "0",
        FirstExportDate: "",
        ApcretNo: "",
        NetwkEtpsArcrpNo: "",
        ActlImpTotalAmt: "",
        ActlExpTotalAmt: "",
        HbRmcm: "", //料件项数
        HbFgcm: "", //成品项数
        MaxTovrAmt: "",
        RcntVclrTime: "",
        UcnsVernoCntrFlag: "",
        ImpMaxAccount: "",
        VclrPridVal: "180",
        VclrTypecd: "",
        FinishValidDate: "",
        UsageTypeCd: "",
        DclEtpsTypecd: "", //申报单位类型
        PutrecApprTime: "", //备案批准日期
        ChgApprTime: "", //变更批准日期
        ExeMarkcd: "", //账册执行标志
        DclMarkcd: "",
        RcaseMarkcd: "",
        EtpsPosesSadjaQuaFlag: "" //核销方式
      },
      procs: this.$ajaxUrl,
      headersobj: {
        Authorization: getToken()
      },
      updateflag: "",
      updateone: "",
      updatetwo: "",
      updatethree: "",
      updatefour: "",
      loadReceiv:false
    };
  },
  components: { BusinessSelectCom },
  computed: {
    ...mapGetters(["accountbook"])
  },
  methods: {
    //导入
    handleOnSuccessContract(response, file, fileList) {
      if (response.Data.AlertMessage.length > 0) {
        const h = this.$createElement;

        let arr = [];

        response.Data.AlertMessage.map(item => {
          arr.push(
            h("li", { style: "line-height:14px;" }, [
              h(
                "label",
                { style: "font-size:12px;" },
                item.PropertyName + "："
              ),
              h("label", { style: "color:red;font-size:12px;" }, item.Messsage)
            ])
          );
        });

        this.$msgbox({
          title: "导入提示",
          message: h("div", null, arr),
          showConfirmButton: false
        }).catch(() => {});
      } else {
        if (response.IsSuccess) {
          this.$message({
            message: "导入成功",
            type: "success"
          });
        } else {
          this.$alert(response.Message, "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
        }
      }
    },
    //保存
    handleSave() {
      if (this.accountbook == "") {
        this.jsonData.HbId = 0;
      } else {
        this.jsonData.HbId = this.accountbook;
      }
      const data = this.jsonData;

      this.loadReceiv = true;
      Create(data)
        .then(res => {
          this.loadReceiv = false;
          if (res.IsSuccess == true) {
            this.$store.dispatch("iddata/setaccountbook", res.Data.HbId);

            this.$message({
              message: "保存成功",
              type: "success"
            });

            this.getHeaderData();
          } else {
            if (res.Data && res.Data.AlertMessage.length > 0) {
              const h = this.$createElement;

              let arr = [];

              arr.push(
                h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                  h("label", { style: "font-size:12px;" }, "保存失败。")
                ])
              );

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: "保存提示",
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {
                this.loadReceiv = false;
              });
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(() => {});
    },
    //表头查询
    getHeaderData() {
      if (this.accountbook == "") {
        const data = {
          clientId: 0
        };

        GetClientData(data)
          .then(res => {
            this.jsonData.RcvgdEtpsno = res.Data.CLIENT_CUSTOMS_CODE;
            this.jsonData.RvsngdEtpsSccd = res.Data.CLIENT_CODE_SCC;
            this.jsonData.RcvgdEtpsNm = res.Data.CLIENT_NAME;
            this.jsonData.BizopEtpsno = res.Data.CLIENT_CUSTOMS_CODE;
            this.jsonData.BizopEtpsSccd = res.Data.CLIENT_CODE_SCC;
            this.jsonData.BizopEtpsNm = res.Data.CLIENT_NAME;
            this.jsonData.DclEtpsno = res.Data.CLIENT_CUSTOMS_CODE;
            this.jsonData.DclEtpsSccd = res.Data.CLIENT_CODE_SCC;
            this.jsonData.DclEtpsNm = res.Data.CLIENT_NAME;
            this.jsonData.InputEtpsTypecd = res.Data.CLIENT_CUSTOMS_CODE;
            this.jsonData.InputEtpsSccd = res.Data.CLIENT_CODE_SCC;
            this.jsonData.InputEtpsNm = res.Data.CLIENT_NAME;
            this.updateflag = Date.parse(new Date());
            this.updateone = Date.parse(new Date());
            this.updatetwo = Date.parse(new Date());
            this.updatethree = Date.parse(new Date());
            this.updatefour = Date.parse(new Date());
          })
          .catch(() => {});
      } else {
        const data = {
          hbId: this.accountbook
        };
        GetHeader(data)
          .then(res => {
            if (res.IsSuccess == true) {
              for (const key in res.Data) {
                if (res.Data.hasOwnProperty(key)) {
                  const element = res.Data[key];
                  this.jsonData[key] = element;
                }
              }
              this.updateflag = res.Data.HbId;
              this.updateone = res.Data.HbId;
              this.updatetwo = res.Data.HbId;
              this.updatethree = res.Data.HbId;
              this.updatefour = res.Data.HbId;
            }
          })
          .catch(() => {});
      }
    },
    //申报类型
    handleDclTypecd(data) {
      this.jsonData.DclTypecd = data;
    },
    //单耗申报环节代码
    handleUcnDclSegcd(data) {
      this.jsonData.UcnsDclSegcd = data;
    },
    //账册类型
    handleHbType(data) {
      this.jsonData.HbType = data;
    },
    //主管海关
    handleMasterCuscd(data) {
      this.jsonData.MasterCuscd = data;
    },
    //申报单位类型
    handleDclEtpsType(data) {
      this.jsonData.DclEtpsTypecd = data;
    },
    //核销方式
    handleEtpsPosesSadjaQuaFlag(data) {
      this.jsonData.EtpsPosesSadjaQuaFlag = data;
    },
    //账册用途
    handleUsageTypeCd(data) {
      this.jsonData.UsageTypeCd = data;
    },
    //核销类型
    handleVclrTypecd(data) {
      this.jsonData.VclrTypecd = data;
    },
    //暂停变更标记
    handlePauseImpexpMarkcd(data) {
      this.jsonData.PauseImpexpMarkcd = data;
    },
    //申报标记
    handleDclMarkcd(data) {
      this.jsonData.DclMarkcd = data;
    },
    //涉案标记代码
    handleRcaseMarkcd(data) {
      this.jsonData.RcaseMarkcd = data;
    },
    //经营单位社会信用代码
    handleBizopEtpsSccd(data) {
      if (data) {
        this.jsonData.BizopEtpsno = data.BpCustomsCode;
        this.jsonData.BizopEtpsSccd = data.BpCodeScc;
        this.jsonData.BizopEtpsNm = data.BpCnName;
      } else {
        this.jsonData.BizopEtpsno = "";
        this.jsonData.BizopEtpsSccd = "";
        this.jsonData.BizopEtpsNm = "";
      }
      this.updateone = Date.parse(new Date());
    },
    //加工单位社会信用代码
    handleRvsngdEtpsSccd(data) {
      if (data) {
        this.jsonData.RcvgdEtpsno = data.BpCustomsCode;
        this.jsonData.RvsngdEtpsSccd = data.BpCodeScc;
        this.jsonData.RcvgdEtpsNm = data.BpCnName;
      } else {
        this.jsonData.RcvgdEtpsno = "";
        this.jsonData.RvsngdEtpsSccd = "";
        this.jsonData.RcvgdEtpsNm = "";
      }
      this.updatetwo = Date.parse(new Date());
    },
    //申报单位社会信用代码
    handleDclEtpsSccd(data) {
      if (data) {
        this.jsonData.DclEtpsno = data.BpCustomsCode;
        this.jsonData.DclEtpsSccd = data.BpCodeScc;
        this.jsonData.DclEtpsNm = data.BpCnName;
      } else {
        this.jsonData.DclEtpsno = "";
        this.jsonData.DclEtpsSccd = "";
        this.jsonData.DclEtpsNm = "";
      }
      this.updatethree = Date.parse(new Date());
    },
    //录入单位编码
    handleInputEtosTypecd(data) {
      if (data) {
        this.jsonData.InputEtpsTypecd = data.BpCustomsCode;
        this.jsonData.InputEtpsSccd = data.BpCodeScc;
        this.jsonData.InputEtpsNm = data.BpCnName;
      } else {
        this.jsonData.InputEtpsTypecd = "";
        this.jsonData.InputEtpsSccd = "";
        this.jsonData.InputEtpsNm = "";
      }
      this.updatefour = Date.parse(new Date());
    },
    //回车
    recursions(index, n) {
      const nexts = this.$refs[Object.keys(this.$refs)[index + n]];
      const flag2 = nexts.$el.className.indexOf("refclass") !== -1;
      if (nexts.disableds || nexts.disabled) {
        let m = n + 1;
        this.recursions(index, m);
      } else {
        if (flag2) {
          if (nexts.$children.length > 0) {
            nexts.$children[0].focus();
          } else {
            nexts.focus();
          }
        }
      }
    },
    //回车
    handleKeyup(name, e) {
      const keyCode = e.keyCode || e.which || e.charCode;
      const index = Object.keys(this.$refs).indexOf(name);
      const currents = this.$refs[Object.keys(this.$refs)[index]];
      const flag = currents.$el.className.indexOf("refclass") !== -1;

      if (keyCode === 13 && flag) {
        if (currents.$children.length > 0) {
          currents.$children[0].blur();
        } else {
          currents.blur();
        }

        if (
          Object.keys(this.$refs)[Object.keys(this.$refs).length - 1] === name
        ) {
          this.handleSave();
        } else {
          this.recursions(index, 1);
        }
      }
    }
  },
  created() {
    this.getHeaderData();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.manualheader {
  font-size: 14px;

  .newaddedlistlefttop_table {
    margin-top: 5px;

    /deep/.time_class {
      .el-input__inner {
        border: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/public.scss";
</style>

--历史数据调阅

<html>
  <div class="datasubscription card_div">
    <div class="datasubscription_search_div">
      <div class="datasubscription_search">
        <div class="datasubscription_content">
          <span>{{ $t("custom.customsCoding") }}：</span>
          <!-- <span>海关编号：</span> -->
          <el-input
            v-model="EntryId"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.customsCoding')"
          ></el-input>
        </div>
        <div class="datasubscription_content">
          <span>{{ $t("page.billno") }}：</span>
          <!-- <span>提单号：</span> -->
          <el-input
            v-model="BillNo"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.billno')"
          ></el-input>
        </div>
        <div class="datasubscription_content">
          <span>{{ $t("page.HBNoAndHand") }}：</span>
          <!-- <span>手（账）册编号：</span> -->
          <el-input
            v-model="HbNo"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('page.HBNoAndHand')"
          ></el-input>
        </div>
        <div class="datasubscription_content content_bettwen">
          <span>{{ $t("custom.unifyCoding") }}：</span>
          <!-- <span>统一编号：</span> -->
          <el-input
            v-model="CusSeqNo"
            clearable
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.unifyCoding')"
          ></el-input>
        </div>
      </div>
      <el-collapse-transition>
        <div v-show="show3">
          <br />
          <div class="datasubscription_search transition-box">
            <div class="datasubscription_content">
              <span>{{ $t("page.ieType") }}：</span>
              <!-- <span>进出口标志：</span> -->
              <SelectComAll
                @change="handleIEsign"
                :dtype="59"
                :update="updates"
                :title="IEsignId"
              ></SelectComAll>
            </div>
            <div class="datasubscription_content">
              <span>{{ $t("page.IEDate") }}：</span>
              <!-- <span>进出口日期：</span> -->
              <el-date-picker
                v-model="time1"
                style="width:100%;"
                size="small"
                type="daterange"
                class="time_class"
                range-separator="-"
                value-format="yyyy-MM-dd"
                :start-placeholder="$t('page.StartDate')"
                :end-placeholder="$t('page.endDate')"
              ></el-date-picker>
            </div>
            <div class="datasubscription_content">
              <span>{{ $t("page.dclBeninDate") }}：</span>
              <!-- <span>申报日期：</span> -->
              <el-date-picker
                v-model="time2"
                style="width:100%;"
                size="small"
                type="daterange"
                class="time_class"
                range-separator="-"
                value-format="yyyy-MM-dd"
                :start-placeholder="$t('page.StartDate')"
                :end-placeholder="$t('page.endDate')"
              ></el-date-picker>
            </div>
            <div class="datasubscription_content content_bettwen">
              <span>{{ $t("page.CDFDownLoadStatus") }}：</span>
              <!-- <span>报关单数据：</span> -->
              <SelectComAll
                @change="handleCDFDownLoadStatus"
                :dtype="64"
                :update="updates"
                :title="CDFDownLoadStatus"
              ></SelectComAll>
            </div>
          </div>
          <br />
          <div class="datasubscription_search transition-box">
            <div class="datasubscription_content">
              <span>{{ $t("page.EdocDownLoadStatus") }}：</span>
              <!-- <span>随附单据PDF：</span> -->
              <SelectComAll
                @change="handleEdocDownLoadStatus"
                :dtype="64"
                :update="updates"
                :title="EdocDownLoadStatus"
              ></SelectComAll>
            </div>
            <div class="datasubscription_content">
              <span></span>
            </div>
            <div class="datasubscription_content">
              <span></span>
            </div>
            <div class="datasubscription_content content_bettwen">
              <span></span>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>

    <!-- 更多查询条件 -->
    <div class="omcomponent_search_btn">
      <i class="el-icon-arrow-down" id="on_svg" @click="handleShowSearch"></i>
      <span @click="handleShowSearch" v-show="show3">{{
        $t("page.hide")
      }}</span>
      <span @click="handleShowSearch" v-show="!show3">{{
        $t("page.more")
      }}</span>
    </div>

    <div class="top_btn">
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="handleSearch"
        v-permission="['Otech.Ccs.HisDataSubManagement.Bills.GetList']"
        >{{ $t("button.search") }}</el-button
      >
      <!-- 查询 -->
      <el-button
        type="primary"
        @click="handleGainManifest"
        v-permission="['Otech.Ccs.HisDataSubManagement.Bills.Obtain']"
        >{{ $t("route.psubscriptionpdf") }}</el-button
      >
      <!-- 获取报关单 -->
    </div>

    <div class="list_data">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        height="405px"
        v-loading="loadingList"
      >
        <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
        <!-- 海关编号 -->
        <el-table-column
          :label="$t('custom.customsCoding')"
          min-width="200px"
          show-overflow-tooltip
        >
          <html slot-scope="scope">
            <span @click="handleInventory(scope.row)" class="color_span">{{
              scope.row.EntryId
            }}</span>
          </html>
        </el-table-column>
        <!-- 统一编号 -->
        <el-table-column
          show-overflow-tooltip
          prop="CusSeqNo"
          :min-width="$flexColumnWidth($t('custom.unifyCoding'))"
          :label="$t('custom.unifyCoding')"
        ></el-table-column>
        <!-- 手（账）册编号 -->
        <el-table-column
          show-overflow-tooltip
          prop="HbNo"
          :min-width="$flexColumnWidth($t('page.HBNoAndHand'))"
          :label="$t('page.HBNoAndHand')"
        ></el-table-column>
        <!-- 提单号 -->
        <el-table-column
          show-overflow-tooltip
          prop="BillNo"
          :min-width="$flexColumnWidth($t('page.billno'))"
          :label="$t('page.billno')"
        ></el-table-column>
        <!-- 进出口标志 -->
        <el-table-column
          show-overflow-tooltip
          prop="IEFlagName"
          :min-width="$flexColumnWidth($t('page.ieType'))"
          :label="$t('page.ieType')"
        ></el-table-column>
        <!-- 进出口日期 -->
        <el-table-column
          show-overflow-tooltip
          prop="IEDate"
          :min-width="$flexColumnWidth($t('page.IEDate'))"
          :label="$t('page.IEDate')"
        ></el-table-column>
        <!-- 申报日期 -->
        <el-table-column
          show-overflow-tooltip
          prop="DDate"
          :min-width="$flexColumnWidth($t('page.dclBeninDate'))"
          :label="$t('page.dclBeninDate')"
        ></el-table-column>
        <!-- 状态 -->
        <el-table-column
          show-overflow-tooltip
          prop="Status"
          :min-width="$flexColumnWidth($t('button.status'))"
          :label="$t('button.status')"
        ></el-table-column>
        <!-- 下载时间 -->
        <el-table-column
          show-overflow-tooltip
          prop="DownLoadDate"
          :label="$t('page.DownLoadDate')"
          :min-width="$flexColumnWidth($t('page.DownLoadDate'))"
        ></el-table-column>
        <!-- 下载用户 -->
        <el-table-column
          show-overflow-tooltip
          prop="DownLoadUserID"
          :min-width="$flexColumnWidth($t('page.DownLoadUserID'))"
          :label="$t('page.DownLoadUserID')"
        ></el-table-column>
        <!-- 报关单数据 -->
        <el-table-column
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.CDFDownLoadStatus'))"
          :label="$t('page.CDFDownLoadStatus')"
        >
          <html slot-scope="scope">
            <span>{{ scope.row.CDFDownLoadStatus }}</span>
            <el-button
              type="primary"
              icon="el-icon-download"
              @click="handleDownloadData(scope.row)"
              style="padding: 3px;font-size: 12px;"
            ></el-button>
          </html>
        </el-table-column>
        <!-- 随附单据PDF -->
        <el-table-column
          show-overflow-tooltip
          :min-width="$flexColumnWidth($t('page.EdocDownLoadStatus'))"
          :label="$t('page.EdocDownLoadStatus')"
        >
          <html slot-scope="scope">
            <span>{{ scope.row.EdocDownLoadStatus }}</span>
            <el-button
              type="primary"
              icon="el-icon-download"
              @click="handleDownloadPDF(scope.row)"
              style="padding: 3px;font-size: 12px;"
            ></el-button>
          </html>
        </el-table-column>
      </el-table>
    </div>

    <pagination
      :total="total"
      :page.sync="pageIndex"
      :limit.sync="pageSize"
      @pagination="getLists"
      @paginationSize="handleSearch"
    />

    <!-- 获取报关单 -->
    <el-dialog
      :title="$t('route.psubscriptionpdf')"
      width="70%"
      v-dialogDrag
      :visible.sync="GainManifest"
      top="3vh"
    >
      <div class="gainmanifest_top">
        <div class="gainmanifest_top_left">
          <p>
            <span class="left_span">{{ $t("page.pitchOn") }}：</span>
            <span>{{ pitchOn }}{{ $t("page.strip") }}</span>
            <span class="left_span">{{ $t("page.MembershipName") }}：</span>
            <span>{{ MembershipName }}</span>
            <span class="left_span">{{ $t("page.ResiduePoints") }}：</span>
            <span class="red_class">{{ ResiduePoints }}</span>
          </p>
          <p>
            <span class="left_span">{{ $t("page.deduct") }}：</span>
            <span class="red_class">{{ deduct }}{{ $t("page.spot") }}</span>
          </p>

          <span class="position_span">{{ $t("page.integral") }}</span>
        </div>
        <div class="gainmanifest_top_right">
          <img :src="userAllData.userLogoPath" alt />
        </div>
      </div>

      <div class="gainmanifest_search">
        <div class="datasubscription_content">
          <!-- 海关编号 -->
          <span>{{ $t("custom.customsCoding") }}：</span>
          <el-input
            v-model="getEntryId"
            @input="getEntryId = getEntryId.replace(/[^\d]/g, '')"
            clearable
            maxlength="18"
            size="small"
            :placeholder="$t('button.placeholder') + $t('custom.customsCoding')"
          ></el-input>
        </div>
        <div class="btn">
          <el-button
            icon="el-icon-download"
            type="primary"
            @click="handleEntrIdDownload"
            :loading="loading1"
            >{{ $t("button.downloadFile") }}</el-button
          >&nbsp;&nbsp;
          <!-- 下载 -->
          <el-checkbox v-model="IsDownLoadCDF">{{
            $t("page.CDFDownLoadStatus")
          }}</el-checkbox>
          <!-- 报关单数据 -->
          <el-checkbox v-model="IsDownLoadDoc">{{
            $t("page.EdocDownLoadStatus")
          }}</el-checkbox>
          <!-- 随附单据PDF -->
        </div>

        <span class="position_span">{{ $t("button.SingledownloadFile") }}</span>
        <!-- 单条下载 -->
      </div>

      <div class="cont_div">
        <div class="datasubscription_content">
          <span>{{ $t("page.ieType") }}：</span>
          <!-- 进出口标志 -->
          <SelectComAll
            @change="handleIEsigns"
            :dtype="59"
            :update="updatetow"
            :title="IEsignIds"
          ></SelectComAll>
        </div>
        <div class="datasubscription_content">
          <!-- 报关单更新日期 -->
          <span>{{ $t("page.UpdateDate") }}：</span>
          <el-date-picker
            v-model="time3"
            style="width:100%;"
            size="small"
            type="daterange"
            class="time_class"
            range-separator="-"
            value-format="yyyy-MM-dd"
            :start-placeholder="$t('page.StartDate')"
            :end-placeholder="$t('page.endDate')"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="datasubscription_content content_bettwen">
          <!-- <span>{{ $t("page.transportation") }}</span> -->
          <!-- 运输方式 -->
          <!-- <SelectComAll
            @change="handleTrafModeId"
            :flagurl="'transportation'"
            :localsearch="true"
            :update="updatetow"
            :title="TrafModeId"
          ></SelectComAll> -->
        </div>

        <span class="position_span">{{ $t("button.bulkDownload") }}</span>
        <!-- 批量下载 -->
      </div>

      <div class="gainmanifest_btn">
        <el-button
          icon="el-icon-search"
          type="primary"
          @click="handleGainManifestSearch"
          :loading="loading2"
          >{{ $t("button.search") }}</el-button
        >
        <!-- 查询 -->
        <el-button
          icon="el-icon-download"
          type="primary"
          @click="handleDownload"
          :loading="loading3"
          >{{ $t("button.downloadFile") }}</el-button
        >&nbsp;&nbsp;
        <!-- 下载 -->
        <el-checkbox v-model="IsDownLoadCDFs" @change="calculateIntegral">{{
          $t("page.CDFDownLoadStatus")
        }}</el-checkbox>
        <!-- 报关单数据 -->
        <el-checkbox v-model="IsDownLoadDocs" @change="calculateIntegral">{{
          $t("page.EdocDownLoadStatus")
        }}</el-checkbox>
        <!-- 随附单据PDF -->
      </div>

      <div class="gainmanifest_list">
        <el-table
          :data="tableDatas"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          tooltip-effect="light"
          border
          height="220px"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('custom.customsCoding'))"
            prop="EntryId"
            :label="$t('custom.customsCoding')"
          ></el-table-column>
          <!-- 海关编号 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.ieType'))"
            prop="IEFlag"
            :label="$t('page.ieType')"
          ></el-table-column>
          <!-- 进出口标志 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.dclBeninDate'))"
            prop="DDate"
            :label="$t('page.dclBeninDate')"
          ></el-table-column>
          <!-- 申报日期 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.IEDate'))"
            prop="IEDate"
            :label="$t('page.IEDate')"
          ></el-table-column>
          <!-- 进出口日期 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('button.status'))"
            prop="Status"
            :label="$t('button.status')"
          ></el-table-column>
          <!-- 状态 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.CDFDownLoadStatus'))"
            prop="CDFDownLoadStatus"
            :label="$t('page.CDFDownLoadStatus')"
          ></el-table-column>
          <!-- 报关单数据 -->
          <el-table-column
            show-overflow-tooltip
            :min-width="$flexColumnWidth($t('page.EdocDownLoadStatus'))"
            prop="EdocDownLoadStatus"
            :label="$t('page.EdocDownLoadStatus')"
          ></el-table-column>
          <!-- 随附单据PDF -->
        </el-table>
        <br />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="index"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableCopyTableList.length"
        ></el-pagination>
      </div>
    </el-dialog>
  </div>
</html>

<script>
 import { mapGetters } from "vuex";
import { throttle } from "@/utils/validate";
import Pagination from "@/components/Pagination";
import {
  GetCDFDetailPageList,
  GetPartClient,
  SearchRemoteData,
  BatchDownRemoteData,
  SingleDownRemoteData,
  DownLoadCDFOrDoc
} from "@/api/datasubscription/indexfile";
import { GetBaseDataList } from "@/api/basedata/index";
import checkPermission from "@/utils/permission"; // 权限判断函数

export default {
  name: "clearancesubscription",
  data() {
    return {
      EntryId: "",
      BillNo: "",
      HbNo: "",
      IEsign: [
        {
          key: "I",
          name: "进口"
        },
        {
          key: "E",
          name: "出口"
        }
      ],
      IEsignId: "",
      time1: "",
      time2: "",
      time3: "",
      show3: false,
      tableData: [],
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      GainManifest: false,
      totals: 0,
      pageIndexs: 1,
      pageSizes: 10,
      tableDatas: [],
      IEsignIds: "",
      MembershipName: "",
      Logo: "",
      ResiduePoints: "",
      SignlePoint: "",
      EdocSignlePoint: "",
      deduct: 0,
      pitchOn: 0,
      getEntryId: "",
      optForlength: "",
      selectDate: "",
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.selectDate = minDate.getTime();
          if (maxDate) {
            this.selectDate = "";
          }
        },
        disabledDate: time => {
          if (this.selectDate !== "") {
            const one = 6 * 24 * 3600 * 1000;
            const minTime = this.selectDate - one;
            const maxTime = this.selectDate + one;

            return time.getTime() < minTime || time.getTime() > maxTime;
          }
        }
      },
      CusSeqNo: "",
      loading1: false,
      loading2: false,
      loading3: false,
      tableCopyTableList: [],
      index: 1,
      size: 10,
      IsDownLoadCDF: true,
      IsDownLoadDoc: false,
      IsDownLoadCDFs: true,
      IsDownLoadDocs: false,
      checkList: [],
      CDFDownLoadStatus: "",
      CDFDownLoadStatuss: [],
      EdocDownLoadStatus: "",
      EdocDownLoadStatuss: [],
      loadingList: false,
      updates: "",
      TrafModeId: "",
      updatetow: ""
    };
  },
  computed: {
    ...mapGetters(["userAllData"])
  },
  methods: {
    //运输方式
    handleTrafModeId(data) {
      this.TrafModeId = data;
    },
    // checkPermission,
    handleDownloadPDF(row) {
      this.loadingList = true;
      const datas = [
        {
          ClientId: 0,
          UserId: 0,
          EntryId: row.EntryId,
          DownLoadCDFOrDoc: 2,
          RequestId: this.$GuId
        }
      ];
      const data = {
        ClientId: 0,
        UserId: 0,
        EntryId: row.EntryId,
        DownLoadCDFOrDoc: 2,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      DownLoadCDFOrDoc(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.$message({
              type: "success",
              message: res.Message
            });
            this.loadingList = false;

            this.handleSearch();
          } else {
            this.loadingList = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(error => {});
    },
    handleDownloadData(row) {
      this.loadingList = true;

      const datas = [
        {
          ClientId: 0,
          UserId: 0,
          EntryId: row.EntryId,
          DownLoadCDFOrDoc: 1,
          RequestId: this.$GuId
        }
      ];
      const data = {
        ClientId: 0,
        UserId: 0,
        EntryId: row.EntryId,
        DownLoadCDFOrDoc: 1,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      DownLoadCDFOrDoc(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.$message({
              type: "success",
              message: res.Message
            });
            this.loadingList = false;
            this.handleSearch();
          } else {
            this.loadingList = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(error => {});
    },
    //随附单据
    handleEdocDownLoadStatus(data) {
      this.EdocDownLoadStatus = data;
    },
    handleCDFDownLoadStatus(data) {
      this.CDFDownLoadStatus = data;
    },
    // 页数改变事件
    handleSizeChange(size) {
      this.size = size;
      this.tableDatas = this.paging(size, this.index);
    },
    // 页码改变事件
    handleCurrentChange(current) {
      this.index = current;
      this.tableDatas = this.paging(this.size, current);
    },
    // 本地分页的方法
    paging(size, current) {
      const tableList = JSON.parse(JSON.stringify(this.tableCopyTableList));
      const tablePush = [];
      tableList.forEach((item, index) => {
        if (size * (current - 1) <= index && index <= size * current - 1) {
          tablePush.push(item);
        }
      });
      return tablePush;
    },
    //复选框
    checkboxSelect(row, rowIndex) {
      // if (row.IsCanDown) {
      //   return true; // 不禁用
      // } else {
      //   return false; // 禁用
      // }
    },
    //海关编码下载
    handleEntrIdDownload() {
      this.loading1 = true;
      let IsDownLoadCDFA = "";
      let IsDownLoadDocA = "";

      if (this.IsDownLoadCDF) {
        IsDownLoadCDFA = "True";
      } else {
        IsDownLoadCDFA = "False";
      }

      if (this.IsDownLoadDoc) {
        IsDownLoadDocA = "True";
      } else {
        IsDownLoadDocA = "False";
      }

      const datas = [
        {
          ClientId: 0,
          EntryId: this.getEntryId,
          UserId: 0,
          IsDownLoadCDF: IsDownLoadCDFA,
          IsDownLoadDoc: IsDownLoadDocA,
          RequestId: this.$GuId
        }
      ];

      const data = {
        ClientId: 0,
        EntryId: this.getEntryId,
        UserId: 0,
        IsDownLoadCDF: IsDownLoadCDFA,
        IsDownLoadDoc: IsDownLoadDocA,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      SingleDownRemoteData(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.loading1 = false;
            this.getGainManifest();

            this.$message({
              message: res.Message,
              type: "success"
            });

            if (this.time3) {
              this.handleGainManifestSearch();
            }
          } else {
            this.loading1 = false;

            if (res.Data.AlertMessage) {
              const h = this.$createElement;

              let arr = [];

              res.Data.AlertMessage.map(item => {
                arr.push(
                  h("li", { style: "line-height:14px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      item.PropertyName + "："
                    ),
                    h(
                      "label",
                      { style: "color:red;font-size:12px;" },
                      item.Messsage
                    )
                  ])
                );
              });

              this.$msgbox({
                title: res.Message,
                message: h("div", null, arr),
                showConfirmButton: false
              }).catch(() => {});
            } else {
              this.$alert(res.Message, "提示", {
                confirmButtonText: "确定",
                type: "error"
              });
            }
          }
        })
        .catch(() => {
          this.loading1 = false;
        });
    },
    //报关单进出口标志数据
    getIEsigns() {},
    //报关单进出口搜索
    handlesearchIEsigns() {
      throttle(this.getIEsigns(data), 6000);
    },
    //报关单进出口标志
    handleIEsigns(data) {
      this.IEsignIds = data;
    },
    //报关单下载
    handleDownload() {
      if (this.optForlength.length > 0) {
        this.$confirm(
          `您将下载${this.pitchOn}条报关单，共计扣除积分${this.deduct}，请确认`,
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "放弃",
            type: "warning"
          }
        )
          .then(() => {
            this.loading3 = true;

            let IsDownLoadCDFA = "";
            let IsDownLoadDocA = "";

            if (this.IsDownLoadCDFs) {
              IsDownLoadCDFA = "True";
            } else {
              IsDownLoadCDFA = "False";
            }

            if (this.IsDownLoadDocs) {
              IsDownLoadDocA = "True";
            } else {
              IsDownLoadDocA = "False";
            }

            let arr = [];

            for (let i = 0; i < this.optForlength.length; i++) {
              let obj = {};
              obj.EntryId = this.optForlength[i].EntryId;
              obj.cusDecStatusName = this.optForlength[i].Status;
              arr.push(obj);
            }

            const datas = [
              {
                ClientId: 0,
                UserId: 0
              }
            ];

            const data = {
              ClientId: 0,
              UserId: 0,
              data: arr,
              IsDownLoadCDF: IsDownLoadCDFA,
              IsDownLoadDoc: IsDownLoadDocA,
              RequestId: this.$GuId,
              Sign: this.$Setshae(datas)
            };

            BatchDownRemoteData(data)
              .then(res => {
                if (res.IsSuccess == true) {
                  this.loading3 = false;
                  this.getGainManifest();
                  this.handleGainManifestSearch();

                  this.$message({
                    message: res.Message,
                    type: "success"
                  });
                } else {
                  this.loading3 = false;

                  if (res.Data.AlertMessage) {
                    const h = this.$createElement;

                    let arr = [];

                    res.Data.AlertMessage.map(item => {
                      arr.push(
                        h("li", { style: "line-height:14px;" }, [
                          h(
                            "label",
                            { style: "font-size:12px;" },
                            item.PropertyName + "："
                          ),
                          h(
                            "label",
                            { style: "color:red;font-size:12px;" },
                            item.Messsage
                          )
                        ])
                      );
                    });

                    this.$msgbox({
                      title: res.Message,
                      message: h("div", null, arr),
                      showConfirmButton: false
                    }).catch(() => {});
                  } else {
                    this.$alert(res.Message, "提示", {
                      confirmButtonText: "确定",
                      type: "error"
                    });
                  }
                }
              })
              .catch(() => {
                this.loading3 = false;
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    //报关单查询
    handleGainManifestSearch() {
      this.getGainmaniFestLists();
    },
    //列表选中
    handleSelectionChange(row) {
      // console.log(row);
      this.optForlength = row;

      this.calculateIntegral();
    },
    //获取报关单列表
    getGainmaniFestLists() {
      let time13;
      let time33;

      this.loading2 = true;

      if (this.time3) {
        time13 = this.time3[0];
        time33 = this.time3[1];
      } else {
        time13 = "";
        time33 = "";
      }

      const datas = [
        {
          ClientId: 0,
          cusIEFlag: this.IEsignIds,
          beginTime: time13,
          endTime: time33,
          RequestId: this.$GuId
        }
      ];

      const data = {
        ClientId: 0,
        cusIEFlag: this.IEsignIds,
        beginTime: time13,
        endTime: time33,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      SearchRemoteData(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.loading2 = false;
            this.tableDatas = res.Data.tableData;
            this.tableCopyTableList = res.Data.tableData;

            this.handleSizeChange(this.size);
          } else {
            this.loading2 = false;
            this.$alert(
              res.Data.AlertMessage[0].PropertyName +
                res.Data.AlertMessage[0].Messsage,
              "提示",
              {
                confirmButtonText: "确定",
                type: "error"
              }
            );
          }
        })
        .catch(() => {
            this.loading2 = false;
        });
    },
    //海关编号点击
    handleInventory(row) {
      if (row.IEFlag == "E") {
        this.$router.push({
          path: "/exitdetailesubscription",
          query: {
            CDFId: row.CDFId
          }
        });
      } else if (row.IEFlag == "I") {
        this.$router.push({
          path: "/progresssubscription",
          query: {
            CDFId: row.CDFId
          }
        });
      }
    },
    //获取列表信息
    getLists() {
      let time11;
      let time12;
      let time21;
      let time22;
      this.loadingList = true;
      if (this.time1) {
        time11 = this.time1[0];
        time12 = this.time1[1];
      } else {
        time11 = "";
        time12 = "";
      }

      if (this.time2) {
        time21 = this.time2[0];
        time22 = this.time2[1];
      } else {
        time21 = "";
        time22 = "";
      }
      const datas = [
        {
          ClientId: 0,
          EntryId: this.EntryId,
          BillNo: this.BillNo,
          HbNo: this.HbNo,
          CusSeqNo: this.CusSeqNo,
          IEFlag: this.IEsignId,
          IEDateStart: time11,
          IEDateEnd: time12,
          DDateStart: time21,
          DDateEnd: time22,
          CDFDownLoadStatus: this.CDFDownLoadStatus,
          EdocDownLoadStatus: this.EdocDownLoadStatus,
          RequestId: this.$GuId,
          PageIndex: this.pageIndex,
          PageSize: this.pageSize
        }
      ];

      const data = {
        ClientId: 0,
        EntryId: this.EntryId,
        BillNo: this.BillNo,
        HbNo: this.HbNo,
        CusSeqNo: this.CusSeqNo,
        IEFlag: this.IEsignId,
        IEDateStart: time11,
        IEDateEnd: time12,
        DDateStart: time21,
        DDateEnd: time22,
        CDFDownLoadStatus: this.CDFDownLoadStatus,
        EdocDownLoadStatus: this.EdocDownLoadStatus,
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas),
        PageIndex: this.pageIndex,
        PageSize: this.pageSize
      };

      GetCDFDetailPageList(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.loadingList = false;
            let str = res.Data;
            // console.log(str)
            this.tableData = str.List;
            this.total = str.AllCount;
            this.pageIndex = str.PageIndex;
            this.pageSize = str.PageSize;
          }
        })
        .catch(() => {});
    },
    //获取报关单数据
    getGainManifest() {
      const datas = [
        {
          RequestId: this.$GuId
        }
      ];

      const data = {
        RequestId: this.$GuId,
        Sign: this.$Setshae(datas)
      };

      GetPartClient(data)
        .then(res => {
          this.MembershipName = res.Data.MembershipName;
          this.Logo = res.Data.Logo;
          this.ResiduePoints = res.Data.ResiduePoints;
          this.SignlePoint = res.Data.SignlePoint;
          this.EdocSignlePoint = res.Data.EdocSignlePoint;
        })
        .catch(() => {});
    },
    //获取报关单按钮
    handleGainManifest() {
      this.GainManifest = true;
      this.getGainManifest();

      this.$nextTick(() => {
        this.updatetow = "123";
      });
    },
    //查询
    handleSearch() {
      this.pageIndex = 1;
      this.getLists();
    },
    //显示更多
    handleShowSearch() {
      this.show3 = !this.show3;
      let DomId = document.getElementById("on_svg");
      if (this.show3) {
        DomId.classList.add("active");
      } else {
        DomId.classList.remove("active");
      }
    },
    //进出口标志
    handleIEsign(data) {
      this.IEsignId = data;
    },
    //进出口标志搜索
    handlesearchIEsign(data) {
      throttle(this.getIEsign(data), 6000);
    },
    //进出口标志获取
    getIEsign() {},
    //计算积分
    calculateIntegral() {
      let str = 0;
      let integral = 0;
      if (this.getEntryId.length == 18) {
        str = 1;
      }

      this.pitchOn = this.optForlength.length + str;

      if (this.IsDownLoadCDFs == true && this.IsDownLoadDocs == false) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (this.optForlength[i].CDFDownLoadStatus == "未下载") {
            integral += Number(this.SignlePoint);
          }
        }
      } else if (this.IsDownLoadDocs == true && this.IsDownLoadCDFs == false) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (this.optForlength[i].EdocDownLoadStatus == "未下载") {
            integral += Number(this.EdocSignlePoint);
          }
        }
      } else if (this.IsDownLoadCDFs == true && this.IsDownLoadDocs == true) {
        for (let i = 0; i < this.optForlength.length; i++) {
          if (
            this.optForlength[i].CDFDownLoadStatus == "未下载" &&
            this.optForlength[i].EdocDownLoadStatus == "已下载"
          ) {
            integral += Number(this.SignlePoint);
          } else if (
            this.optForlength[i].CDFDownLoadStatus == "未下载" &&
            this.optForlength[i].EdocDownLoadStatus == "未下载"
          ) {
            integral += Number(this.SignlePoint) + Number(this.EdocSignlePoint);
          } else if (
            this.optForlength[i].CDFDownLoadStatus == "已下载" &&
            this.optForlength[i].EdocDownLoadStatus == "未下载"
          ) {
            integral += Number(this.EdocSignlePoint);
          }
        }
      }

      this.deduct = integral;

      if (this.deduct > this.ResiduePoints) {
        let className = document.getElementsByClassName("red_class");
        className[0].style.color = "red";
        className[1].style.color = "red";
      } else {
        let className = document.getElementsByClassName("red_class");
        className[0].style.color = "";
        className[1].style.color = "";
      }
    }
  },
  components: {
    Pagination
  },
  created() {
    if (checkPermission("Otech.Ccs.HisDataSubManagement.Bills.GetList")) {
      this.getLists();
    }
  },
  watch: {
    getEntryId() {
      this.calculateIntegral();
    }
  },
  mounted() {
    this.updates = Date.parse(new Date());
  }
};
</script>

<style lang="scss" scoped>
.datasubscription {
  background: #ffffff;
  font-size: 14px;

  .datasubscription_search_div {
    .datasubscription_search {
      font-size: 14px;
      display: flex;

      .datasubscription_content {
        margin-right: 20px;
        width: 300px;

        span {
          display: block;
          margin-bottom: 10px;
        }

        .exitdetaile {
          /deep/.el-input--suffix .el-input__inner {
            border: 1px solid #dcdfe6;
            height: 32px;
            line-height: 32px;
            width: 100%;
          }

          /deep/.el-input__icon {
            line-height: 32px;
          }

          /deep/.el-input--suffix .el-input__inner:focus {
            border: 1px solid #00aef0;
            outline: 0;
          }
        }
      }

      .content_bettwen {
        margin-right: 0;
      }
    }
  }

  .datasubscription_search_btn {
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    text-align: center;

    span {
      cursor: pointer;
    }
  }

  .list_data {
    .color_span {
      color: #00aef0;
      cursor: pointer;
    }
  }

  .active {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg); /* Opera */
  }

  /deep/.el-table td,
  .el-table th {
    padding: 5px 0;
  }
  /deep/.el-table .cell {
    height: 23px;
  }
}

.gainmanifest_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgb(210, 212, 216);
  padding: 10px 0;

  .gainmanifest_top_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px dashed rgb(210, 212, 216);
    position: relative;

    p {
      margin: 5px 0;

      .left_span {
        text-align: right;
      }
      span {
        width: 140px;
        display: inline-block;
      }

      &:first-child {
        display: flex;
      }
    }

    .position_span {
      position: absolute;
      top: -9px;
      left: 20px;
      background: #ffffff;
      padding: 0 10px;
    }
  }

  .gainmanifest_top_right {
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

/deep/.el-dialog__title {
  font-size: 16px;
}

.gainmanifest_search {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px dashed rgb(210, 212, 216);
  position: relative;
  .el-button {
    margin-bottom: 0px;
  }
  .position_span {
    position: absolute;
    top: -9px;
    left: 20px;
    background: #ffffff;
    padding: 0 10px;
  }

  .datasubscription_content {
    margin-right: 20px;
    width: 300px;

    span {
      display: block;
      margin-bottom: 10px;
    }

    .exitdetaile {
      /deep/.el-input--suffix .el-input__inner {
        border: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
        width: 100%;
      }

      /deep/.el-input__icon {
        line-height: 32px;
      }

      /deep/.el-input--suffix .el-input__inner:focus {
        border: 1px solid #00aef0;
        outline: 0;
      }
    }

    .content_bettwen {
      margin-right: 0;
    }
  }

  .btn {
    display: flex;
    align-items: flex-end;
  }
}

.gainmanifest_btn {
  margin: 10px 0;
}

.cont_div {
  display: flex;
  padding: 20px 0 0;
  position: relative;

  .position_span {
    position: absolute;
    top: -9px;
    left: 20px;
    background: #ffffff;
    padding: 0 10px;
  }

  .datasubscription_content {
    margin-right: 20px;
    width: 300px;

    span {
      display: block;
      margin-bottom: 10px;
    }

    .exitdetaile {
      /deep/.el-input--suffix .el-input__inner {
        border: 1px solid #dcdfe6;
        height: 32px;
        line-height: 32px;
        width: 100%;
      }

      /deep/.el-input__icon {
        line-height: 32px;
      }

      /deep/.el-input--suffix .el-input__inner:focus {
        border: 1px solid #00aef0;
        outline: 0;
      }
    }

    .content_bettwen {
      margin-right: 0;
    }
  }
}

.gainmanifest_list {
  /deep/.el-table td,
  .el-table th {
    padding: 5px 0;
  }

  /deep/.pagination-container {
    padding: 20px 16px;
  }
}
/deep/.el-dialog__body {
  padding: 0px 20px 20px;
}
/deep/.el-dialog__header {
  padding: 10px 20px 10px;
}
/deep/ .el-table th {
  text-align: center !important;
}
</style>

<style>
.hover-row > td {
  background-color: rgba(232, 249, 255, 1) !important;
}
</style>

<style lang="scss" scoped>
@import "@/styles/search.scss";
</style>

--特殊监管区域
<html>
  <div>
    <div class="top_div_left_div">
      <!-- <el-button type="custom" icon="el-icon-back"  @click="$router.back(-1)">返回</el-button> -->
      <el-button
        type="primary"
        icon="el-icon-receiving"
        v-permission="[
          'Otech.Ccs.AnnotationListManagement.Export.GetList.Header.Add'
        ]"
        :loading="buttonloading"
        @click="next"
        >{{ $t("button.save") }}</el-button
      >
      <!-- <el-button type="primary" icon="el-icon-upload2"  @click="handleTolead">导入</el-button> -->
      <!-- <el-button type="primary" icon="el-icon-printer"  @click="hadnlePrinter">打印</el-button> -->
      <!-- <el-select
        v-model="messageValue"
        class="message_input"
        placeholder="请选择"
      >
        <el-option
          v-for="item in messageOptions"
          :key="item.key"
          :label="item.name"
          :value="item.key"
        ></el-option> </el-select
      ><el-button
        type="primary"
        style="border-top-left-radius: 0px;border-bottom-left-radius: 0px;height:22px"
        icon="el-icon-position"
        @click="handleSendMessage"
        >发送报文</el-button
      > -->
    </div>
    <div class="newaddedlistlefttop_table">
      <table class="form">
        <tbody>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.SeqNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                clearable
                v-model="tableTitle.SeqNo"
                class="enterFlag"
                ref="SeqNo"
                @keydown.native="handleKeyup('SeqNo', $event)"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.BondInvtNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.BondInvtNo')"
                clearable
                v-model="tableTitle.BondInvtNo"
                class="enterFlag"
                ref="BondInvtNo"
                @keydown.native="handleKeyup('BondInvtNo', $event)"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.invType") }}</th>
            <!-- inv_type -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="handleBillType"
                :dtype="81"
                :flagtype="43"
                :update="update"
                :title="BillTypeId"
                class="enterFlag"
                ref="BillType"
                @keydown.native="handleKeyup('BillType', $event)"
                :class="{ background_input: !BillTypeId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.bizopEtpsno") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.bizopEtpsno')"
                clearable
                v-model="tableTitle.TradeCode"
                maxlength="10"
                class="enterFlag"
                ref="TradeCode"
                @keydown.native="handleKeyup('TradeCode', $event)"
                :class="{ background_input: !tableTitle.TradeCode }"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.bizopEtpsScs") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="TradeCoSccFun"
                @senddata="TradeCoSccSearch"
                :cities="citiesTradeCoScc"
                :title="tableTitle.TradeCoScc"
                class="enterFlag"
                ref="TradeCoScc"
                :BpType="[1, 2, 8, 9, 5]"
                :newadd="true"
                :CodeScc="true"
                @keydown.native="handleKeyup('TradeCoScc', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.bizopNm") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="TradeCoSccFun"
                @senddata="TradeNameSearch"
                :cities="citiesTradeName"
                :title="tableTitle.TradeName"
                :BpType="[1, 2, 8, 9, 5]"
                :newadd="true"
                :CnName="true"
                :class="{ background_input: !tableTitle.TradeName }"
                class="enterFlag"
                ref="TradeName"
                @keydown.native="handleKeyup('TradeName', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.rcvgd") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.rcvgd')"
                clearable
                v-model="tableTitle.OwnerCode"
                maxlength="10"
                class="enterFlag"
                ref="OwnerCode"
                @keydown.native="handleKeyup('OwnerCode', $event)"
                :class="{ background_input: !tableTitle.OwnerCode }"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.rcvgdEtpsScs") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="OwnerCodeSccFun"
                @senddata="OwnerCodeSccSearch"
                :cities="citiesOwnerCodeScc"
                :title="tableTitle.OwnerCodeScc"
                class="enterFlag"
                ref="OwnerCodeScc"
                :BpType="[1, 2, 8, 9, 5]"
                :newadd="true"
                :CodeScc="true"
                @keydown.native="handleKeyup('OwnerCodeScc', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.rcvgdNm") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="OwnerCodeSccFun"
                @senddata="OwnerNameSearch"
                :cities="citiesOwnerName"
                :title="tableTitle.OwnerName"
                :BpType="[1, 2, 8, 9, 5]"
                :newadd="true"
                :CnName="true"
                :class="{ background_input: !tableTitle.OwnerName }"
                class="enterFlag"
                ref="OwnerName"
                @keydown.native="handleKeyup('OwnerName', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.dclEtpSno") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.dclEtpSno')"
                clearable
                v-model="tableTitle.AgentCode"
                maxlength="10"
                class="enterFlag"
                ref="AgentCode"
                @keydown.native="handleKeyup('AgentCode', $event)"
                :class="{ background_input: !tableTitle.AgentCode }"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.socialCode") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="AgentCodeSccFun"
                @senddata="AgentCodeSccSearch"
                :cities="citiesAgentCodeScc"
                :title="tableTitle.AgentCodeScc"
                class="enterFlag"
                ref="AgentCodeScc"
                :BpType="[3, 4, 9, 5]"
                :newadd="true"
                :CodeScc="true"
                @keydown.native="handleKeyup('AgentCodeScc', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.dclEtpsNm") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="AgentCodeSccFun"
                @senddata="AgentNameSearch"
                :cities="citiesAgentName"
                :title="tableTitle.AgentName"
                :BpType="[3, 4, 9, 5]"
                :newadd="true"
                :CnName="true"
                :class="{ background_input: !tableTitle.AgentName }"
                class="enterFlag"
                ref="AgentName"
                @keydown.native="handleKeyup('AgentName', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.inputNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.inputNo')"
                clearable
                v-model="tableTitle.CopCode"
                maxlength="10"
                class="enterFlag"
                ref="CopCode"
                @keydown.native="handleKeyup('CopCode', $event)"
                :class="{
                  background_input:
                    !tableTitle.CopCode && !companySetting.GHSJQF
                }"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.inputSccd") }}</th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="CopCodeSccFun"
                @senddata="CopCodeSccSearch"
                :cities="citiesCopCodeScc"
                :title="tableTitle.CopCodeScc"
                class="enterFlag"
                ref="CopCodeScc"
                :BpType="[3, 4]"
                :newadd="true"
                :CodeScc="true"
                @keydown.native="handleKeyup('CopCodeScc', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.inputbusinessno") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="CopCodeSccFun"
                @senddata="CopNameSearch"
                :cities="citiesCopName"
                :title="tableTitle.CopName"
                :BpType="[3, 4]"
                :newadd="true"
                :CnName="true"
                class="enterFlag"
                ref="CopName"
                @keydown.native="handleKeyup('CopName', $event)"
                :disableds="swStatusflag"
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.innderId") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :disabled="INV_JOB_NOFlag || swStatusflag"
                v-model="tableTitle.INV_JOB_NO"
                class="enterFlag"
                ref="EtpsInnerInvtNo"
                @change="changeMark"
                @keydown.native="handleKeyup('EtpsInnerInvtNo', $event)"
                :class="{ background_input: !tableTitle.INV_JOB_NO }"
              />
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.CCPTypeDeclareId") }}
            </th>
            <!-- DclTypecd -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="handleCCPTypeDeclare"
                :dtype="81"
                :flagtype="45"
                :update="update"
                :title="CCPTypeDeclareId"
                class="enterFlag"
                ref="CCPTypeDeclares"
                @keydown.native="handleKeyup('CCPTypeDeclares', $event)"
                :class="{ background_input: !CCPTypeDeclareId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.ManualNo") }}</th>
            <td class="formValue" colspan="2">
              <SelectComAll
                :title="billingTypeId"
                :update="update"
                :flagurl="'HbList'"
                :columns="'one'"
                @changeobj="returnData"
                :disableds="IsshipmentId || swStatusflag"
                :class="{ background_input: !billingTypeId }"
                class="enterFlag"
                ref="ManualNo"
                @keydown.native="handleKeyup('ManualNo', $event)"
              >
              </SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.inputtime") }}</th>
            <!-- InputTime -->
            <td class="formValue" colspan="2">
              <el-date-picker
                v-model="time"
                type="date"
                class="time_class enterFlag"
                :placeholder="$t('button.select')"
                style="width:100%;"
                value-format="yyyy-MM-dd"
                ref="time"
                @keydown.native="handleKeyup('time', $event)"
                :disabled="swStatusflag"
              ></el-date-picker>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.InvtDclTime") }}</th>
            <!-- InvtDclTime -->
            <td class="formValue" colspan="2">
              <el-date-picker
                v-model="time2"
                type="date"
                class="time_class enterFlag"
                :placeholder="$t('button.select')"
                style="width:100%;"
                value-format="yyyy-MM-dd"
                ref="time2"
                @keydown.native="handleKeyup('time2', $event)"
                :class="{ background_input: !time2 }"
                :disabled="swStatusflag"
              ></el-date-picker>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.MtpckEndprdMarkcd") }}
            </th>
            <!-- MtpckEndprdMarkcd -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="handleMtpckEndprdMarkcd"
                :dtype="81"
                :flagtype="17"
                :update="update"
                :title="MtpckEndprdMarkcdId"
                class="enterFlag"
                ref="MtpckEndprdMarkcd" 
                :class="{'background_input':!MtpckEndprdMarkcdId}"
                @keydown.native="handleKeyup('MtpckEndprdMarkcd', $event)"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.TradeMode") }}</th>
            <!-- TradeMode -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="regulatoryFun"
                :flagurl="'Regulatory'"
                :localsearch="true"
                :update="updateLocal"
                :title="regulatoryId"
                :disableds="IsshipmentId || swStatusflag"
                class="enterFlag"
                ref="regulatoryId"
                @keydown.native="handleKeyup('regulatoryId', $event)"
                :class="{
                  background_input: !regulatoryId && !companySetting.GHSJQF
                }"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.transportation") }}
            </th>
            <!-- TrafMode -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="TrafModeFun"
                :flagurl="'transportation'"
                :localsearch="true"
                :update="updateLocal"
                :title="TrafModeId"
                class="enterFlag"
                ref="TrafModeId"
                @keydown.native="handleKeyup('TrafModeId', $event)"
                :class="{ background_input: !TrafModeId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.ieflag2") }}</th>
            <!-- IEPort -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="IEPortFun"
                :flagurl="'customer'"
                :localsearch="true"
                :update="updateLocal"
                :title="IEPortId"
                class="enterFlag"
                ref="IEPortId"
                @keydown.native="handleKeyup('IEPortId', $event)"
                :class="{ background_input: !IEPortId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.masterCuscd") }}</th>
            <!-- CustomMaster -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="CustomsFun"
                :flagurl="'customer'"
                :localsearch="true"
                :update="updateLocal"
                :title="CustomsId"
                class="enterFlag"
                ref="CustomsId"
                @keydown.native="handleKeyup('CustomsId', $event)"
                :class="{ background_input: !CustomsId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.VrfdedMarkcd") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                v-model="tableTitle.VrfdedMarkcd"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.destination") }}</th>
            <!-- TradeCountry -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="TradeCountryFun"
                :update="updateLocal"
                :columns="'four'"
                :flagurl="'country'"
                :localsearch="true"
                :title="TradeCountryId"
                class="enterFlag"
                ref="TradeCountryId"
                @keydown.native="handleKeyup('TradeCountryId', $event)"
                :class="{ background_input: !TradeCountryId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">
              {{ $t("page.InvtIochkptStucd") }}
            </th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                v-model="tableTitle.InvtIochkptStucd"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.ApplyNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.ApplyNo')"
                clearable
                v-model="tableTitle.ApplyNo"
                class="enterFlag"
                ref="ApplyNo"
                @keydown.native="handleKeyup('ApplyNo', $event)"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.ListType") }}</th>
            <!-- ListType -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="DistinatePortFun"
                :update="update"
                :dtype="81"
                :flagtype="39"
                :title="DistinatePortId"
                class="enterFlag"
                ref="DistinatePortId"
                @keydown.native="handleKeyup('DistinatePortId', $event)"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.DclcusFlag") }}</th>
            <!-- DclcusFlag -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="customsMarkFun"
                :update="update"
                :title="customsMarkId"
                :dtype="81"
                :flagtype="40"
                class="enterFlag"
                ref="customsMarkId"
                @keydown.native="handleKeyup('customsMarkId', $event)"
                :class="{ background_input: !customsMarkId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.IsGenerate") }}</th>
            <!-- IsGenerate -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="whetherNotFun"
                :update="update2"
                :title="whetherNotId"
                :dtype="81"
                :flagtype="63"
                class="enterFlag"
                ref="whetherNotId"
                @keydown.native="handleKeyup('whetherNotId', $event)"
                :class="{ background_input: !whetherNotId }"
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.DclcusTypecd") }}</th>
            <!-- DclcusTypecd -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="customsTypeFun"
                :update="update"
                :dtype="81"
                :flagtype="41"
                :title="customsTypeId"
                class="enterFlag"
                ref="customsTypeId"
                @keydown.native="handleKeyup('customsTypeId', $event)"
                
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.DecType") }}</th>
            <!-- DecType -->
            <td class="formValue" colspan="2">
              <SelectComAll
                @change="customsDeclarationFun"
                :update="update"
                :dtype="81"
                :flagtype="42"
                :title="customsDeclarationId"
                class="enterFlag"
                ref="customsDeclarationId"
                @keydown.native="handleKeyup('customsDeclarationId', $event)"
               
                :disableds="swStatusflag"
              ></SelectComAll>
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.EntryNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.EntryNo')"
                clearable
                v-model="tableTitle.EntryNo"
                :disabled="(customsTypeId == 1 && !companySetting.GHSJQF ) ||
                    (swStatusflag && editEntryNo)
                "
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.DDate") }}</th>
            <!-- DDate -->
            <td class="formValue" colspan="2">
              <el-date-picker
                v-model="time3"
                type="date"
                class="time_class enterFlag"
                clearable
                placeholder="请选择日期"
                style="width:100%;"
                value-format="yyyy-MM-dd"
                ref="time3"
                
                @keydown.native="handleKeyup('time3', $event)"
                :disabled="swStatusflag"
              ></el-date-picker>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">
              {{ $t("page.CorrEntryDclEtpsNo") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="CorrEntryDclEtpsNoFun"
                @senddata="CorrEntryDclEtpsNoSearch"
                :cities="citiesCorrEntryDclEtpsNo"
                :title="tableTitle.CorrEntryDclEtpsNo"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CustomsCode="true"
                class="enterFlag"
                ref="CorrEntryDclEtpsNo"
                @keydown.native="handleKeyup('CorrEntryDclEtpsNo', $event)"
                
                :disableds="
                  (customsTypeId == 1 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.CorrEntryDclEtpsSccd") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="CorrEntryDclEtpsNoFun"
                @senddata="CorrEntryDclEtpsSccdSearch"
                :cities="citiesCorrEntryDclEtpsSccd"
                :title="tableTitle.CorrEntryDclEtpsSccd"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CodeScc="true"
                class="enterFlag"
                ref="CorrEntryDclEtpsSccd"
                @keydown.native="handleKeyup('CorrEntryDclEtpsSccd', $event)"
                
                :disableds="
                  (customsTypeId == 1 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.CorrEntryDclEtpsNm") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="CorrEntryDclEtpsNoFun"
                @senddata="CorrEntryDclEtpsNmSearch"
                :cities="citiesCorrEntryDclEtpsNm"
                :title="tableTitle.CorrEntryDclEtpsNm"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CnName="true"
                class="enterFlag"
                ref="CorrEntryDclEtpsNm"
                @keydown.native="handleKeyup('CorrEntryDclEtpsNm', $event)"
                
                :disableds="
                  (customsTypeId == 1 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.RltEntryNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.RltEntryNo')"
                clearable
                v-model="tableTitle.RltEntryNo"
                :disabled="
                    (customsTypeId == 2 && !companySetting.GHSJQF) ||
                    swStatusflag
                "
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.RltInvtNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.RltInvtNo')"
                clearable
                v-model="tableTitle.RltInvtNo"
                class="enterFlag"
                ref="RltInvtNo"
                @keydown.native="handleKeyup('RltInvtNo', $event)"
                :disabled="swStatusflag"
              />
            </td>
            <th class="formTitle" colspan="3">{{ $t("page.RltPutrecNo") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.RltPutrecNo')"
                clearable
                v-model="tableTitle.RltPutrecNo"
                class="enterFlag"
                ref="RltPutrecNo"
                @keydown.native="handleKeyup('RltPutrecNo', $event)"
                :disabled="swStatusflag"
              />
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryBizopEtpsno") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryBizopEtpsnoFun"
                @senddata="RltEntryBizopEtpsnoSearch"
                :cities="citiesRltEntryBizopEtpsno"
                :title="tableTitle.RltEntryBizopEtpsno"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CustomsCode="true"
                class="enterFlag"
                ref="RltEntryBizopEtpsno"
                @keydown.native="handleKeyup('RltEntryBizopEtpsno', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryBizopEtpsSccd") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryBizopEtpsnoFun"
                @senddata="RltEntryBizopEtpsSccdSearch"
                :cities="citiesRltEntryBizopEtpsSccd"
                :title="tableTitle.RltEntryBizopEtpsSccd"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CodeScc="true"
                class="enterFlag"
                ref="RltEntryBizopEtpsSccd"
                @keydown.native="handleKeyup('RltEntryBizopEtpsSccd', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryBizopEtpsNm") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryBizopEtpsnoFun"
                @senddata="RltEntryBizopEtpsNmSearch"
                :cities="citiesRltEntryBizopEtpsNm"
                :title="tableTitle.RltEntryBizopEtpsNm"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CnName="true"
                class="enterFlag"
                ref="RltEntryBizopEtpsNm"
                @keydown.native="handleKeyup('RltEntryBizopEtpsNm', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryRcvgdEtpsno") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryRcvgdEtpsnoFun"
                @senddata="RltEntryRcvgdEtpsnoSearch"
                :cities="citiesRltEntryRcvgdEtpsno"
                :title="tableTitle.RltEntryRcvgdEtpsno"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CustomsCode="true"
                class="enterFlag"
                ref="RltEntryRcvgdEtpsno"
                @keydown.native="handleKeyup('RltEntryRcvgdEtpsno', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryRvsngdEtpsSccd") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryRcvgdEtpsnoFun"
                @senddata="RltEntryRvsngdEtpsSccdSearch"
                :cities="citiesRltEntryRvsngdEtpsSccd"
                :title="tableTitle.RltEntryRvsngdEtpsSccd"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CodeScc="true"
                class="enterFlag"
                ref="RltEntryRvsngdEtpsSccd"
                @keydown.native="handleKeyup('RltEntryRvsngdEtpsSccd', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryRcvgdEtpsNm") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryRcvgdEtpsnoFun"
                @senddata="RltEntryRcvgdEtpsNmSearch"
                :cities="citiesRltEntryRcvgdEtpsNm"
                :title="tableTitle.RltEntryRcvgdEtpsNm"
                :BpType="[1, 2, 8, 5, 9]"
                :newadd="true"
                :CnName="true"
                class="enterFlag"
                ref="RltEntryRcvgdEtpsNm"
                @keydown.native="handleKeyup('RltEntryRcvgdEtpsNm', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryDclEtpsno") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryDclEtpsnoFun"
                @senddata="RltEntryDclEtpsnoSearch"
                :cities="citiesRltEntryDclEtpsno"
                :title="tableTitle.RltEntryDclEtpsno"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CustomsCode="true"
                class="enterFlag"
                ref="RltEntryDclEtpsno"
                @keydown.native="handleKeyup('RltEntryDclEtpsno', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
               
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryDclEtpsSccd") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryDclEtpsnoFun"
                @senddata="RltEntryDclEtpsSccdSearch"
                :cities="citiesRltEntryDclEtpsSccd"
                :title="tableTitle.RltEntryDclEtpsSccd"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CodeScc="true"
                class="enterFlag"
                ref="RltEntryDclEtpsSccd"
                @keydown.native="handleKeyup('RltEntryDclEtpsSccd', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
               
              ></BusinessSelectCom>
            </td>
            <th class="formTitle" colspan="3">
              {{ $t("page.RltEntryDclEtpsNm") }}
            </th>
            <td class="formValue" colspan="2">
              <BusinessSelectCom
                @funobj="RltEntryDclEtpsnoFun"
                @senddata="RltEntryDclEtpsNmSearch"
                :cities="citiesRltEntryDclEtpsNm"
                :title="tableTitle.RltEntryDclEtpsNm"
                :BpType="[3, 4, 5, 9]"
                :newadd="true"
                :CnName="true"
                class="enterFlag"
                ref="RltEntryDclEtpsNm"
                @keydown.native="handleKeyup('RltEntryDclEtpsNm', $event)"
                :disableds="
                  (customsTypeId == 2 && !companySetting.GHSJQF) || (swStatusflag && editEntryNo)
                "
                
              ></BusinessSelectCom>
            </td>
          </tr>
          <tr>
            <th class="formTitle" colspan="3">{{ $t("page.noteS") }}</th>
            <td class="formValue" colspan="12">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.noteS')"
                v-model="tableTitle.Rmk"
                clearable
                :class="{
                  background_input: companySetting.GAOHANG && !tableTitle.Rmk
                }"
                class="enterFlag"
                ref="Rmk"
                @keydown.native="handleKeyup('Rmk', $event)"
              />
            </td>
          </tr>
          <tr>
            <!-- 报关单统一编号 -->
            <th class="formTitle" colspan="3">{{ $t("page.customsDeclarationNumber") }}</th>
            <td class="formValue" colspan="2">
              <el-input
                type="text"
                :placeholder="$t('button.placeholder') + $t('page.customsDeclarationNumber')"
                v-model="tableTitle.CCP_SeqNo"
                disabled
              />
            </td>
            <!-- 报关单草稿(备注) -->
            <th class="formTitle" colspan="3">报关单草稿(备注)</th>
            <td class="formValue" colspan="7">
              <el-input
                type="text"
                placeholder="请输入报关单草稿(备注)"
                v-model="tableTitle.CCP_NOTES"
                disabled
              />
            </td>
          </tr>
          <tr v-for="(item, index) in listDom" :key="index">
            <th class="formTitle" colspan="3">{{ item.DisplayName }}</th>
            <td class="formValue" colspan="2">
              <SelectComAll
                :title="Contents"
                :flagurl="'partner'"
                :code="'BP_Internal_ID'"
                @change="handleFiledId"
                :update="updates"
              ></SelectComAll>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</html>

<script>
import BusinessSelectCom from "@/components/businessSelectCom";
import {
  GetBaseDataList,
  GetCountryList,
  GetCURRList,
  GetClientParamDetails
} from "@/api/basedata/index";
import { debounce } from "@/utils/validate";
import {
  GetClientData,
  GetHeaderDataList,
  EditHeaderDataList,
  SaveHeaderDataList,
  GetInvHeaderField,
  GetBusinessPartnerData
} from "@/api/nuclearNote/exitus";
import {
  GetHbHeaderlist,
  CheckUpdateJobNo
} from "@/api/originalDocuments/entrance";
import { mapGetters } from "vuex";
export default {
  components: {
    BusinessSelectCom
  },
  data() {
    return {
      tableTitle: {
        SeqNo: "",
        BondInvtNo: "",
        TradeCode: "",
        TradeCoScc: "",
        TradeName: "",
        OwnerCode: "",
        OwnerCodeScc: "",
        OwnerName: "",
        AgentCode: "",
        AgentCodeScc: "",
        AgentName: "",
        CopCode: "",
        CopCodeScc: "",
        CopName: "",
        INV_JOB_NO: "", //企业内部编号
        ManualNo: "",
        VrfdedMarkcd: "",
        InvtIochkptStucd: "",
        ApplyNo: "",
        EntryNo: "",
        CorrEntryDclEtpsNo: "",
        CorrEntryDclEtpsSccd: "",
        CorrEntryDclEtpsNm: "",
        RltEntryNo: "",
        RltInvtNo: "",
        RltPutrecNo: "",
        RltEntryBizopEtpsno: "",
        RltEntryBizopEtpsSccd: "",
        RltEntryBizopEtpsNm: "",
        RltEntryRcvgdEtpsno: "",
        RltEntryRvsngdEtpsSccd: "",
        RltEntryRcvgdEtpsNm: "",
        RltEntryDclEtpsno: "",
        RltEntryDclEtpsSccd: "",
        RltEntryDclEtpsNm: "",
        Rmk: "",
        CCP_SeqNo:'',
        CCP_NOTES:''
      },
      time: "", //录入日期  InputTime
      time2: "", //清单申报日期   InvtDclTime
      time3: "", //报关单申报日期 DDate
      BillTypeId: "", //清单类型  inv_type
      BillType: [],
      CCPTypeDeclareId: "1", //申报类型 DclTypecd
      CCPTypeDeclares: [],
      regulatoryId: "", //监管方式 TradeMode:'',
      citiesregulatory: [],
      TrafModeId: "", //运输方式 TrafMode
      citiesTrafMode: [],
      IEPortId: "", //出境关别  IEPort
      citiesIEPort: [], //出境关别
      CustomsId: "", //主管海关 CustomMaster
      citiesCustoms: [],
      TradeCountryId: "", //运抵国(地区) TradeCountry
      citiesTradeCountry: [], //运抵国(地区)
      DistinatePortId: "", //流转类型 ListType
      citiesDistinatePort: [],
      customsMarkId: "", //报关标志 DclcusFlag
      citiesCustomsMark: [],
      whetherNotId: "1", //是否系统生成报关单 IsGenerate
      citiesWhetherNot: [],
      customsTypeId: "", //报关类型 DclcusTypecd
      citiesCustomsType: [],
      customsDeclarationId: "", //报关单类型 DecType
      citiesCustomsDeclaration: [],
      MtpckEndprdMarkcdId: "", // 料件成品标志 MtpckEndprdMarkcd
      MtpckEndprdMarkcdArr: [],
      billingTypeId: "", //收账册编号
      billingTypeData: [],
      ids: "",
      IsshipmentId: false, //判断编辑时，是否是原始单证生成
      messageValue: "",
      messageOptions: [],
      hbflag: "",
      HB_ID: "",
      update: "",
      HB_ID_id: "",
      buttonloading: false,
      citiesTradeCoScc: [], //经营单位社会信用代码
      citiesTradeName: [], //经营单位名称
      citiesOwnerCodeScc: [], //加工单位社会信用代码
      citiesOwnerName: [], //加工单位名称
      citiesAgentCodeScc: [], //申报单位社会信用代码
      citiesAgentName: [], //申报单位名称
      citiesCopCodeScc: [], //录入单位社会信用代码
      citiesCopName: [], //录入单位名称
      INV_JOB_NOFlag: false,
      listDom: [],
      FiledIds: [],
      Contents: "",
      citiesCorrEntryDclEtpsNo: [], //对应报关单申报
      citiesCorrEntryDclEtpsSccd: [],
      citiesCorrEntryDclEtpsNm: [],
      citiesRltEntryBizopEtpsNm: [],
      citiesRltEntryBizopEtpsSccd: [],
      citiesRltEntryBizopEtpsno: [],
      citiesRltEntryRcvgdEtpsno: [],
      citiesRltEntryRvsngdEtpsSccd: [],
      citiesRltEntryRcvgdEtpsNm: [],
      citiesRltEntryDclEtpsno: [],
      citiesRltEntryDclEtpsSccd: [],
      citiesRltEntryDclEtpsNm: [],
      update2: "",
      swStatus: "",
      updates: "",
      updateLocal:'',
      swStatusflag: false,
      editEntryNo:true
    };
  },
  computed: {
    ...mapGetters(["companySetting"])
  },
  created() {
    this.getSelectData();
    this.getMessageSend();
    this.getINV_JOB_NO();
    this.handleGetClientParamList();
    this.isEditEntryNo();
  },
  methods: {
    isEditEntryNo(){
      const data ={
        Code :11,
        Type :101
      }
      GetClientParamDetails(data).then(res =>{
        if(res){
          if(res.length > 0 && res[0].PARAM1 == 1){
            this.editEntryNo = false;
          }
        }
      })
    },
    handleFiledId(data) {
      this.Contents = data;
      this.listDom.forEach(res => {
        if (res.FiledId == 400) {
          res.Content = data;
        }
      });
    },
    handleGetClientParamList() {
      const data = {
        InvId: this.$route.query.invId ? this.$route.query.invId : ""
      };

      GetInvHeaderField(data)
        .then(res => {
          if (res.IsSuccess == true) {
            this.listDom = res.Data;

            this.listDom.forEach(res => {
              if (res.FiledId == 400) {
                this.Contents = res.Content;
                this.$nextTick(() => {
                  this.updates = "123";
                });
              }
            });
          }
        })
        .catch(() => {});
    },
    getINV_JOB_NO() {
      CheckUpdateJobNo()
        .then(res => {
          if (res.IsSuccess == true) {
            if (res.Data.Param1 == "1") {
              this.INV_JOB_NOFlag = false;
            } else {
              this.INV_JOB_NOFlag = true;
            }
          }
        })
        .catch(() => {});
    },
    //对应报关单申报
    CorrEntryDclEtpsNoFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.CorrEntryDclEtpsSccd = items.item.BpCodeScc;
        this.tableTitle.CorrEntryDclEtpsNo = items.item.BpCustomsCode;
        this.tableTitle.CorrEntryDclEtpsNm = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.CorrEntryDclEtpsSccd = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.CorrEntryDclEtpsNm = items.item;
        } else if (items.flag == "CustomsCode") {
          this.tableTitle.CorrEntryDclEtpsNo = items.item;
        }
      }
    },
    CorrEntryDclEtpsNoSearch(val) {
      this.citiesCorrEntryDclEtpsNo = val;
    },
    CorrEntryDclEtpsSccdSearch(val) {
      this.citiesCorrEntryDclEtpsSccd = val;
    },
    CorrEntryDclEtpsNmSearch(val) {
      this.citiesCorrEntryDclEtpsNm = val;
    },
    //关联报关单境内收发货人
    RltEntryBizopEtpsnoFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.RltEntryBizopEtpsSccd = items.item.BpCodeScc;
        this.tableTitle.RltEntryBizopEtpsno = items.item.BpCustomsCode;
        this.tableTitle.RltEntryBizopEtpsNm = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.RltEntryBizopEtpsSccd = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.RltEntryBizopEtpsNm = items.item;
        } else if (items.flag == "CustomsCode") {
          this.tableTitle.RltEntryBizopEtpsno = items.item;
        }
      }
    },
    RltEntryBizopEtpsnoSearch(val) {
      this.citiesRltEntryBizopEtpsno = val;
    },
    RltEntryBizopEtpsSccdSearch(val) {
      this.citiesRltEntryBizopEtpsSccd = val;
    },
    RltEntryBizopEtpsNmSearch(val) {
      this.citiesRltEntryBizopEtpsNm = val;
    },
    //关联报关单生产销售(消费使用)
    RltEntryRcvgdEtpsnoFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.RltEntryRvsngdEtpsSccd = items.item.BpCodeScc;
        this.tableTitle.RltEntryRcvgdEtpsno = items.item.BpCustomsCode;
        this.tableTitle.RltEntryRcvgdEtpsNm = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.RltEntryRvsngdEtpsSccd = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.RltEntryRcvgdEtpsNm = items.item;
        } else if (items.flag == "CustomsCode") {
          this.tableTitle.RltEntryRcvgdEtpsno = items.item;
        }
      }
    },
    RltEntryRcvgdEtpsnoSearch(val) {
      this.citiesRltEntryRcvgdEtpsno = val;
    },
    RltEntryRvsngdEtpsSccdSearch(val) {
      this.citiesRltEntryRvsngdEtpsSccd = val;
    },
    RltEntryRcvgdEtpsNmSearch(val) {
      this.citiesRltEntryRcvgdEtpsNm = val;
    },
    //关联报关单申报单位
    RltEntryDclEtpsnoFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.RltEntryDclEtpsSccd = items.item.BpCodeScc;
        this.tableTitle.RltEntryDclEtpsno = items.item.BpCustomsCode;
        this.tableTitle.RltEntryDclEtpsNm = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.RltEntryDclEtpsSccd = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.RltEntryDclEtpsNm = items.item;
        } else if (items.flag == "CustomsCode") {
          this.tableTitle.RltEntryDclEtpsno = items.item;
        }
      }
    },
    RltEntryDclEtpsnoSearch(val) {
      this.citiesRltEntryDclEtpsno = val;
    },
    RltEntryDclEtpsSccdSearch(val) {
      this.citiesRltEntryDclEtpsSccd = val;
    },
    RltEntryDclEtpsNmSearch(val) {
      this.citiesRltEntryDclEtpsNm = val;
    },
    //经营单位
    TradeCoSccFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.TradeCoScc = items.item.BpCodeScc;
        this.tableTitle.TradeCode = items.item.BpCustomsCode;
        this.tableTitle.TradeName = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.TradeCoScc = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.TradeName = items.item;
        }
      }
    },
    TradeCoSccSearch(val) {
      this.citiesTradeCoScc = val;
    },
    TradeNameSearch(val) {
      this.citiesTradeName = val;
    },
    //加工单位
    OwnerCodeSccFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.OwnerCodeScc = items.item.BpCodeScc;
        this.tableTitle.OwnerCode = items.item.BpCustomsCode;
        this.tableTitle.OwnerName = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.OwnerCodeScc = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.OwnerName = items.item;
        }
      }
    },
    OwnerCodeSccSearch(val) {
      this.citiesOwnerCodeScc = val;
    },
    OwnerNameSearch(val) {
      this.citiesOwnerName = val;
    },
    //申报单位
    AgentCodeSccFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.AgentCodeScc = items.item.BpCodeScc;
        this.tableTitle.AgentCode = items.item.BpCustomsCode;
        this.tableTitle.AgentName = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.AgentCodeScc = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.AgentName = items.item;
        }
      }
    },
    AgentCodeSccSearch(val) {
      this.citiesAgentCodeScc = val;
    },
    AgentNameSearch(val) {
      this.citiesAgentName = val;
    },
    //录入单位
    CopCodeSccFun(items) {
      if (Object.prototype.toString.call(items.item) === "[object Object]") {
        this.tableTitle.CopCodeScc = items.item.BpCodeScc;
        this.tableTitle.CopCode = items.item.BpCustomsCode;
        this.tableTitle.CopName = items.item.BpCnName;
      } else {
        if (items.flag == "CodeScc") {
          this.tableTitle.CopCodeScc = items.item;
        } else if (items.flag == "CnName") {
          this.tableTitle.CopName = items.item;
        }
      }
    },
    CopCodeSccSearch(val) {
      this.citiesCopCodeScc = val;
    },
    CopNameSearch(val) {
      this.citiesCopName = val;
    },

    //发送报文
    handleSendMessage() {}, //单一窗口下拉框
    getMessageSend(val) {
      if (!val) {
        val = null;
      }

      const data = {
        DropdownType: 37,
        Search: val
      };

      GetBaseDataList(data)
        .then(res => {
          if (res.isSuccess == true) {
            this.messageOptions = res.data;
          }
        })
        .catch(error => {});
    },
    getSelectData() {
      this.getList().then(() => {
        this.update = Date.parse(new Date());
        this.update2 = Date.parse(new Date());
        this.updateLocal = Date.parse(new Date());
      });
    },
    //加工贸易手册编号选择后带出手册备案申报日期，手册有效期
    returnData(item) {
      if (Object.prototype.toString.call(item) === "[object Object]") {
        this.billingTypeId = item.ID;
        this.HB_ID = item.HB_ID;
        this.tableTitle.ManualNo = item.HB_NO;
        this.hbflag = item.HB_FLAG;
      } else {
        this.billingTypeId = "";
        this.HB_ID = "";
        this.tableTitle.ManualNo = "";
        this.hbflag = "";
      }

      //物流账册,默认料件，加工账册，默认成品 1-账册 2-手册 3-物流账册,
      if(this.hbflag == '3' ){ 
        this.MtpckEndprdMarkcdId = 'I'  //I料件，E成品
      }else if(this.hbflag == '2' || this.hbflag == '1' ){ 
        this.MtpckEndprdMarkcdId = 'E'  //I料件，E成品
      }
    },
    //清单类型
    handleBillType(data) {
      this.BillTypeId = data;
    },
    //申报单位
    handleCCPTypeDeclare(data) {
      this.CCPTypeDeclareId = data;
    },
    //监管方式
    regulatoryFun(data) {
      this.regulatoryId = data;
    },
    //运输方式选择
    TrafModeFun(data) {
      this.TrafModeId = data;
    },

    //出境关别选择
    IEPortFun(data) {
      this.IEPortId = data;
    },

    //主管海关
    CustomsFun(data) {
      this.CustomsId = data;
    },
    //运抵国(地区)选择
    TradeCountryFun(data) {
      this.TradeCountryId = data;
    },
    //流转类型
    DistinatePortFun(data) {
      this.DistinatePortId = data;
    },

    //报关标志
    customsMarkFun(data) {
      this.customsMarkId = data;
      if (data == "1") {
        this.whetherNotId = "1";
      } else if (data == "2") {
        this.whetherNotId = "2";
      }
      this.update2 = Date.parse(new Date());
    },
    //是否系统生成报关单
    whetherNotFun(data) {
      this.whetherNotId = data;
    },
    //报关类型
    customsTypeFun(data) {
      this.customsTypeId = data;
    },
    //报关单类型
    customsDeclarationFun(data) {
      this.customsDeclarationId = data;
    },
    //料件成品
    handleMtpckEndprdMarkcd(data) {
      this.MtpckEndprdMarkcdId = data;
    },
    //页面打开获取数据
    getList() {
      if (this.$route.query.invId || this.ids) {
        const data = {
          clientId: 0,
          sid: this.$route.query.invId ? this.$route.query.invId : this.ids
        };

        return new Promise((resolve, reject) => {
          GetHeaderDataList(data)
            .then(res => {
              if (res.IsSuccess == true) {
                this.tableTitle = {
                  SeqNo: res.Data.SeqNo,
                  BondInvtNo: res.Data.BondInvtNo,
                  TradeCode: res.Data.TradeCode,
                  TradeCoScc: res.Data.TradeCoScc,
                  TradeName: res.Data.TradeName,
                  OwnerCode: res.Data.OwnerCode,
                  OwnerCodeScc: res.Data.OwnerCodeScc,
                  OwnerName: res.Data.OwnerName,
                  AgentCode: res.Data.AgentCode,
                  AgentCodeScc: res.Data.AgentCodeScc,
                  AgentName: res.Data.AgentName,
                  CopCode: res.Data.CopCode,
                  CopCodeScc: res.Data.CopCodeScc,
                  CopName: res.Data.CopName,
                  INV_JOB_NO: res.Data.INV_JOB_NO, //企业内部编号
                  ManualNo: res.Data.ManualNo,
                  VrfdedMarkcd: res.Data.VrfdedMarkcd,
                  InvtIochkptStucd: res.Data.InvtIochkptStucd,
                  ApplyNo: res.Data.ApplyNo,
                  EntryNo: res.Data.EntryNo,
                  CorrEntryDclEtpsNo: res.Data.CorrEntryDclEtpsNo,
                  CorrEntryDclEtpsSccd: res.Data.CorrEntryDclEtpsSccd,
                  CorrEntryDclEtpsNm: res.Data.CorrEntryDclEtpsNm,
                  RltEntryNo: res.Data.RltEntryNo,
                  RltInvtNo: res.Data.RltInvtNo,
                  RltPutrecNo: res.Data.RltPutrecNo,
                  RltEntryBizopEtpsno: res.Data.RltEntryBizopEtpsno,
                  RltEntryBizopEtpsSccd: res.Data.RltEntryBizopEtpsSccd,
                  RltEntryBizopEtpsNm: res.Data.RltEntryBizopEtpsNm,
                  RltEntryRcvgdEtpsno: res.Data.RltEntryRcvgdEtpsno,
                  RltEntryRvsngdEtpsSccd: res.Data.RltEntryRvsngdEtpsSccd,
                  RltEntryRcvgdEtpsNm: res.Data.RltEntryRcvgdEtpsNm,
                  RltEntryDclEtpsno: res.Data.RltEntryDclEtpsno,
                  RltEntryDclEtpsSccd: res.Data.RltEntryDclEtpsSccd,
                  RltEntryDclEtpsNm: res.Data.RltEntryDclEtpsNm,
                  Rmk: res.Data.Rmk,
                  CCP_SeqNo:res.Data.CCP_SeqNo,
                  CCP_NOTES:res.Data.CCP_NOTES
                };

                this.time = res.Data.InputTime;
                this.time2 = res.Data.InvtDclTime; //清单申报日期
                this.time3 = res.Data.DDate; //报关单申报日期
                this.BillTypeId = res.Data.inv_type; //清单类型
                this.CCPTypeDeclareId = res.Data.DclTypecd; //申报类型
                this.regulatoryId = res.Data.TradeMode; //监管方式
                this.TrafModeId = res.Data.TrafMode; //运输方式
                this.IEPortId = res.Data.IEPort; //出境关别
                this.CustomsId = res.Data.CustomMaster; //主管海关
                this.TradeCountryId = res.Data.TradeCountry; //运抵国(地区)
                this.DistinatePortId = res.Data.ListType; //流转类型
                this.customsMarkId = res.Data.DclcusFlag; //报关标志
                this.whetherNotId = res.Data.GenDecFlag; //是否系统生成报关单
                this.customsTypeId = res.Data.DclcusTypecd; //报关类型
                this.customsDeclarationId = res.Data.DecType; //报关单类型
                this.MtpckEndprdMarkcdId = res.Data.MtpckEndprdMarkcd; // 料件成品标志
                this.billingTypeId =
                  res.Data.HB_ID == "0" ? res.Data.ManualNo : res.Data.ID;
                this.HB_ID = res.Data.HB_ID;
                this.HB_ID_id = res.Data.ID;
                this.IsshipmentId = res.Data.SHIPMENT_ID ? true : false;
                this.swStatus = res.Data.swStatus;
                this.$emit("IsshipmentId", this.IsshipmentId);
                this.$emit('hbID',this.HB_ID);
                this.$emit('ItemType',this.MtpckEndprdMarkcdId);
                resolve();
              }
            })
            .catch(error => {});
        }).catch(error => {
          reject(error);
        });
      } else {
        const data = {
          clientId: 0
        };

        return new Promise((resolve, reject) => {
          GetClientData(data)
            .then(res => {
              if (res.IsSuccess == true) {
                this.tableTitle = {
                  SeqNo: res.Data.SeqNo,
                  BondInvtNo: res.Data.BondInvtNo,
                  TradeCode: res.Data.CLIENT_CUSTOMS_CODE,
                  TradeCoScc: res.Data.CLIENT_CODE_SCC,
                  TradeName: res.Data.CLIENT_NAME,
                  OwnerCode: res.Data.CLIENT_CUSTOMS_CODE,
                  OwnerCodeScc: res.Data.CLIENT_CODE_SCC,
                  OwnerName: res.Data.CLIENT_NAME,
                  AgentCode: res.Data.CLIENT_CUSTOMS_CODE,
                  AgentCodeScc: res.Data.CLIENT_CODE_SCC,
                  AgentName: res.Data.CLIENT_NAME,
                  CopCode: res.Data.CLIENT_CUSTOMS_CODE,
                  CopCodeScc: res.Data.CLIENT_CODE_SCC,
                  CopName: res.Data.CLIENT_NAME,
                  INV_JOB_NO: res.Data.INV_JOB_NO, //企业内部编号
                  ManualNo: res.Data.ManualNo,
                  VrfdedMarkcd: res.Data.VrfdedMarkcd,
                  InvtIochkptStucd: res.Data.InvtIochkptStucd,
                  ApplyNo: res.Data.ApplyNo,
                  EntryNo: res.Data.EntryNo,
                  CorrEntryDclEtpsNo: res.Data.CorrEntryDclEtpsNo,
                  CorrEntryDclEtpsSccd: res.Data.CorrEntryDclEtpsSccd,
                  CorrEntryDclEtpsNm: res.Data.CorrEntryDclEtpsNm,
                  RltEntryNo: res.Data.RltEntryNo,
                  RltInvtNo: res.Data.RltInvtNo,
                  RltPutrecNo: res.Data.RltPutrecNo,
                  RltEntryBizopEtpsno: res.Data.RltEntryBizopEtpsno,
                  RltEntryBizopEtpsSccd: res.Data.RltEntryBizopEtpsSccd,
                  RltEntryBizopEtpsNm: res.Data.RltEntryBizopEtpsNm,
                  RltEntryRcvgdEtpsno: res.Data.RltEntryRcvgdEtpsno,
                  RltEntryRvsngdEtpsSccd: res.Data.RltEntryRvsngdEtpsSccd,
                  RltEntryRcvgdEtpsNm: res.Data.RltEntryRcvgdEtpsNm,
                  RltEntryDclEtpsno: res.Data.RltEntryDclEtpsno,
                  RltEntryDclEtpsSccd: res.Data.RltEntryDclEtpsSccd,
                  RltEntryDclEtpsNm: res.Data.RltEntryDclEtpsNm,
                  Rmk: res.Data.Rmk
                };
                this.CustomsId = res.Data.CustomMaster; //主管海关
                //this.MtpckEndprdMarkcdId = res.Data.MtpckEndprdMarkcd; // 料件成品标志
                this.BillTypeId = "0";
                this.$emit("IsshipmentId", false);
                this.$emit('hbID',this.HB_ID);
                this.$emit('ItemType',this.MtpckEndprdMarkcdId);
                var now = new Date();
                var year = now.getFullYear(); //得到年份
                var month = now.getMonth(); //得到月份
                var date = now.getDate(); //得到日期
                month = month + 1;
                month = month.toString().padStart(2, "0");
                date = date.toString().padStart(2, "0");
                var defaultDate = `${year}-${month}-${date}`;
                this.time = defaultDate;
                resolve();
              }
            })
            .catch(error => {});
        }).catch(error => {
          reject(error);
        });
      }
    },
    //导入按钮
    handleTolead() {
      this.dialogVisible = true;
    },
    //打印
    hadnlePrinter() {},
    //保存按钮
    next() {
      if (this.companySetting.GAOHANG && !this.tableTitle.Rmk) {
        this.$alert("请输入备注", "错误！", {
          confirmButtonText: "确定",
          type: "error"
        });

        return;
      }

      let flag = true;
      let AlertMessage = [];

      if(!this.swStatusflag){
        if (!this.companySetting.GHSJQF) {
          
          if (!this.tableTitle.CopCode) {
            flag = false;
            AlertMessage.push({
              PropertyName: "录入单位编码：",
              Messsage: "必填字段"
            });
          }
          if (!this.regulatoryId) {
            flag = false;
            AlertMessage.push({
              PropertyName: "监管方式：",
              Messsage: "必填字段"
            });
          }

          // if (this.customsTypeId == 1 && !this.time3) {
          //   flag = false;
          //   AlertMessage.push({
          //     PropertyName: "报关单申报日期：",
          //     Messsage: "必填字段"
          //   });
          // }
        }      
      }else if(this.swStatusflag && !this.editEntryNo){
        // if (this.customsTypeId == 2) {
        //   if (this.customsMarkId == 1 && !this.tableTitle.EntryNo) {
        //     flag = false;
        //     AlertMessage.push({
        //       PropertyName: "对应报关单编号：",
        //       Messsage: "必填字段"
        //     });
        //   }
        // }
      }

      

      if (!flag) {
        //EntryNo           对应报关单编号
        //CorrEntryDclEtpsNo       对应报关单申报单位编码
        //CorrEntryDclEtpsSccd     对应报关单申报单位社会统一信用代码
        //CorrEntryDclEtpsNm    对应报关单申报单位名称
        //RltEntryNo 关联报关单编号
        //RltEntryBizopEtpsno 关联报关单境内收发货人编码
        //RltEntryBizopEtpsSccd 关联报关单境内收发货人社会信用代码
        //RltEntryBizopEtpsNm 关联报关单境内收发货人名称
        //RltEntryRcvgdEtpsno 关联报关单生产销售(消费使用)单位编码
        //RltEntryRvsngdEtpsSccd 关联报关单生产销售(消费使用)社会信用代码
        //RltEntryRcvgdEtpsNm 关联报关单生产销售(消费使用)单位名称
        //RltEntryDclEtpsno 关联报关单申报单位编码
        //RltEntryDclEtpsSccd 关联报关单申报单位社会信用代码
        //RltEntryDclEtpsNm 关联报关单申报单位名称
        //DDate 报关单申报日期

        const h = this.$createElement;
        let arr = [];
        arr.push(
          h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
            h("label", { style: "font-size:12px;" }, "保存失败。")
          ]),
          h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
            h(
              "label",
              { style: "font-size:12px;" },
              "向海关申报的必填字段未填写，请在正式申报前按照提示补充完整。"
            )
          ])
        );

        AlertMessage.map(item => {
          arr.push(
            h("li", { style: "line-height:14px;" }, [
              h(
                "label",
                { style: "font-size:12px;" },
                item.PropertyName + "："
              ),
              h("label", { style: "color:red;font-size:12px;" }, item.Messsage)
            ])
          );
        });
        this.$msgbox({
          title: "保存提示",
          message: h("div", null, arr),
          showConfirmButton: false
        }).catch(() => {});

        return;
      }
      if (this.$route.query.invId || this.ids) {
        //更新数据
        this.buttonloading = true;

        const data = {
          userId: 0,
          clientId: 0,
          EtpsInnerInvtNo: this.tableTitle.INV_JOB_NO,
          inV_TYPE: this.BillTypeId,
          bondInvtNo: this.tableTitle.BondInvtNo,
          seqNo: this.tableTitle.SeqNo,
          hB_ID: this.HB_ID,
          tradeCode: this.tableTitle.TradeCode,
          tradeCoScc: this.tableTitle.TradeCoScc,
          tradeName: this.tableTitle.TradeName,
          ownerCode: this.tableTitle.OwnerCode,
          ownerCodeScc: this.tableTitle.OwnerCodeScc,
          ownerName: this.tableTitle.OwnerName,
          agentCode: this.tableTitle.AgentCode,
          agentCodeScc: this.tableTitle.AgentCodeScc,
          agentName: this.tableTitle.AgentName,
          copCode: this.tableTitle.CopCode,
          copCodeScc: this.tableTitle.CopCodeScc,
          copName: this.tableTitle.CopName,
          inputTime: this.time,
          invtDclTime: this.time2,
          mtpckEndprdMarkcd: this.MtpckEndprdMarkcdId,
          tradeMode: this.regulatoryId,
          trafMode: this.TrafModeId,
          iePort: this.IEPortId,
          customMaster: this.CustomsId,
          vrfdedMarkcd: this.tableTitle.VrfdedMarkcd,
          tradeCountry: this.TradeCountryId,
          invtIochkptStucd: this.tableTitle.InvtIochkptStucd,
          applyNo: this.tableTitle.ApplyNo,
          listType: this.DistinatePortId,
          dclcusFlag: this.customsMarkId,
          dclcusTypecd: this.customsTypeId,
          decType: this.customsDeclarationId,
          entryNo: this.tableTitle.EntryNo,
          corrEntryDclEtpsNo: this.tableTitle.CorrEntryDclEtpsNo,
          corrEntryDclEtpsSccd: this.tableTitle.CorrEntryDclEtpsSccd,
          corrEntryDclEtpsNm: this.tableTitle.CorrEntryDclEtpsNm,
          rltEntryNo: this.tableTitle.RltEntryNo,
          rltInvtNo: this.tableTitle.RltInvtNo,
          rltPutrecNo: this.tableTitle.RltPutrecNo,
          rltEntryBizopEtpsno: this.tableTitle.RltEntryBizopEtpsno,
          rltEntryBizopEtpsSccd: this.tableTitle.RltEntryBizopEtpsSccd,
          rltEntryBizopEtpsNm: this.tableTitle.RltEntryBizopEtpsNm,
          rltEntryRcvgdEtpsno: this.tableTitle.RltEntryRcvgdEtpsno,
          rltEntryRvsngdEtpsSccd: this.tableTitle.RltEntryRvsngdEtpsSccd,
          rltEntryRcvgdEtpsNm: this.tableTitle.RltEntryRcvgdEtpsNm,
          rltEntryDclEtpsno: this.tableTitle.RltEntryDclEtpsno,
          rltEntryDclEtpsSccd: this.tableTitle.RltEntryDclEtpsSccd,
          rltEntryDclEtpsNm: this.tableTitle.RltEntryDclEtpsNm,
          dDate: this.time3,
          rmk: this.tableTitle.Rmk,
          dclTypecd: this.CCPTypeDeclareId,
          genDecFlag: this.whetherNotId,
          inV_ID: this.$route.query.invId || this.ids,
          HB_FLAG: this.hbflag,
          fileData: this.listDom
        };

        EditHeaderDataList(data)
          .then(res => {
            //跟新表头
            this.buttonloading = false;

            const _this = this;
            if (res.IsSuccess == true) {
              _this.ids = res.Data.dataId.toString();
              _this.tableTitle.INV_JOB_NO = res.Data.etpsInnerInvtNo; //企业内部编号
              _this.getSelectData();
              this.$message({
                type: "success",
                message: res.Message,
                duration: 1000,
                onClose: () => {
                  _this.$emit("tableBody", _this.ids);
                }
              });
            } else {
              if (res.Data && res.Data.AlertMessage.length > 0) {
                const h = this.$createElement;
                let arr = [];
                arr.push(
                  h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                    h("label", { style: "font-size:12px;" }, "保存失败。")
                  ]),
                  h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      "向海关申报的必填字段未填写，请在正式申报前按照提示补充完整。"
                    )
                  ])
                );

                res.Data.AlertMessage.map(item => {
                  arr.push(
                    h("li", { style: "line-height:14px;" }, [
                      h(
                        "label",
                        { style: "font-size:12px;" },
                        item.PropertyName + "："
                      ),
                      h(
                        "label",
                        { style: "color:red;font-size:12px;" },
                        item.Messsage
                      )
                    ])
                  );
                });
                this.$msgbox({
                  title: "保存提示",
                  message: h("div", null, arr),
                  showConfirmButton: false,
                  callback: () => {
                    // _this.$emit('tableBody',_this.ids);
                  }
                }).catch(() => {});
              } else {
                this.$alert(res.Message, "错误！", {
                  confirmButtonText: "确定",
                  type: "error"
                });
              }
            }
          })
          .catch(() => {
            this.buttonloading = false;
          });
      } else {
        this.buttonloading = true;

        const data = {
          userId: 0,
          clientId: 0,
          ieFlag: "E",
          EtpsInnerInvtNo: this.tableTitle.INV_JOB_NO,
          inV_TYPE: this.BillTypeId,
          bondInvtNo: this.tableTitle.BondInvtNo,
          seqNo: this.tableTitle.SeqNo,
          hB_ID: this.HB_ID,
          tradeCode: this.tableTitle.TradeCode,
          tradeCoScc: this.tableTitle.TradeCoScc,
          tradeName: this.tableTitle.TradeName,
          ownerCode: this.tableTitle.OwnerCode,
          ownerCodeScc: this.tableTitle.OwnerCodeScc,
          ownerName: this.tableTitle.OwnerName,
          agentCode: this.tableTitle.AgentCode,
          agentCodeScc: this.tableTitle.AgentCodeScc,
          agentName: this.tableTitle.AgentName,
          copCode: this.tableTitle.CopCode,
          copCodeScc: this.tableTitle.CopCodeScc,
          copName: this.tableTitle.CopName,
          inputTime: this.time,
          invtDclTime: this.time2,
          mtpckEndprdMarkcd: this.MtpckEndprdMarkcdId,
          tradeMode: this.regulatoryId,
          trafMode: this.TrafModeId,
          iePort: this.IEPortId,
          customMaster: this.CustomsId,
          vrfdedMarkcd: this.tableTitle.VrfdedMarkcd,
          tradeCountry: this.TradeCountryId,
          invtIochkptStucd: this.tableTitle.InvtIochkptStucd,
          applyNo: this.tableTitle.ApplyNo,
          listType: this.DistinatePortId,
          dclcusFlag: this.customsMarkId,
          dclcusTypecd: this.customsTypeId,
          decType: this.customsDeclarationId,
          entryNo: this.tableTitle.EntryNo,
          corrEntryDclEtpsNo: this.tableTitle.CorrEntryDclEtpsNo,
          corrEntryDclEtpsSccd: this.tableTitle.CorrEntryDclEtpsSccd,
          corrEntryDclEtpsNm: this.tableTitle.CorrEntryDclEtpsNm,
          rltEntryNo: this.tableTitle.RltEntryNo,
          rltInvtNo: this.tableTitle.RltInvtNo,
          rltPutrecNo: this.tableTitle.RltPutrecNo,
          rltEntryBizopEtpsno: this.tableTitle.RltEntryBizopEtpsno,
          rltEntryBizopEtpsSccd: this.tableTitle.RltEntryBizopEtpsSccd,
          rltEntryBizopEtpsNm: this.tableTitle.RltEntryBizopEtpsNm,
          rltEntryRcvgdEtpsno: this.tableTitle.RltEntryRcvgdEtpsno,
          rltEntryRvsngdEtpsSccd: this.tableTitle.RltEntryRvsngdEtpsSccd,
          rltEntryRcvgdEtpsNm: this.tableTitle.RltEntryRcvgdEtpsNm,
          rltEntryDclEtpsno: this.tableTitle.RltEntryDclEtpsno,
          rltEntryDclEtpsSccd: this.tableTitle.RltEntryDclEtpsSccd,
          rltEntryDclEtpsNm: this.tableTitle.RltEntryDclEtpsNm,
          dDate: this.time3,
          rmk: this.tableTitle.Rmk,
          dclTypecd: this.CCPTypeDeclareId,
          genDecFlag: this.whetherNotId,
          HB_FLAG: this.hbflag,
          fileData: this.listDom
        };

        SaveHeaderDataList(data)
          .then(res => {
            //保存表头
            this.buttonloading = false;

            const _this = this;
            if (res.IsSuccess == true) {
              //_this.tableTitle.SeqNo = res.Data.SeqNo;
              //_this.tableTitle.BondInvtNo = res.Data.BondInvtNo;
              _this.ids = res.Data.dataId.toString();
              _this.tableTitle.INV_JOB_NO = res.Data.etpsInnerInvtNo; //企业内部编号
              _this.getSelectData();
              this.$message({
                type: "success",
                message: res.Message,
                duration: 1000,
                onClose: () => {
                  _this.$emit("tableBody", _this.ids);
                }
              });
            } else {
              //consle.log("12112")
              if (res.Data && res.Data.AlertMessage.length > 0) {
                const h = this.$createElement;
                let arr = [];
                arr.push(
                  h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                    h("label", { style: "font-size:12px;" }, "保存失败。")
                  ]),
                  h("p", { style: "line-height:12px;margin-bottom:5px;" }, [
                    h(
                      "label",
                      { style: "font-size:12px;" },
                      "向海关申报的必填字段未填写，请在正式申报前按照提示补充完整。"
                    )
                  ])
                );

                res.Data.AlertMessage.map(item => {
                  arr.push(
                    h("li", { style: "line-height:14px;" }, [
                      h(
                        "label",
                        { style: "font-size:12px;" },
                        item.PropertyName + "："
                      ),
                      h(
                        "label",
                        { style: "color:red;font-size:12px;" },
                        item.Messsage
                      )
                    ])
                  );
                });
                this.$msgbox({
                  title: "保存提示",
                  message: h("div", null, arr),
                  showConfirmButton: false,
                  callback: () => {
                    //_this.$emit('tableBody',_this.ids);
                  }
                }).catch(() => {});
              } else {
                this.$alert(res.Message, "错误！", {
                  confirmButtonText: "确定",
                  type: "error"
                });
              }
            }
          })
          .catch(() => {
            this.buttonloading = false;
          });
      }
    },

    //递归
    recursions(index, n) {
      var nexts = this.$refs[Object.keys(this.$refs)[index + n]];
      var flag2 = nexts.$el.className.indexOf("enterFlag") !== -1;
      if (nexts.disableds || nexts.disabled) {
        let m = n + 1;
        this.recursions(index, m);
      } else {
        if (flag2) {
          if (nexts.$children.length > 0) {
            nexts.$children[0].focus();
          } else {
            nexts.focus();
          }
        }
      }
    },
    //回车
    handleKeyup(name, e) {
      var keyCode = e.keyCode || e.which || e.charCode;
      const index = Object.keys(this.$refs).indexOf(name);
      var currents = this.$refs[Object.keys(this.$refs)[index]];
      var flag = currents.$el.className.indexOf("enterFlag") !== -1;
      if (keyCode === 13 && flag) {
        if (currents.$children.length > 0) {
          currents.$children[0].blur();
        } else {
          currents.blur();
        }

        if (Object.keys(this.$refs).length - 1 === index) {
          this.next();
        } else {
          this.recursions(index, 1);
        }
      }
    },
    changeMark(val) {
      if (!this.tableTitle.Rmk) {
        this.tableTitle.Rmk = val;
      }
    }
  },
  watch: {
    customsTypeId(val) {
      // if (val == 2) {
      //   this.tableTitle.RltEntryDclEtpsNm = "";
      //   this.tableTitle.RltEntryDclEtpsSccd = "";
      //   this.tableTitle.RltEntryDclEtpsno = "";
      //   this.tableTitle.RltEntryRcvgdEtpsNm = "";
      //   this.tableTitle.RltEntryRvsngdEtpsSccd = "";
      //   this.tableTitle.RltEntryRcvgdEtpsno = "";
      //   this.tableTitle.RltEntryBizopEtpsNm = "";
      //   this.tableTitle.RltEntryBizopEtpsSccd = "";
      //   this.tableTitle.RltEntryBizopEtpsno = "";
      //   this.tableTitle.RltEntryNo = "";
        
      // } else if (val == 1) {
      //   this.tableTitle.CorrEntryDclEtpsNo = "";
      //   this.tableTitle.CorrEntryDclEtpsSccd = "";
      //   this.tableTitle.CorrEntryDclEtpsNm = "";
      //   this.tableTitle.EntryNo = "";
        
      // }
    },
    // customsDeclarationId(val) {
    //   if (val != "X" && val != "Y") {
    //     if (this.customsTypeId == 2) {
    //       this.tableTitle.EntryNo = "";
    //     }
    //     if (this.customsTypeId == 1) {
    //       this.tableTitle.RltEntryNo = "";
    //     }
    //   }
    // },
    billingTypeData: {
      handler(newVal, oldVal) {
        if (newVal && this.HB_ID_id) {
          this.billingTypeData.map(item => {
            if (item.ID == this.HB_ID_id) {
              this.hbflag = item.HB_FLAG;
            }
          });
        }
      },
      immediate: true
    },
    swStatus(val) {
      if (!val || val == "a" || val == "b" || val == "c" || val == "3") {
        this.swStatusflag = false;
      } else {
        this.swStatusflag = true;
      }
    }
  },
  mounted() {
    //this.updateLocal = Date.parse(new Date());
    // var now = new Date();
    // var year = now.getFullYear(); //得到年份
    // var month = now.getMonth(); //得到月份
    // var date = now.getDate(); //得到日期
    // month = month + 1;
    // month = month.toString().padStart(2, "0");
    // date = date.toString().padStart(2, "0");
    // var defaultDate = `${year}-${month}-${date}`;
    // this.time1 = defaultDate;
    // this.time2 = defaultDate;
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/public.scss";
.newaddedlistlefttop_table {
  margin-top: 10px;
}
.formTitle {
  padding-right: 10px;
  text-align: right !important;
}
</style>
