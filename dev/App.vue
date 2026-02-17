<template>
	<div class="container py-2">
		<div class="row">
			<div class="col text-center">
				<button class="btn btn-primary m-1" @click="notify('show')">Show</button>
				<button class="btn btn-info m-1" @click="notify('info')">Info</button>
				<button class="btn btn-warning m-1" @click="notify('warning')">Warning</button>
				<button class="btn btn-success m-1" @click="notify('success')">Success</button>
				<button class="btn btn-danger m-1" @click="notify('error')">Error</button>
				<button class="btn btn-secondary m-1" @click="notifyAll()">All</button>
			</div>
		</div>
		<div class="row mt-3 justify-content-center">
			<div class="col-3">
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" role="switch" id="switchThemeAll" v-model="isThemesAll">
					<label class="form-check-label" for="switchThemeAll">All</label>
				</div>
				<div class="form-check form-switch" v-for="theme in themes">
					<input class="form-check-input" type="checkbox" role="switch" :id="'switchTheme'+theme" v-model="selThemes" :value="theme">
					<label class="form-check-label" :for="'switchTheme'+theme">{{theme}}</label>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col text-center">
				<button class="btn btn-secondary m-1" @click="closeAll()">Close All Visible Noty's</button>
			</div>
		</div>
	</div>
</template>

<style></style>

<script>
export default {
	data: () => ({
		themes: [
			'mint',
			'sunset',
			'relax',
			'metroui',
			'semanticui',
			'light',
			'bootstrap-v3',
			'bootstrap-v4',
		],
		selThemes: [],
		isThemesAll: false,
		isUpdatingAll: false,
	}),
	watch: {
		isThemesAll(val){
			if (!this.isUpdatingAll) {
				if (val) this.selThemes = [...this.themes];
				else this.selThemes = [];
			}
		},
		selThemes: {
			handler(val){
				// включаем флаг, что изменение идет через "выбрать все"
    			this.isUpdatingAll = true;
				
				this.isThemesAll = val.length === this.themes.length;
				
				setTimeout(() => {
					this.isUpdatingAll = false;
				}, 100);
			},
			deep: true,
		},
	},
	methods: {
		notify(type = 'alert') {
			if (this.selThemes.length === 0) {
				this.$noty.warning(`select a least one theme!`, {
					timeout: 3000,
					progressBar: true,
					theme: 'bootstrap-v3',
				});
			}
			for (const theme of this.selThemes) {
				this.$noty[type](`${type} (${theme} theme)`, {
					timeout: 4000,
					progressBar: true,
					theme,
				});
			}
		},
		notifyAll(){
			const types = ['show', 'info', 'warning', 'success', 'error'];
			for (const type of types) this.notify(type);
		},
		closeAll(){
			this.$noty.closeAll();
		},
	},
	mounted(){
		this.isThemesAll = true;
	},
}
</script>
