

function init(){
	window.ctx_vue = new Vue({
		el: "#app",
		data: {
			register_bit_cols: 32,
			register_table: [
				{span: 1, name: "a", is_resv: true},
				{span: 2, name: "b", is_resv: false},
				{span: 3, name: "c", is_resv: false},
				{span: 3, name: "ff", is_resv: true},
			],
			template_input_table: [
				{bit_ranges:[[7, 0]], name: "a"},
				{bit_ranges:[[9, 8]], name: "b"},
				{bit_ranges:[[17, 15]], name: "c"},
				{bit_ranges:[[31, 31]], name: "d"},
			],
			template_input_table_config: {
				max_bits: 32,
			},
		},
		/*
		components: {
          "progress-bar": ProgressBar
        },
		*/
		created: function(){
			
		},
		methods: {
			update_register_table: function(){
				
			},
			format_item_new: function(){
				this.template_input_table.push({bit_ranges:[[0, 0]], name: ""},);
			},
			format_item_remove: function(idx){
				this.template_input_table.splice(idx, 1);
			},
			bit_table_check_high: function(item_idx, bit_range_idx, e){
				let check_range = this.template_input_table[item_idx].bit_ranges[bit_range_idx];
				console.log(item_idx, bit_range_idx, check_range);
				if (check_range[0] < 0) check_item.bit_ranges[bit_range_idx][0] = 0;
				if (check_range[0] >= this.template_input_table_config.max_bits) check_range[0] = this.template_input_table_config.max_bits - 1;
				if (check_range[0] < check_range[1]) check_range[0] = check_range[1];
				//console.log(item_idx, bit_range_idx, check_range);
				//this.template_input_table[item_idx].bit_ranges[bit_range_idx] = check_range;
				this.$forceUpdate();
			},
			bit_table_check_low: function(item_idx, bit_range_idx, e){
				let check_range = this.template_input_table[item_idx].bit_ranges[bit_range_idx];
				if (check_range[1] < 0) check_range[1] = 0;
				if (check_range[1] >= this.template_input_table_config.max_bits) check_range[1] = this.template_input_table_config.max_bits - 1;
				if (check_range[0] < check_range[1]) check_range[1] = check_range[0];
				this.$forceUpdate();
			},
			check_if_overlap_nums: function(a, b){  // a=[7, 0], b=[3, 1]
				if (a[0] < b[0] && a[0] > b[1]) return true;
				if (a[1] < b[0] && a[1] > b[1]) return true;
				return false;
			},
			check_if_overlap: function(){
				for (item of this.template_input_table){
					for (bit_range of item.bit_ranges){
						for (item_s of this.template_input_table){
							for (bit_range_s of item_s.bit_ranges){
								if (bit_range === bit_range_s) continue;
								if (this.check_if_overlap_nums(bit_range, bit_range_s))
									return true;
							}
						}
					}
				}
				return false;
			},
		},
	});
}