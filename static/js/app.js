

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
			fill_in_cols: 1,
			fill_in_table: [
				
			],
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
		},
	});
}