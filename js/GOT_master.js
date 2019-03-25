(() => {
	console.log('fired');

	//  variable stack
	// grab the shields at the bttom of the pge
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox	= document.querySelector('.lightBox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banner = document.querySelector('#houseImages'),
			houseName = document.querySelector('.house-name'),
			houseInfo = document.querySelector('.house-info');

			const houseData = [
			'House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryens invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.'

			];
	
	function showLightbox() {
		// grab the right video source
		//debugger;
		// get the lowercase  house name from the class list
		let targetHouse = this.className.split(" ")[1]

		// make sure the names match = needs to be uppercase
		// stark becomes Stark -> first make a capital S then add ark (or any house name)

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		// change the paragraph text
		houseName.textContent =`House ${targetSrc}`;

		//this will only ever get you the first index in the array, which is stark data
		houseInfo.textContent = houseData[0];

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightBox');
		
		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-LightBox');
		// rewind the video to the beginning
		// also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offset = 600; // this is the offset / width of one image

		//this is the total distance the images need to move as a pixel value
		//dataset.offset is coming from each shield we click on

		totalOffset = this.dataset.offset + offset + "px";
		//banners.style.left = totalOffset;
		TweenMax.to(banner, 0.8, {right: this.dataset.offset *600});
	}



	shields.forEach(shield => shield.addEventListener('click', showLightbox));
	
	shields.forEach(shield => shield.addEventListener("click", animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();