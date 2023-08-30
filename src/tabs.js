export default class Tabs {
	constructor(idElemento){
		this.tabs = document.getElementById(idElemento);
		this.nav = this.tabs.querySelector('.tabs');

		this.nav.addEventListener('click',(e)=>{
			if([...e.target.classList].includes('tabs__button')){
				const tab = e.target.dataset.tab;
				if(this.tabs.querySelector('.tab--active')){
					this.tabs.querySelector('.tab--active').classList.remove('tab--active');
				}
				if(this.tabs.querySelector('.tab__button--active')){
					this.tabs.querySelector('.tab__button--active').classList.remove('tab__button--active');
				}
				this.tabs.querySelector(`#${tab}`).classList.add('tab--active');
				e.target.classList.add('tabs__button--active');
			}
		});
	}
}
