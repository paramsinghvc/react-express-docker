import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  componentDidMount() {
    // fetch("https://anobis-compass-backend.swiggy.in/superset/login", {
    //   "credentials": "include",
    //   "headers": {
    //     "accept": "application/json,*/*",
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   // "referrer": "http://localhost:3000/login",
    //   "body": "username=shreya.tiwari&password=March@2019",
    //   "method": "POST",
    //   // "mode": "cors"
    // })
    fetch("https://anobis-compass-backend.swiggy.in/superset/login", { "credentials": "include", "headers": { "accept": "*/*", "content-type": "application/x-www-form-urlencoded" }, "referrer": "http://qa.anobis.swiggy.in/", "referrerPolicy": "no-referrer-when-downgrade", "body": "username=shreya.tiwari&password=March%402019", "method": "POST", "mode": "cors" })
      .then(() => {
        fetch("https://anobis-compass-backend.swiggy.in/superset/explore_json/?form_data=%7B%22slice_id%22%3A481%7D", { "credentials": "include", "headers": { "X-Requested-With": "XMLHttpRequest", "accept": "application/json, text/javascript, */*; q=0.01", "accept-language": "en-GB,en-US;q=0.9,en;q=0.8", "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://anobis-compass-backend.swiggy.in/superset/render_filter_slice/481/?filters=%7B%22adhoc_filters%22%3A%5B%5D%2C%22chronic_filters%22%3A%7B%7D%7D", "referrerPolicy": "no-referrer-when-downgrade", "body": "form_data=%7B%22datasource%22%3A%22109__druid%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A481%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3Anull%2C%22since%22%3A%22today%22%2C%22until%22%3A%22now%2B330+minutes%22%2C%22metric%22%3A%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22column_name%22%3A%22order_amount%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Afalse%2C%22groupby%22%3Afalse%2C%22is_dttm%22%3Anull%2C%22type%22%3A%22LONG%22%2C%22optionName%22%3A%22_col_order_amount%22%7D%2C%22aggregate%22%3A%22SUM%22%2C%22sqlExpression%22%3Anull%2C%22hasCustomLabel%22%3Afalse%2C%22fromFormData%22%3Afalse%2C%22label%22%3A%22SUM(order_amount)%22%2C%22optionName%22%3A%22metric_ak0y9zqs73r_rtl2ys3bww%22%7D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22delivered%22%2C%22operator%22%3A%22%3D%3D%22%2C%22comparator%22%3A%221%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_9fwcpz48vua_2dc0dx7vqy2%22%7D%5D%2C%22compare_lag%22%3A%22%22%2C%22compare_suffix%22%3A%22%22%2C%22latest_point%22%3A1%2C%22show_trend_line%22%3A%22No%22%2C%22y_axis_format%22%3A%22.3s%22%2C%22metrics%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22column_name%22%3A%22order_id%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Anull%2C%22type%22%3A%22STRING%22%2C%22optionName%22%3A%22_col_order_id%22%7D%2C%22aggregate%22%3A%22COUNT_DISTINCT%22%2C%22sqlExpression%22%3Anull%2C%22hasCustomLabel%22%3Afalse%2C%22fromFormData%22%3Afalse%2C%22label%22%3A%22COUNT_DISTINCT(order_id)%22%2C%22optionName%22%3A%22metric_pca2rt8eikq_dlegt7nwjtr%22%7D%5D%2C%22groupby%22%3A%5B%5D%2C%22timeseries_limit_metric%22%3Anull%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A10000%2C%22color_scheme%22%3A%22bnbColors%22%2C%22show_brush%22%3A%22auto%22%2C%22show_legend%22%3Atrue%2C%22rich_tooltip%22%3Atrue%2C%22show_markers%22%3Afalse%2C%22line_interpolation%22%3A%22linear%22%2C%22x_axis_label%22%3A%22%22%2C%22bottom_margin%22%3A%22auto%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Afalse%2C%22y_axis_label%22%3A%22%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Afalse%2C%22y_log_scale%22%3Afalse%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22rolling_periods%22%3A%22%22%2C%22time_compare%22%3A%5B%221+week%22%5D%2C%22num_period_compare%22%3A%22%22%2C%22period_ratio_type%22%3A%22growth%22%2C%22resample_how%22%3Anull%2C%22resample_rule%22%3Anull%2C%22resample_fillmethod%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%2C%22url_params%22%3A%7B%22filters%22%3A%22%7B%5C%22adhoc_filters%5C%22%3A%5B%5D%2C%5C%22chronic_filters%5C%22%3A%7B%7D%7D%22%7D%2C%22where%22%3A%22%22%2C%22having%22%3A%22%22%2C%22having_filters%22%3A%5B%5D%2C%22filters%22%3A%5B%7B%22col%22%3A%22delivered%22%2C%22op%22%3A%22%3D%3D%22%2C%22val%22%3A%221%22%7D%5D%7D", "method": "POST", "mode": "cors" }).then(res => res);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Project Home</h1>
        {/* Link to List.js */}
        <Link to={'./list'}>
          <button variant="raised">
            My List
        </button>
        </Link>
      </div>
    );
  }
}
export default Home;