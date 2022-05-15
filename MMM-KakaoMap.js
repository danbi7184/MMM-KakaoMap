Module.register("MMM-KakaoMap", {
	requiresVersion: "2.12.0",
	default: {
		src: "https://dapi.kakao.com/v2/maps/sdk.js",
		key: "",
		x: "",
		y: "",
		header: "지도",
	},

	getStyles: function () {
	  return ["MMM-KakaoMap.css"];
	},

	getHeader: function () {
		return this.config.header;
	},

	start: function () {
	  Log.info("Starting module: " + this.name);
	  var self = this;
	  this.loaded = false;
	},

	getDom: function () {
	  var wrapper = document.createElement("div");
	  if (!this.loaded) {
		return wrapper;
	  }
	  	wrapper.id = "map";
		wrapper.style.width = "350px";
		wrapper.style.height = "350px";
		var srcKey = this.config.src + "?appkey=" + this.config.key;

		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = srcKey;
		var mapContainer = document.getElementById("map"),
			mapOption = {
				center: new kakao.maps.Lating(this.config.x, this.config.y),
				level: 3
			};

		var map = new kakao.maps.Map(mapContainer, mapOption);
	  return wrapper;
	},
});
